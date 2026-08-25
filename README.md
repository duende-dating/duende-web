# duende-web

Le site de [Duende](https://github.com/duende-dating/duende) : page de
présentation, pages légales, support, et la page de demande de suppression de
compte qu'exige Google Play.

Next.js en export statique, publié sur GitHub Pages.

## Développer

```bash
npm install
npm run dev
```

`npm run dev` sert le site à la racine. En production il est servi depuis
`/duende-web`, ce que `next.config.ts` lit dans `NEXT_PUBLIC_BASE_PATH` :

```bash
NEXT_PUBLIC_BASE_PATH=/duende-web npm run build   # sortie dans out/
```

## Vérifier

```bash
npm run verify
```

Types, lint, et build. C'est ce que rejoue le workflow avant de déployer.

## Déployer

Un push sur `main` déclenche `.github/workflows/deploy.yml`. Une fois seulement,
dans les réglages du dépôt, il faut mettre **Settings → Pages → Source** sur
**GitHub Actions**.

## Direction artistique

Reprise de l'application, sans réinvention :

- **Palette « Bouteille »** : une seule encre, `#123A2E`, sur blanc. Pas de
  couleur d'accent, pas de thème sombre. Ce qui porte la hiérarchie, c'est le
  remplissage : sur un écran, un seul bloc est plein, et c'est l'action.
- **Le logotype** est un tracé, pas une police. `src/lib/duende-outlines.ts` est
  copié depuis l'app : deux jeux de contours aux deux extrémités de l'axe de
  largeur d'Anybody Black. L'ouverture de la page interpole cet axe, ce qui n'est
  pas un `scaleX` : les fûts gardent leur graisse pendant que les contrepoinçons
  se ferment.
- **Typographie** : Spline Sans, comme `--font-display` dans l'app.

Régénérer les contours se fait dans l'app, pas ici.

## Ce qui reste à faire

- Renseigner l'éditeur dans les mentions légales, les CGU et la politique de
  confidentialité (champs marqués en rouge sur les pages).
- Désigner un médiateur de la consommation (CGU, article 15).
- Remplacer les badges « bientôt » par les vraies URL des stores.
- Renseigner les URL dans les consoles : confidentialité et support côté App
  Store Connect, confidentialité et suppression de compte côté Play Console.
- Choisir un nom de domaine, puis retirer `NEXT_PUBLIC_BASE_PATH` du workflow et
  ajouter un `public/CNAME`.
