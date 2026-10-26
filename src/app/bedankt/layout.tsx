import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Bedankt voor je bestelling",
  description: "Bevestiging van je BesteIPTVNederland-bestelling.",
  path: "/bedankt",
  noIndex: true,
});

export default function ThankYouLayout({ children }: { children: React.ReactNode }) {
  return children;
}
