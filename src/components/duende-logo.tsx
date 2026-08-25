'use client';

import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';

import {
  CONTOUR_ENDS,
  MARK_PATH,
  MARK_WIDTH,
  OUTLINE_HEIGHT,
  POINTS_TIGHT,
  POINTS_WIDE,
  POINT_FLAGS,
  WIDTH_TIGHT,
  WIDTH_WIDE,
} from '@/lib/duende-outlines';

/**
 * The Duende identity: the name set in an ultra-condensed black, counters cut
 * back to slots, and nothing beside it. Ported from the app so the two show the
 * same shape.
 *
 *   Wordmark       — the word at rest. What the header shows.
 *   WordmarkSqueeze — the same word being compressed. What the hero runs.
 *   Mark           — the word stacked into a square, for icon sizes.
 *
 * The word is a filled shape, not a stroke, so there is no drawing-on to
 * animate: the opening compresses the letters instead. Because the outlines are
 * two ends of one width axis, that compression is the real axis and not a
 * scaleX — a scaleX would stretch the counters as much as the stems, which is
 * exactly what this typeface is not about.
 *
 * The word closes up below roughly 110 px wide, where the slots fill in. That
 * is why the mark exists separately.
 */

/** How long one compression takes. */
export const SQUEEZE_MS = 900;

/** The word's aspect ratio at rest, so a width can be turned into a height. */
const WORD_RATIO = WIDTH_TIGHT / OUTLINE_HEIGHT;

/** Turns a wordmark width into the height it will occupy. */
export function wordmarkHeight(width: number) {
  return width / WORD_RATIO;
}

/**
 * The hero's box is wider than the word, because the word starts wide. This is
 * the factor between the two, so a caller can ask for a final word width and
 * get a layout box that holds the whole compression.
 */
export const SQUEEZE_BOX_RATIO = WIDTH_WIDE / WIDTH_TIGHT;

/** The word's own width at a point along the axis, in outline units. */
function wordWidthAt(t: number) {
  return WIDTH_WIDE + (WIDTH_TIGHT - WIDTH_WIDE) * t;
}

/**
 * Rebuilds the outline at a point along the width axis.
 *
 * `t` runs 0 (widest) to 1 (the resting word). Written as one pass over the
 * point list: the whole path is re-emitted every frame, which is what
 * interpolating an axis costs. 192 points is small enough for that.
 *
 * The contours are TrueType quadratics: a run of off-curve points implies an
 * on-curve point halfway between each consecutive pair, and a contour that
 * opens off-curve starts at the midpoint of its first and last points.
 */
function outlineAt(t: number, boxWidth: number) {
  const width = wordWidthAt(t);
  // Centred in its box. Passing the word's own width as the box is what makes
  // it left-anchored instead, which is what the page wants.
  const shift = (boxWidth - width) / 2;

  const px = (i: number) => {
    const a = POINTS_WIDE[i * 2];
    const b = POINTS_TIGHT[i * 2];
    return Math.round((a + (b - a) * t + shift) * 10) / 10;
  };
  const py = (i: number) => {
    const a = POINTS_WIDE[i * 2 + 1];
    const b = POINTS_TIGHT[i * 2 + 1];
    return Math.round((a + (b - a) * t) * 10) / 10;
  };
  const on = (i: number) => POINT_FLAGS.charCodeAt(i) === 49;

  let d = '';
  let start = 0;

  for (let c = 0; c < CONTOUR_ENDS.length; c += 1) {
    const end = CONTOUR_ENDS[c];
    const count = end - start;

    // Where the pen goes down: the first on-curve point, or the implied one
    // between the last and first points when the contour has none.
    let first = -1;
    for (let i = start; i < end; i += 1) {
      if (on(i)) {
        first = i;
        break;
      }
    }

    let sx: number;
    let sy: number;
    if (first < 0) {
      sx = Math.round(((px(start) + px(end - 1)) / 2) * 10) / 10;
      sy = Math.round(((py(start) + py(end - 1)) / 2) * 10) / 10;
      first = start - 1;
    } else {
      sx = px(first);
      sy = py(first);
    }

    d += `M${sx} ${sy}`;

    let step = 1;
    for (let k = 1; k <= count; k += step) {
      const i = start + ((first - start + k + count) % count);
      step = 1;

      if (on(i)) {
        d += `L${px(i)} ${py(i)}`;
        continue;
      }

      // A control point. The segment ends on the next on-curve point, or
      // halfway to the next control point when two run together.
      const j = start + ((first - start + k + 1 + count) % count);
      const last = k + 1 > count;
      let ex: number;
      let ey: number;

      if (last) {
        ex = sx;
        ey = sy;
      } else if (on(j)) {
        ex = px(j);
        ey = py(j);
        step = 2;
      } else {
        ex = Math.round(((px(i) + px(j)) / 2) * 10) / 10;
        ey = Math.round(((py(i) + py(j)) / 2) * 10) / 10;
      }

      d += `Q${px(i)} ${py(i)} ${ex} ${ey}`;
    }

    d += 'Z';
    start = end;
  }

  return d;
}

/** The resting word, built once at module load: it never changes. */
const WORDMARK_PATH = outlineAt(1, WIDTH_TIGHT);

/* -------------------------------------------------------------------------- */
/* The wordmark                                                               */
/* -------------------------------------------------------------------------- */

export function Wordmark({
  width = 150,
  className,
  title,
}: {
  width?: number;
  className?: string;
  title?: string;
}) {
  return (
    <svg
      width={width}
      height={wordmarkHeight(width)}
      viewBox={`0 0 ${WIDTH_TIGHT} ${OUTLINE_HEIGHT}`}
      className={className}
      role={title ? 'img' : 'presentation'}
      aria-label={title}
      aria-hidden={title ? undefined : true}>
      {title ? <title>{title}</title> : null}
      <path d={WORDMARK_PATH} fill="currentColor" />
    </svg>
  );
}

/* -------------------------------------------------------------------------- */
/* The compression                                                            */
/* -------------------------------------------------------------------------- */

/** Fast at first, then settling: the word arrives at its width rather than
 *  stopping at it. */
function easeOutCubic(t: number) {
  return 1 - (1 - t) ** 3;
}

/**
 * Runs before paint on the client, and is a no-op on the server. The opening
 * has to set its starting state before the first frame, or the resting word
 * flashes for a frame before jumping wide.
 */
const useBeforePaint = typeof window === 'undefined' ? useEffect : useLayoutEffect;

/**
 * The word being compressed onto its own width: the app's opening, once.
 *
 * Anchored on its left edge rather than centred. In the app the compression
 * flies to a header wordmark and so has to stay centred on its own box; here it
 * comes to rest against the page's left margin, and a word that settles in the
 * middle of an invisible box reads as a mistake.
 *
 * That leaves the wide word overflowing to the right, which is what the
 * wrapper clips. `maxWidth` is a ceiling, not a width: the resting word is
 * measured against the space actually available, so a narrow screen gets a
 * smaller word instead of a scaled-down one.
 *
 * It renders at rest on the server, so a visitor with JavaScript off, or one
 * who has asked for less motion, still gets the word. It simply does not
 * compress.
 */
export function WordmarkSqueeze({
  maxWidth = 300,
  className,
  title,
}: {
  maxWidth?: number;
  className?: string;
  title?: string;
}) {
  const host = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(maxWidth);
  /** 0 at its widest, 1 once compressed. */
  const [progress, setProgress] = useState(1);

  // The available width, watched: a rotation must not leave the word cropped.
  useBeforePaint(() => {
    const element = host.current;
    if (!element) return;

    const measure = () => setWidth(Math.min(maxWidth, element.clientWidth));
    measure();

    const observer = new ResizeObserver(measure);
    observer.observe(element);
    return () => observer.disconnect();
  }, [maxWidth]);

  useBeforePaint(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let frame = 0;
    let startedAt = 0;

    const tick = (now: number) => {
      // The clock starts on the first frame that actually runs, not when the
      // effect fired: a tab opened in the background gets the whole animation
      // when it is finally looked at, rather than the tail of it.
      startedAt ||= now;

      const t = Math.min(1, (now - startedAt) / SQUEEZE_MS);
      setProgress(easeOutCubic(t));
      if (t < 1) frame = requestAnimationFrame(tick);
    };

    // The widest state is set from inside the first frame rather than here, so
    // that a browser which never runs the callback at all leaves the word at
    // rest. Set here, a hidden tab would hold the word open at its widest and
    // the fallback would be the failure.
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  // Left-anchored, so the shift the app applies to keep the word centred is
  // simply absent.
  const d = useMemo(() => outlineAt(progress, wordWidthAt(progress)), [progress]);
  const height = wordmarkHeight(width);

  return (
    <div
      ref={host}
      className={`w-full overflow-hidden ${className ?? ''}`}
      style={{ height }}>
      <svg
        width={width * SQUEEZE_BOX_RATIO}
        height={height}
        viewBox={`0 0 ${WIDTH_WIDE} ${OUTLINE_HEIGHT}`}
        role="img"
        aria-label={title ?? 'Duende'}
        style={{ display: 'block', maxWidth: 'none' }}>
        <title>{title ?? 'Duende'}</title>
        <path d={d} fill="currentColor" />
      </svg>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* The mark                                                                   */
/* -------------------------------------------------------------------------- */

/** The square lockup. Reads down to icon sizes, where the word cannot. */
export function Mark({ size = 32, className }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${MARK_WIDTH} ${OUTLINE_HEIGHT}`}
      className={className}
      aria-hidden>
      <path d={MARK_PATH} fill="currentColor" />
    </svg>
  );
}
