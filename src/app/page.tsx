import Link from 'next/link';

import { ActivityCards } from '@/components/activity-cards';
import { WordmarkSqueeze } from '@/components/duende-logo';
import { StoreBadges } from '@/components/store-badges';
import { ButtonLink, Card, Container, Eyebrow, InkBand, Section } from '@/components/ui';
import { ZoneDiagram } from '@/components/zone-diagram';
import { site } from '@/lib/site';

/**
 * The presentation page.
 *
 * The order is deliberate. First what Duende is for: se voir vite, sans les
 * jours de discussion qui précèdent d'habitude. The 150 m circle comes later,
 * in the safety section, because that is what it is: a protection, not the
 * point of the product.
 */

const STEPS = [
  {
    step: '01',
    title: 'Écoutez',
    body: 'Chaque activité est présentée par une note vocale. Le titre dit quoi et quand, la voix dit qui.',
  },
  {
    step: '02',
    title: 'Demandez',
    body: 'Vous répondez par un vocal, pas par un message. Une seule demande sera acceptée : la place part avec elle.',
  },
  {
    step: '03',
    title: 'Rencontrez',
    body: 'Dès que l’hôte accepte, l’adresse exacte arrive et le chat s’ouvre. Il ne reste plus qu’à s’y rendre.',
  },
];

const NOT_DOING = [
  {
    title: 'Pas de catalogue de profils',
    body: 'Vous parcourez des propositions d’activités autour de vous, pas des personnes. On choisit un moment, et quelqu’un vient avec.',
  },
  {
    title: 'Pas de conversation d’abord',
    body: 'Le chat s’ouvre quand le rendez-vous est pris. Avant, il n’y a rien à entretenir.',
  },
  {
    title: 'Pas d’historique',
    body: 'Une activité expire après le créneau. Elle ne survit pas à la rencontre.',
  },
  {
    title: 'Pas de score',
    body: 'Ni note, ni réputation, ni badge. Personne n’a de dossier à défendre.',
  },
];

const SAFETY = [
  {
    title: 'Une zone, pas une adresse',
    body: 'Tant que vous n’avez accepté personne, les autres ne reçoivent qu’un cercle d’environ 150 mètres autour du lieu, et une distance arrondie à la centaine de mètres. L’adresse exacte est stockée à part et n’est lisible que par vous et la personne acceptée.',
  },
  {
    title: 'Votre position n’est pas enregistrée',
    body: 'Celle qui sert à chercher les activités proches est transmise le temps de la recherche, puis abandonnée. L’application ne suit personne en arrière-plan.',
  },
  {
    title: 'Lieux publics uniquement',
    body: 'Café, parc, bibliothèque. Jamais une adresse personnelle. Un écran de consignes, non contournable, précède la première activité comme la première demande.',
  },
  {
    title: 'Vous choisissez qui vous rencontrez',
    body: 'Chaque demande passe par vous, et vous n’en acceptez qu’une. Refuser ne demande aucune justification.',
  },
  {
    title: 'Signaler, bloquer',
    body: 'Depuis un profil ou depuis le chat. Bloquer coupe l’accès à l’activité, annule les demandes en attente et retire la participation, dans le même mouvement.',
  },
  {
    title: 'Expiration automatique',
    body: 'Une activité ne dépasse pas son créneau. Passé l’heure, elle disparaît de la carte sans que personne ait à y penser.',
  },
];

export default function HomePage() {
  return (
    <>
      {/* ------------------------------------------------------------------ */}
      {/* The opening: the word arrives wide and compresses onto itself.     */}
      {/* ------------------------------------------------------------------ */}
      <InkBand className="on-ink">
        <Container className="flex flex-col items-start py-20 sm:py-28">
          <Eyebrow>Rencontres en personne · 18 ans et plus</Eyebrow>

          <div className="mt-8 w-full max-w-2xl">
            <h1 className="sr-only">Duende, se voir plutôt que s’écrire</h1>
            <WordmarkSqueeze maxWidth={320} title="Duende" />
          </div>

          <p className="mt-10 max-w-2xl text-3xl font-semibold tracking-[-0.02em] text-balance sm:text-5xl sm:leading-[1.05]">
            {site.tagline}
          </p>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-ground/80 sm:text-lg">
            Proposez un café dans l’heure, quelque part en public. Quelqu’un demande à venir, vous
            acceptez, vous vous voyez. Pas de conversation qui s’éternise.
          </p>

          <div className="mt-10">
            <StoreBadges />
          </div>

          <p className="mt-6 text-sm text-on-ink-muted">
            Application en français. L’inscription se fait avec Apple ou Google.
          </p>
        </Container>
      </InkBand>

      {/* ------------------------------------------------------------------ */}
      {/* What the app is for.                                               */}
      {/* ------------------------------------------------------------------ */}
      <Section
        id="principe"
        eyebrow="Le principe"
        title="On se voit d’abord. On discutera après."
        lead="Quelqu’un propose un café, une balade, un verre, dans un lieu public et dans les heures qui viennent. Les personnes autour voient la proposition et demandent à venir. L’hôte en accepte une, et la rencontre a lieu. Il n’y a pas de semaine de messages à traverser avant d’y arriver.">
        <ActivityCards />
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted">
          Ce que vous choisissez, c’est une activité et une heure. La personne vient avec, et vous
          l’avez déjà entendue.
        </p>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* The loop.                                                          */}
      {/* ------------------------------------------------------------------ */}
      <Section
        eyebrow="Comment ça marche"
        title="Trois gestes, et vous êtes assis quelque part."
        className="border-t border-rule bg-surface">
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {STEPS.map((step) => (
            <Card key={step.title} className="bg-ground">
              <p className="text-xs font-bold tracking-[0.08em] text-zone-border">{step.step}</p>
              <h3 className="mt-3 text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{step.body}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* The voice.                                                         */}
      {/* ------------------------------------------------------------------ */}
      <Section
        eyebrow="La voix d’abord"
        title="Un vocal en dit plus que trois jours de messages."
        lead="Le ton, l’accent, l’hésitation : ce sont les choses sur lesquelles on juge réellement quelqu’un avant d’accepter de le rencontrer. Duende les demande des deux côtés. Une activité sans vocal ne part pas, une demande sans vocal n’arrive pas."
      />

      {/* ------------------------------------------------------------------ */}
      {/* What the app deliberately does not do.                             */}
      {/* ------------------------------------------------------------------ */}
      <Section
        eyebrow="Ce que Duende ne fait pas"
        title="Le reste a été retiré exprès."
        className="border-t border-rule">
        <div className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2">
          {NOT_DOING.map((item) => (
            <div key={item.title} className="border-t border-rule pt-5">
              <h3 className="text-base font-bold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* Safety, as a mechanism rather than as advice.                      */}
      {/* ------------------------------------------------------------------ */}
      <Section
        id="securite"
        eyebrow="Sécurité"
        title="L’adresse exacte n’existe pas avant votre accord."
        lead="Rencontrer quelqu’un qu’on ne connaît pas demande des garanties qui tiennent sans qu’on y pense. La première est un cercle de 150 mètres : ce n’est pas un affichage que l’on masque, c’est une position que personne ne reçoit."
        className="border-t border-rule bg-surface">
        <ZoneDiagram />

        <div className="mt-14 grid gap-4 sm:grid-cols-2">
          {SAFETY.map((rule) => (
            <Card key={rule.title} className="bg-ground">
              <h3 className="text-base font-bold">{rule.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{rule.body}</p>
            </Card>
          ))}
        </div>

        <p className="mt-8 text-sm leading-relaxed text-muted">
          S’y ajoutent des limites appliquées par la base de données plutôt que par l’interface :
          trois activités ouvertes par hôte, dix demandes en attente par personne. Et la suppression
          du compte efface l’ensemble de vos données, en cascade.{' '}
          <Link
            href="/suppression-compte"
            className="font-semibold text-ink underline decoration-zone-border underline-offset-[3px] hover:decoration-ink">
            Voir la procédure
          </Link>
          .
        </p>
      </Section>

      {/* ------------------------------------------------------------------ */}
      {/* Where it ends: the stores, and a way to reach a human.             */}
      {/* ------------------------------------------------------------------ */}
      <InkBand className="on-ink">
        <Container className="py-20">
          <Eyebrow>Bientôt</Eyebrow>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-[-0.02em] text-balance sm:text-4xl">
            L’application arrive sur iOS et Android.
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-ground/80">
            En attendant, une question ou un problème se règle par courriel. Nous répondons à la
            même adresse que celle du signalement dans l’application.
          </p>

          <div className="mt-8">
            <StoreBadges />
          </div>

          <div className="mt-8">
            <ButtonLink
              href="/support"
              className="border border-white/25 bg-transparent text-ground hover:bg-white/10">
              Contacter le support
            </ButtonLink>
          </div>
        </Container>
      </InkBand>
    </>
  );
}
