import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQ from "@/components/FAQ";
import JsonLd from "@/components/JsonLd";
import RelatedContent from "@/components/RelatedContent";
import { buildMetadata, faqJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Wat is IPTV — hoe het werkt in Nederland",
  description:
    "Wat IPTV is en hoe het werkt: definitie, internetvereisten, compatibele apparaten, IPTV versus kabel en VOD, en verantwoord gebruik. Gids van BesteIPTVNederland in het Nederlands.",
  path: "/wat-is-iptv",
});

const pageFaqs = [
  {
    q: "Wat is IPTV?",
    a: "IPTV (Internet Protocol Television) is televisie en beeld die via internet bij een speler (app) op jouw apparaat komen, in plaats van via een coaxkabel of een klassiek satellietsignaal van een provider.",
  },
  {
    q: "Hoe werkt IPTV?",
    a: "Met een actief abonnement krijg je inloggegevens (meestal Xtream Codes), installeer je een compatibele speler, log je in en laad je live zenders, EPG en, als dat erbij zit, VOD. Elk scherm dat afspeelt telt mee voor het aantal verbindingen van het abonnement.",
  },
  {
    q: "Welke internetsnelheid wordt aanbevolen?",
    a: "Voor Full HD zijn in de praktijk zo'n 15–20 Mbps stabiel op het apparaat een goede richtlijn. Voor 4K liefst 25 Mbps of meer. Wifi op 5 GHz of een kabel in de woonkamer vermindert buffering — het is een praktische richtlijn, geen absolute garantie.",
  },
  {
    q: "Is IPTV hetzelfde als Netflix of VOD-streaming?",
    a: "Nee. VOD-streaming is vooral een catalogus op aanvraag. IPTV bevat live zenders (lineaire programmering). BesteIPTVNederland combineert live zenders met VOD (meer dan 200.000 films en meer dan 40.000 series) in dezelfde betaalde dienst.",
  },
  {
    q: "Welke apparaten kan ik gebruiken?",
    a: "Smart-tv, Fire Stick, Android / Google TV, telefoon en tablet (Android of iOS), computer en MAG-boxen als dat past — met een compatibele speler. Zie applicaties en de installatiegidsen.",
  },
  {
    q: "Heb ik een applicatie nodig?",
    a: "Ja. De dienst en de speler zijn twee dingen: het abonnement geeft toegang; de app op het apparaat leest de gegevens en toont zenders, EPG en VOD.",
  },
  {
    q: "Kan ik een gratis M3U-lijst gebruiken?",
    a: "Anonieme gedeelde lijsten zijn niet hetzelfde als een dienst met support. BesteIPTVNederland publiceert geen gratis M3U-lijsten: we werken met abonnementen, activatie en hulp in het Nederlands.",
  },
  {
    q: "Is IPTV legaal?",
    a: "De IPTV-techniek op zich is een manier om beeld via internet te leveren. Of een concrete dienst in orde is, hangt af van de herkomst van de inhoud, de benodigde toestemmingen en de wet. We claimen geen absolute legaliteit en we presenteren anonieme M3U-lijsten niet als ons model. Zie de Voorwaarden en het artikel over de risico's van gratis lijsten.",
  },
  {
    q: "Hoeveel verbindingen kan ik gebruiken?",
    a: "Abonnementen van BesteIPTVNederland bieden 1, 2 of 3 verbindingen — het aantal schermen dat je tegelijk kunt gebruiken. Kies wat bij je huis past op Prijzen.",
  },
  {
    q: "Hoe begin ik?",
    a: "Vergelijk abonnementen op Prijzen, rond de betaling af, ontvang de inloggegevens en stel een speler in op je apparaat. De installatiegidsen en het app-overzicht helpen stap voor stap; support 24/7 antwoordt als je dat nodig hebt.",
  },
  {
    q: "Hoe lang duurt de gratis proef?",
    a: "Je kunt bij support een proef van 24 uur aanvragen voordat je betaalt, om apparaat en netwerk te testen. Het is geen onbeperkte «gratis» periode.",
  },
  {
    q: "Is er garantie?",
    a: "Ja. Na de aankoop geldt de garantie van 7 dagen volgens het Retourbeleid.",
  },
];

const compareRows = [
  {
    topic: "Hoe het signaal komt",
    iptv: "Via internet (IP) naar de speler",
    kabel: "Netwerk/kabel van de provider",
    satelliet: "Schotel en satelliet",
  },
  {
    topic: "Afhankelijkheid van het netwerk",
    iptv: "Hangt af van jouw verbinding en wifi",
    kabel: "Infrastructuur van de provider",
    satelliet: "Satellietsignaal + installatie",
  },
  {
    topic: "Hardware",
    iptv: "Het apparaat dat je al hebt + app",
    kabel: "Decoder / box van de provider",
    satelliet: "Schotel + ontvanger",
  },
  {
    topic: "Flexibiliteit van schermen",
    iptv: "Smart-tv, Fire Stick, telefoon, enzovoort",
    kabel: "Meer gericht op de decoder",
    satelliet: "Meestal tv met ontvanger",
  },
  {
    topic: "Mobiliteit",
    iptv: "Mogelijk op andere schermen met verbindingen",
    kabel: "Beperkt tot het huispakket",
    satelliet: "Vaste installatie",
  },
  {
    topic: "Typische inhoud",
    iptv: "Live zenders + VOD in het abonnement",
    kabel: "Zenders van het afgesloten pakket",
    satelliet: "Zenders van het pakket / bouquet",
  },
];

export default function WatIsIptvPage() {
  return (
    <div className="section-shell py-16 md:py-24">
      <JsonLd data={faqJsonLd(pageFaqs)} />
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Wat is IPTV", path: "/wat-is-iptv" },
        ]}
      />

      <p className="label">Basisgids</p>
      <h1 className="mt-4 max-w-3xl text-[40px] tracking-[-1.2px] text-white md:text-[48px]">
        Wat is IPTV — helder uitgelegd
      </h1>
      <p className="mt-4 max-w-2xl text-[16px] leading-[1.55] text-slate">
        Deze gids legt uit wat IPTV is, hoe het in de praktijk werkt, wat je thuis nodig hebt, hoe het verschilt van
        kabel, satelliet en VOD-streaming, en hoe BesteIPTVNederland in dat model past — zonder onnodig jargon.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/kanalen" className="btn btn-ghost">
          Bekijk de beschikbare zenders
        </Link>
        <Link href="/applicaties" className="btn btn-ghost">
          Bekijk compatibele applicaties
        </Link>
        <Link href="/prijzen" className="btn btn-solid">
          Bekijk onze abonnementen
        </Link>
      </div>
      <p className="mt-6 text-[13px] text-muted">
        Proef van 24 uur op aanvraag · support 24/7 · garantie van 7 dagen na de aankoop
      </p>

      <section className="mt-14 max-w-3xl space-y-4 text-[15px] leading-[1.6] text-slate" aria-labelledby="definitie-heading">
        <h2 id="definitie-heading" className="text-[24px] text-white md:text-[28px]">
          Wat is IPTV?
        </h2>
        <p>
          IPTV betekent <strong className="text-white">Internet Protocol Television</strong>: televisie en beeld die via
          internet (het IP-protocol) worden geleverd. In plaats van dat het signaal vooral via coax of via de satelliet
          van een klassieke provider komt, komen de data bij je router en van daaruit bij een speler (applicatie) op de
          televisie, de box, de telefoon of de computer.
        </p>
        <p>
          In de praktijk kun je met IPTV <strong className="text-white">live zenders</strong> kijken — de lineaire
          programmering die je kent (nieuws, sport, algemene zenders zoals NPO en RTL). Veel moderne diensten, waaronder
          BesteIPTVNederland, combineren die zenders met een <strong className="text-white">VOD</strong>-bibliotheek
          (films en series op aanvraag) in hetzelfde abonnement.
        </p>
        <p>
          Het is nuttig om de <strong className="text-white">techniek</strong> (levering via IP) te scheiden van het
          concrete <strong className="text-white">dienstmodel</strong>. Het woord «IPTV» beschrijft het medium; of een
          specifieke dienst passend en verantwoord is, bepalen de herkomst van de inhoud en de voorwaarden van de
          aanbieder. We claimen geen absolute legaliteit alleen omdat het woord IPTV wordt gebruikt.
        </p>
      </section>

      <section className="mt-14 max-w-3xl space-y-4 text-[15px] leading-[1.6] text-slate" aria-labelledby="hoe-werkt-heading">
        <h2 id="hoe-werkt-heading" className="text-[24px] text-white md:text-[28px]">
          Hoe werkt IPTV?
        </h2>
        <p>
          De dienst en de speler zijn twee dingen. Het abonnement geeft toegang (inloggegevens). De applicatie op het
          apparaat leest die gegevens en toont zenders, tv-gids en VOD. Bij BesteIPTVNederland is de gebruikelijke
          methode <strong className="text-white">Xtream Codes</strong> (server-URL, gebruikersnaam en wachtwoord).
        </p>
        <ol className="mt-6 space-y-4">
          {[
            {
              t: "Kies een abonnement",
              b: "Vergelijk de looptijd en het aantal verbindingen (1, 2 of 3) op Prijzen, afhankelijk van hoeveel schermen je tegelijk wilt gebruiken.",
            },
            {
              t: "Ontvang de inloggegevens",
              b: "Na bevestiging van de betaling krijg je de toegangsgegevens via een privékanaal (bijvoorbeeld e-mail).",
            },
            {
              t: "Stel een compatibele speler in",
              b: "Installeer een geschikte applicatie op je apparaat, bij voorkeur uit de officiële winkel van het apparaat.",
            },
            {
              t: "Log in en laad de dienst",
              b: "Vul Xtream Codes in (of de methode die voor MAG geldt). De speler haalt de categorieën en de gids op.",
            },
            {
              t: "Zenders, EPG en VOD",
              b: "Blader door de live zenders, de EPG (programmagids) en, als dat in het abonnement zit, de VOD-bibliotheek.",
            },
            {
              t: "Houd je aan de verbindingen",
              b: "Elk scherm dat afspeelt telt mee voor de limiet van 1, 2 of 3 verbindingen. Over die limiet heen gaat de ervaring achteruit.",
            },
          ].map((step, i) => (
            <li key={step.t} className="border-t border-line pt-4">
              <p className="micro text-white">{String(i + 1).padStart(2, "0")}</p>
              <h3 className="mt-2 text-[17px] text-white">{step.t}</h3>
              <p className="mt-2 text-[14px] leading-[1.5] text-slate">{step.b}</p>
            </li>
          ))}
        </ol>
        <p className="mt-6">
          Details per apparaat:{" "}
          <Link href="/applicaties" className="text-white underline-offset-4 hover:underline">
            IPTV-applicaties
          </Link>{" "}
          en{" "}
          <Link href="/installatiegidsen" className="text-white underline-offset-4 hover:underline">
            installatiegidsen
          </Link>
          .
        </p>
      </section>

      <section className="mt-14 max-w-3xl space-y-4 text-[15px] leading-[1.6] text-slate" aria-labelledby="nodig-heading">
        <h2 id="nodig-heading" className="text-[24px] text-white md:text-[28px]">
          Wat heb je nodig om IPTV te gebruiken?
        </h2>
        <p>
          Vier praktische onderdelen: stabiel internet, een compatibel apparaat, een applicatie/speler en een actief
          abonnement. De beeldkwaliteit hangt af van de dienst en ook van je netwerk, wifi, de prestaties van het
          apparaat en de gekozen resolutie.
        </p>
        <h3 className="pt-2 text-[18px] text-white">Internetverbinding</h3>
        <p>
          Een stabiele verbinding heeft de meeste invloed op hoe vloeiend het beeld is. Voor Full HD zijn in de
          praktijk zo'n 15–20 Mbps stabiel op het apparaat een goede richtlijn; voor 4K liefst 25 Mbps of meer. Het is
          een nuttige oriëntatie — geen absolute garantie voor elk huis. Vermijd grote downloads op de wifi tijdens de
          wedstrijd.
        </p>
        <h3 className="text-[18px] text-white">Compatibel apparaat</h3>
        <p>
          Smart-tv, Fire Stick, Android-box, telefoon, tablet of computer — wat je al thuis hebt, is meestal genoeg. Je
          hoeft geen nieuwe hardware te kopen om te beginnen.
        </p>
        <h3 className="text-[18px] text-white">Applicatie / IPTV-speler</h3>
        <p>
          Je hebt een speler nodig die de gegevens van de dienst accepteert. Zonder ingestelde speler laten de
          inloggegevens alleen geen televisie op het scherm zien.
        </p>
        <h3 className="text-[18px] text-white">Actief account / abonnement</h3>
        <p>
          De inloggegevens horen bij het abonnement. Ze delen boven het afgesproken aantal verbindingen (1, 2 of 3) kan
          de voorwaarden schenden en verslechtert de ervaring op alle schermen.
        </p>
      </section>

      <section className="mt-14 max-w-3xl space-y-4 text-[15px] leading-[1.6] text-slate" aria-labelledby="apparaten-heading">
        <h2 id="apparaten-heading" className="text-[24px] text-white md:text-[28px]">
          Apparaten en applicaties
        </h2>
        <p>
          Het gebruikelijke ecosysteem in Nederland omvat smart-tv's (Samsung, LG en andere met een appwinkel), Amazon
          Fire Stick / Fire TV, Android TV en Google TV, Android- of iOS-telefoons en -tablets, computers en MAG-boxen
          als jouw opstelling dat vraagt.
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Smart-tv — installeer de speler uit de tv-winkel</li>
          <li>Fire Stick en Android-boxen — app + Xtream-login</li>
          <li>iOS / Android (telefoon en tablet) — handig thuis of onderweg, telt mee voor de verbindingen</li>
          <li>Pc — compatibele speler op de computer</li>
          <li>MAG — toegang via portal als support dat aangeeft</li>
        </ul>
        <p>
          Deze pagina vervangt het volledige overzicht niet: zie de tabel en aanbevelingen bij{" "}
          <Link href="/applicaties" className="text-white underline-offset-4 hover:underline">
            IPTV-applicaties
          </Link>{" "}
          en de stappen in de{" "}
          <Link href="/installatiegidsen" className="text-white underline-offset-4 hover:underline">
            installatiegidsen
          </Link>
          .
        </p>
      </section>

      <section className="mt-14 space-y-4 text-[15px] leading-[1.6] text-slate" aria-labelledby="vergelijken-heading">
        <h2 id="vergelijken-heading" className="max-w-3xl text-[24px] text-white md:text-[28px]">
          IPTV versus kabel versus satelliet
        </h2>
        <p className="max-w-3xl">
          Drie gangbare manieren om televisie te kijken in Nederland. Geen van de drie is «altijd beter» — het hangt
          af van je huis, je netwerk en wat je belangrijk vindt (flexibiliteit van schermen, installatie, mobiliteit).
          We vergelijken hier geen prijzen van providers.
        </p>
        <div className="mt-8 overflow-x-auto border border-line">
          <table className="w-full min-w-[640px] border-collapse text-left text-[13px] md:text-[14px]">
            <caption className="border-b border-line bg-surface px-4 py-3 text-left text-[13px] text-slate">
              Objectieve vergelijking: IPTV, kabel-tv en satelliet
            </caption>
            <thead>
              <tr className="border-b border-line bg-surface">
                <th scope="col" className="px-4 py-3 font-medium text-white">
                  Onderwerp
                </th>
                <th scope="col" className="px-4 py-3 font-medium text-white">
                  IPTV
                </th>
                <th scope="col" className="px-4 py-3 font-medium text-white">
                  Kabel
                </th>
                <th scope="col" className="px-4 py-3 font-medium text-white">
                  Satelliet
                </th>
              </tr>
            </thead>
            <tbody>
              {compareRows.map((row) => (
                <tr key={row.topic} className="border-b border-line last:border-b-0">
                  <th scope="row" className="px-4 py-3 align-top font-medium text-white">
                    {row.topic}
                  </th>
                  <td className="px-4 py-3 align-top text-slate">{row.iptv}</td>
                  <td className="px-4 py-3 align-top text-slate">{row.kabel}</td>
                  <td className="px-4 py-3 align-top text-slate">{row.satelliet}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="max-w-3xl pt-2">
          Eerlijke samenvatting: IPTV wint op flexibiliteit van apparaten en op het combineren van live + VOD in één
          betaald abonnement; het verliest als je internet of wifi instabiel is. Kabel en satelliet hangen minder af
          van je glasvezel thuis, maar zijn meestal minder vrij in schermen en hardware.
        </p>
      </section>

      <section className="mt-14 max-w-3xl space-y-4 text-[15px] leading-[1.6] text-slate" aria-labelledby="vs-vod-heading">
        <h2 id="vs-vod-heading" className="text-[24px] text-white md:text-[28px]">
          IPTV versus VOD-streaming
        </h2>
        <p>
          Veel mensen vragen of IPTV «hetzelfde is als Netflix». Nee. Klassieke streamingplatforms zijn vooral{" "}
          <strong className="text-white">VOD</strong> — je kiest een titel en kijkt wanneer je wilt.{" "}
          <strong className="text-white">IPTV</strong> bevat <strong className="text-white">live zenders</strong>: de
          gids loopt op vaste tijden (journaal, wedstrijd, reality).
        </p>
        <p>
          Een volledige IPTV-dienst kan beide werelden combineren: lineair live en een bibliotheek op aanvraag. Bij
          BesteIPTVNederland omvat het aanbod meer dan 45.000 live zenders, meer dan 200.000 films en meer dan 40.000
          series — altijd afhankelijk van het actieve abonnement en updates van de catalogus; geen titel of zender is
          voor altijd gegarandeerd.
        </p>
        <p>
          Voorbeelden van wat je in de dienst vindt:{" "}
          <Link href="/kanalen" className="text-white underline-offset-4 hover:underline">
            zenders en sport
          </Link>
          .
        </p>
      </section>

      <section className="mt-14 max-w-3xl space-y-4 text-[15px] leading-[1.6] text-slate" aria-labelledby="voordelen-heading">
        <h2 id="voordelen-heading" className="text-[24px] text-white md:text-[28px]">
          Voordelen en beperkingen
        </h2>
        <p>
          Een goede gids laat beide kanten zien. Dit is geen losse «voordelen»-pagina — het is de balans om met
          informatie te kiezen.
        </p>
        <h3 className="text-[18px] text-white">Gebruikelijke voordelen</h3>
        <ul className="list-disc space-y-2 pl-5">
          <li>Live zenders en VOD in dezelfde betaalde dienst</li>
          <li>Gebruik op meerdere soorten apparaten met hetzelfde type login</li>
          <li>Abonnementen met 1, 2 of 3 verbindingen, passend bij je huis</li>
          <li>EPG (tv-gids) in de speler</li>
          <li>Breed aanbod (+45.000 zenders · +200.000 films · +40.000 series)</li>
          <li>Support 24/7 in het Nederlands</li>
        </ul>
        <h3 className="text-[18px] text-white">Eerlijke beperkingen</h3>
        <ul className="list-disc space-y-2 pl-5">
          <li>Zwakke of gedeelde wifi veroorzaakt buffering — vaak is het het netwerk, niet «ontbrekende zenders»</li>
          <li>4K werkt alleen als de bron, het apparaat en de verbinding dat aankunnen</li>
          <li>Het aanbod kan veranderen; check belangrijke zenders op het actieve account</li>
          <li>
            Een beschikbaarheid van 99,9% is een afspraak van de dienst — dat betekent niet dat je lokale netwerk nooit
            problemen heeft
          </li>
          <li>De kwaliteit van de speler en het apparaat telt ook mee</li>
        </ul>
        <p>
          Problemen met laden? Zie de{" "}
          <Link
            href="/blog/iptv-werkt-niet-buffering-nederland"
            className="text-white underline-offset-4 hover:underline"
          >
            checklist bij buffering
          </Link>{" "}
          en de{" "}
          <Link href="/veelgestelde-vragen" className="text-white underline-offset-4 hover:underline">
            veelgestelde vragen
          </Link>
          .
        </p>
      </section>

      <section className="mt-14 max-w-3xl space-y-4 text-[15px] leading-[1.6] text-slate" aria-labelledby="praktijk-heading">
        <h2 id="praktijk-heading" className="text-[24px] text-white md:text-[28px]">
          BesteIPTVNederland in de praktijk
        </h2>
        <p>
          BesteIPTVNederland is een <strong className="text-white">betaalde IPTV-dienst</strong> — geen verzameling
          gratis M3U-lijsten. Je kiest het abonnement, ontvangt de inloggegevens, stelt een speler in en kijkt
          Nederlandse zenders, sport en VOD met support in het Nederlands.
        </p>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2">
          {[
            { t: "+45.000", d: "Live zenders" },
            { t: "+200.000", d: "Films (VOD)" },
            { t: "+40.000", d: "Series (VOD)" },
            { t: "99,9%", d: "Beschikbaarheid" },
            { t: "24/7", d: "Support" },
            { t: "1 · 2 · 3", d: "Verbindingen" },
          ].map((item) => (
            <li key={item.d} className="border border-line bg-deep px-5 py-5">
              <p className="text-[24px] tracking-[-0.4px] text-white">{item.t}</p>
              <p className="mt-1 text-[13px] text-slate">{item.d}</p>
            </li>
          ))}
        </ul>
        <p>
          Uitgelichte pakketten voor €25, €45, €89 en €104 afhankelijk van looptijd en verbindingen — volledige tabel
          op{" "}
          <Link href="/prijzen" className="text-white underline-offset-4 hover:underline">
            Prijzen
          </Link>
          . Je kunt de <strong className="text-white">proef van 24 uur</strong> bij support aanvragen voordat je
          betaalt; na de aankoop geldt de <strong className="text-white">garantie van 7 dagen</strong> volgens het{" "}
          <Link href="/retourbeleid" className="text-white underline-offset-4 hover:underline">
            Retourbeleid
          </Link>
          . Wie we zijn en hoe we werken:{" "}
          <Link href="/over-ons" className="text-white underline-offset-4 hover:underline">
            Over ons
          </Link>
          .
        </p>
      </section>

      <section className="mt-14 max-w-3xl space-y-4 text-[15px] leading-[1.6] text-slate" aria-labelledby="legaal-heading">
        <h2 id="legaal-heading" className="text-[24px] text-white md:text-[28px]">
          Verantwoord gebruik en legaliteit
        </h2>
        <p>
          IPTV is een techniek om inhoud via internet te leveren. Of een concrete dienst in orde is, hangt af van de
          herkomst van de inhoud, de toepasselijke toestemmingen en de geldende wet — niet van het simpele gebruik van
          het woord «IPTV».
        </p>
        <p>
          Daarom schrijven we niet «100% legaal» en geven we geen absolute garanties. Onze positie is duidelijk: we
          publiceren geen gratis IPTV-lijsten voor Nederland en geen anonieme M3U-bestanden; we werken met
          abonnementen, activatie en support. Voor context over de risico's van gedeelde lijsten, lees het{" "}
          <Link href="/blog/iptv-legaal-nederland" className="text-white underline-offset-4 hover:underline">
            artikel over legaliteit en gratis lijsten
          </Link>{" "}
          en de{" "}
          <Link href="/voorwaarden" className="text-white underline-offset-4 hover:underline">
            Algemene voorwaarden
          </Link>
          . Praktische vragen:{" "}
          <Link href="/veelgestelde-vragen" className="text-white underline-offset-4 hover:underline">
            veelgestelde vragen
          </Link>
          .
        </p>
      </section>

      <section className="mt-16" aria-labelledby="faq-heading">
        <h2 id="faq-heading" className="text-[24px] text-white md:text-[28px]">
          Veelgestelde vragen
        </h2>
        <div className="mt-6">
          <FAQ items={pageFaqs} />
        </div>
        <p className="mt-6 text-[14px] text-slate">
          Meer antwoorden bij de{" "}
          <Link href="/veelgestelde-vragen" className="text-white underline-offset-4 hover:underline">
            veelgestelde vragen
          </Link>
          .
        </p>
      </section>

      <RelatedContent
        title="Verder kijken"
        links={[
          {
            href: "/kanalen",
            label: "Bekijk de beschikbare zenders",
            description: "Nederlandse zenders en sport in de dienst.",
          },
          {
            href: "/applicaties",
            label: "Bekijk compatibele applicaties",
            description: "Apparaten en een overzicht van de installatie.",
          },
          {
            href: "/prijzen",
            label: "Bekijk onze abonnementen",
            description: "Prijzen en gelijktijdige verbindingen.",
          },
          {
            href: "/veelgestelde-vragen",
            label: "Bekijk de veelgestelde vragen",
            description: "Installatie, proef en support.",
          },
          {
            href: "/installatiegidsen",
            label: "Installatiegidsen",
            description: "Stap voor stap per apparaat.",
          },
          {
            href: "/over-ons",
            label: "Over BesteIPTVNederland",
            description: "Wie we zijn en hoe we klanten helpen.",
          },
        ]}
      />

      <section className="mt-16 border border-line bg-surface px-6 py-10 md:px-10" aria-labelledby="cta-heading">
        <h2 id="cta-heading" className="text-[24px] text-white md:text-[32px] md:tracking-[-0.6px]">
          Klaar voor de volgende stap?
        </h2>
        <p className="mt-4 max-w-2xl text-[15px] leading-[1.55] text-slate">
          Je kent nu de basis van IPTV. Bekijk het aanbod, maak je apparaat klaar en kies het abonnement met 1, 2 of 3
          verbindingen. Je kunt de proef van 24 uur bij support aanvragen voordat je betaalt; na de aankoop geldt de
          garantie van 7 dagen.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/prijzen" className="btn btn-solid">
            Bekijk abonnementen
          </Link>
          <Link href="/kanalen" className="btn btn-ghost">
            Bekijk zenders
          </Link>
          <Link href="/applicaties" className="btn btn-ghost">
            Applicaties bekijken
          </Link>
        </div>
        <p className="mt-6 text-[13px] text-muted">
          Proef van 24 uur op aanvraag · garantie van 7 dagen · support 24/7
        </p>
      </section>
    </div>
  );
}
