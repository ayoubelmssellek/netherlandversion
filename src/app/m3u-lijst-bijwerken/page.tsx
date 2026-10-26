import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQ from "@/components/FAQ";
import JsonLd from "@/components/JsonLd";
import RelatedContent from "@/components/RelatedContent";
import { buildMetadata, faqJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "M3U-lijst bijwerken — IPTV Nederland",
  description:
    "Zo werk je de M3U-lijst bij of stap je over op Xtream bij BesteIPTVNederland: herladen in de speler, verlengen en wanneer je support om nieuwe toegang vraagt.",
  path: "/m3u-lijst-bijwerken",
});

const linkClass = "text-white underline-offset-4 hover:underline";

const pageFaqs = [
  {
    q: "Hoe werk ik de M3U-lijst bij in de speler?",
    a: "Instellingen → Afspeellijst → Bijwerken / Herladen en start de app opnieuw. Gebruik je Xtream, herlaad dan het account — zie [Xtream Codes](/blog/xtream-codes-nederland).",
  },
  {
    q: "Stuurt BesteIPTVNederland een openbare M3U?",
    a: "Nee. Het hoofdmodel is Xtream na [Prijzen](/prijzen). Anonieme lijsten: [juridische risico's](/blog/iptv-legaal-nederland).",
  },
];

export default function M3uLijstBijwerkenPage() {
  return (
    <>
      <JsonLd data={faqJsonLd(pageFaqs)} />
      <div className="section-shell py-16 md:py-24">
        <Breadcrumbs
          items={[
            { name: "Home", path: "/" },
            { name: "M3U-lijst bijwerken", path: "/m3u-lijst-bijwerken" },
          ]}
        />
        <p className="label">Tool · IPTV Nederland</p>
        <h1 className="mt-4 max-w-3xl text-[40px] tracking-[-1.2px] text-white md:text-[48px]">
          M3U-lijst bijwerken — of overstappen op Xtream
        </h1>
        <p className="mt-4 max-w-2xl text-[16px] leading-[1.55] text-slate">
          «M3U-lijst bijwerken» betekent meestal de zenderlijst herladen of nieuwe toegang krijgen na een verlenging.
          Bij BesteIPTVNederland is Xtream de stabiele route — geen URL's van forums. De formaten staan uitgelegd in de{" "}
          <Link href="/m3u-xtream-omzetter" className={linkClass}>
            omzetter M3U ↔ Xtream
          </Link>{" "}
          en in{" "}
          <Link href="/blog/wat-is-m3u" className={linkClass}>
            wat is M3U
          </Link>
          .
        </p>

        <section className="mt-12 max-w-3xl space-y-4 text-[15px] leading-7 text-slate">
          <h2 className="text-[24px] text-white">Herladen in de speler</h2>
          <ol className="list-decimal space-y-2 pl-5">
            <li>Open de speler op het hoofdscherm.</li>
            <li>Werk de lijst / het account bij.</li>
            <li>
              Leeg de cache als de EPG faalt —{" "}
              <Link href="/blog/epg-laadt-niet" className={linkClass}>
                EPG laadt niet
              </Link>
              .
            </li>
            <li>
              Is het account verlopen:{" "}
              <Link href="/verlengen" className={linkClass}>
                Verlengen
              </Link>{" "}
              of check de status in de{" "}
              <Link href="/iptv-account-checker" className={linkClass}>
                accountchecker
              </Link>
              .
            </li>
          </ol>
        </section>

        <section className="mt-12 max-w-3xl space-y-4 text-[15px] leading-7 text-slate">
          <h2 className="text-[24px] text-white">Ander apparaat?</h2>
          <p>
            Installeer met de gids op{" "}
            <Link href="/installatiegidsen" className={linkClass}>
              Installatie
            </Link>{" "}
            of het overzicht van{" "}
            <Link href="/applicaties" className={linkClass}>
              apps
            </Link>
            , met dezelfde gegevens. Zenders die ontbreken na een andere tv:{" "}
            <Link href="/blog/iptv-ontbrekende-zenders" className={linkClass}>
              checklist
            </Link>
            . Hulp:{" "}
            <Link href="/iptv-nederland-whatsapp" className={linkClass}>
              WhatsApp
            </Link>
            .
          </p>
        </section>

        <section className="mt-12 max-w-3xl space-y-4 text-[15px] leading-7 text-slate">
          <h2 className="text-[24px] text-white">Vermijd anonieme «bijgewerkte lijsten»</h2>
          <p>
            URL's van forums wisselen en vallen uit midden in de wedstrijd. Lees{" "}
            <Link href="/blog/iptv-legaal-nederland" className={linkClass}>
              IPTV legaal / risico's
            </Link>
            . Publieke uitleg over intellectueel eigendom in Nederland:{" "}
            <a
              href="https://www.rijksoverheid.nl/onderwerpen/intellectueel-eigendom"
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              Rijksoverheid
            </a>
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
            { href: "/iptv-account-checker", label: "Accountstatus checken", description: "Einddatum en symptomen." },
            { href: "/m3u-xtream-omzetter", label: "Omzetter M3U ↔ Xtream", description: "Formaten." },
            { href: "/blog/iptv-ontbrekende-zenders", label: "Ontbrekende zenders", description: "Diagnose en oplossing." },
            { href: "/prijzen", label: "Kopen / abonnement wijzigen", description: "Nieuwe looptijd of verbindingen." },
            { href: "/verlengen", label: "Verlengen", description: "Bestaande klanten." },
            { href: "/veelgestelde-vragen", label: "Veelgestelde vragen", description: "Algemene support." },
          ]}
        />
      </div>
    </>
  );
}
