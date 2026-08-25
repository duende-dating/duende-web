import Link from 'next/link';

import { Wordmark } from '@/components/duende-logo';
import { Container, InkBand } from '@/components/ui';
import { footerLinks, site } from '@/lib/site';

/**
 * The footer carries the obligations: the two stores ask for a privacy policy
 * and a support address, and Play additionally asks for an account-deletion
 * page reachable without installing anything. So these five links are the
 * reason the site exists, and they sit where a reader looks for them.
 */
export function SiteFooter() {
  return (
    <InkBand className="on-ink">
      <Container className="py-14">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-xs">
            <Wordmark width={112} title="Duende" />
            <p className="mt-4 text-sm leading-relaxed text-on-ink-muted">
              Une rencontre dans un lieu public, dans l’heure. L’adresse exacte n’est transmise
              qu’après votre accord.
            </p>
          </div>

          <nav aria-label="Pages légales et support">
            <ul className="grid gap-3 text-sm sm:text-right">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-medium text-ground/85 transition-colors hover:text-ground">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${site.supportEmail}`}
                  className="font-medium text-ground/85 transition-colors hover:text-ground">
                  {site.supportEmail}
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <p className="mt-12 border-t border-white/10 pt-6 text-xs text-on-ink-muted">
          © {new Date().getFullYear()} Duende. Réservé aux personnes majeures.
        </p>
      </Container>
    </InkBand>
  );
}
