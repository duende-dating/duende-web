/**
 * The two states of a meeting point, side by side.
 *
 * The circle is the least obvious thing in the app and the most important:
 * without a word beside it, it reads as imprecision rather than as a deliberate
 * blur. Showing the second panel is what makes the first one legible — the pin
 * is not missing, it does not exist yet.
 *
 * Drawn rather than screenshotted: a real map would date, and would put a city
 * on a page that is about a mechanism.
 */

/** A few streets, so the circle has something to sit on. */
function Streets() {
  return (
    <g stroke="currentColor" strokeOpacity={0.12} strokeWidth={1.5} fill="none">
      <path d="M0 52h240M0 128h240M0 196h240" />
      <path d="M46 0v240M132 0v240M198 0v240" />
      <path d="M132 128 240 52" strokeOpacity={0.08} />
    </g>
  );
}

function Panel({
  label,
  caption,
  children,
}: {
  label: string;
  caption: string;
  children: React.ReactNode;
}) {
  return (
    <figure className="flex-1">
      <div className="overflow-hidden rounded-card border border-rule bg-surface">
        <svg viewBox="0 0 240 240" className="block h-auto w-full text-ink" aria-hidden>
          <Streets />
          {children}
        </svg>
      </div>
      <figcaption className="mt-4">
        <p className="text-sm font-bold">{label}</p>
        <p className="mt-1 text-sm leading-relaxed text-muted">{caption}</p>
      </figcaption>
    </figure>
  );
}

export function ZoneDiagram() {
  return (
    <div className="mt-10 flex flex-col gap-8 sm:flex-row sm:gap-6">
      <Panel
        label="Avant votre accord"
        caption="Un cercle d’environ 150 mètres, et l’heure. Pas de rue, pas de numéro, pas de nom de lieu."
      >
        <circle
          cx={126}
          cy={116}
          r={62}
          fill="currentColor"
          fillOpacity={0.1}
          stroke="currentColor"
          strokeOpacity={0.35}
          strokeWidth={2}
        />
        {/* The radius, named. The number is the whole point of the drawing. */}
        <line
          x1={126}
          y1={116}
          x2={188}
          y2={116}
          stroke="currentColor"
          strokeOpacity={0.5}
          strokeWidth={1.5}
          strokeDasharray="4 4"
        />
        <text
          x={157}
          y={106}
          textAnchor="middle"
          fill="currentColor"
          fontSize={13}
          fontWeight={700}
          letterSpacing={0.2}
        >
          150 m
        </text>
      </Panel>

      <Panel
        label="Après votre accord"
        caption="L’adresse exacte arrive, et le chat s’ouvre. Uniquement pour la personne que vous avez acceptée."
      >
        <circle cx={126} cy={116} r={62} fill="currentColor" fillOpacity={0.05} />
        {/* The pin: the ink, filled. On this page it is the one solid shape. */}
        <g transform="translate(126 116)">
          <path
            d="M0 22c0 0 18-16.5 18-29.5A18 18 0 1 0-18-7.5C-18 5.5 0 22 0 22Z"
            fill="currentColor"
          />
          <circle cx={0} cy={-8} r={6} fill="#F1F3F2" />
        </g>
      </Panel>
    </div>
  );
}
