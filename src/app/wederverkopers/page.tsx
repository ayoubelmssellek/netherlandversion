import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQ from "@/components/FAQ";
import JsonLd from "@/components/JsonLd";
import RelatedContent from "@/components/RelatedContent";
import { site } from "@/data/content";
import { buildMetadata, faqJsonLd } from "@/lib/seo";
import { getWhatsAppIntl } from "@/lib/whatsapp";

export const metadata: Metadata = buildMetadata({
  title: "Wederverkoper IPTV Nederland — panel en credits",
  description:
    "Word wederverkoper van IPTV in Nederland met BesteIPTVNederland: credits, activatie voor je klanten en Nederlandstalige support. Vraag de voorwaarden aan via WhatsApp.",
  path: "/wederverkopers",
});

const linkClass = "text-white underline-offset-4 hover:underline";

const pageFaqs = [
  {
    q: "Wat betekent wederverkoper van IPTV in Nederland?",
    a: "Het is een B2B-model: credits of lijnen om eindklanten te activeren, met marge voor jou. Dat is iets anders dan het huishoudabonnement op [Prijzen](/prijzen).",
  },
  {
    q: "Staan de wederverkoopprijzen op de site?",
    a: "Die geven we op aanvraag, afhankelijk van volume en type lijnen. App ons via [WhatsApp](/iptv-nederland-whatsapp) of mail je regio in Nederland en een schatting van het volume.",
  },
  {
    q: "Mag ik het abonnement dat ik op Prijzen kocht doorverkopen?",
    a: "Nee. Abonnementen op [Prijzen](/prijzen) zijn voor thuisgebruik. Wederverkoop loopt via dit programma. Zie ook de [Voorwaarden](/voorwaarden).",
  },
  {
    q: "Is er support voor mijn klanten?",
    a: "We helpen je met de technische activatie. Jij bent het commerciële contact. Handige gidsen voor je klanten: [Apps](/applicaties) en [Installatie](/installatiegidsen).",
  },
];

export default function WederverkopersPage() {
  const wa = `https://wa.me/${getWhatsAppIntl()}?text=${encodeURIComponent(
    [
      "Hoi BesteIPTVNederland — ik wil informatie over WEDERVERKOPER IPTV Nederland.",
      "",
      "• Regio / plaats:",
      "• Geschat volume (klanten/maand):",
      "• Heb ik al ervaring met wederverkoop? (ja/nee)",
    ].join("\n"),
  )}`;

  return (
    <>
      <JsonLd data={faqJsonLd(pageFaqs)} />
      <div className="section-shell py-16 md:py-24">
        <Breadcrumbs
          items={[
            { name: "Home", path: "/" },
            { name: "Wederverkopers", path: "/wederverkopers" },
          ]}
        />
        <p className="label">B2B · IPTV Nederland</p>
        <h1 className="mt-4 max-w-3xl text-[40px] tracking-[-1.2px] text-white md:text-[48px]">
          Wederverkoper IPTV Nederland — BesteIPTVNederland
        </h1>
        <p className="mt-4 max-w-2xl text-[16px] leading-[1.55] text-slate">
          Programma voor wie IPTV in Nederland wil doorverkopen: credits, activatie en steun in het Nederlands. We zijn
          geen portal met gratis M3U-lijsten (
          <Link href="/blog/iptv-legaal-nederland" className={linkClass}>
            risico's van lijsten
          </Link>
          ). Ben je eindklant? Ga naar{" "}
          <Link href="/prijzen" className={linkClass}>
            Prijzen
          </Link>
          .
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <a href={wa} className="btn btn-solid" target="_blank" rel="noopener noreferrer">
            Voorwaarden aanvragen via WhatsApp
          </a>
          <a
            href={`mailto:${site.email}?subject=${encodeURIComponent("Wederverkoper IPTV Nederland")}`}
            className="btn btn-ghost"
          >
            E-mail {site.email}
          </a>
          <Link href="/prijzen" className="btn btn-ghost">
            Ik ben eindklant — bekijk prijzen
          </Link>
          <Link href="/iptv-nederland-whatsapp" className="btn btn-ghost">
            WhatsApp-pagina
          </Link>
        </div>

        <section className="mt-14 max-w-3xl space-y-4 text-[15px] leading-7 text-slate">
          <h2 className="text-[24px] text-white">Voor wie het is</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Winkels en technici die smart-tv's en Fire Sticks installeren — zie{" "}
              <Link href="/applicaties" className={linkClass}>
                apps
              </Link>{" "}
              en{" "}
              <Link href="/installatiegidsen" className={linkClass}>
                gidsen
              </Link>
            </li>
            <li>Wederverkopers die credits willen met Nederlandstalige support</li>
            <li>Wie stabiele activatie wil, niet de «lijst van de dag»</li>
          </ul>
        </section>

        <section className="mt-12 max-w-3xl space-y-4 text-[15px] leading-7 text-slate">
          <h2 className="text-[24px] text-white">Wat we bij het eerste contact vragen</h2>
          <ol className="list-decimal space-y-2 pl-5">
            <li>
              Regio in Nederland (of Nederlanders in het buitenland die Nederlandse tv willen — gids:{" "}
              <Link href="/blog/nederlandse-tv-in-het-buitenland" className={linkClass}>
                Nederlandse tv in het buitenland
              </Link>
              )
            </li>
            <li>Geschat aantal activaties per maand</li>
            <li>Of je al een panel of credits bij een andere aanbieder gebruikt</li>
            <li>Apparaten die je het vaakst installeert (Stick, Samsung, LG…)</li>
          </ol>
          <p>
            Daarmee sturen we de voorwaarden. Eindklanten:{" "}
            <Link href="/prijzen" className={linkClass}>
              Prijzen
            </Link>
            ,{" "}
            <Link href="/veelgestelde-vragen" className={linkClass}>
              FAQ
            </Link>{" "}
            en{" "}
            <Link href="/kanalen" className={linkClass}>
              Zenders
            </Link>
            .
          </p>
        </section>

        <section className="mt-12 max-w-3xl space-y-4 text-[15px] leading-7 text-slate">
          <h2 className="text-[24px] text-white">Wederverkoop versus huishoudabonnement</h2>
          <p>
            <strong className="text-white">Abonnement op Prijzen:</strong> één huis, 1–3 verbindingen — zie ook het{" "}
            <Link href="/pack-familie" className={linkClass}>
              Pakket Familie
            </Link>
            .
          </p>
          <p>
            <strong className="text-white">Wederverkoper:</strong> credits voor meerdere klanten, met marge voor jou.
            Een huishoudtoegang delen is geen wederverkoop en botst met de{" "}
            <Link href="/voorwaarden" className={linkClass}>
              Voorwaarden
            </Link>{" "}
            en het{" "}
            <Link href="/retourbeleid" className={linkClass}>
              Retourbeleid
            </Link>
            . Achtergrond:{" "}
            <Link href="/over-ons" className={linkClass}>
              Over ons
            </Link>
            .
          </p>
        </section>

        <section className="mt-14">
          <h2 className="mb-6 text-[24px] text-white">Vragen van wederverkopers</h2>
          <FAQ items={pageFaqs} />
        </section>

        <div className="mt-14 flex flex-col justify-between gap-6 border border-line bg-surface px-6 py-8 md:flex-row md:items-center md:px-10">
          <div>
            <h2 className="text-[24px] text-white md:text-[28px]">Klaar om te verkopen?</h2>
            <p className="mt-2 max-w-xl text-[14px] text-slate">
              App ons met «wederverkoper» in het bericht, of gebruik de pagina{" "}
              <Link href="/iptv-nederland-whatsapp" className={linkClass}>
                IPTV Nederland WhatsApp
              </Link>
              .
            </p>
          </div>
          <a href={wa} className="btn btn-solid shrink-0" target="_blank" rel="noopener noreferrer">
            WhatsApp openen
          </a>
        </div>

        <RelatedContent
          title="Ook handig"
          links={[
            { href: "/iptv-nederland-whatsapp", label: "WhatsApp IPTV Nederland", description: "Algemeen contact." },
            { href: "/applicaties", label: "Apps en apparaten", description: "Wat klanten installeren." },
            { href: "/installatiegidsen", label: "Installatiegidsen", description: "Stap voor stap." },
            { href: "/over-ons", label: "Over BesteIPTVNederland", description: "Hoe we werken." },
            { href: "/prijzen", label: "Prijzen eindklant", description: "Dit is geen B2B-tarief." },
            { href: "/veelgestelde-vragen", label: "FAQ", description: "Algemene vragen." },
          ]}
        />
      </div>
    </>
  );
}
