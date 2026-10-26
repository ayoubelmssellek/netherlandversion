/**
 * USD payment card routes (`/betaling-usd/*`).
 * Reuses the existing Pricing `PlanCard` with hard-coded USD primary prices only.
 */

export type PagoUsdSlug = "1-mes" | "3-meses" | "6-meses" | "1-ano";

export type PagoUsdPlan = {
  slug: PagoUsdSlug;
  path: `/betaling-usd/${PagoUsdSlug}`;
  /** Matches `plans.one` id */
  planId: "1m" | "3m" | "6m" | "1y";
  usdPrice: number;
  seoTitle: string;
  seoDescription: string;
};

export const pagoUsdPlans: Record<PagoUsdSlug, PagoUsdPlan> = {
  "1-mes": {
    slug: "1-mes",
    path: "/betaling-usd/1-mes",
    planId: "1m",
    usdPrice: 12,
    seoTitle: "Betaling in USD · 1 maand",
    seoDescription: "Plan BesteIPTVNederland 1 maand — betaling van $12 USD.",
  },
  "3-meses": {
    slug: "3-meses",
    path: "/betaling-usd/3-meses",
    planId: "3m",
    usdPrice: 27,
    seoTitle: "Betaling in USD · 3 maanden",
    seoDescription: "Plan BesteIPTVNederland 3 maanden — betaling van $27 USD.",
  },
  "6-meses": {
    slug: "6-meses",
    path: "/betaling-usd/6-meses",
    planId: "6m",
    usdPrice: 35,
    seoTitle: "Betaling in USD · 6 maanden",
    seoDescription: "Plan BesteIPTVNederland 6 maanden — betaling van $35 USD.",
  },
  "1-ano": {
    slug: "1-ano",
    path: "/betaling-usd/1-ano",
    planId: "1y",
    usdPrice: 50,
    seoTitle: "Betaling in USD · 1 jaar",
    seoDescription: "Plan BesteIPTVNederland 1 jaar — betaling van $50 USD.",
  },
};

export function getPagoUsdPlan(slug: PagoUsdSlug): PagoUsdPlan {
  return pagoUsdPlans[slug];
}
