import type { ReactNode } from 'react';

import { Container } from '@/components/ui';
import { site } from '@/lib/site';

/**
 * The shell every legal page shares: a title, the date it was last revised, and
 * a single column of prose narrow enough to read.
 *
 * The revision date is stated rather than computed. A rebuild is not a
 * revision, and a page that claims to have been updated today every time the
 * site is deployed tells the reader nothing.
 */
export function LegalPage({
  title,
  lead,
  children,
  updatedAt = site.legalUpdatedAt,
}: {
  title: string;
  lead?: ReactNode;
  children: ReactNode;
  updatedAt?: string;
}) {
  return (
    <article className="py-14 sm:py-20">
      <Container>
        <header className="max-w-3xl border-b border-rule pb-8">
          <p className="eyebrow">Dernière mise à jour · {updatedAt}</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-[-0.02em] text-balance sm:text-4xl">
            {title}
          </h1>
          {lead ? (
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">{lead}</p>
          ) : null}
        </header>

        <div className="prose-legal mt-4">{children}</div>
      </Container>
    </article>
  );
}

/**
 * A block the reader must not skim past — the deletion delay, an emergency
 * number. Ink at 12% rather than the usual 6%: the one tinted surface on the
 * page, as in the app.
 */
export function Callout({ children }: { children: ReactNode }) {
  return (
    <aside className="my-8 rounded-card border border-zone-border bg-surface-strong p-5 text-sm leading-relaxed text-ink [&_p]:mb-0 [&_p]:text-ink [&_p+p]:mt-3">
      {children}
    </aside>
  );
}

/** What the editor still has to fill in, marked so it cannot ship unnoticed. */
export function ToFill({ children }: { children: ReactNode }) {
  return (
    <mark className="rounded bg-surface-strong px-1.5 py-0.5 font-mono text-[0.8em] font-semibold text-danger">
      {children}
    </mark>
  );
}
