export const company = {
  legalName: 'Convel S.A.S.',
  brand: 'convel',
  tagline: 'Lo hacemos posible.',
  ethos: 'Realizamos sueños.',
  yearsExperience: 72,
  teamSize: 400,
  city: 'Medellín',
  country: 'Colombia',

  address: {
    street: 'Carrera 43A # 1-50',
    detail: 'Torre Sur, Oficina 1502',
    neighborhood: 'El Poblado',
    city: 'Medellín',
    country: 'Colombia',
  },

  contact: {
    phone: '+57 (604) 444 5500',
    phoneE164: '+576044445500',
    email: 'proyectos@convel.com.co',
    hours: 'Lun – Vie · 8:00 – 17:30 (COT)',
  },

  social: {
    linkedin: 'https://www.linkedin.com/company/convel',
    instagram: 'https://www.instagram.com/convel',
  },

  domain: 'convel.com.co',
} as const;

export type Company = typeof company;
