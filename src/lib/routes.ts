/** Canonical marketing routes (Netherlands / nl-NL). */

export const routes = {
  home: "/",
  queEsIptv: "/wat-is-iptv",
  canales: "/kanalen",
  precios: "/prijzen",
  apps: "/applicaties",
  faq: "/veelgestelde-vragen",
  sobreNosotros: "/over-ons",
  installationGuides: "/installatiegidsen",
  blog: "/blog",
  renew: "/verlengen",
  checkout: "/checkout",
  packTrimestral: "/pack-kwartaal",
  packBasico: "/pack-basis",
  packPremium: "/pack-premium",
  packFamilia: "/pack-familie",
  privacy: "/privacybeleid",
  terms: "/voorwaarden",
  refund: "/retourbeleid",
  dmca: "/dmca-beleid",
  valoraciones: "/beoordelingen",
  gracias: "/bedankt",
} as const;

export type AppRoute = (typeof routes)[keyof typeof routes];
