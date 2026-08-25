/**
 * Three activity proposals, as the app lists them under the map.
 *
 * The card is the product: someone, a thing to do, an hour, a distance, and a
 * recording to play. Drawn rather than screenshotted so it cannot go stale, and
 * kept faithful to the app's own card, which puts the person first because that
 * is what the decision is made on.
 */

const ACTIVITIES = [
  { name: 'Camille, 29', title: 'Un café avant le bureau', when: 'Dans 40 min', far: '600 m', length: '0:14' },
  { name: 'Yanis, 34', title: 'Marcher le long du canal', when: 'Aujourd’hui 18:30', far: '1,2 km', length: '0:22' },
  { name: 'Léa, 26', title: 'Un verre en terrasse', when: 'Demain 19:00', far: '900 m', length: '0:09' },
];

/** The compact player: a filled round button, a rail, and what is left to hear. */
function VoiceRow({ length }: { length: string }) {
  return (
    <div className="mt-2 flex items-center gap-3 rounded-control border border-rule bg-ground p-1">
      <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-ink text-ground">
        <svg viewBox="0 0 24 24" className="size-3.5" fill="currentColor" aria-hidden>
          <path d="M7 4.5a1 1 0 0 1 1.5-.87l10 6a1 1 0 0 1 0 1.74l-10 6A1 1 0 0 1 7 16.5v-12Z" />
        </svg>
      </span>
      <span className="h-1 flex-1 overflow-hidden rounded-full bg-surface-strong">
        <span className="block h-full w-1/4 rounded-full bg-ink" />
      </span>
      <span className="pr-2 text-xs font-medium tabular-nums text-muted">{length}</span>
    </div>
  );
}

export function ActivityCards() {
  return (
    <ul className="mt-10 grid gap-3 sm:grid-cols-3" aria-label="Exemples de propositions d’activité">
      {ACTIVITIES.map((activity) => (
        <li
          key={activity.title}
          className="rounded-card border border-rule bg-surface p-2">
          <div className="flex items-center gap-2 p-1">
            <span
              aria-hidden
              className="flex size-11 shrink-0 items-center justify-center rounded-full bg-surface-strong text-sm font-bold text-ink">
              {activity.name.charAt(0)}
            </span>

            <span className="min-w-0 flex-1">
              <span className="block truncate text-sm font-bold">{activity.name}</span>
              <span className="block truncate text-sm text-muted">{activity.title}</span>
            </span>

            <span className="shrink-0 text-right">
              <span className="block rounded-full bg-surface-strong px-2 py-0.5 text-[10.5px] font-bold text-ink">
                {activity.when}
              </span>
              <span className="mt-0.5 block text-xs text-muted">{activity.far}</span>
            </span>
          </div>

          <VoiceRow length={activity.length} />
        </li>
      ))}
    </ul>
  );
}
