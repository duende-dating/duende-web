/**
 * The two store badges, before there is anything to link to.
 *
 * Rendered as statements rather than as disabled buttons: a greyed-out button
 * invites a click that will not happen. When the listings go live these become
 * links, and nothing else on the page has to move.
 */

function AppleGlyph() {
  return (
    <svg viewBox="0 0 24 24" className="size-5 shrink-0" aria-hidden fill="currentColor">
      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.53 4.08ZM12.03 7.25c-.15-2.23 1.66-4.25 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25Z" />
    </svg>
  );
}

function PlayGlyph() {
  return (
    <svg viewBox="0 0 24 24" className="size-5 shrink-0" aria-hidden fill="currentColor">
      <path d="M4.8 2.2a1.6 1.6 0 0 0-.8 1.4v16.8a1.6 1.6 0 0 0 2.4 1.4l14-8.4a1.6 1.6 0 0 0 0-2.8l-14-8.4a1.6 1.6 0 0 0-1.6 0Z" />
    </svg>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex h-12 items-center gap-2.5 rounded-control border border-white/25 px-5 text-sm font-semibold text-ground/90">
      {children}
    </span>
  );
}

export function StoreBadges() {
  return (
    <div className="flex flex-wrap gap-3">
      <Badge>
        <AppleGlyph />
        Bientôt sur l’App Store
      </Badge>
      <Badge>
        <PlayGlyph />
        Bientôt sur Google Play
      </Badge>
    </div>
  );
}
