import type { Metadata } from "next";
import BetalingUsdLanding from "@/components/betaling-usd/BetalingUsdLanding";
import { getPagoUsdPlan } from "@/data/betaling-usd";
import { buildMetadata } from "@/lib/seo";

const plan = getPagoUsdPlan("6-maanden");

export const metadata: Metadata = buildMetadata({
  title: plan.seoTitle,
  description: plan.seoDescription,
  path: plan.path,
  noIndex: true,
});

export default function BetalingUsd6MaandenPage() {
  return <BetalingUsdLanding slug="6-maanden" />;
}
