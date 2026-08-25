import Link from 'next/link';
import type { ComponentProps, ReactNode } from 'react';

/**
 * The page's furniture. Six pieces, and nothing that picks its own colour: the
 * ground decides, so a band can be inverted by wrapping it rather than by
 * passing a variant down every child.
 */

/** The horizontal rhythm every band shares. */
export function Container({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`mx-auto w-full max-w-5xl px-6 sm:px-8 ${className}`}>{children}</div>;
}

/** The small caps line above a section title. */
export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="eyebrow">{children}</p>;
}

export function Section({
  eyebrow,
  title,
  lead,
  children,
  className = '',
  id,
}: {
  eyebrow?: string;
  title?: ReactNode;
  lead?: ReactNode;
  children?: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`py-16 sm:py-24 ${className}`}>
      <Container>
        {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
        {title ? (
          <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-[-0.02em] text-balance sm:text-4xl">
            {title}
          </h2>
        ) : null}
        {lead ? (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">{lead}</p>
        ) : null}
        {children}
      </Container>
    </section>
  );
}

/** A surface rather than a page: ink at 6%, hairline rule, one radius. */
export function Card({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-card border border-rule bg-surface p-5 sm:p-6 ${className}`}>
      {children}
    </div>
  );
}

/**
 * The action. Exactly one block on a page is solid, and this is it — the ink
 * itself, filled. `variant="secondary"` is the same block as an outline.
 */
export function ButtonLink({
  variant = 'primary',
  className = '',
  children,
  ...rest
}: ComponentProps<typeof Link> & { variant?: 'primary' | 'secondary' }) {
  const base =
    'inline-flex h-12 items-center justify-center gap-2 rounded-control px-6 text-sm font-semibold transition-colors';
  const skin =
    variant === 'primary'
      ? 'bg-ink text-ground hover:bg-muted'
      : 'border border-rule text-ink hover:bg-surface';

  return (
    <Link data-button className={`${base} ${skin} ${className}`} {...rest}>
      {children}
    </Link>
  );
}

/** The same, for a mailto or anything else that is not a route. */
export function ButtonAnchor({
  variant = 'primary',
  className = '',
  children,
  ...rest
}: ComponentProps<'a'> & { variant?: 'primary' | 'secondary' }) {
  const base =
    'inline-flex h-12 items-center justify-center gap-2 rounded-control px-6 text-sm font-semibold transition-colors';
  const skin =
    variant === 'primary'
      ? 'bg-ink text-ground hover:bg-muted'
      : 'border border-rule text-ink hover:bg-surface';

  return (
    <a data-button className={`${base} ${skin} ${className}`} {...rest}>
      {children}
    </a>
  );
}

/** The band that inverts: the ink as ground, as the app's tab bar does. */
export function InkBand({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`bg-ink text-ground ${className}`}>{children}</div>;
}
