/**
 * Canonical keyword → URL map for BesteIPTVNederland SEO ops (Phase 6).
 * One primary URL per intent — do not invent doorway duplicates.
 */
export type SeoPageMapping = {
  keyword: string;
  path: string;
  priority: "A" | "B" | "C" | "avoid";
  note?: string;
};

/** Priority cheat sheet for the Netherlands market (+ Phase 1–5 URLs). */
export const keywordPageMap: SeoPageMapping[] = [
  // Priority A
  // High-impression informational: educate only — never M3U dumps
  {
    keyword: "iptv nederland gratis lijst",
    path: "/blog/iptv-legaal-nederland",
    priority: "A",
    note: "Informational winner; no piracy doorway",
  },
  { keyword: "gratis iptv lijsten nederland", path: "/blog/iptv-legaal-nederland", priority: "A" },
  { keyword: "gratis iptv nederland lijst", path: "/blog/iptv-legaal-nederland", priority: "A" },
  { keyword: "iptv lijst nederland gratis", path: "/blog/iptv-legaal-nederland", priority: "A" },
  { keyword: "gratis iptv lijst nederland", path: "/blog/iptv-legaal-nederland", priority: "A" },
  {
    keyword: "iptv m3u lijsten nederland",
    path: "/blog/iptv-legaal-nederland",
    priority: "A",
    note: "same intent cluster — explain M3U risks, do not host lists",
  },
  { keyword: "iptv android nederland", path: "/installatiegidsen/android", priority: "A" },
  { keyword: "iptv nederland android", path: "/installatiegidsen/android", priority: "A" },
  { keyword: "iptv smart tv nederland", path: "/installatiegidsen/smart-tv", priority: "A" },
  { keyword: "smart tv iptv nederland", path: "/installatiegidsen/smart-tv", priority: "A" },
  { keyword: "iptv smarters pro nederland", path: "/blog/iptv-smarters-pro-nederland", priority: "A" },
  { keyword: "iptv smarters nederland", path: "/blog/iptv-smarters-pro-nederland", priority: "A" },
  { keyword: "iptv smarters player nederland", path: "/blog/iptv-smarters-pro-nederland", priority: "A" },
  { keyword: "iptv nederland kopen", path: "/prijzen", priority: "A" },
  {
    keyword: "iptv nederland prijs",
    path: "/prijzen",
    priority: "A",
    note: "Commercial owner per cannibalization matrix; literacy blog supports with hard link to /prijzen",
  },
  { keyword: "iptv abonnement nederland", path: "/prijzen", priority: "A" },
  {
    keyword: "iptv kwartaalpakket",
    path: "/pack-kwartaal",
    priority: "A",
    note: "SKU leaf — 3m × 1; defer buy hub to /prijzen",
  },
  {
    keyword: "iptv basispakket",
    path: "/pack-basis",
    priority: "A",
    note: "SKU leaf — 1y × 1",
  },
  {
    keyword: "iptv premium pakket",
    path: "/pack-premium",
    priority: "A",
    note: "SKU leaf — 1y2 × 2; not exclusive 4K tier",
  },
  {
    keyword: "iptv familiepakket",
    path: "/pack-familie",
    priority: "A",
    note: "SKU leaf — 3conn × 3",
  },
  { keyword: "iptv apps", path: "/applicaties", priority: "A" },
  { keyword: "iptv installeren", path: "/applicaties", priority: "A", note: "Hub overview; device steps stay on guides" },
  { keyword: "wat is iptv", path: "/wat-is-iptv", priority: "A" },
  { keyword: "faq iptv nederland", path: "/veelgestelde-vragen", priority: "A" },
  { keyword: "proef iptv nederland", path: "/blog/proef-iptv-nederland", priority: "A" },
  { keyword: "iptv nederland gratis proef", path: "/blog/proef-iptv-nederland", priority: "A" },
  { keyword: "beste iptv nederland", path: "/blog/beste-iptv-nederland-2026", priority: "A" },
  { keyword: "beste iptv in nederland", path: "/blog/beste-iptv-nederland-2026", priority: "A" },
  {
    keyword: "beste iptv dienst nederland",
    path: "/blog/beste-iptv-nederland-2026",
    priority: "A",
    note: "Quora/community wording — same intent as beste IPTV",
  },
  {
    keyword: "beste iptv aanbieder nederland",
    path: "/blog/beste-iptv-nederland-2026",
    priority: "A",
  },
  {
    keyword: "beste iptv abonnement nederland",
    path: "/blog/beste-iptv-nederland-2026",
    priority: "A",
    note: "Commercial compare; buy still closes on /prijzen",
  },
  {
    keyword: "betrouwbare iptv nederland",
    path: "/blog/beste-iptv-nederland-2026",
    priority: "B",
  },
  {
    keyword: "iptv nederland afsluiten",
    path: "/prijzen",
    priority: "A",
  },
  {
    keyword: "catch up iptv nederland",
    path: "/veelgestelde-vragen",
    priority: "B",
    note: "FAQ until dedicated post exists",
  },
  {
    keyword: "iptv vs netflix nederland",
    path: "/veelgestelde-vragen",
    priority: "B",
  },
  { keyword: "iptv 4k nederland", path: "/blog/iptv-4k-nederland", priority: "A" },
  { keyword: "iptv nederland 4k", path: "/blog/iptv-4k-nederland", priority: "A" },
  { keyword: "iptv speler nederland", path: "/blog/beste-app-iptv-nederland", priority: "A" },
  { keyword: "beste iptv app nederland", path: "/blog/beste-app-iptv-nederland", priority: "A" },
  { keyword: "iptv box nederland", path: "/blog/iptv-box-nederland", priority: "A" },
  // Priority B
  { keyword: "espn iptv nederland", path: "/blog/iptv-sport-nederland", priority: "B" },
  { keyword: "espn iptv", path: "/blog/iptv-sport-nederland", priority: "B" },
  { keyword: "iptv dazn nederland", path: "/blog/iptv-sport-nederland", priority: "B" },
  { keyword: "iptv sport nederland", path: "/blog/iptv-sport-nederland", priority: "B" },
  { keyword: "iptv zenders nederland", path: "/kanalen", priority: "B" },
  { keyword: "eredivisie iptv", path: "/blog/iptv-eredivisie-nederland", priority: "B", note: "long-tail cluster" },
  // Priority C
  { keyword: "is iptv legaal in nederland", path: "/blog/iptv-legaal-nederland", priority: "C" },
  { keyword: "iptv nederland legaal", path: "/blog/iptv-legaal-nederland", priority: "C" },
  { keyword: "legale iptv nederland", path: "/blog/iptv-legaal-nederland", priority: "C" },
  { keyword: "iptv kodi nederland", path: "/blog/beste-app-iptv-nederland", priority: "A", note: "careful — no pirate addons" },
  { keyword: "iptv aanbieder nederland", path: "/prijzen", priority: "A" },
  { keyword: "iptv kopen nederland", path: "/prijzen", priority: "A" },
  { keyword: "zenders iptv nederland", path: "/kanalen", priority: "B" },
  { keyword: "iptv eurosport nederland", path: "/blog/iptv-sport-nederland", priority: "B" },
  { keyword: "goedkope iptv nederland", path: "/blog/goedkope-iptv-nederland", priority: "A" },
  { keyword: "beste iptv service nederland", path: "/blog/beste-iptv-nederland-2026", priority: "A" },
  { keyword: "iptv vs betaalde tv nederland", path: "/blog/iptv-vs-betaalde-tv-nederland", priority: "A" },
  { keyword: "nederlandse tv in het buitenland kijken", path: "/blog/nederlandse-tv-in-het-buitenland", priority: "A" },
  { keyword: "iptv nederland frankrijk", path: "/blog/iptv-nederland-in-frankrijk", priority: "B" },
  { keyword: "iptv nederland zwitserland", path: "/blog/iptv-nederland-in-zwitserland", priority: "B" },
  { keyword: "wk 2026 iptv", path: "/blog/wk-2026-iptv-nederland", priority: "A" },
  { keyword: "iptv meerdere apparaten", path: "/blog/iptv-meerdere-apparaten-nederland", priority: "A" },
  { keyword: "iptv nederland whatsapp", path: "/iptv-nederland-whatsapp", priority: "A" },
  { keyword: "iptv wederverkoper nederland", path: "/wederverkopers", priority: "A" },
  { keyword: "iptv wederverkopers nederland", path: "/wederverkopers", priority: "A" },
  { keyword: "iptv panel nederland", path: "/wederverkopers", priority: "B", note: "B2B reseller intent" },
  { keyword: "iptv credits nederland", path: "/wederverkopers", priority: "B" },
  { keyword: "m3u xtream omzetter", path: "/m3u-xtream-omzetter", priority: "A" },
  { keyword: "iptv account checker", path: "/iptv-account-checker", priority: "A" },
  { keyword: "m3u lijst bijwerken", path: "/m3u-lijst-bijwerken", priority: "B" },
  { keyword: "iptv ontbrekende zenders", path: "/blog/iptv-ontbrekende-zenders", priority: "A" },
  { keyword: "epg laadt niet", path: "/blog/epg-laadt-niet", priority: "B" },
  { keyword: "internet voor iptv", path: "/blog/internet-voor-iptv", priority: "B" },
  { keyword: "voetbal kijken iptv nederland", path: "/blog/voetbal-kijken-iptv-nederland", priority: "B" },
  { keyword: "tivimate nederland", path: "/blog/tivimate-nederland", priority: "B" },
  { keyword: "xtream codes nederland", path: "/blog/xtream-codes-nederland", priority: "B" },
  { keyword: "iptv gids nederland", path: "/blog/iptv-nederland-gids", priority: "B" },
  { keyword: "vpn iptv nederland", path: "/blog/vpn-iptv-nederland", priority: "C", note: "careful — no VPN upsell required" },
  { keyword: "voordelen iptv nederland", path: "/blog/voordelen-iptv-nederland", priority: "B" },
  { keyword: "iptv woordenlijst", path: "/blog/woordenlijst-iptv-nederland", priority: "C" },
  { keyword: "iptv nederland", path: "/", priority: "C", note: "head term — only after long-tail foothold" },
  { keyword: "iptv in nederland", path: "/", priority: "C" },
  { keyword: "nederland iptv", path: "/", priority: "C" },
  // Avoid as primary money / doorway targets
  { keyword: "iptv nederland gratis", path: "/blog/proef-iptv-nederland", priority: "avoid", note: "explain trial ≠ gratis forever" },
];

/** Paths that must stay out of sitemap / indexing. */
export const neverIndexPaths = ["/checkout", "/bedankt", "/betaling-usd", "/api"] as const;

/** Seasonal content owners (human refresh cadence). */
export const seasonalRefreshOwners = [
  {
    path: "/kanalen",
    cadence: "each Eredivisie / Champions season start",
    focus: "ESPN, Eredivisie, DAZN, Eurosport availability notes",
  },
  {
    path: "/blog/iptv-sport-nederland",
    cadence: "seasonal",
    focus: "rights / catalog wording",
  },
  {
    path: "/blog/iptv-eredivisie-nederland",
    cadence: "seasonal",
    focus: "club / speelronde copy",
  },
  {
    path: "/blog/beste-iptv-nederland-2026",
    cadence: "quarterly",
    focus: "year label, checklist, CTAs",
  },
] as const;
