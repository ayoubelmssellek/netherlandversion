import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQ from "@/components/FAQ";
import JsonLd from "@/components/JsonLd";
import RelatedContent from "@/components/RelatedContent";
import { buildMetadata, faqJsonLd } from "@/lib/seo";
import M3uXtreamExplainer from "@/components/tools/M3uXtreamExplainer";

export const metadata: Metadata = buildMetadata({
  title: "Omzetter M3U ↔ Xtream — IPTV Nederland",
  description:
    "M3U versus Xtream Codes bij IPTV Nederland: wat elk formaat is, wanneer je het gebruikt en hoe BesteIPTVNederland Xtream-toegang levert — zonder gratis M3U-lijsten.",
  path: "/m3u-xtream-omzetter",
});

const linkClass = "text-white underline-offset-4 hover:underline";

const pageFaqs = [
  {
    q: "Wat is M3U bij IPTV?",
    a: "M3U (of M3U8) is een afspeellijstbestand of -URL met regels die naar streams wijzen. Meer uitleg: [wat is M3U](/blog/wat-is-m3u). Technische achtergrond: [Wikipedia — M3U](https://nl.wikipedia.org/wiki/M3U).",
  },
  {
    q: "Wat zijn Xtream Codes?",
    a: "Drie velden: server-URL, gebruikersnaam en wachtwoord. Gids: [Xtream Codes Nederland](/blog/xtream-codes-nederland). Inloggen in de speler: [IPTV Smarters Pro](/blog/iptv-smarters-pro-nederland).",
  },
  {
    q: "Geeft deze omzetter gratis IPTV-lijsten?",
    a: "Nee. We leggen de formaten van jouw lijst uit. We publiceren geen lijsten. Risico's: [IPTV legaal / lijsten](/blog/iptv-legaal-nederland).",
  },
  {
    q: "Hoe krijg ik Xtream bij BesteIPTVNederland?",
    a: "Na betaling op [Prijzen](/prijzen) ontvang je de gegevens per e-mail. Installeer met de gids op [Installatie](/installatiegidsen).",
  },
];

export default function M3uXtreamPage() {
  return (
    <>
      <JsonLd data={faqJsonLd(pageFaqs)} />
      <div className="section-shell py-16 md:py-24">
        <Breadcrumbs
          items={[
            { name: "Home", path: "/" },
            { name: "Omzetter M3U ↔ Xtream", path: "/m3u-xtream-omzetter" },
          ]}
        />
        <p className="label">Tool · IPTV Nederland</p>
        <h1 className="mt-4 max-w-3xl text-[40px] tracking-[-1.2px] text-white md:text-[48px]">
          Omzetter M3U ↔ Xtream — begrijp de formaten
        </h1>
        <p className="mt-4 max-w-2xl text-[16px] leading-[1.55] text-slate">
          Wie zoekt op «M3U Xtream omzetter» wil de speler zonder fouten koppelen. Hier leggen we het verschil uit, met
          een eenvoudige lezer voor <strong className="text-white">jouw</strong> lijst — geen verzameling gratis lijsten.
          Lees ook{" "}
          <Link href="/blog/wat-is-m3u" className={linkClass}>
            wat is M3U
          </Link>{" "}
          en{" "}
          <Link href="/blog/xtream-codes-nederland" className={linkClass}>
            Xtream Codes
          </Link>
          .
        </p>

        <section className="mt-12 max-w-3xl space-y-4 text-[15px] leading-7 text-slate">
          <h2 className="text-[24px] text-white">M3U versus Xtream Codes</h2>
          <p>
            <strong className="text-white">M3U:</strong> een URL of bestand met zenderregels. Het formaat staat
            beschreven op{" "}
            <a href="https://nl.wikipedia.org/wiki/M3U" target="_blank" rel="noopener noreferrer" className={linkClass}>
              Wikipedia (M3U)
            </a>
            . Handig als support je een privé-HTTPS-link stuurt.
          </p>
          <p>
            <strong className="text-white">Xtream:</strong> toegang met drie velden. Dat is de standaard bij
            BesteIPTVNederland — tutorial{" "}
            <Link href="/blog/iptv-smarters-pro-nederland" className={linkClass}>
              IPTV Smarters Pro
            </Link>{" "}
            en{" "}
            <Link href="/blog/xtream-codes-nederland" className={linkClass}>
              Xtream Codes Nederland
            </Link>
            .
          </p>
          <p>
            Risico's van openbare lijsten:{" "}
            <Link href="/blog/iptv-legaal-nederland" className={linkClass}>
              IPTV-lijst / legaliteit
            </Link>
            . Voor intellectueel eigendom in Nederland:{" "}
            <a
              href="https://www.rijksoverheid.nl/onderwerpen/intellectueel-eigendom"
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              Rijksoverheid (intellectueel eigendom)
            </a>
            .
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-[24px] text-white">Educatieve lezer (plak je eigen lijst)</h2>
          <p className="mt-3 max-w-2xl text-[15px] text-slate">
            Plak M3U-regels die al van jou zijn (bijvoorbeeld een export uit de speler). De tool telt de regels en laat
            zien of het op een lijst lijkt — alles in je browser, niets gaat naar onze server. Daarna:{" "}
            <Link href="/m3u-lijst-bijwerken" className={linkClass}>
              M3U-lijst bijwerken
            </Link>
            .
          </p>
          <div className="mt-6">
            <M3uXtreamExplainer />
          </div>
        </section>

        <section className="mt-14 max-w-3xl space-y-4 text-[15px] leading-7 text-slate">
          <h2 className="text-[24px] text-white">Hoe BesteIPTVNederland toegang levert</h2>
          <ol className="list-decimal space-y-2 pl-5">
            <li>
              Kies een abonnement op{" "}
              <Link href="/prijzen" className={linkClass}>
                Prijzen
              </Link>{" "}
              (of het{" "}
              <Link href="/pack-kwartaal" className={linkClass}>
                Pakket Kwartaal
              </Link>
              ).
            </li>
            <li>Je ontvangt de Xtream-gegevens per e-mail na betaling.</li>
            <li>
              Installeer met de gids op{" "}
              <Link href="/installatiegidsen" className={linkClass}>
                Installatie
              </Link>{" "}
              of het overzicht van{" "}
              <Link href="/applicaties" className={linkClass}>
                apps
              </Link>
              .
            </li>
            <li>
              Werkt het account later niet:{" "}
              <Link href="/iptv-account-checker" className={linkClass}>
                account controleren
              </Link>{" "}
              of{" "}
              <Link href="/iptv-nederland-whatsapp" className={linkClass}>
                WhatsApp
              </Link>
              .
            </li>
          </ol>
        </section>

        <section className="mt-14">
          <h2 className="mb-6 text-[24px] text-white">Veelgestelde vragen</h2>
          <FAQ items={pageFaqs} />
        </section>

        <RelatedContent
          title="Verder"
          links={[
            { href: "/prijzen", label: "IPTV Nederland kopen", description: "Abonnementen en betaling." },
            { href: "/iptv-account-checker", label: "Account / einddatum checken", description: "Status van het abonnement." },
            { href: "/blog/wat-is-m3u", label: "Wat is M3U", description: "Uitleg van het formaat." },
            { href: "/m3u-lijst-bijwerken", label: "M3U-lijst bijwerken", description: "Herladen en verlengen." },
            { href: "/blog/xtream-codes-nederland", label: "Xtream Codes", description: "De 3 velden." },
            { href: "/veelgestelde-vragen", label: "Veelgestelde vragen IPTV Nederland", description: "Algemene vragen." },
          ]}
        />
      </div>
    </>
  );
}
