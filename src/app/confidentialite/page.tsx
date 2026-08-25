import type { Metadata } from 'next';
import Link from 'next/link';

import { Callout, LegalPage, ToFill } from '@/components/legal';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Politique de confidentialité',
  description:
    'Quelles données Duende collecte, pourquoi, avec qui elles sont partagées, combien de temps elles sont conservées, et comment exercer vos droits.',
};

/**
 * The URL both store listings point at, and the one #18 opens from inside the
 * app.
 *
 * Written from the schema rather than from a template: every field named here
 * is a column that exists, and the two claims that carry the product — the
 * exact address kept out of reach until acceptance, and the searching user's
 * position never being persisted — are stated as the mechanisms they are.
 */
export default function PrivacyPage() {
  return (
    <LegalPage
      title="Politique de confidentialité"
      lead="Duende organise une rencontre entre deux personnes qui ne se connaissent pas. Cela demande peu de données, mais des données sensibles. Voici exactement lesquelles, et ce qu’il leur arrive.">
      <Callout>
        <p>
          <strong>Les deux règles qui structurent tout le reste.</strong>
        </p>
        <p>
          L’adresse exacte d’un rendez-vous n’est transmise à personne avant que l’hôte n’ait
          accepté quelqu’un. Ce n’est pas un masquage à l’affichage : elle est stockée à part, et
          seuls l’hôte et la personne acceptée peuvent la lire.
        </p>
        <p>
          Votre position, celle qui sert à chercher les activités autour de vous, n’est jamais
          enregistrée. Elle est transmise le temps de la recherche, puis abandonnée.
        </p>
      </Callout>

      <h2>1. Qui est responsable de vos données</h2>
      <p>
        Le responsable du traitement est <ToFill>[ÉDITEUR À COMPLÉTER]</ToFill>, éditeur de
        l’application Duende, dont les coordonnées figurent dans les{' '}
        <Link href="/mentions-legales">mentions légales</Link>. Pour toute question relative à vos
        données, l’adresse de contact est{' '}
        <a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a>.
      </p>

      <h2>2. Ce que nous collectons</h2>

      <h3>À la création du compte</h3>
      <ul>
        <li>
          <strong>Un identifiant de connexion</strong>, fourni par Apple ou par Google selon le
          bouton utilisé, accompagné d’une adresse de courriel. Si vous choisissez « Masquer mon
          adresse » chez Apple, nous ne recevons qu’une adresse relais et jamais la vôtre. Nous ne
          recevons ni votre mot de passe, ni le contenu de votre compte Apple ou Google.
        </li>
        <li>
          <strong>Le prénom affiché</strong> que vous choisissez. Un prénom seulement : il n’y a pas
          de champ pour un nom de famille.
        </li>
      </ul>

      <h3>Sur votre profil</h3>
      <ul>
        <li>
          <strong>Votre date de naissance.</strong> Stockée comme une date, pas comme un âge : c’est
          ce qui permet de vérifier la règle des 18 ans, appliquée par la base de données elle-même.
          Seul l’âge calculé est affiché aux autres.
        </li>
        <li>
          <strong>Votre genre et votre taille</strong>, si vous les renseignez. Ces deux champs
          servent aussi aux filtres de recherche des autres personnes.
        </li>
        <li>
          <strong>Jusqu’à trois photos</strong>, plus la première qui sert d’avatar. Elles sont
          visibles des personnes connectées, à l’exception de celles que vous avez bloquées ou qui
          vous ont bloqué.
        </li>
        <li>
          <strong>La date à laquelle vous avez validé les consignes de sécurité.</strong> Sans elle,
          l’application refuse de créer une activité ou d’envoyer une demande.
        </li>
      </ul>

      <h3>Quand vous proposez une activité</h3>
      <ul>
        <li>
          <strong>Un titre, une heure et une durée.</strong>
        </li>
        <li>
          <strong>L’adresse exacte du lieu et son point sur la carte.</strong> Enregistrés dans une
          table distincte du reste de l’activité, dont l’accès est restreint à l’hôte et à la
          personne acceptée.
        </li>
        <li>
          <strong>Un point approximatif</strong>, calculé par le serveur : le point exact décalé
          d’une distance et d’une direction dérivées de l’identifiant de l’activité, dans un rayon
          de 150 mètres. C’est la seule position que reçoivent les autres personnes. Le décalage est
          déterministe. Recalculé au hasard à chaque lecture, il finirait par révéler le vrai point
          par moyenne.
        </li>
        <li>
          <strong>Une note vocale.</strong> Elle est obligatoire : une activité sans enregistrement
          n’est pas publiée.
        </li>
      </ul>

      <h3>Quand vous demandez à rejoindre quelqu’un</h3>
      <ul>
        <li>
          <strong>Une note vocale</strong>, obligatoire elle aussi, et éventuellement un court
          message écrit.
        </li>
        <li>
          <strong>L’état de la demande</strong> (en attente, acceptée, refusée, annulée) et la
          date de la décision.
        </li>
      </ul>

      <h3>Pendant et autour de la rencontre</h3>
      <ul>
        <li>
          <strong>Les messages</strong> de la conversation qui s’ouvre après acceptation, et
          l’indication de la dernière fois où vous l’avez ouverte, pour marquer ce qui est non lu.
        </li>
        <li>
          <strong>Vos blocages et vos signalements</strong> : qui, quand, pour quel motif, et le
          détail que vous ajoutez éventuellement.
        </li>
      </ul>

      <h3>Techniquement</h3>
      <ul>
        <li>
          <strong>Un jeton de notification</strong> par appareil, avec la plateforme (iOS ou
          Android). Il permet de vous prévenir d’une demande, d’une acceptation ou d’un message. Il
          n’existe que si vous avez accepté les notifications.
        </li>
        <li>
          <strong>Votre position, en transit uniquement.</strong> Elle est transmise comme paramètre
          de la recherche pour trouver les activités proches, et n’est écrite nulle part. La
          permission demandée est limitée à l’usage de l’application ; l’application ne suit
          personne en arrière-plan.
        </li>
      </ul>

      <h3>Ce que nous ne collectons pas</h3>
      <ul>
        <li>Aucun traceur publicitaire, aucun identifiant publicitaire, aucun cookie de mesure.</li>
        <li>Aucun accès à vos contacts, à votre agenda ni à votre pellicule photo complète : seule la photo que vous choisissez est lue.</li>
        <li>Aucun accès à l’appareil photo : la permission est explicitement refusée par l’application.</li>
        <li>Aucun historique de rencontres, aucune note, aucun score de réputation.</li>
        <li>Aucune donnée revendue, à personne, jamais.</li>
      </ul>

      <h2>3. Pourquoi, et sur quelle base légale</h2>
      <ul>
        <li>
          <strong>Faire fonctionner le service</strong> : compte, profil, activités, demandes,
          messages, notes vocales. Base légale : l’exécution du contrat qui nous lie, c’est-à-dire
          les <Link href="/cgu">conditions d’utilisation</Link>.
        </li>
        <li>
          <strong>Protéger les personnes</strong> : dégradation de la position, blocages,
          signalements, limites de volume, expiration automatique des activités, vérification de la
          majorité. Base légale : notre intérêt légitime à ce que des inconnus puissent se
          rencontrer sans danger, et le respect de nos obligations.
        </li>
        <li>
          <strong>Vous prévenir</strong> : notifications push. Base légale : votre consentement,
          donné par l’autorisation système et retirable à tout moment dans les réglages de votre
          téléphone.
        </li>
        <li>
          <strong>Chercher autour de vous</strong> : accès à votre position. Base légale : votre
          consentement, retirable de la même manière. Sans lui, la carte ne peut rien afficher.
        </li>
      </ul>
      <p>
        Vos photos, vos notes vocales et votre genre relèvent de catégories de données sensibles au
        sens du RGPD, dès lors que l’usage du service révèle une orientation. Elles sont traitées sur
        la base de votre consentement explicite, matérialisé par le fait de les fournir, et sont
        supprimées avec votre compte.
      </p>

      <h2>4. Qui y a accès</h2>

      <h3>Les autres personnes</h3>
      <ul>
        <li>
          <strong>Toute personne connectée</strong> voit votre prénom, votre âge, vos photos, votre
          genre et votre taille, ainsi que le titre, l’heure, la zone approximative et la note vocale
          de vos activités ouvertes.
        </li>
        <li>
          <strong>La personne que vous acceptez</strong> reçoit en plus l’adresse exacte et le point
          de rendez-vous, et peut vous écrire.
        </li>
        <li>
          <strong>Une personne bloquée</strong> ne voit plus rien : ni votre profil, ni vos
          activités, dans les deux sens.
        </li>
      </ul>

      <h3>Nos prestataires</h3>
      <ul>
        <li>
          <strong>Supabase</strong> : base de données, authentification, stockage des photos et des
          notes vocales, hébergés dans l’Union européenne. Sous-traitant au sens du RGPD.
        </li>
        <li>
          <strong>Apple et Google</strong> : l’authentification. Ils savent que vous vous connectez à
          Duende ; ils ne reçoivent rien de son contenu.
        </li>
        <li>
          <strong>Expo (Expo Push Notifications)</strong>, puis Apple (APNs) et Google (FCM) : la
          remise des notifications. Elles transportent un intitulé court, jamais le contenu d’un
          message.
        </li>
        <li>
          <strong>Google Maps Platform</strong> : l’affichage de la carte sur Android, et la
          suggestion d’adresses lorsque vous créez une activité. Les requêtes d’adresses passent par
          notre serveur, qui détient la clé : votre appareil n’interroge pas Google directement.
        </li>
      </ul>
      <p>
        Certains de ces prestataires sont établis aux États-Unis. Les transferts correspondants
        s’appuient sur les clauses contractuelles types de la Commission européenne et, le cas
        échéant, sur la certification de l’entreprise au cadre de protection des données entre
        l’Union européenne et les États-Unis.
      </p>
      <p>
        Nous ne communiquons vos données à une autorité que sur réquisition régulière, et dans la
        limite de ce qui est demandé.
      </p>

      <h2>5. Combien de temps</h2>
      <ul>
        <li>
          <strong>Votre compte, votre profil et vos photos</strong> : tant que le compte existe.
        </li>
        <li>
          <strong>Une activité et sa note vocale</strong> : jusqu’à son expiration, qui suit le
          créneau proposé. Une activité ne survit pas à la rencontre.
        </li>
        <li>
          <strong>Les demandes et les conversations</strong> : tant que l’activité existe.
        </li>
        <li>
          <strong>Blocages et signalements</strong> : tant que les deux comptes concernés existent.
        </li>
        <li>
          <strong>Jetons de notification</strong> : tant que l’appareil reste enregistré.
        </li>
        <li>
          <strong>Sauvegardes techniques</strong> : {site.deletionDelay} au plus, après quoi elles
          expirent d’elles-mêmes.
        </li>
      </ul>
      <p>
        La suppression du compte efface le tout, en cascade et immédiatement. La procédure et la
        liste détaillée sont sur la page{' '}
        <Link href="/suppression-compte">supprimer mon compte</Link>.
      </p>

      <h2>6. Vos droits</h2>
      <p>
        Vous disposez d’un droit d’accès, de rectification, d’effacement, de limitation,
        d’opposition, de portabilité, et du droit de retirer votre consentement. Une partie s’exerce
        directement depuis l’application (modifier votre profil, remplacer une photo, annuler une
        activité, supprimer votre compte), ce qui est généralement plus rapide que de nous écrire.
      </p>
      <p>
        Pour le reste, écrivez à <a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a>.
        Nous répondons sous un mois. Nous ne demandons pas de pièce d’identité : écrire depuis
        l’adresse associée à votre connexion suffit.
      </p>
      <p>
        Si notre réponse ne vous satisfait pas, vous pouvez saisir la Commission nationale de
        l’informatique et des libertés (CNIL), 3 place de Fontenoy, 75007 Paris,{' '}
        <a href="https://www.cnil.fr" rel="noreferrer">
          www.cnil.fr
        </a>
        .
      </p>

      <h2>7. Sécurité</h2>
      <p>
        Les accès aux données sont filtrés ligne par ligne dans la base de données elle-même, et non
        dans l’application : une requête qui n’a pas le droit de lire une adresse ne la reçoit pas,
        quel que soit le client qui la formule. Les écritures qui portent une garantie, comme créer une
        activité ou accepter une demande, passent par des fonctions serveur qui vérifient leurs
        propres conditions, et les tables correspondantes n’acceptent aucune écriture directe. Ces
        règles sont couvertes par des tests automatisés rejoués à chaque modification, dont une
        partie interroge l’interface publique avec de véritables jetons d’utilisateurs.
      </p>
      <p>
        Les échanges sont chiffrés en transit, les photos et les notes vocales ne sont accessibles
        que par des liens signés à durée limitée, et les clés des services tiers ne quittent jamais
        le serveur.
      </p>

      <h2>8. Âge minimum</h2>
      <p>
        Duende est interdit aux mineurs. La règle des 18 ans est vérifiée par la base de données à
        l’enregistrement de la date de naissance, et un compte dont nous apprenons qu’il appartient à
        un mineur est supprimé sans délai. Signalez-nous un tel compte à{' '}
        <a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a>.
      </p>

      <h2>9. Modifications</h2>
      <p>
        Cette politique peut évoluer avec l’application. La date de dernière mise à jour figure en
        haut de la page, et un changement significatif vous sera signalé dans l’application avant de
        prendre effet.
      </p>
    </LegalPage>
  );
}
