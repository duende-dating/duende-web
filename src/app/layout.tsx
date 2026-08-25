import type { Metadata, Viewport } from 'next';
import { Spline_Sans } from 'next/font/google';

import './globals.css';

import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { site } from '@/lib/site';

/**
 * Spline Sans, as in the app: `--font-display` there is this family, and the
 * site has no reason to speak in a different voice. Self-hosted by next/font at
 * build time, so the static export carries the file and asks Google for
 * nothing at runtime.
 */
const splineSans = Spline_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-spline-sans',
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} · ${site.tagline}`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    siteName: site.name,
    title: `${site.name} · ${site.tagline}`,
    description: site.description,
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  // The app declares one appearance and has no colours for a dark one.
  colorScheme: 'light',
  themeColor: '#123A2E',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // data-scroll-behavior tells the router the smooth scroll is deliberate,
    // and to bypass it on a route change rather than gliding down a new page.
    <html lang="fr" className={splineSans.variable} data-scroll-behavior="smooth">
      <body className="flex min-h-dvh flex-col">
        <a
          href="#contenu"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-control focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-ground">
          Aller au contenu
        </a>
        <SiteHeader />
        <main id="contenu" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
