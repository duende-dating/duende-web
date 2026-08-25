import type { Metadata } from 'next';
import Link from 'next/link';

import { Callout, LegalPage } from '@/components/legal';
import { ButtonAnchor } from '@/components/ui';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Supprimer mon compte',
  description:
    'Comment supprimer votre compte Duende, ce qui est effacé et sous quel délai. Aucune installation ni connexion n’est nécessaire pour lire cette page.',
};

/**
 * The page Google Play requires: an account-deletion route reachable without
 * installing the application or signing in anywhere, stating what is deleted
 * and within what delay.
 *
 * For this first version the deletion itself only happens inside the app — the
 * site is static and has no way to authenticate anyone. So the page's job is to
 * describe the in-app path precisely, and to give a fallback for someone who no
 * longer has the app or cannot sign in.
 */
export default function AccountDeletionPage() {
  return (
    <LegalPage
      title="Demande de suppression de compte"
      lead="Votre compte Duende se supprime depuis l’application, en trois écrans. Cette page décrit la marche à suivre, ce qui est effacé, et quoi faire si vous n’avez plus accès à l’application.">
      <h2>La marche à suivre</h2>
      <p>
        La suppression se fait aujourd’hui <strong>uniquement depuis l’application</strong>. C’est
        le seul endroit où nous savons avec certitude que la demande vient bien du titulaire du
        compte : vous y êtes déjà authentifié par Apple ou par Google.
      </p>
      <ul>
        <li>
          Ouvrez l’application et rendez-vous sur l’onglet <strong>Profil</strong>.
        </li>
        <li>
          Ouvrez les <strong>Paramètres</strong> (icône en haut de l’écran).
        </li>
        <li>
          En bas de l’écran, appuyez sur <strong>Supprimer mon compte</strong>.
        </li>
        <li>
          Confirmez. L’application vous prévient que l’action est irréversible, puis vous déconnecte.
        </li>
      </ul>
      <p>
        La suppression est <strong>immédiate</strong> : elle n’est pas mise en file d’attente et ne
        demande aucune validation de notre part.
      </p>

      <Callout>
        <p>
          <strong>Aucun délai de réflexion, aucune réactivation.</strong> Il n’existe pas de compte
          « désactivé » chez Duende. Une fois la suppression confirmée, il n’y a plus rien à
          restaurer, ni pour vous, ni pour nous.
        </p>
      </Callout>

      <h2>Ce qui est effacé</h2>
      <p>La suppression est en cascade. Disparaissent en même temps que le compte :</p>
      <ul>
        <li>
          <strong>Votre profil</strong> : prénom affiché, date de naissance, taille, genre, photo
          de profil et vos trois photos.
        </li>
        <li>
          <strong>Vos activités</strong> : celles que vous avez proposées, y compris les adresses
          exactes et les points de rendez-vous enregistrés avec elles.
        </li>
        <li>
          <strong>Vos notes vocales</strong> : celles qui présentaient vos activités et celles qui
          accompagnaient vos demandes, fichiers audio compris.
        </li>
        <li>
          <strong>Vos demandes</strong> : envoyées ou reçues, acceptées, refusées ou en attente.
        </li>
        <li>
          <strong>Vos messages</strong> : l’intégralité de vos conversations. Elles disparaissent
          aussi de l’écran de votre interlocuteur : il ne reste pas une moitié de conversation en
          face.
        </li>
        <li>
          <strong>Vos blocages et vos signalements</strong> : ceux que vous avez émis comme ceux qui
          vous concernaient.
        </li>
        <li>
          <strong>Vos appareils</strong> : les jetons de notification qui permettaient de vous
          prévenir.
        </li>
        <li>
          <strong>Votre identifiant de connexion</strong> : le compte lui-même, côté
          authentification. Aucune trace de votre compte Apple ou Google ne subsiste.
        </li>
      </ul>

      <h3>Avant l’effacement, une chose se produit</h3>
      <p>
        Si vous aviez des activités encore ouvertes, elles sont <strong>annulées</strong> plutôt que
        simplement effacées : la personne que vous aviez acceptée est prévenue que le rendez-vous
        n’a plus lieu, et les demandes encore en attente sont refusées. Personne ne reste devant une
        activité fantôme ou devant une réponse qui n’arrivera jamais.
      </p>

      <h2>Sous quel délai</h2>
      <ul>
        <li>
          <strong>Immédiatement</strong> : dans la base de données de production. Dès la
          confirmation, les données listées ci-dessus ne sont plus accessibles à personne, ni à vous
          ni à nous.
        </li>
        <li>
          <strong>Sous {site.deletionDelay} au plus tard</strong> : dans les sauvegardes techniques.
          Notre hébergeur conserve des sauvegardes chiffrées à des fins de restauration ; elles
          expirent d’elles-mêmes et ne sont jamais consultées pour autre chose qu’un incident.
        </li>
      </ul>
      <p>
        Passé ce délai, il ne reste rien. Aucune donnée n’est conservée à des fins statistiques,
        commerciales ou de « prévention de la fraude ».
      </p>

      <h2>Si vous n’avez plus accès à l’application</h2>
      <p>
        Téléphone perdu, application désinstallée, connexion Apple ou Google qui ne fonctionne plus :
        écrivez-nous et nous supprimerons le compte à votre place.
      </p>

      <p>
        <ButtonAnchor
          href={`mailto:${site.supportEmail}?subject=${encodeURIComponent('Demande de suppression de compte')}`}>
          Demander la suppression par courriel
        </ButtonAnchor>
      </p>

      <p>Pour que nous puissions retrouver le compte et vérifier qu’il est bien le vôtre :</p>
      <ul>
        <li>
          Écrivez depuis <strong>l’adresse de courriel associée à votre connexion</strong> Apple ou
          Google, y compris s’il s’agit d’une adresse relais Apple en{' '}
          <span className="font-mono text-[0.9em]">@privaterelay.appleid.com</span>.
        </li>
        <li>
          Indiquez le <strong>prénom affiché</strong> sur votre profil, et le fournisseur de
          connexion utilisé (Apple ou Google).
        </li>
        <li>
          N’envoyez <strong>aucune pièce d’identité</strong>. Nous ne la demanderons jamais et nous
          ne saurions pas quoi en faire.
        </li>
      </ul>
      <p>
        Nous confirmons la réception sous cinq jours ouvrés, et la suppression est effectuée sous{' '}
        <strong>trente jours</strong> à compter de la vérification. Si nous ne parvenons pas à
        rattacher la demande à un compte, nous vous le disons plutôt que de laisser la demande sans
        réponse.
      </p>

      <h2>Supprimer sans supprimer le compte</h2>
      <p>
        Toutes vos données ne demandent pas de fermer le compte. Depuis l’application, vous pouvez
        déjà :
      </p>
      <ul>
        <li>
          <strong>Annuler une activité</strong> : elle disparaît de la carte, son adresse et sa note
          vocale avec elle.
        </li>
        <li>
          <strong>Remplacer vos photos</strong> : chaque emplacement se réécrit ; l’ancien fichier
          est supprimé du stockage.
        </li>
        <li>
          <strong>Modifier votre profil</strong> : prénom, date de naissance, taille, genre.
        </li>
        <li>
          <strong>Vous déconnecter</strong> : sans rien effacer, si vous souhaitez seulement faire
          une pause.
        </li>
      </ul>

      <p>
        Pour comprendre ce que nous collectons et pourquoi, voyez la{' '}
        <Link href="/confidentialite">politique de confidentialité</Link>. Pour toute autre question,
        le <Link href="/support">support</Link>.
      </p>
    </LegalPage>
  );
}
