import type { Metadata } from "next";
import BetalingUsdLanding from "@/components/betaling-usd/BetalingUsdLanding";
import { getPagoUsdPlan } from "@/data/betaling-usd";
import { buildMetadata } from "@/lib/seo";

const plan = getPagoUsdPlan("1-mes");

export const metadata: Metadata = buildMetadata({
  title: plan.seoTitle,
  description: plan.seoDescription,
  path: plan.path,
  noIndex: true,
});

export default function PagoUsd1MesPage() {
  return <BetalingUsdLanding slug="1-mes" />;
}
