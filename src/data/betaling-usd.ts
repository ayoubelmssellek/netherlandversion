/**
 * USD payment card routes (`/betaling-usd/*`).
 * Reuses the existing Pricing `PlanCard` with hard-coded USD primary prices only.
 */

export type PagoUsdSlug = "1-maand" | "3-maanden" | "6-maanden" | "1-jaar";

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
  "1-maand": {
    slug: "1-maand",
    path: "/betaling-usd/1-maand",
    planId: "1m",
    usdPrice: 12,
    seoTitle: "Betaling in USD · 1 maand",
    seoDescription: "Plan BesteIPTVNederland 1 maand — betaling van $12 USD.",
  },
  "3-maanden": {
    slug: "3-maanden",
    path: "/betaling-usd/3-maanden",
    planId: "3m",
    usdPrice: 27,
    seoTitle: "Betaling in USD · 3 maanden",
    seoDescription: "Plan BesteIPTVNederland 3 maanden — betaling van $27 USD.",
  },
  "6-maanden": {
    slug: "6-maanden",
    path: "/betaling-usd/6-maanden",
    planId: "6m",
    usdPrice: 35,
    seoTitle: "Betaling in USD · 6 maanden",
    seoDescription: "Plan BesteIPTVNederland 6 maanden — betaling van $35 USD.",
  },
  "1-jaar": {
    slug: "1-jaar",
    path: "/betaling-usd/1-jaar",
    planId: "1y",
    usdPrice: 50,
    seoTitle: "Betaling in USD · 1 jaar",
    seoDescription: "Plan BesteIPTVNederland 1 jaar — betaling van $50 USD.",
  },
};

export function getPagoUsdPlan(slug: PagoUsdSlug): PagoUsdPlan {
  return pagoUsdPlans[slug];
}
