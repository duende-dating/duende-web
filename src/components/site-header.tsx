import Link from 'next/link';

import { Wordmark } from '@/components/duende-logo';
import { Container } from '@/components/ui';

/**
 * The header holds the word and one link out. Nothing else: the site is five
 * pages, four of which are reached from the footer, and a navigation bar over
 * that would be furniture pretending to be a structure.
 */
export function SiteHeader() {
  return (
    <header className="sticky top-0 z-10 border-b border-rule bg-ground/90 backdrop-blur-sm">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" aria-label="Duende, accueil" className="text-ink">
          <Wordmark width={104} />
        </Link>
        <Link
          href="/support"
          className="text-sm font-semibold text-muted transition-colors hover:text-ink">
          Support
        </Link>
      </Container>
    </header>
  );
}
