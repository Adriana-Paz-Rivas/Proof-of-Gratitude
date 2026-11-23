# Cómo contribuir a Proof of Gratitude

Proof of Gratitude es un archivo vivo de la historia de Stellar. Cada punto de la grilla es una
semana; algunos están marcados con hitos oficiales de la red, y otros se encienden porque alguien
de la comunidad dejó ahí su agradecimiento.

No necesitás saber nada de GitHub más allá de lo que explica esta guía.

## 1. Agregá tu archivo

Creá un archivo nuevo en `src/content/community/` con tu nombre (o un apodo) como nombre de
archivo, por ejemplo `src/content/community/tu-nombre.json`.

Copiá este contenido y completalo:

```json
{
  "nombre": "Tu nombre",
  "conoci_stellar": "2022-05-01",
  "agradece_a": "a la persona o comunidad a la que querés agradecer",
  "por_que": "Por qué se lo agradecés. Contá la historia con tus palabras.",
  "proximo_paso": "Qué es lo próximo que querés hacer en el ecosistema de Stellar.",
  "redes": "https://x.com/tu-usuario"
}
```

El campo `redes` es opcional: si lo completás, tu nombre aparece como link a ese perfil en el detalle de tu semana.

También hay una plantilla lista en [`src/content/community/_ejemplo.json`](src/content/community/_ejemplo.json).

### Sobre el campo `agradece_a`

Escribilo como la frase completa que seguiría a la palabra "Agradece", incluyendo la preposición:
`"a Juana, que me ayudó con..."`, `"al equipo que mantiene..."`, `"a quien escribió la guía de..."`.
El sitio arma la oración completa como **"Agradece" + lo que pusiste acá**, así que si empieza con
el nombre o sustantivo solo (sin "a"/"al" adelante), la frase va a quedar mal armada.

### Sobre el campo `conoci_stellar`

Es la fecha en la que conociste Stellar (no la fecha de hoy ni la de este Pull Request). Esa
fecha es la que decide en qué semana de la grilla aparece tu punto.

- Formato: `AAAA-MM-DD` (año-mes-día), por ejemplo `2022-05-01`.
- Tiene que estar entre julio de 2014 (cuando nació la red) y hoy.
- **Si no te acordás el día exacto, poné el `01` del mes. Vale aproximado** — lo que importa es
  el mes y el año.

Si la fecha no cumple el formato o el rango, la validación automática del sitio va a rechazar tu
Pull Request con este mensaje:

> Revisá la fecha: tiene que ser entre julio de 2014 y hoy, con formato AAAA-MM-DD

## 2. Abrí el Pull Request

1. Hacé un fork del repositorio (o una rama, si ya tenés acceso).
2. Agregá tu archivo en `src/content/community/`.
3. Abrí un Pull Request contra la rama principal.

La validación corre sola (son las reglas definidas en `src/content/config.ts`) y te va a avisar
si falta algún campo o si la fecha no es válida. Cuando el PR pase la validación y se mergee, tu
historia ya es parte del archivo.

## Sobre los hitos oficiales

Los hitos de la historia de Stellar (`data/hitos.json`) son curados por quienes mantienen el
proyecto, no se agregan por este mismo flujo. Si creés que falta un hito importante, abrí un
Issue describiéndolo en vez de editar ese archivo directamente.
