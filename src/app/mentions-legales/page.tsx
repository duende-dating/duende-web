import type { Metadata } from 'next';
import Link from 'next/link';

import { Callout, LegalPage, ToFill } from '@/components/legal';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Mentions légales',
  description: 'Éditeur, hébergeur et contact de l’application et du site Duende.',
};

/**
 * The identification the LCEN requires of anyone publishing online.
 *
 * Everything the editor alone can supply is marked rather than invented: a
 * placeholder that shows is a task, a plausible-looking wrong company name is a
 * liability.
 */
export default function LegalNoticePage() {
  return (
    <LegalPage
      title="Mentions légales"
      lead="Les informations d’identification de l’éditeur de l’application Duende et du présent site.">
      <Callout>
        <p>
          <strong>Cette page est incomplète.</strong> Les champs marqués en rouge doivent être
          renseignés par l’éditeur avant la publication du site et le dépôt sur les stores. Les
          conditions d’utilisation et la politique de confidentialité renvoient ici pour
          l’identification du responsable.
        </p>
      </Callout>

      <h2>Éditeur</h2>
      <ul>
        <li>
          <strong>Dénomination ou nom</strong> : <ToFill>[RAISON SOCIALE OU NOM ET PRÉNOM]</ToFill>
        </li>
        <li>
          <strong>Forme juridique</strong> : <ToFill>[SAS, SARL, ENTREPRENEUR INDIVIDUEL…]</ToFill>
        </li>
        <li>
          <strong>Capital social</strong> : <ToFill>[SI SOCIÉTÉ]</ToFill>
        </li>
        <li>
          <strong>Siège ou adresse</strong> : <ToFill>[ADRESSE COMPLÈTE]</ToFill>
        </li>
        <li>
          <strong>Immatriculation</strong> : <ToFill>[SIREN OU SIRET, RCS DE …]</ToFill>
        </li>
        <li>
          <strong>Numéro de TVA intracommunautaire</strong> : <ToFill>[SI APPLICABLE]</ToFill>
        </li>
        <li>
          <strong>Directeur de la publication</strong> : <ToFill>[NOM ET PRÉNOM]</ToFill>
        </li>
        <li>
          <strong>Contact</strong> : <a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a>
        </li>
      </ul>

      <h2>Application mobile</h2>
      <ul>
        <li>
          <strong>Nom</strong> : Duende
        </li>
        <li>
          <strong>Identifiant</strong> :{' '}
          <span className="font-mono text-[0.9em]">{site.bundleId}</span>, sur iOS et Android
        </li>
        <li>
          <strong>Langue de l’interface</strong> : français
        </li>
        <li>
          <strong>Public</strong> : personnes majeures uniquement
        </li>
      </ul>

      <h2>Hébergement</h2>
      <ul>
        <li>
          <strong>Site</strong> : GitHub Pages, GitHub, Inc., 88 Colin P. Kelly Jr. Street, San
          Francisco, CA 94107, États-Unis.
        </li>
        <li>
          <strong>Données de l’application</strong> : Supabase, base de données et stockage
          localisés dans l’Union européenne. Détail des sous-traitants dans la{' '}
          <Link href="/confidentialite">politique de confidentialité</Link>.
        </li>
      </ul>

      <h2>Propriété intellectuelle</h2>
      <p>
        Le nom Duende, son logotype et les interfaces de l’application comme du site sont protégés.
        Toute reproduction sans autorisation est interdite.
      </p>
      <p>
        Le logotype est dessiné à partir des contours de la police Anybody, distribuée sous licence
        SIL Open Font License 1.1, qui en autorise l’usage dans une marque. Le site est composé en
        Spline Sans, sous la même licence.
      </p>

      <h2>Signaler un contenu</h2>
      <p>
        Un contenu illicite se signale depuis l’application, ou par courriel à{' '}
        <a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a>. Indiquez le contenu
        concerné et le motif, aussi précisément que possible. Voir aussi la page{' '}
        <Link href="/support">support</Link>.
      </p>
    </LegalPage>
  );
}
