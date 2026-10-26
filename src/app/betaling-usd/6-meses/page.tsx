import type { Metadata } from "next";
import BetalingUsdLanding from "@/components/betaling-usd/BetalingUsdLanding";
import { getPagoUsdPlan } from "@/data/betaling-usd";
import { buildMetadata } from "@/lib/seo";

const plan = getPagoUsdPlan("6-meses");

export const metadata: Metadata = buildMetadata({
  title: plan.seoTitle,
  description: plan.seoDescription,
  path: plan.path,
  noIndex: true,
});

export default function PagoUsd6MesesPage() {
  return <BetalingUsdLanding slug="6-meses" />;
}
