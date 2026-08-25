import type { Metadata } from 'next';
import Link from 'next/link';

import { Callout, LegalPage, ToFill } from '@/components/legal';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Conditions générales d’utilisation',
  description:
    'Les règles d’usage de Duende : éligibilité, engagements de chacun, contenus publiés, modération, responsabilités.',
};

/**
 * The rules of use, in the register of the app's own safety screen: short
 * sentences, no hedging, and no clause the product does not actually enforce.
 *
 * Deliberately not exhaustive on the boilerplate a lawyer will want to add. What
 * matters here is that everything stated is true of the application as it
 * ships.
 */
export default function TermsPage() {
  return (
    <LegalPage
      title="Conditions générales d’utilisation"
      lead="Ces conditions décrivent ce que Duende propose, ce que vous vous engagez à faire en l’utilisant, et ce qui se passe quand cet engagement n’est pas tenu.">
      <Callout>
        <p>
          <strong>Duende organise des rencontres entre personnes qui ne se connaissent pas.</strong>{' '}
          Nous ne vérifions l’identité de personne. L’application réduit les risques par sa
          mécanique, elle ne les supprime pas. Les consignes de sécurité affichées avant votre
          première activité font partie de ces conditions.
        </p>
      </Callout>

      <h2>1. Qui édite le service</h2>
      <p>
        Duende est édité par <ToFill>[ÉDITEUR À COMPLÉTER]</ToFill>, dont les coordonnées complètes
        figurent dans les <Link href="/mentions-legales">mentions légales</Link>. Le service
        comprend l’application mobile Duende et le présent site.
      </p>

      <h2>2. Accepter ces conditions</h2>
      <p>
        Créer un compte vaut acceptation de ces conditions et de la{' '}
        <Link href="/confidentialite">politique de confidentialité</Link>. Si vous n’en acceptez pas
        une partie, la seule chose à faire est de ne pas utiliser le service.
      </p>

      <h2>3. Qui peut s’inscrire</h2>
      <ul>
        <li>
          Vous devez avoir <strong>18 ans ou plus</strong>. La règle est vérifiée par la base de
          données lorsque vous renseignez votre date de naissance. Déclarer une fausse date est un
          manquement à ces conditions.
        </li>
        <li>
          Un compte est <strong>personnel</strong>. Vous ne le partagez pas et vous ne créez pas de
          compte au nom de quelqu’un d’autre.
        </li>
        <li>
          L’inscription passe par Apple ou par Google. Nous ne gérons pas de mot de passe, et nous
          ne pouvons pas rétablir un accès perdu chez votre fournisseur.
        </li>
      </ul>

      <h2>4. Ce que fait le service</h2>
      <p>
        Vous proposez une activité dans un lieu public : un titre, une heure, une adresse, et une
        note vocale. Les personnes autour de vous voient la proposition avec une zone approximative
        d’environ 150 mètres, et peuvent demander à venir en enregistrant elles aussi un vocal. Vous
        acceptez au maximum une personne par activité. À cet instant, et seulement à cet instant,
        l’adresse exacte lui est transmise et une conversation s’ouvre.
      </p>
      <p>
        Le service est fourni tel quel. Nous pouvons le faire évoluer, en modifier les
        fonctionnalités, ou l’interrompre pour maintenance. Nous ne garantissons ni une
        disponibilité continue, ni qu’une activité trouvera preneur.
      </p>

      <h2>5. Vos engagements</h2>
      <p>En utilisant Duende, vous vous engagez à :</p>
      <ul>
        <li>
          <strong>Ne proposer que des lieux publics</strong> : café, parc, bibliothèque, terrasse.
          Jamais un domicile, le vôtre ou celui d’un autre, ni un lieu privé ou isolé.
        </li>
        <li>
          <strong>Être la personne que vous montrez</strong> : vos photos sont les vôtres, récentes,
          et votre prénom est celui qu’on vous donne.
        </li>
        <li>
          <strong>Respecter les personnes que vous rencontrez</strong>, avant, pendant et après. Un
          refus n’a pas à être justifié et n’a pas à être discuté.
        </li>
        <li>
          <strong>Venir, ou prévenir.</strong> Une activité acceptée est un rendez-vous pris avec
          quelqu’un qui s’est déplacé.
        </li>
        <li>
          <strong>Ne pas utiliser le service à d’autres fins</strong> : pas de démarchage, pas de
          publicité, pas de vente, pas de recrutement, pas de collecte de contacts.
        </li>
      </ul>

      <h3>Ce qui est interdit sans réserve</h3>
      <ul>
        <li>Le harcèlement, les menaces, les propos haineux, discriminatoires ou sexistes.</li>
        <li>
          Tout contenu à caractère sexuel explicite, dans une photo comme dans une note vocale ou un
          message.
        </li>
        <li>
          Toute interaction avec une personne mineure, et toute tentative d’y accéder par le
          service.
        </li>
        <li>
          Toute activité illégale, la prostitution et la sollicitation à des fins tarifées, la vente
          de substances illicites.
        </li>
        <li>
          L’usurpation d’identité, l’usage d’un compte pour surveiller ou retrouver quelqu’un contre
          sa volonté, la diffusion de l’adresse obtenue par acceptation.
        </li>
        <li>
          Toute tentative de contourner les protections techniques : automatiser l’usage de
          l’application, extraire des données, déduire une position exacte à partir de la zone
          approximative, ou accéder à des données qui ne vous sont pas destinées.
        </li>
      </ul>

      <h2>6. L’adresse que vous recevez</h2>
      <p>
        Lorsqu’un hôte vous accepte, il vous confie un lieu et une heure. Cette adresse vous est
        transmise pour vous y rendre, et pour rien d’autre : vous ne la republiez pas, ne la
        transmettez pas, et ne la conservez pas après la rencontre. Le faire est un manquement grave
        à ces conditions et peut engager votre responsabilité.
      </p>

      <h2>7. Vos contenus</h2>
      <p>
        Vos photos, vos notes vocales, vos titres d’activité et vos messages restent les vôtres.
        Vous nous accordez, pour la seule durée nécessaire au fonctionnement du service, le droit de
        les héberger, de les stocker et de les afficher aux personnes concernées. Cette
        autorisation s’éteint quand le contenu est supprimé, et au plus tard lorsque le compte est
        supprimé.
      </p>
      <p>
        Vous garantissez avoir le droit de publier ce que vous publiez, et que ce contenu ne porte
        atteinte ni aux droits ni à la dignité de quiconque.
      </p>

      <h3>Enregistrer un vocal</h3>
      <p>
        La note vocale est obligatoire des deux côtés : une activité sans enregistrement n’est pas
        publiée, une demande sans enregistrement n’est pas envoyée. Un vocal est audible par les
        personnes qui voient l’activité, ou par l’hôte s’il accompagne une demande. N’y dites rien
        que vous ne diriez pas à quelqu’un que vous ne connaissez pas.
      </p>

      <h2>8. Signalement, blocage, modération</h2>
      <p>
        Un comportement déplacé se signale depuis un profil ou depuis une conversation. Bloquer
        quelqu’un coupe immédiatement son accès à vos activités, annule les demandes en attente
        entre vous et retire la participation : la mesure est réciproque et prend effet côté
        serveur.
      </p>
      <p>
        Nous examinons les signalements et pouvons, selon la gravité : retirer un contenu, retirer
        une activité, restreindre l’accès à une fonctionnalité, suspendre un compte, ou le supprimer
        sans préavis. Nous privilégions la mesure la plus faible qui protège la personne concernée,
        et nous n’avons pas d’obligation de résultat sur le comportement d’un tiers.
      </p>
      <p>
        Un fait susceptible de constituer une infraction peut être porté à la connaissance des
        autorités compétentes.
      </p>

      <h2>9. Votre sécurité pendant la rencontre</h2>
      <p>
        Duende n’organise pas la rencontre, ne s’y rend pas, et n’a aucun moyen d’intervenir sur
        place. La décision d’accepter quelqu’un et de vous déplacer vous appartient. Nous vous
        recommandons de rester dans un lieu public, de prévenir un proche du lieu et de l’heure, et
        de partir dès que vous ne vous sentez pas à l’aise, sans explication.
      </p>
      <p>
        En cas de danger immédiat, appelez le <strong>17</strong> ou le <strong>112</strong>, et non
        le support.
      </p>

      <h2>10. Fin du contrat</h2>
      <ul>
        <li>
          <strong>De votre côté</strong> : vous pouvez supprimer votre compte à tout moment depuis
          l’application, sans justification et sans délai. La procédure est décrite sur la page{' '}
          <Link href="/suppression-compte">supprimer mon compte</Link>.
        </li>
        <li>
          <strong>De notre côté</strong> : nous pouvons suspendre ou supprimer un compte en cas de
          manquement à ces conditions, de fraude, de risque pour d’autres personnes, ou d’obligation
          légale. Sauf urgence ou interdiction légale, nous en indiquons le motif.
        </li>
      </ul>
      <p>
        La fin du contrat n’efface pas ce qui s’est déjà produit : un signalement déposé avant la
        suppression peut être traité après elle.
      </p>

      <h2>11. Responsabilité</h2>
      <p>
        Nous sommes responsables du fonctionnement du service tel que décrit ici, dans les limites
        du droit applicable. Nous ne sommes pas responsables du comportement des personnes que vous
        rencontrez, de l’exactitude de ce qu’elles déclarent, ni de ce qui se produit lors d’une
        rencontre. Aucune clause de ces conditions n’écarte la responsabilité qui ne peut légalement
        l’être, notamment en cas de faute lourde ou de dommage corporel.
      </p>
      <p>
        Vous êtes seul responsable de l’usage de votre compte et des contenus que vous publiez. Si
        un tiers nous met en cause du fait de vos contenus ou de votre comportement, vous nous en
        garantissez.
      </p>

      <h2>12. Propriété intellectuelle</h2>
      <p>
        Le nom Duende, son logotype, l’interface de l’application et le présent site sont protégés.
        Ces conditions ne vous accordent aucun droit dessus, en dehors du droit d’utiliser
        l’application pour ce qu’elle est.
      </p>

      <h2>13. Données personnelles</h2>
      <p>
        Le traitement de vos données est décrit dans la{' '}
        <Link href="/confidentialite">politique de confidentialité</Link>, qui fait partie de ces
        conditions.
      </p>

      <h2>14. Modification de ces conditions</h2>
      <p>
        Ces conditions peuvent évoluer avec l’application. La date de dernière mise à jour figure en
        haut de la page. Un changement significatif vous est signalé dans l’application avant de
        prendre effet ; continuer à utiliser le service après cette information vaut acceptation.
      </p>

      <h2>15. Droit applicable et réclamations</h2>
      <p>
        Ces conditions sont soumises au droit français. En cas de difficulté, écrivez d’abord à{' '}
        <a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a> : la plupart des situations
        se règlent là. À défaut d’accord, vous pouvez recourir gratuitement à un médiateur de la
        consommation, <ToFill>[MÉDIATEUR À DÉSIGNER]</ToFill>, avant toute action judiciaire. Les
        tribunaux français sont compétents, sans préjudice des règles protectrices du consommateur
        qui vous permettent de saisir la juridiction de votre lieu de résidence.
      </p>
    </LegalPage>
  );
}
