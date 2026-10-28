"use client";

import Link from "next/link";
import { useState } from "react";
import { planFeatures, plans } from "@/data/content";
import { getFamilyPlanCompare, getFamilyPlanPrice } from "@/lib/plan-pricing";

export type PricingPlan = (typeof plans.one)[number] | (typeof plans.two)[number];

function checkoutHref(planId: string, connections: number) {
  return `/checkout?plan=${encodeURIComponent(planId)}&connections=${connections}`;
}

type PricingProps = {
  /** Override feature bullets (e.g. `/prijzen` verified list). Defaults keep other surfaces unchanged. */
  features?: string[];
};

export default function Pricing({ features = planFeatures }: PricingProps) {
  const [connections, setConnections] = useState<1 | 2>(1);
  const list = connections === 1 ? plans.one : plans.two;
  const familyPrice = getFamilyPlanPrice();
  const familyCompare = getFamilyPlanCompare();

  return (
    <div id="abonnementen">
      <div className="mb-12 max-w-2xl">
        <p className="label">IPTV-prijs: eenmalige betaling</p>
        <h2 className="mt-4 text-[36px] tracking-[-0.9px] text-white md:text-[40px]">
          Kies je IPTV-abonnement Nederland
        </h2>
        <p className="mt-4 text-[16px] leading-[1.4] text-slate">
          Vergelijk prijzen en verbindingen en koop IPTV online met Nederlandse zenders, Eredivisie, ESPN en 4K-streaming. Elk abonnement bevat de
          volledige bibliotheek voor het aantal verbindingen: ideaal voor IPTV in Nederland.
        </p>
        <div className="mt-6 inline-flex border border-line">
          {([1, 2] as const).map((n) => (
            <button
              key={n}
              type="button"
              onClick={() => setConnections(n)}
              className={`px-5 py-2.5 text-[14px] font-semibold tracking-[-0.16px] transition ${
                connections === n ? "bg-white text-black" : "bg-transparent text-slate hover:text-white"
              }`}
            >
              {n} {n > 1 ? "verbindingen" : "verbinding"}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {list.map((plan) => (
          <PlanCard key={plan.id} plan={plan} connections={connections} features={features} />
        ))}
      </div>

      <div className="mt-4 flex flex-col justify-between gap-6 border border-line bg-surface p-6 md:flex-row md:items-start md:p-8">
        <div className="min-w-0 flex-1">
          <h3 className="text-[24px] tracking-normal text-white">IPTV Premium voor Nederland: 3 verbindingen</h3>
          <p className="mt-2 max-w-xl text-[14px] text-slate">
            Drie streams tegelijk voor gezin of vrienden. De beste jaarprijs als je IPTV met meer
            verbindingen wilt kopen.
          </p>
          <div className="mt-4 flex items-baseline gap-2">
            <span className="text-[28px] tracking-[-0.6px] text-white">€{familyPrice}</span>
            <span className="text-[14px] text-muted line-through">€{familyCompare}</span>
            <span className="text-[12px] text-muted">/ jaar</span>
          </div>
          <p className="mt-1 text-[12px] text-muted">IPTV-prijs · eenmalige betaling</p>
          <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
            {features.map((f) => (
              <li key={f} className="text-[13px] leading-[1.35] text-slate">
                <span className="mr-2 text-white">—</span>
                {f}
              </li>
            ))}
          </ul>
        </div>
        <Link
          href={checkoutHref("3conn", 3)}
          className="btn btn-solid shrink-0 self-start md:self-center"
          aria-label="Kies het gezinsabonnement IPTV met 3 verbindingen"
        >
          Nu kopen
        </Link>
      </div>
    </div>
  );
}

/** Same pricing card used on `/prijzen` — optional primary price symbol for USD payment routes. */
export function PlanCard({
  plan,
  connections,
  features,
  priceSymbol = "€",
  showCompare = true,
}: {
  plan: PricingPlan;
  connections: number;
  features: string[];
  /** Primary price symbol only. Defaults to €; USD routes pass `$`. */
  priceSymbol?: "€" | "$";
  /** Crossed-out offer price. Defaults on for EUR pages; USD routes pass `false`. */
  showCompare?: boolean;
}) {
  const featured = Boolean(plan.highlight || plan.popular);
  const badgeLabel = "badge" in plan && plan.badge ? plan.badge : plan.popular ? "Meest gekozen" : null;

  return (
    <article
      className={`relative flex flex-col border p-6 pt-8 ${
        featured ? "border-pt-red/50 bg-surface shadow-[0_0_0_1px_rgba(198,11,30,0.25)]" : "border-line bg-black"
      }`}
    >
      {badgeLabel ? (
        <span className="absolute -top-2.5 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-sm bg-pt-red px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.06em] text-white shadow-[0_4px_14px_rgba(198,11,30,0.35)]">
          {badgeLabel}
        </span>
      ) : (
        <span className="mb-3 block h-[22px]" aria-hidden="true" />
      )}

      <h3 className="text-[24px] text-white">{plan.label}</h3>
      <p className="mt-1 text-[13px] text-mid">
        Voor {connections} {connections > 1 ? "verbindingen" : "verbinding"}
      </p>
      <div className="mt-6 flex items-baseline gap-2">
        <span className="text-[40px] tracking-[-1px] text-white">
          {priceSymbol}
          {plan.price}
        </span>
        {showCompare ? (
          <span className="text-[14px] text-muted line-through">€{plan.compare}</span>
        ) : null}
      </div>
      <p className="mt-1 text-[12px] text-muted">IPTV-prijs · eenmalige betaling</p>
      <ul className="mt-6 flex-1 space-y-2.5">
        {features.map((f) => (
          <li key={f} className="text-[13px] leading-[1.35] text-slate">
            <span className="mr-2 text-white">—</span>
            {f}
          </li>
        ))}
      </ul>
      <Link
        href={checkoutHref(plan.id, connections)}
        aria-label={`IPTV kopen ${plan.label}`}
        className={`btn mt-8 w-full ${featured ? "btn-solid" : "btn-ghost"}`}
      >
        Nu kopen
      </Link>
    </article>
  );
}
