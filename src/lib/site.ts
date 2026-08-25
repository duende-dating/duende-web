/** The one place that knows the site's own addresses and dates. */
export const site = {
  name: 'Duende',
  tagline: 'Se voir, plutôt que s’écrire',
  description:
    'Duende propose une rencontre dans un lieu public, dans l’heure. Chacun se présente à la voix, la zone reste approximative, et l’adresse exacte n’est transmise qu’après votre accord.',
  /** Where a person writes when something goes wrong. */
  supportEmail: 'duende-dating+support@gmail.com',
  /** GitHub Pages until a domain lands. */
  url: 'https://duende-dating.github.io/duende-web',
  repository: 'https://github.com/duende-dating/duende',
  /** Bundle identifier, shared by both platforms. */
  bundleId: 'com.duende.app',
  /**
   * The date the legal pages state as their last revision. Written by hand
   * rather than derived from the build: a rebuild is not a revision.
   */
  legalUpdatedAt: '25 août 2026',
  /** How long deletion takes, as promised on the deletion page. */
  deletionDelay: '30 jours',
} as const;

export const footerLinks = [
  { href: '/confidentialite', label: 'Confidentialité' },
  { href: '/cgu', label: 'Conditions d’utilisation' },
  { href: '/support', label: 'Support' },
  { href: '/suppression-compte', label: 'Supprimer mon compte' },
  { href: '/mentions-legales', label: 'Mentions légales' },
] as const;
