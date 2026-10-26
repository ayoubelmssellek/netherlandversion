import Link from "next/link";
import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQ from "@/components/FAQ";
import JsonLd from "@/components/JsonLd";
import RelatedContent from "@/components/RelatedContent";
import { getGuide, guides } from "@/data/guides";
import { buildMetadata, faqJsonLd, itemListJsonLd } from "@/lib/seo";

/** Visible answer may wrap “Retourbeleid”; schema uses the plain `pageFaqs` strings. */
function withRefundPolicyLink(answer: string) {
  const marker = "Retourbeleid";
  const index = answer.indexOf(marker);
  if (index === -1) return answer;
  return (
    <>
      {answer.slice(0, index)}
      <Link href="/retourbeleid" className="text-white underline-offset-4 hover:underline">
        {marker}
      </Link>
      {answer.slice(index + marker.length)}
    </>
  );
}

export const metadata: Metadata = buildMetadata({
  title: "IPTV-installatiegidsen — smart-tv, Fire Stick, Android…",
  description:
    "IPTV-installatiegidsen per apparaat: smart-tv, Fire Stick, Android, iPhone, MAG en pc. Stap voor stap nadat je de app kiest in het overzicht van BesteIPTVNederland.",
  path: "/installatiegidsen",
});

const breadcrumbItems = [
  { name: "Home", path: "/" },
  { name: "Applicaties", path: "/applicaties" },
  { name: "Installatiegidsen", path: "/installatiegidsen" },
];

const pageFaqs = [
  {
    q: "Waar vind ik de gids voor mijn apparaat?",
    a: "Op deze pagina: kies smart-tv, Android, Fire Stick, iPhone/iPad, MAG of Windows/pc en open de bijbehorende gids. De gedetailleerde stappen staan in elke handleiding.",
  },
  {
    q: "Moet ik eerst een applicatie kiezen voordat ik installeer?",
    a: "Ja — de speler is software van een derde. Gebruik het app-overzicht om apparaat en app uit elkaar te houden; kom daarna hier terug en open de gids van het apparaat.",
  },
  {
    q: "Welke inlogmethode gebruik ik?",
    a: "Bij de meeste spelers is Xtream Codes de aanbevolen methode (URL, gebruikersnaam en wachtwoord). Op MAG-boxen gebruik je portal + MAC. M3U alleen als support dat aangeeft.",
  },
  {
    q: "Wat is het verschil tussen Xtream en M3U?",
    a: "Xtream Codes is de gebruikelijke login met drie velden. M3U is een lijst via URL — gebruik die alleen als support die methode stuurt. Meng de twee logins niet op hetzelfde scherm.",
  },
  {
    q: "Hoe werkt de instelling op een MAG?",
    a: "MAG en veel set-topboxen gebruiken een portal-URL en het MAC-adres — niet de Xtream-interface van telefoonapps. Volg de MAG-gids en vraag support om de juiste portal als je die nodig hebt.",
  },
  {
    q: "Kan ik de proef van 24 uur gebruiken?",
    a: "Ja. Je kunt de proef van 24 uur bij support aanvragen om apparaat en netwerk te testen voordat je betaalt. Na de aankoop geldt de garantie van 7 dagen volgens het Retourbeleid.",
  },
  {
    q: "Hoeveel verbindingen kan ik gebruiken?",
    a: "Abonnementen bieden 1, 2 of 3 verbindingen — schermen die tegelijk afspelen. Elke stream telt mee. Vergelijk op Prijzen voordat je op meerdere apparaten installeert.",
  },
  {
    q: "Wat is het verschil tussen Applicaties en deze gidsen?",
    a: "Het app-overzicht legt apparaten en spelers uit. Deze pagina is de index van de stap-voor-stap-handleidingen. Elke apparaatgids heeft de installatie in detail.",
  },
];

/** Hub card copy — slugs must exist in guides.ts. */
const deviceCards = [
  {
    slug: "smart-tv",
    label: "Smart-tv",
    body: "Samsung, LG en Android TV / Google TV. Gebruikelijke speler: een app uit de tv-winkel (bijvoorbeeld IPTV Smarters of een vergelijkbare app). Login: Xtream Codes als de app dat toelaat. Of de app in de winkel staat, verschilt per model.",
    login: "Xtream Codes (of de methode van de winkel-app)",
    cta: "Open de smart-tv-gids",
  },
  {
    slug: "android",
    label: "Android",
    body: "Telefoon, tablet, Android TV en Google TV. Gebruikelijke speler: IPTV Smarters in de Play Store. Dezelfde Xtream-login werkt op de telefoon en op de tv.",
    login: "Xtream Codes",
    cta: "Open de Android-gids",
  },
  {
    slug: "firestick",
    label: "Fire Stick",
    body: "Fire Stick / Fire TV en Android-boxen via HDMI. Gebruikelijke spelers: IPTV Smarters of TiviMate. Gebruik bij voorkeur de Amazon Appstore; deze gids is geen APK-verzameling.",
    login: "Xtream Codes",
    cta: "Open de Fire Stick-gids",
  },
  {
    slug: "ios",
    label: "iPhone en iPad",
    body: "App Store met een speler die Xtream ondersteunt (bijvoorbeeld IPTV Smarters). Apple TV alleen als er in jouw regio een geschikte speler is — anders een Stick of Android TV in de woonkamer.",
    login: "Xtream Codes",
    cta: "Open de gids voor iPhone en iPad",
  },
  {
    slug: "mag",
    label: "MAG",
    body: "MAG-boxen en compatibele set-topboxen. Een andere route dan telefoonapps: portal-URL + MAC-adres.",
    login: "Portal + MAC",
    cta: "Open de MAG-gids",
  },
  {
    slug: "windows",
    label: "Windows / pc",
    body: "Computer met Windows of macOS. Gebruik bij voorkeur een speler met Xtream; VLC alleen als alternatief als support je een M3U stuurt. De pc telt als één verbinding.",
    login: "Xtream Codes (M3U als dat wordt aangegeven)",
    cta: "Open de gids voor Windows / pc",
  },
] as const;

function resolveCards() {
  return deviceCards.map((card) => {
    const guide = getGuide(card.slug);
    if (!guide) {
      throw new Error(`Missing guide for hub card: ${card.slug}`);
    }
    return { ...card, href: `/installatiegidsen/${guide.slug}` };
  });
}

export default function InstallationGuidesPage() {
  const cards = resolveCards();

  return (
    <div className="section-shell py-16 md:py-24">
      <JsonLd
        data={[
          faqJsonLd(pageFaqs),
          itemListJsonLd({
            name: "IPTV-installatiegidsen per apparaat",
            description:
              "Index van de stap-voor-stap-handleidingen van BesteIPTVNederland op deze pagina (dit is geen enkele alles-in-één-gids).",
            path: "/installatiegidsen",
            items: cards.map((card) => ({ name: card.label })),
          }),
        ]}
      />

      <Breadcrumbs items={breadcrumbItems} />

      <p className="label">Handleidingen per apparaat</p>
      <h1 className="mt-4 max-w-3xl text-[40px] tracking-[-1.2px] text-white md:text-[48px]">
        IPTV-installatiegidsen
      </h1>
      <p className="mt-4 max-w-2xl text-[16px] leading-[1.55] text-slate">
        Kies je apparaat en open de handleiding stap voor stap. Om het verschil tussen dienst, app en apparaat te
        begrijpen — en welke speler je gebruikt — begin je bij het{" "}
        <Link href="/applicaties" className="text-white underline-offset-4 hover:underline">
          app-overzicht
        </Link>
        .
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <a href="#apparaten" className="btn btn-solid">
          Kies een apparaat
        </a>
        <Link href="/applicaties" className="btn btn-ghost">
          Bekijk applicaties
        </Link>
        <Link href="/prijzen" className="btn btn-ghost">
          Bekijk prijzen
        </Link>
      </div>
      <p className="mt-6 text-[13px] text-muted">Proef van 24 uur op aanvraag · garantie van 7 dagen · support 24/7</p>

      <section className="mt-14 max-w-3xl" aria-labelledby="hoe-het-werkt-heading">
        <h2 id="hoe-het-werkt-heading" className="text-[24px] text-white md:text-[28px]">
          Hoe de installatie werkt
        </h2>
        <p className="mt-4 text-[15px] leading-[1.6] text-slate">
          Overzicht — de details per apparaat staan in de bijbehorende gids, niet op deze pagina.
        </p>
        <ol className="mt-6 list-decimal space-y-3 pl-5 text-[15px] leading-[1.6] text-slate">
          <li>Kies het apparaat (smart-tv, Fire Stick, Android, iPhone, MAG of pc).</li>
          <li>
            Installeer een compatibele speler uit de officiële winkel — zie de suggesties bij{" "}
            <Link href="/applicaties" className="text-white underline-offset-4 hover:underline">
              Applicaties
            </Link>
            .
          </li>
          <li>
            Houd de gegevens van het abonnement bij de hand (of vraag de proef van 24 uur aan). Toegang regel je op{" "}
            <Link href="/prijzen" className="text-white underline-offset-4 hover:underline">
              Prijzen
            </Link>
            .
          </li>
          <li>
            Vul de gegevens in: meestal <strong className="text-white">Xtream Codes</strong>; op MAG gebruik je{" "}
            <strong className="text-white">portal + MAC</strong>; <strong className="text-white">M3U</strong> alleen
            als support dat aangeeft.
          </li>
          <li>Wacht tot de categorieën laden en zet je favorieten vast.</li>
          <li>Begin te kijken — houd je aan het aantal verbindingen van het abonnement (1, 2 of 3).</li>
        </ol>
      </section>

      <section className="mt-16" id="apparaten" aria-labelledby="apparaten-heading">
        <h2 id="apparaten-heading" className="text-[24px] text-white md:text-[28px]">
          Kies je apparaat
        </h2>
        <p className="mt-3 max-w-2xl text-[15px] leading-[1.55] text-slate">
          {guides.length} officiële installatiegidsen. Elke kaart opent de volledige gids — zonder gratis M3U-lijsten
          of APK's van forums.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {cards.map((card) => (
            <article key={card.slug} className="flex flex-col border border-line bg-deep p-6">
              <h3 className="text-[20px] text-white">{card.label}</h3>
              <p className="mt-3 flex-1 text-[14px] leading-[1.45] text-slate">{card.body}</p>
              <p className="mt-4 text-[12px] uppercase tracking-[0.35px] text-muted">Login: {card.login}</p>
              <Link
                href={card.href}
                className="mt-4 inline-block text-[14px] font-semibold text-white underline-offset-4 hover:underline"
              >
                {card.cta}
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-16 max-w-3xl space-y-4 text-[15px] leading-[1.6] text-slate" aria-labelledby="login-heading">
        <h2 id="login-heading" className="text-[24px] text-white md:text-[28px]">
          Xtream Codes, M3U en MAG-portal
        </h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="text-white">Xtream Codes</strong> — hoofdmethode: server-URL, gebruikersnaam en
            wachtwoord. Dat gebruiken de meeste spelers na de activatiemail.
          </li>
          <li>
            <strong className="text-white">M3U</strong> — alleen als support die expliciet stuurt of aangeeft.
            Vervang Xtream niet door een anonieme lijst van internet.
          </li>
          <li>
            <strong className="text-white">MAG-portal</strong> — portal-URL + MAC. Anders dan de interface «Xtream
            Codes API» van apps.{" "}
            <Link href="/installatiegidsen/mag" className="text-white underline-offset-4 hover:underline">
              Open de MAG-gids
            </Link>
            .
          </li>
        </ul>
        <p>
          Meer context over spelers:{" "}
          <Link href="/applicaties" className="text-white underline-offset-4 hover:underline">
            app-overzicht
          </Link>
          .
        </p>
      </section>

      <section className="mt-14 max-w-3xl space-y-4 text-[15px] leading-[1.6] text-slate" aria-labelledby="eerst-heading">
        <h2 id="eerst-heading" className="text-[24px] text-white md:text-[28px]">
          Voordat je begint
        </h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            Heb een actief abonnement of vraag de <strong className="text-white">proef van 24 uur</strong> aan bij
            support.
          </li>
          <li>Weet welk apparaat je hebt en open de juiste gids op deze pagina.</li>
          <li>Bewaar de gegevens uit de e-mail (Xtream of MAG-portal).</li>
          <li>Gebruik een stabiele internetverbinding — 5 GHz-wifi of een kabel in de woonkamer helpt bij HD/FHD.</li>
          <li>
            Houd je aan de <strong className="text-white">1, 2 of 3 verbindingen</strong> van het abonnement als je
            meerdere schermen gebruikt.
          </li>
          <li>Installeer de speler uit de officiële winkel — vermijd APK's van onbekende bronnen.</li>
        </ul>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/prijzen" className="btn btn-ghost">
            Bekijk prijzen
          </Link>
          <Link href="/applicaties" className="btn btn-ghost">
            Bekijk applicaties
          </Link>
        </div>
      </section>

      <section className="mt-14 max-w-3xl space-y-4 text-[15px] leading-[1.6] text-slate" aria-labelledby="problemen-heading">
        <h2 id="problemen-heading" className="text-[24px] text-white md:text-[28px]">
          Veelvoorkomende problemen
        </h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="text-white">Ongeldige gegevens</strong> — typefout of M3U en Xtream door elkaar gehaald.
          </li>
          <li>
            <strong className="text-white">Buffering</strong> — bijna altijd het netwerk; zie de checklist op het blog.
          </li>
          <li>
            <strong className="text-white">Geen streams</strong> — inactief abonnement of verbindingen op.
          </li>
          <li>
            <strong className="text-white">Onbekende APK's</strong> — vermijd ze; gebruik de officiële winkel en
            support.
          </li>
        </ul>
        <p>
          <Link href="/veelgestelde-vragen" className="text-white underline-offset-4 hover:underline">
            Algemene FAQ
          </Link>
          {" · "}
          <Link
            href="/blog/iptv-werkt-niet-buffering-nederland"
            className="text-white underline-offset-4 hover:underline"
          >
            Buffering / IPTV werkt niet
          </Link>
          {" · "}
          <Link href="/blog/iptv-smarters-pro-nederland" className="text-white underline-offset-4 hover:underline">
            Fouten in Smarters
          </Link>
          .
        </p>
      </section>

      <section className="mt-16" aria-labelledby="faq-gidsen-heading">
        <h2 id="faq-gidsen-heading" className="text-[24px] text-white md:text-[28px]">
          Veelgestelde vragen
        </h2>
        <div className="mt-6">
          <FAQ
            items={pageFaqs.map((item) => ({
              q: item.q,
              a: withRefundPolicyLink(item.a) as unknown as string,
            }))}
          />
        </div>
      </section>

      <div className="mt-16">
        <RelatedContent
          title="Verder kijken"
          links={[
            {
              href: "/applicaties",
              label: "App-overzicht",
              description: "Apparaten, spelers en het verschil tussen dienst en app.",
            },
            {
              href: "/prijzen",
              label: "Prijzen en abonnementen",
              description: "Krijg de inloggegevens en kies 1, 2 of 3 verbindingen.",
            },
            {
              href: "/kanalen",
              label: "Zenderaanbod",
              description: "Wat je kunt kijken na de installatie.",
            },
            {
              href: "/veelgestelde-vragen",
              label: "Algemene FAQ",
              description: "Installatie, buffering en support.",
            },
            {
              href: "/wat-is-iptv",
              label: "Wat is IPTV",
              description: "Hoe de dienst en de speler werken.",
            },
            {
              href: "/over-ons",
              label: "Over ons",
              description: "Werkwijze en transparantie.",
            },
            {
              href: "/blog/iptv-smarters-pro-nederland",
              label: "IPTV Smarters Pro Nederland",
              description: "Xtream-login en veelvoorkomende fouten.",
            },
            {
              href: "/blog/iptv-android-nederland-installeren",
              label: "IPTV Android Nederland",
              description: "Installeren zonder twijfelachtige APK's.",
            },
            {
              href: "/blog/iptv-box-nederland",
              label: "IPTV-box Nederland",
              description: "Fire Stick en Android-box.",
            },
            {
              href: "/blog/iptv-werkt-niet-buffering-nederland",
              label: "Buffering / IPTV werkt niet",
              description: "Checklist voor netwerk en speler.",
            },
          ]}
        />
      </div>

      <section className="mt-16 border border-line bg-surface p-8 md:p-10">
        <h2 className="text-[24px] text-white">Klaar om te installeren?</h2>
        <p className="mt-3 max-w-2xl text-[15px] text-slate">
          Kies hierboven de gids van jouw apparaat, of haal het abonnement en de inloggegevens op Prijzen. Je kunt de
          proef van 24 uur bij support aanvragen; na de aankoop heb je 7 dagen garantie en support 24/7.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href="#apparaten" className="btn btn-solid">
            Kies een apparaat
          </a>
          <Link href="/prijzen" className="btn btn-ghost">
            Bekijk abonnementen
          </Link>
          <Link href="/applicaties" className="btn btn-ghost">
            Bekijk applicaties
          </Link>
        </div>
      </section>
    </div>
  );
}
