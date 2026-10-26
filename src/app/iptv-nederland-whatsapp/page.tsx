import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQ from "@/components/FAQ";
import JsonLd from "@/components/JsonLd";
import RelatedContent from "@/components/RelatedContent";
import { buildMetadata, faqJsonLd } from "@/lib/seo";
import { getWhatsAppIntl } from "@/lib/whatsapp";

export const metadata: Metadata = buildMetadata({
  title: "IPTV Nederland WhatsApp — support BesteIPTVNederland",
  description:
    "Neem contact op met BesteIPTVNederland via WhatsApp: proef van 24 uur, abonnementen, installatie en verlengen. Support voor IPTV Nederland in het Nederlands.",
  path: "/iptv-nederland-whatsapp",
});

const linkClass = "text-white underline-offset-4 hover:underline";

const pageFaqs = [
  {
    q: "Vervangt WhatsApp een aankoop op de site?",
    a: "Nee. De openbare abonnementen staan op [Prijzen](/prijzen). WhatsApp is voor de proef, de installatie en het verlengen — niet voor gratis M3U-lijsten ([risico's](/blog/iptv-legaal-nederland)).",
  },
  {
    q: "Wat zet ik in het eerste bericht?",
    a: "Je doel (proef van 24 uur, toegang, verlengen), je apparaat en het e-mailadres van de aankoop als je al klant bent. Gids van de proef: [proef IPTV Nederland](/blog/proef-iptv-nederland).",
  },
  {
    q: "Ik ben wederverkoper — is dit hetzelfde WhatsApp-nummer?",
    a: "Ja, zet «wederverkoper» in je bericht. Pagina van het programma: [Wederverkopers](/wederverkopers).",
  },
];

export default function IptvNederlandWhatsappPage() {
  const wa = `https://wa.me/${getWhatsAppIntl()}?text=${encodeURIComponent(
    "Hoi BesteIPTVNederland — ik heb hulp nodig (proef / installatie / verlengen).",
  )}`;

  return (
    <>
      <JsonLd data={faqJsonLd(pageFaqs)} />
      <div className="section-shell py-16 md:py-24">
        <Breadcrumbs
          items={[
            { name: "Home", path: "/" },
            { name: "WhatsApp IPTV Nederland", path: "/iptv-nederland-whatsapp" },
          ]}
        />
        <p className="label">Contact · IPTV Nederland</p>
        <h1 className="mt-4 max-w-3xl text-[40px] tracking-[-1.2px] text-white md:text-[48px]">
          IPTV Nederland WhatsApp — praat met BesteIPTVNederland
        </h1>
        <p className="mt-4 max-w-2xl text-[16px] leading-[1.55] text-slate">
          Nederlandstalige support voor de{" "}
          <Link href="/blog/proef-iptv-nederland" className={linkClass}>
            proef van 24 uur
          </Link>
          , de installatie, de abonnementen en het verlengen. We sturen geen gratis lijsten — lees de{" "}
          <Link href="/blog/iptv-legaal-nederland" className={linkClass}>
            risico's van lijsten
          </Link>
          .
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <a href={wa} className="btn btn-solid" target="_blank" rel="noopener noreferrer">
            WhatsApp openen
          </a>
          <Link href="/prijzen" className="btn btn-ghost">
            Bekijk abonnementen
          </Link>
          <Link href="/blog/proef-iptv-nederland" className="btn btn-ghost">
            Zo vraag je de proef aan
          </Link>
          <Link href="/wederverkopers" className="btn btn-ghost">
            Wederverkopers
          </Link>
        </div>

        <section className="mt-14 max-w-3xl space-y-4 text-[15px] leading-7 text-slate">
          <h2 className="text-[24px] text-white">Wanneer je WhatsApp gebruikt</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              De{" "}
              <Link href="/blog/proef-iptv-nederland" className={linkClass}>
                proef van 24 uur
              </Link>{" "}
              aanvragen voordat je betaalt
            </li>
            <li>
              Hulp bij de eerste login met{" "}
              <Link href="/blog/xtream-codes-nederland" className={linkClass}>
                Xtream
              </Link>
            </li>
            <li>
              Verbindingen checken —{" "}
              <Link href="/blog/iptv-meerdere-apparaten-nederland" className={linkClass}>
                meerdere apparaten
              </Link>
            </li>
            <li>
              Verlengen via{" "}
              <Link href="/verlengen" className={linkClass}>
                /verlengen
              </Link>{" "}
              of{" "}
              <Link href="/iptv-account-checker" className={linkClass}>
                account controleren
              </Link>
            </li>
          </ul>
          <p>
            Lees je liever eerst?{" "}
            <Link href="/veelgestelde-vragen" className={linkClass}>
              Veelgestelde vragen IPTV Nederland
            </Link>
            ,{" "}
            <Link href="/installatiegidsen" className={linkClass}>
              installatiegidsen
            </Link>{" "}
            en{" "}
            <Link href="/applicaties" className={linkClass}>
              apps
            </Link>
            .
          </p>
        </section>

        <section className="mt-14">
          <h2 className="mb-6 text-[24px] text-white">Veelgestelde vragen</h2>
          <FAQ items={pageFaqs} />
        </section>

        <RelatedContent
          title="Verder"
          links={[
            { href: "/prijzen", label: "IPTV Nederland kopen", description: "Abonnementen en betaling." },
            { href: "/blog/proef-iptv-nederland", label: "Proef IPTV Nederland", description: "Wat je in 24 uur checkt." },
            { href: "/iptv-account-checker", label: "Status van je account", description: "Einddatum en verlengen." },
            { href: "/wederverkopers", label: "Wederverkopers", description: "B2B-programma." },
            { href: "/over-ons", label: "Over ons", description: "Hoe we werken." },
            { href: "/veelgestelde-vragen", label: "Veelgestelde vragen", description: "Korte antwoorden." },
          ]}
        />
      </div>
    </>
  );
}
