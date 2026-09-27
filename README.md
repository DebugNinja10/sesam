# SESAM ACADEMY

Site vitrine de SESAM ACADEMY, construit avec React, TypeScript, Vite et Tailwind CSS.

## Développement local

```sh
npm install
npm run dev
```

## Vérifications et compilation

```sh
npm run lint
npm run typecheck
npm run build
```

La version de production est générée dans `dist/`.

## Déploiement sur Vercel

Le dépôt est configuré pour Vercel avec `vercel.json` : framework Vite, commande `npm run build` et dossier de sortie `dist`.

Importer le dépôt GitHub `DebugNinja10/sesam` dans Vercel. Vercel détectera cette configuration et déploiera le site automatiquement à chaque push sur la branche principale.
