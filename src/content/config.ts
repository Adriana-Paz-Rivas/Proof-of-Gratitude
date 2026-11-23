import { defineCollection, z } from 'astro:content';

// Lunes de la semana de lanzamiento de Stellar (28/07/2014).
const LAUNCH_WEEK_MONDAY = '2014-07-28';
const DATE_ERROR =
  'Revisá la fecha: tiene que ser entre julio de 2014 y hoy, con formato AAAA-MM-DD';

const fechaStellar = z
  .string()
  .regex(/^\d{4}-\d{2}-\d{2}$/, DATE_ERROR)
  .refine((value) => {
    const parsed = new Date(`${value}T00:00:00`);
    if (Number.isNaN(parsed.getTime())) return false;
    const launch = new Date(`${LAUNCH_WEEK_MONDAY}T00:00:00`);
    const today = new Date();
    today.setHours(23, 59, 59, 999);
    return parsed >= launch && parsed <= today;
  }, DATE_ERROR);

const community = defineCollection({
  type: 'data',
  schema: z.object({
    nombre: z.string().min(1, 'Falta el nombre de quien agradece.'),
    conoci_stellar: fechaStellar,
    agradece_a: z.string().min(1, 'Falta decir a quién se agradece.'),
    por_que: z.string().min(1, 'Falta contar la historia (campo por_que).'),
    proximo_paso: z.string().min(1, 'Falta el próximo paso.'),
    redes: z.string().url('El campo redes tiene que ser un link válido (https://...).').optional(),
    github: z
      .string()
      .regex(/^[A-Za-z0-9-]+$/, 'El campo github tiene que ser solo tu usuario, sin https:// ni @.')
      .optional(),
  }),
});

export const collections = { community };
