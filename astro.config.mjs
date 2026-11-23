import { defineConfig } from 'astro/config';

export default defineConfig({
  // Pendiente de decidir: si el deploy final es GitHub Pages sobre un repo
  // (no un dominio propio), hay que setear acá `site` y `base` con el nombre
  // del repositorio, por ejemplo:
  // site: 'https://<usuario>.github.io',
  // base: '/PROOF-OF-GRATITUDE',
});
