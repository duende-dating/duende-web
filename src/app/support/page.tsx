import type { Metadata } from 'next';
import Link from 'next/link';

import { Callout, LegalPage } from '@/components/legal';
import { ButtonAnchor } from '@/components/ui';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Support',
  description:
    'Un problème, une question, un comportement à signaler : comment joindre l’équipe Duende.',
};

/**
 * The address the App Store listing points at.
 *
 * Two routes, in this order: reporting from inside the app carries the session
 * and the person concerned with it, which an email cannot. The email is there
 * for everything the app cannot express — and for someone who no longer has it
 * installed.
 */
export default function SupportPage() {
  return (
    <LegalPage
      title="Support"
      lead="Un problème, une question, un comportement à signaler. Il y a deux façons de nous joindre, et l’une des deux est plus efficace que l’autre.">
      <h2>Depuis l’application, de préférence</h2>
      <p>
        Un signalement envoyé depuis l’application arrive avec son contexte : la personne
        concernée, l’activité, la conversation. C’est ce qui nous permet de traiter le cas sans
        avoir à vous le faire raconter deux fois.
      </p>
      <ul>
        <li>
          <strong>Signaler quelqu’un</strong> : depuis son profil ou depuis la conversation, bouton
          « Signaler ». Vous choisissez un motif et pouvez ajouter un détail.
        </li>
        <li>
          <strong>Bloquer quelqu’un</strong> : coupe immédiatement l’accès à votre activité, annule
          les demandes en attente et retire la participation. Le blocage est réciproque : vous ne
          vous voyez plus, dans aucun sens.
        </li>
      </ul>

      <h2>Par courriel</h2>
      <p>
        Pour tout le reste (un bug, une question sur vos données, un compte auquel vous n’avez plus
        accès), écrivez-nous. C’est la même adresse pour tout.
      </p>

      <p>
        <ButtonAnchor href={`mailto:${site.supportEmail}`}>{site.supportEmail}</ButtonAnchor>
      </p>

      <h3>Ce qui nous fait gagner du temps</h3>
      <ul>
        <li>Votre plateforme et la version de l’application (iOS ou Android).</li>
        <li>Ce que vous faisiez, et ce que vous attendiez qu’il se passe.</li>
        <li>L’heure approximative, si le problème s’est produit une seule fois.</li>
        <li>
          Le prénom affiché sur votre profil : nous n’avons pas d’autre nom pour retrouver un
          compte.
        </li>
      </ul>
      <p>
        Nous répondons sous <strong>cinq jours ouvrés</strong>. Un signalement portant sur la
        sécurité d’une personne passe avant le reste.
      </p>

      <Callout>
        <p>
          <strong>En cas de danger immédiat, n’écrivez pas : appelez.</strong> Police et gendarmerie
          au <strong>17</strong>, urgences européennes au <strong>112</strong>, numéro d’urgence par
          SMS pour les personnes sourdes ou malentendantes au <strong>114</strong>. Duende n’est pas
          un service d’urgence et ne peut pas intervenir sur place.
        </p>
      </Callout>

      <h2>Les demandes qui ont leur propre page</h2>
      <ul>
        <li>
          <strong>Supprimer votre compte</strong> : la procédure, ce qui est effacé et sous quel
          délai : <Link href="/suppression-compte">demande de suppression de compte</Link>.
        </li>
        <li>
          <strong>Vos données personnelles</strong> : ce que nous conservons, pourquoi, et comment
          exercer vos droits : <Link href="/confidentialite">politique de confidentialité</Link>.
        </li>
        <li>
          <strong>Les règles d’usage</strong> :{' '}
          <Link href="/cgu">conditions générales d’utilisation</Link>.
        </li>
      </ul>
    </LegalPage>
  );
}
