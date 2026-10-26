import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQ from "@/components/FAQ";
import JsonLd from "@/components/JsonLd";
import RelatedContent from "@/components/RelatedContent";
import { site } from "@/data/content";
import { buildMetadata, faqJsonLd } from "@/lib/seo";

/** Visible answer may wrap “Retourbeleid”; schema uses the plain FAQ strings. */
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
  title: "Veelgestelde vragen IPTV Nederland",
  description:
    "Veelgestelde vragen over IPTV Nederland (BesteIPTVNederland): abonnementen, proef van 24 uur, installatie, smart-tv, Xtream, internet, sport en support in het Nederlands.",
  path: "/veelgestelde-vragen",
});

const breadcrumbItems = [
  { name: "Home", path: "/" },
  { name: "Veelgestelde vragen", path: "/veelgestelde-vragen" },
];

const algemeen = [
  {
    q: "Wat is BesteIPTVNederland?",
    a: "Een IPTV-dienst voor Nederland: je koopt een abonnement, krijgt de inloggegevens en kijkt live zenders, sport en VOD in een speler op het apparaat dat je al hebt. Voor de definitie van de techniek, lees Wat is IPTV.",
  },
  {
    q: "Wat zit erbij?",
    a: "Live zenders (waaronder Nederlandse zenders en sport volgens het actieve aanbod), films en series op aanvraag, EPG als de zender die biedt en kwaliteit tot 4K afhankelijk van je netwerk en apparaat. Voorbeelden op Zenders.",
  },
  {
    q: "Is BesteIPTVNederland hetzelfde als de app?",
    a: "Nee. BesteIPTVNederland is de dienst / het abonnement. De app (speler) is software van een derde waarmee je het aanbod opent — die is niet automatisch van BesteIPTVNederland. De keuze van apparaat en speler staat bij Applicaties.",
  },
  {
    q: "Hoe neem ik contact op met support?",
    a: `Via e-mail (${site.email}) of via WhatsApp vanaf de site. Support 24/7 in het Nederlands voor aankoop, installatie en verlengen.`,
  },
];

const legaliteit = [
  {
    q: "Is IPTV legaal in Nederland?",
    a: "De IPTV-techniek op zich beantwoordt die vraag niet: de herkomst van de inhoud, de licenties en de manier van gebruik tellen. We garanderen de absolute legaliteit van geen enkele inhoud. Lees het artikel over legale IPTV in Nederland en de Algemene voorwaarden.",
  },
  {
    q: "Waarom gebruiken jullie geen gratis M3U-lijsten?",
    a: "We runnen een betaalde dienst met privé-inloggegevens en support. Anonieme of «gratis» M3U-lijsten zijn instabiel en riskant, en vallen buiten ons model. Context in het artikel over lijsten en legaliteit.",
  },
  {
    q: "Ik zie discussies op internet — wat moet ik checken?",
    a: "Vraag om openbare prijzen, een korte proef, een retourbeleid, echte supportkanalen en vermijd anonieme M3U-lijsten. Over ons legt uit hoe we werken, zonder verzonnen beoordelingen van derden.",
  },
];

const abonnementen = [
  {
    q: "Wat kosten de abonnementen?",
    a: "De uitgelichte pakketten kosten €25, €45, €89 en €104, afhankelijk van de looptijd en het aantal verbindingen (1, 2 of 3). Vergelijk ze op de pagina Prijzen — eenmalige betaling, zonder verrassende automatische verlenging.",
  },
  {
    q: "Hoe kies ik het aantal verbindingen?",
    a: "1 verbinding: één scherm tegelijk. 2 verbindingen: twee schermen tegelijk (bijvoorbeeld woonkamer + telefoon). 3 verbindingen: gezinspakket voor meerdere tv's. Elke stream (live of VOD) telt mee. Details op Prijzen.",
  },
  {
    q: "Is er een proef?",
    a: "Ja. Je kunt bij support een proef van 24 uur aanvragen voordat je betaalt, om je apparaat en netwerk te testen. Het is geen onbeperkt gratis IPTV.",
  },
  {
    q: "Is de proef van 24 uur automatisch?",
    a: "Nee — je vraagt hem aan bij support (WhatsApp of e-mail). Hij dient om apparaat en netwerk te testen voordat je betaalt. Stap voor stap in het artikel Proef IPTV Nederland.",
  },
  {
    q: "Waar vraag ik de proef IPTV Nederland aan?",
    a: "Via WhatsApp op de site of per e-mail, met je hoofdapparaat erbij. Het artikel Proef IPTV Nederland legt uit wat je in 24 uur checkt en het verschil met de garantie van 7 dagen.",
  },
  {
    q: "Is er een terugbetalingsgarantie?",
    a: "Na de aankoop geldt de tevredenheidsgarantie van 7 dagen volgens het Retourbeleid.",
  },
  {
    q: "Hoe koop ik en ontvang ik toegang?",
    a: "Kies het abonnement op Prijzen, rond de checkout af en volg de instructies na betaling. Je ontvangt de inloggegevens om in de speler in te stellen. Support helpt als je dat nodig hebt, zonder vaste activatietijden te beloven.",
  },
  {
    q: "Hoe zeg ik op of verleng ik?",
    a: "Er is geen verrassende automatische verlenging: de toegang stopt aan het einde van de betaalde periode. Je kunt verlengen op /verlengen wanneer je wilt. Terugbetalingen in de eerste 7 dagen volgen het Retourbeleid.",
  },
];

const apparaten = [
  {
    q: "Op welke apparaten werkt het?",
    a: "Smart-tv, Fire Stick, Android (telefoon/box), iPhone/iPad, MAG-boxen en pc (Windows; de Windows-gids dekt ook macOS). Overzicht bij Applicaties.",
  },
  {
    q: "Welke app moet ik gebruiken?",
    a: "Dat hangt van het apparaat af. Op Android en op veel smart-tv's is IPTV Smarters (of een vergelijkbare app met Xtream) gebruikelijk; op Android TV/Fire Stick is TiviMate ook populair. Het zijn apps van derden. Uitleg bij Applicaties.",
  },
  {
    q: "Heb ik speciale hardware nodig?",
    a: "Nee. Gebruik de smart-tv, Fire Stick, Android-box, telefoon of pc die je al hebt. Een stabiele verbinding verbetert de ervaring in HD/4K.",
  },
  {
    q: "Welk internet heb ik nodig voor IPTV in Nederland?",
    a: "Voor HD is een stabiele verbinding van ongeveer 10 Mbps per scherm meestal genoeg; voor 4K helpen 25 Mbps of meer op het apparaat waar je kijkt. Wifi op 5 GHz of een kabel in de woonkamer vermindert buffering. Checklist in het artikel over buffering.",
  },
  {
    q: "Werkt het buiten Nederland?",
    a: "Ja, zolang je geldig internet en een actief abonnement hebt — handig als je Nederlandse zenders in het buitenland wilt. De ervaring hangt af van het lokale netwerk. Aanbod en verwachtingen op Zenders.",
  },
  {
    q: "Heb ik een VPN nodig om de dienst te gebruiken?",
    a: "In de meeste huishoudens in Nederland niet. Trage of slecht ingestelde VPN's kunnen de stream slechter maken. Gebruik een VPN alleen als support dat aangeeft. Meer context in het artikel over buffering.",
  },
];

const installatie = [
  {
    q: "Waar staan de handleidingen?",
    a: "In het overzicht van installatiegidsen — smart-tv, Android, Fire Stick, iOS, MAG en Windows/pc. Applicaties vat apparaten en spelers samen; de gidsen hebben de stappen.",
  },
  {
    q: "Wat zijn Xtream Codes?",
    a: "De hoofdinlogmethode bij BesteIPTVNederland: server-URL, gebruikersnaam en wachtwoord in de speler. Uitgebreide uitleg bij Applicaties en in de installatiegidsen.",
  },
  {
    q: "Wanneer gebruik ik M3U?",
    a: "Alleen als support dat expliciet aangeeft en je de lijst geeft. De aanbevolen methode is Xtream Codes — M3U is niet de standaardroute.",
  },
  {
    q: "Hoe werkt het met MAG?",
    a: "MAG-boxen gebruiken meestal een portal-URL en het MAC-adres — niet dezelfde Xtream-interface als telefoonapps. Volg de gids op /installatiegidsen/mag.",
  },
  {
    q: "Hoe installeer ik na de aankoop?",
    a: "Met een actief abonnement en de inloggegevens kies je de gids van jouw apparaat, installeer je een compatibele speler en vul je Xtream in (of de MAG-portal). Begin bij het installatie-overzicht.",
  },
];

const catalogus = [
  {
    q: "Heeft BesteIPTVNederland ESPN en de Eredivisie?",
    a: "Ja — ESPN en de Eredivisie horen bij de sportcategorie als ze actief zijn op je abonnement. Log in met Xtream, zoek ze in de categorie Sport en zet ze bij je favorieten.",
  },
  {
    q: "Waar kijk ik de Eredivisie en clubzenders?",
    a: "De Eredivisie komt meestal via sportzenders (waaronder ESPN). Clubzenders verschijnen in het aanbod als ze beschikbaar zijn. Check het in de app na activatie; support kijkt mee als een specifieke zender niet laadt.",
  },
  {
    q: "Zit er sport (Eredivisie, ESPN) bij IPTV Nederland?",
    a: "Het aanbod bevat sportcategorieën (met opties zoals ESPN en andere zenders volgens de actieve beschikbaarheid). Bevestig dat op de pagina Zenders en, voor dagelijks gebruik, in het artikel over sport op IPTV Nederland.",
  },
  {
    q: "Wat is de EPG?",
    a: "De elektronische programmagids van de speler: je ziet wat er nu draait en wat daarna komt, als de zender en het aanbod dat meeleveren. We claimen geen dekking van 100% van alle zenders. Context op Zenders.",
  },
  {
    q: "Zijn er films en series (VOD)?",
    a: "Ja — het aanbod bevat VOD (films en series) naast de live zenders. De exacte beschikbaarheid hangt af van het actieve aanbod. Voorbeelden en categorieën op Zenders.",
  },
  {
    q: "Is er catch-up (programma's terugkijken)?",
    a: "Als de zender en het aanbod dat meeleveren, tonen veel spelers catch-up of herhalingen vanuit de EPG. We garanderen catch-up niet op 100% van de zenders — check het in je speler na het inloggen en vraag support als een specifieke zender de optie niet heeft.",
  },
  {
    q: "Waarom buffert het beeld?",
    a: "Bijna altijd is het het netwerk: drukke wifi, afstand tot de router of te weinig Mbps op het scherm. Ga naar 5 GHz als dat kan, zet 4K terug naar FHD en zie de checklist in het artikel over buffering.",
  },
  {
    q: "Ongeldige login of geen streams — wat doe ik?",
    a: "Check de URL, gebruikersnaam en wachtwoord (zonder extra spaties) en of je op Xtream Codes zit, niet per ongeluk op M3U. Geen streams kan een inactief abonnement of opgebruikte verbindingen zijn. Login van Smarters staat op het blog; Android-installatie in de bijbehorende gids.",
  },
];

const kiezen = [
  {
    q: "Wat is de beste IPTV / beste dienst / beste aanbieder in Nederland?",
    a: "Er is niet één «beste» voor iedereen. De beste IPTV in Nederland (of beste dienst / aanbieder / abonnement) is degene die de checklist van jouw huis haalt: netwerk, verbindingen, Nederlandse zenders, installatie en support. Criteria zonder nep-rankings: artikel Beste IPTV Nederland 2026. Om te kopen: Prijzen.",
  },
  {
    q: "Wat is de beste IPTV in Amsterdam?",
    a: "In Amsterdam geldt hetzelfde criterium als in de rest van het land: glasvezel of stabiele wifi op het scherm, een abonnement met de juiste verbindingen en een aanbod dat je echt gebruikt. We hebben geen pagina alleen voor Amsterdam — gebruik de gids Beste IPTV Nederland 2026 en test het met de proef van 24 uur op jouw netwerk.",
  },
  {
    q: "Waar kan ik IPTV in Nederland afsluiten?",
    a: "Bij BesteIPTVNederland vergelijk je abonnementen en verbindingen op Prijzen, rond je de checkout af op de officiële site en ontvang je de inloggegevens na betaling. Betaal niet aan anonieme profielen op social media zonder duidelijk domein of support.",
  },
  {
    q: "Hoe weet ik of een IPTV-aanbieder betrouwbaar is?",
    a: "Vraag om openbare prijzen, een korte proef, een retourbeleid, echte Nederlandstalige support en een herkenbaar domein. Wantrouw gratis M3U-lijsten en een «nr. 1» zonder bewijs. Checklist: Beste IPTV Nederland 2026; werkwijze: Over ons; proef: Proef IPTV Nederland.",
  },
  {
    q: "Heeft IPTV een antenne nodig?",
    a: "Nee. IPTV gebruikt je internetverbinding en een speler op het apparaat — het vervangt geen traditionele tv-antenne en eist die ook niet. Je hebt een stabiel netwerk op het scherm nodig (kabel of 5 GHz-wifi helpt).",
  },
  {
    q: "Heeft IPTV internet nodig? Werkt het met een lage snelheid?",
    a: "Ja, je hebt internet nodig. HD vraagt meestal zo'n 10 Mbps stabiel per scherm; 4K vraagt meer (ongeveer 25 Mbps of meer op het apparaat). Op zwakke netwerken zet je de streamkwaliteit lager. Details: artikel over internet voor IPTV en de buffering-checklist.",
  },
  {
    q: "IPTV of Netflix — wat kies je?",
    a: "Netflix (en vergelijkbare diensten) is vooral VOD op aanvraag. IPTV brengt live zenders (nieuws van NPO, RTL en NOS, ESPN, de Nederlandse gids) samen met VOD in dezelfde dienst. Veel mensen gebruiken beide; mis je sport en Nederlandse live zenders, dan dekt IPTV dat deel. Aanbod: Zenders; abonnementen: Prijzen.",
  },
  {
    q: "Wat is het verschil tussen gratis IPTV-apps en een betaalde dienst?",
    a: "De app (Smarters, TiviMate, enzovoort) is alleen de speler. Zonder dienst/abonnement met inloggegevens heeft de app jouw aanbod niet. «Gratis IPTV» is meestal een instabiele M3U-lijst — risico's en alternatieven in het artikel over legale IPTV / lijsten. App-overzicht: Applicaties.",
  },
  {
    q: "Waar vind ik gratis IPTV-zenderlijsten?",
    a: "We publiceren en raden geen anonieme gratis M3U-lijsten aan. Ze zijn instabiel en riskant. Wil je testen, vraag dan de proef van 24 uur aan bij support — geen afspeellijst van een forum. Context: artikel IPTV legaal Nederland.",
  },
  {
    q: "Welk apparaat koop ik voor IPTV?",
    a: "Veel huizen gebruiken de smart-tv of een Fire Stick / Android-box die ze al hebben. Koop je hardware, dan vergelijkt het artikel IPTV-box Nederland de opties; de installatie staat in de gidsen per apparaat.",
  },
];

const allForSchema = [...algemeen, ...legaliteit, ...kiezen, ...abonnementen, ...apparaten, ...installatie, ...catalogus];

function withVisibleLinks(items: { q: string; a: string }[]) {
  return items.map((item) => ({
    q: item.q,
    a: withRefundPolicyLink(item.a) as unknown as string,
  }));
}

function Section({
  id,
  title,
  items,
}: {
  id: string;
  title: string;
  items: { q: string; a: string }[];
}) {
  return (
    <section id={id} className="mt-14 scroll-mt-28">
      <h2 className="text-[24px] text-white">{title}</h2>
      <div className="mt-6">
        <FAQ items={withVisibleLinks(items)} />
      </div>
    </section>
  );
}

export default function FaqPage() {
  return (
    <div className="section-shell py-16 md:py-24">
      <JsonLd data={faqJsonLd(allForSchema)} />
      <Breadcrumbs items={breadcrumbItems} />

      <p className="label">Hulp BesteIPTVNederland</p>
      <h1 className="mt-4 max-w-3xl text-[40px] tracking-[-1.2px] text-white md:text-[48px]">
        Veelgestelde vragen IPTV Nederland
      </h1>
      <p className="mt-4 max-w-2xl text-[16px] leading-[1.55] text-slate">
        Praktische antwoorden over IPTV in Nederland met BesteIPTVNederland: wat erbij zit, abonnementen en
        verbindingen, proef van 24 uur, installatie met Xtream, internet, sport en support in het Nederlands. Voor het
        aanbod gebruik je Zenders; om te kopen, Prijzen; voor de proef, het artikel Proef IPTV Nederland.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/blog/proef-iptv-nederland" className="btn btn-solid">
          Proef van 24 uur aanvragen / begrijpen
        </Link>
        <Link href="/prijzen" className="btn btn-ghost">
          Bekijk abonnementen en prijzen
        </Link>
        <Link href="/installatiegidsen" className="btn btn-ghost">
          Installatiegidsen
        </Link>
        <Link href="/applicaties" className="btn btn-ghost">
          Compatibele applicaties
        </Link>
        <Link href="/kanalen" className="btn btn-ghost">
          Beschikbare zenders
        </Link>
      </div>

      <nav
        aria-label="Onderdelen van de veelgestelde vragen"
        className="mt-10 flex flex-wrap gap-x-4 gap-y-2 text-[14px] text-slate"
      >
        <a href="#faq-algemeen" className="underline-offset-4 hover:text-white hover:underline">
          Algemeen
        </a>
        <a href="#faq-legaliteit" className="underline-offset-4 hover:text-white hover:underline">
          Legaliteit
        </a>
        <a href="#faq-kiezen" className="underline-offset-4 hover:text-white hover:underline">
          Kiezen en vergelijken
        </a>
        <a href="#faq-abonnementen" className="underline-offset-4 hover:text-white hover:underline">
          Abonnementen en proef
        </a>
        <a href="#faq-apparaten" className="underline-offset-4 hover:text-white hover:underline">
          Apparaten en internet
        </a>
        <a href="#faq-installatie" className="underline-offset-4 hover:text-white hover:underline">
          Installatie
        </a>
        <a href="#faq-catalogus" className="underline-offset-4 hover:text-white hover:underline">
          Aanbod en problemen
        </a>
      </nav>

      <Section id="faq-algemeen" title="Algemeen en de dienst" items={algemeen} />
      <Section id="faq-legaliteit" title="Legaliteit en transparantie" items={legaliteit} />
      <Section id="faq-kiezen" title="Kiezen, vergelijken en veelgehoorde mythes" items={kiezen} />
      <Section id="faq-abonnementen" title="Abonnementen, proef en garantie" items={abonnementen} />
      <Section id="faq-apparaten" title="Apparaten, internet en apps" items={apparaten} />
      <Section id="faq-installatie" title="Installatie en inloggegevens" items={installatie} />
      <Section id="faq-catalogus" title="Aanbod en technische problemen" items={catalogus} />

      <section className="mt-14 border border-line bg-surface p-8 md:p-10">
        <h2 className="text-[24px] text-white">Proef IPTV Nederland voordat je betaalt</h2>
        <p className="mt-3 max-w-2xl text-[15px] leading-[1.55] text-slate">
          Is je vraag «kan ik het proberen?», dan is de juiste route de proef van 24 uur op aanvraag — geen gratis
          M3U-lijst. We leggen uit hoe je hem aanvraagt, wat je checkt en de garantie van 7 dagen na de aankoop.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/blog/proef-iptv-nederland" className="btn btn-solid">
            Lees: Proef IPTV Nederland
          </Link>
          <Link href="/prijzen" className="btn btn-ghost">
            Abonnementen vergelijken
          </Link>
        </div>
      </section>

      <RelatedContent
        title="Verder kijken"
        links={[
          {
            href: "/blog/beste-iptv-nederland-2026",
            label: "Beste IPTV Nederland 2026",
            description: "Criteria — dienst, aanbieder, abonnement.",
          },
          {
            href: "/blog/proef-iptv-nederland",
            label: "Proef IPTV Nederland",
            description: "Zo vraag je 24 uur aan en wat je checkt.",
          },
          {
            href: "/applicaties",
            label: "Gids voor applicaties",
            description: "Apparaten, spelers en dienst versus app.",
          },
          {
            href: "/installatiegidsen",
            label: "Installatiegidsen",
            description: "Handleidingen per apparaat, stap voor stap.",
          },
          {
            href: "/prijzen",
            label: "Abonnementen en betaling",
            description: "Openbare prijzen en aantal verbindingen.",
          },
          {
            href: "/kanalen",
            label: "Zenderaanbod",
            description: "Nederlandse zenders, sport en categorieën.",
          },
          {
            href: "/wat-is-iptv",
            label: "Hoe IPTV werkt",
            description: "Definitie en basisvereisten.",
          },
          {
            href: "/over-ons",
            label: "Over BesteIPTVNederland",
            description: "Werkwijze, support en transparantie.",
          },
          {
            href: "/blog/iptv-werkt-niet-buffering-nederland",
            label: "IPTV werkt niet / buffering",
            description: "Checklist voor netwerk en kwaliteit.",
          },
          {
            href: "/blog/iptv-legaal-nederland",
            label: "Gratis lijsten en M3U — risico's",
            description: "Waarom je anonieme lijsten vermijdt.",
          },
        ]}
      />

      <section className="mt-16 border border-line bg-surface p-8 md:p-10">
        <h2 className="text-[24px] text-white">Nog hulp nodig?</h2>
        <p className="mt-3 max-w-2xl text-[15px] text-slate">
          Mail ons ({site.email}) of app via WhatsApp vanaf de site. Lees ook hoe we werken op{" "}
          <Link href="/over-ons" className="text-white underline-offset-4 hover:underline">
            Over ons
          </Link>
          .
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href={`mailto:${site.email}`} className="btn btn-ghost">
            E-mail sturen
          </a>
          <Link href="/installatiegidsen" className="btn btn-ghost">
            Installatiegidsen openen
          </Link>
          <Link href="/wat-is-iptv" className="btn btn-ghost">
            Ontdek hoe IPTV werkt
          </Link>
          <Link href="/blog/iptv-legaal-nederland" className="btn btn-ghost">
            Gratis lijsten en M3U — risico's
          </Link>
        </div>
      </section>
    </div>
  );
}
