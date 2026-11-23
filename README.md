# Proof of Gratitude

Un archivo vivo de la historia de Stellar: una grilla de puntos donde cada punto es una semana
desde el nacimiento de la red. Algunas semanas tienen hitos oficiales de Stellar; otras se
encienden porque alguien de la comunidad dejó ahí su agradecimiento.

## Desarrollo local

```bash
npm install
npm run dev
```

Abre `http://localhost:4321`.

## Estructura

- `src/pages/index.astro` — la página completa (grilla, panel de detalle, tema claro/oscuro).
- `src/content/community/` — un archivo JSON por historia de la comunidad (ver
  [`CONTRIBUTING.md`](CONTRIBUTING.md)).
- `src/content/config.ts` — el schema que valida cada archivo de la comunidad al momento de
  construir el sitio.
- `data/hitos.json` — los hitos oficiales de la historia de Stellar, curados por el equipo.

## Contribuir

Ver [`CONTRIBUTING.md`](CONTRIBUTING.md) para dejar tu propio agradecimiento vía Pull Request.
