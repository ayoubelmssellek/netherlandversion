import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Betaling in USD",
  description: "USD-betaalpagina's van BesteIPTVNederland.",
  path: "/betaling-usd",
  noIndex: true,
});

export default function PagoUsdLayout({ children }: { children: React.ReactNode }) {
  return children;
}
