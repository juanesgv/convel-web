export type NavItem = {
  label: string;
  href: string;
  description?: string;
  children?: NavChild[];
};

export type NavChild = {
  label: string;
  href: string;
  description?: string;
};

export const primaryNav: NavItem[] = [
  {
    label: 'Servicios',
    href: '/servicios',
    description: 'Diseño, optimización, estructuración y construcción.',
    children: [
      { label: 'Diseños', href: '/servicios/disenos' },
      { label: 'Optimización', href: '/servicios/optimizacion' },
      { label: 'Estructuración', href: '/servicios/estructuracion' },
      { label: 'Construcción', href: '/servicios/construccion' },
    ],
  },
  {
    label: 'Experiencia',
    href: '/experiencia',
    description: 'Trayectoria, capacidad técnica y reconocimientos.',
    children: [
      { label: 'Capacidad técnica', href: '/experiencia/capacidad-tecnica' },
      { label: 'Premios', href: '/experiencia/premios' },
      { label: 'Casos de estudio', href: '/experiencia/casos-de-estudio' },
    ],
  },
  {
    label: 'Segmentos',
    href: '/segmentos',
    description: 'Sectores en los que operamos.',
  },
  {
    label: 'Quiénes Somos',
    href: '/quienes-somos',
    description: 'Legado, visión y cultura.',
  },
  {
    label: 'Talento',
    href: '/talento',
    description: 'Cultura organizacional y oportunidades.',
  },
  {
    label: 'Proveedores',
    href: '/proveedores',
    description: 'Información para aliados y proveedores.',
  },
  {
    label: 'Sostenibilidad',
    href: '/sostenibilidad',
    description: 'Práctica sostenible como dato técnico.',
  },
];

export const primaryCta = {
  label: 'Contáctenos',
  href: '/contacto',
} as const;

export const footerLegal = [
  { label: 'Política de privacidad', href: '/politica-de-privacidad' },
  { label: 'Tratamiento de datos', href: '/tratamiento-de-datos' },
  { label: 'Términos de uso', href: '/terminos' },
] as const;
