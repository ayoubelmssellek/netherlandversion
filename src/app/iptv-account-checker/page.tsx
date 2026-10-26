import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQ from "@/components/FAQ";
import JsonLd from "@/components/JsonLd";
import RelatedContent from "@/components/RelatedContent";
import { buildMetadata, faqJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "IPTV-account checker — geldigheid en status",
  description:
    "Zo check je of je IPTV-account in Nederland nog actief is: einddatum in de speler, verlengen en contact met de support van BesteIPTVNederland.",
  path: "/iptv-account-checker",
});

const linkClass = "text-white underline-offset-4 hover:underline";

const pageFaqs = [
  {
    q: "Hoe weet ik of mijn IPTV-account is verlopen?",
    a: "Open in de speler (bijvoorbeeld Smarters) het onderdeel account / abonnement. Is de zenderlijst leeg, [verleng](/verlengen) of neem contact op via [WhatsApp](/iptv-nederland-whatsapp).",
  },
  {
    q: "Waarom is er geen automatische checker die om je wachtwoord vraagt?",
    a: "Uit veiligheid: we vragen je Xtream-wachtwoord niet in een openbaar formulier. Je checkt de status in de speler of met support. Toegang: [Xtream Codes](/blog/xtream-codes-nederland).",
  },
  {
    q: "Wat als het account actief is maar zenders niet openen?",
    a: "Werk de lijst bij ([M3U-lijst bijwerken](/m3u-lijst-bijwerken)), lees [ontbrekende zenders](/blog/iptv-ontbrekende-zenders) en [EPG laadt niet](/blog/epg-laadt-niet).",
  },
];

export default function AccountCheckerPage() {
  return (
    <>
      <JsonLd data={faqJsonLd(pageFaqs)} />
      <div className="section-shell py-16 md:py-24">
        <Breadcrumbs
          items={[
            { name: "Home", path: "/" },
            { name: "Accountchecker", path: "/iptv-account-checker" },
          ]}
        />
        <p className="label">Tool · IPTV Nederland</p>
        <h1 className="mt-4 max-w-3xl text-[40px] tracking-[-1.2px] text-white md:text-[48px]">
          IPTV-account checker — zo bevestig je de status
        </h1>
        <p className="mt-4 max-w-2xl text-[16px] leading-[1.55] text-slate">
          Wie zoekt op «IPTV account checker» wil de einddatum weten zonder risico. Dit is de veilige manier voor
          klanten van BesteIPTVNederland — zonder je wachtwoord op een openbare site in te vullen. Nog geen klant?
          Vergelijk{" "}
          <Link href="/prijzen" className={linkClass}>
            Prijzen
          </Link>{" "}
          of vraag de{" "}
          <Link href="/blog/proef-iptv-nederland" className={linkClass}>
            proef van 24 uur
          </Link>{" "}
          aan.
        </p>

        <section className="mt-12 max-w-3xl space-y-4 text-[15px] leading-7 text-slate">
          <h2 className="text-[24px] text-white">1) In de speler (het snelst)</h2>
          <ol className="list-decimal space-y-2 pl-5">
            <li>Open IPTV Smarters (of je eigen speler) op het hoofdapparaat.</li>
            <li>Ga naar instellingen / account / abonnement.</li>
            <li>Check de einddatum en of de toegang nog reageert.</li>
          </ol>
          <p>
            Toegang:{" "}
            <Link href="/blog/iptv-smarters-pro-nederland" className={linkClass}>
              gids Smarters / Xtream
            </Link>{" "}
            · velden:{" "}
            <Link href="/blog/xtream-codes-nederland" className={linkClass}>
              Xtream Codes Nederland
            </Link>
            . Apps:{" "}
            <Link href="/applicaties" className={linkClass}>
              applicaties
            </Link>
            .
          </p>
        </section>

        <section className="mt-12 max-w-3xl space-y-4 text-[15px] leading-7 text-slate">
          <h2 className="text-[24px] text-white">2) Verleng als de datum dichtbij is</h2>
          <p>
            Gebruik{" "}
            <Link href="/verlengen" className={linkClass}>
              Abonnement verlengen
            </Link>{" "}
            met het e-mailadres van de aankoop of je Xtream-gebruikersnaam. Zo valt het beeld niet weg in de rust van de
            wedstrijd. Alternatief:{" "}
            <Link href="/m3u-lijst-bijwerken" className={linkClass}>
              lijst bijwerken / toegang overzetten
            </Link>
            .
          </p>
        </section>

        <section className="mt-12 max-w-3xl space-y-4 text-[15px] leading-7 text-slate">
          <h2 className="text-[24px] text-white">3) Account actief, maar de zenderlijst klopt niet</h2>
          <p>
            Volg{" "}
            <Link href="/blog/iptv-ontbrekende-zenders" className={linkClass}>
              ontbrekende zenders
            </Link>
            ,{" "}
            <Link href="/blog/epg-laadt-niet" className={linkClass}>
              EPG laadt niet
            </Link>{" "}
            en{" "}
            <Link href="/blog/iptv-werkt-niet-buffering-nederland" className={linkClass}>
              buffering
            </Link>
            . Check je verwachtingen op{" "}
            <Link href="/kanalen" className={linkClass}>
              Zenders
            </Link>
            . Support:{" "}
            <Link href="/iptv-nederland-whatsapp" className={linkClass}>
              WhatsApp
            </Link>{" "}
            of de{" "}
            <Link href="/veelgestelde-vragen" className={linkClass}>
              veelgestelde vragen
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
            { href: "/verlengen", label: "Nu verlengen", description: "Bestaand account verlengen." },
            { href: "/m3u-lijst-bijwerken", label: "Lijst bijwerken / overzetten", description: "Speler of URL." },
            {
              href: "/veelgestelde-vragen",
              label: "Veelgestelde vragen IPTV Nederland",
              description: "Toegang, proef en support.",
            },
            { href: "/iptv-nederland-whatsapp", label: "WhatsApp BesteIPTVNederland", description: "Praat met support." },
            { href: "/m3u-xtream-omzetter", label: "M3U ↔ Xtream", description: "De formaten begrijpen." },
            { href: "/prijzen", label: "Prijzen", description: "Nieuwe aankoop of uitbreiding." },
          ]}
        />
      </div>
    </>
  );
}
