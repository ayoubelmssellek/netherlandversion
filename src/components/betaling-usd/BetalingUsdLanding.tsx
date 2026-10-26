"use client";

import { PlanCard } from "@/components/Pricing";
import { planFeatures, plans } from "@/data/content";
import { getPagoUsdPlan, type PagoUsdSlug } from "@/data/betaling-usd";

/**
 * Renders the exact same pricing card as `/prijzen`, with only the primary
 * price shown in USD (hard-coded commercial amount).
 */
export default function BetalingUsdLanding({ slug }: { slug: PagoUsdSlug }) {
  const usd = getPagoUsdPlan(slug);
  const base = plans.one.find((p) => p.id === usd.planId);
  if (!base) {
    throw new Error(`Missing 1-connection plan for ${usd.planId}`);
  }

  const plan = { ...base, price: usd.usdPrice };

  return (
    <div className="section-shell py-16 md:py-24">
      <div className="mx-auto w-full max-w-sm">
        <PlanCard
          plan={plan}
          connections={1}
          features={planFeatures}
          priceSymbol="$"
          showCompare={false}
        />
      </div>
    </div>
  );
}
