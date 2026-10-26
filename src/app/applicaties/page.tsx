import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQ from "@/components/FAQ";
import JsonLd from "@/components/JsonLd";
import RelatedContent from "@/components/RelatedContent";
import { guides } from "@/data/guides";
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
  title: "IPTV-applicaties Nederland — smart-tv, Fire Stick en meer",
  description:
    "IPTV-applicaties voor Nederland: kies het apparaat, een compatibele speler en de installatiegids. Smart-tv, Android, Fire Stick, iOS, MAG en pc — BesteIPTVNederland.",
  path: "/applicaties",
});

const breadcrumbItems = [
  { name: "Home", path: "/" },
  { name: "Applicaties", path: "/applicaties" },
];

const pageFaqs = [
  {
    q: "Wat is de beste IPTV-applicatie?",
    a: "Dat hangt van het apparaat af. Op Android en op veel smart-tv's is IPTV Smarters (of een vergelijkbare app met Xtream Codes) een gebruikelijke keuze. Op Android TV en Fire Stick is TiviMate ook populair. Het zijn apps van derden — BesteIPTVNederland is de dienst; de speler toont alleen het aanbod. Volg de gids van jouw apparaat.",
  },
  {
    q: "Kan ik het kijken op de smart-tv (Samsung, LG of Android TV)?",
    a: "Ja. Installeer een compatibele speler uit de tv-winkel (als die beschikbaar is) en gebruik de Xtream-gegevens. Of de app er precies is, verschilt per model en regio — is de winkel beperkt, dan is een Fire Stick of een Android-box via HDMI een stabiel alternatief. Details in de smart-tv-gids.",
  },
  {
    q: "Hoe stel ik het in op de Fire Stick?",
    a: "Gebruik de Amazon Appstore (of de methode die support aangeeft als de app niet verschijnt). Gebruik de officiële winkel en vermijd APK's van forums. Log daarna in met Xtream en de gegevens uit de e-mail. Stap voor stap in de Fire Stick-gids.",
  },
  {
    q: "Xtream Codes of een M3U-lijst?",
    a: "Bij BesteIPTVNederland is Xtream Codes de aanbevolen methode (server-URL, gebruikersnaam en wachtwoord). M3U alleen als support dat expliciet aangeeft.",
  },
  {
    q: "Hoe werkt een MAG-box?",
    a: "MAG-boxen gebruiken meestal een portal-URL en het MAC-adres — niet dezelfde Xtream-login als telefoonapps. Volg de MAG-gids en vraag support om de juiste portal als je die nodig hebt.",
  },
  {
    q: "Is er een gratis proef?",
    a: "Je kunt bij support een proef van 24 uur aanvragen voordat je betaalt, om apparaat en netwerk te testen. Na de aankoop geldt de garantie van 7 dagen volgens het Retourbeleid.",
  },
  {
    q: "Hoeveel verbindingen kan ik gebruiken?",
    a: "Abonnementen bieden 1, 2 of 3 verbindingen — het aantal schermen dat tegelijk afspeelt. Elke stream (live of VOD) telt mee. Vergelijk op Prijzen.",
  },
  {
    q: "Heb ik een APK van een onbekende site nodig?",
    a: "Nee, vermijd dat. Gebruik de officiële winkel van het apparaat (Play Store, App Store, Amazon Appstore of de smart-tv-winkel). APK's van forums vergroten het risico op malware en instabiliteit.",
  },
  {
    q: "Wat is de EPG in de speler?",
    a: "De EPG is de elektronische programmagids van de speler: je ziet wat er nu draait en wat daarna komt, als de zender en het aanbod dat meeleveren. We claimen geen dekking van 100% van alle zenders.",
  },
  {
    q: "Waar staan de installatiehandleidingen?",
    a: "In het overzicht van installatiegidsen — smart-tv, Android, Fire Stick, iOS, MAG en Windows/pc. Deze pagina is het overzicht; de gidsen hebben de stappen.",
  },
];

const deviceCards = [
  {
    title: "Smart-tv",
    body: "Samsung, LG en andere tv's met een appwinkel. Gebruikelijke speler: IPTV Smarters of een vergelijkbare app uit de winkel, met Xtream-login als die beschikbaar is.",
    href: "/installatiegidsen/smart-tv",
    cta: "Open de smart-tv-gids",
  },
  {
    title: "Android / Android TV / Google TV",
    body: "Telefoon, tablet, Android TV en Google TV. Gebruikelijke speler: IPTV Smarters in de Play Store; dezelfde Xtream-login werkt op de telefoon en op de tv.",
    href: "/installatiegidsen/android",
    cta: "Open de Android-gids",
  },
  {
    title: "Fire Stick / Fire TV",
    body: "Stick in de HDMI van de televisie. Gebruikelijke spelers: IPTV Smarters of TiviMate — installeer ze uit de Appstore als dat kan en let op de wifi in de woonkamer.",
    href: "/installatiegidsen/firestick",
    cta: "Open de Fire Stick-gids",
  },
  {
    title: "iPhone en iPad",
    body: "Apps met Xtream in de App Store (bijvoorbeeld IPTV Smarters). Handig op reis of als tweede scherm — telt mee voor de verbindingen van het abonnement.",
    href: "/installatiegidsen/ios",
    cta: "Open de gids voor iPhone en iPad",
  },
  {
    title: "MAG",
    body: "Voor wie al een MAG-set-topbox heeft. Een andere route: portal + MAC, niet de typische Xtream-interface van telefoonapps.",
    href: "/installatiegidsen/mag",
    cta: "Open de MAG-gids",
  },
  {
    title: "Windows / pc",
    body: "Kijken op de computer met een Xtream-speler. Handig om het netwerk te testen voordat je het op de smart-tv zet; Mac staat in dezelfde gids.",
    href: "/installatiegidsen/windows",
    cta: "Open de gids voor Windows / pc",
  },
];

export default function AppsPage() {
  return (
    <div className="section-shell py-16 md:py-24">
      <JsonLd
        data={[
          faqJsonLd(pageFaqs),
          itemListJsonLd({
            name: "Compatibele apparaten BesteIPTVNederland",
            description:
              "Apparaattypen met een installatiegids op deze pagina (dit is geen softwarecatalogus van BesteIPTVNederland).",
            path: "/applicaties",
            items: deviceCards.map((card) => ({ name: card.title })),
          }),
        ]}
      />

      <Breadcrumbs items={breadcrumbItems} />

      <p className="label">Apparaten en spelers</p>
      <h1 className="mt-4 max-w-3xl text-[40px] tracking-[-1.2px] text-white md:text-[48px]">
        IPTV-applicaties Nederland — apparaten en spelers
      </h1>
      <p className="mt-4 max-w-2xl text-[16px] leading-[1.55] text-slate">
        Kies het apparaat, zoek een compatibele speler en open de installatiegids. BesteIPTVNederland is de{" "}
        <strong className="text-white">dienst</strong>; de app is de{" "}
        <strong className="text-white">speler van een derde</strong> die het aanbod toont na het inloggen.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/prijzen" className="btn btn-solid">
          Bekijk prijzen
        </Link>
        <Link href="/installatiegidsen" className="btn btn-ghost">
          Bekijk installatiegidsen
        </Link>
        <Link href="/kanalen" className="btn btn-ghost">
          Bekijk zenders
        </Link>
        <Link href="/veelgestelde-vragen" className="btn btn-ghost">
          FAQ
        </Link>
      </div>
      <p className="mt-6 text-[13px] text-muted">Proef van 24 uur op aanvraag · garantie van 7 dagen · support 24/7</p>

      <section className="mt-14" aria-labelledby="model-heading">
        <h2 id="model-heading" className="text-[24px] text-white md:text-[28px]">
          Dienst, app, apparaat en inloggegevens
        </h2>
        <p className="mt-4 max-w-3xl text-[15px] leading-[1.6] text-slate">
          Vier verschillende onderdelen — namen door elkaar halen is de meest voorkomende reden dat een installatie
          mislukt.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {[
            {
              t: "Dienst BesteIPTVNederland",
              b: "Het abonnement: aanbod, support en een plan met 1, 2 of 3 verbindingen. Het is geen winkel-app met onze naam.",
            },
            {
              t: "Speler / applicatie",
              b: "Software van een derde (bijvoorbeeld IPTV Smarters of TiviMate) die de gegevens leest en zenders, EPG en VOD toont.",
            },
            {
              t: "Apparaat",
              b: "Waar de speler draait: smart-tv, Fire Stick, Android, iPhone, MAG of pc. Elk scherm dat afspeelt telt als een verbinding.",
            },
            {
              t: "Inloggegevens",
              b: "Wat de speler aan de dienst koppelt: meestal Xtream Codes (URL, gebruikersnaam, wachtwoord). Op MAG: portal + MAC. M3U alleen als support dat aangeeft.",
            },
          ].map((item) => (
            <article key={item.t} className="border border-line bg-surface p-6">
              <h3 className="text-[18px] text-white">{item.t}</h3>
              <p className="mt-3 text-[14px] leading-[1.45] text-slate">{item.b}</p>
            </article>
          ))}
        </div>
        <p className="mt-6 max-w-3xl text-[15px] leading-[1.6] text-slate">
          Voor het algemene idee van de techniek, zie{" "}
          <Link href="/wat-is-iptv" className="text-white underline-offset-4 hover:underline">
            wat IPTV is
          </Link>
          .
        </p>
      </section>

      <section className="mt-16" aria-labelledby="apparaten-heading">
        <h2 id="apparaten-heading" className="text-[24px] text-white md:text-[28px]">
          Kies je apparaat
        </h2>
        <p className="mt-3 max-w-2xl text-[15px] leading-[1.55] text-slate">
          Een BesteIPTVNederland-abonnement werkt op deze apparaten met een compatibele speler. De limiet is het aantal
          gelijktijdige verbindingen van het abonnement (1, 2 of 3). De gedetailleerde handleidingen staan in de
          gidsen, niet op deze pagina.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {deviceCards.map((card) => (
            <article key={card.href} className="flex flex-col border border-line bg-surface p-6">
              <h3 className="text-[20px] text-white">{card.title}</h3>
              <p className="mt-3 flex-1 text-[14px] leading-[1.45] text-slate">{card.body}</p>
              <Link
                href={card.href}
                className="mt-5 inline-block text-[14px] font-semibold text-white underline-offset-4 hover:underline"
              >
                {card.cta}
              </Link>
            </article>
          ))}
        </div>
        <p className="mt-6 text-[14px] text-slate">
          Volledige index:{" "}
          <Link href="/installatiegidsen" className="text-white underline-offset-4 hover:underline">
            installatiegidsen
          </Link>{" "}
          ({guides.length} apparaten).
        </p>
      </section>

      <section className="mt-16 max-w-3xl space-y-4 text-[15px] leading-[1.6] text-slate" aria-labelledby="smart-tv-heading">
        <h2 id="smart-tv-heading" className="text-[24px] text-white md:text-[28px]">
          Smart-tv — Samsung, LG en Android TV
        </h2>
        <p>
          Op smart-tv's met een appwinkel (Samsung, LG, Android TV / Google TV) is de gebruikelijke route: een
          compatibele speler installeren en inloggen met Xtream en de gegevens uit de e-mail. Welke app precies in de
          winkel staat, hangt af van model en regio — we beweren niet dat elk apparaat dezelfde speler toont.
        </p>
        <p>
          Is de winkel beperkt, dan is een Fire Stick of een Android-box via HDMI meestal het stabielste alternatief.
          De stappen staan in de{" "}
          <Link href="/installatiegidsen/smart-tv" className="text-white underline-offset-4 hover:underline">
            smart-tv-gids
          </Link>
          .
        </p>
      </section>

      <section className="mt-14 max-w-3xl space-y-4 text-[15px] leading-[1.6] text-slate" aria-labelledby="firestick-heading">
        <h2 id="firestick-heading" className="text-[24px] text-white md:text-[28px]">
          Fire Stick en Android-box
        </h2>
        <p>
          De Fire Stick gaat in de HDMI van de televisie en gebruikt de Amazon Appstore. IPTV Smarters en TiviMate
          komen in dit ecosysteem vaak voor. Gebruik de officiële winkel; we houden geen APK-downloadhub bij.
        </p>
        <p>
          Installatiedetails:{" "}
          <Link href="/installatiegidsen/firestick" className="text-white underline-offset-4 hover:underline">
            Fire Stick-gids
          </Link>
          . Uitgebreidere vergelijking van spelers:{" "}
          <Link href="/blog/beste-app-iptv-nederland" className="text-white underline-offset-4 hover:underline">
            beste IPTV-apps (Fire Stick)
          </Link>
          .
        </p>
      </section>

      <section className="mt-14 max-w-3xl space-y-4 text-[15px] leading-[1.6] text-slate" aria-labelledby="android-heading">
        <h2 id="android-heading" className="text-[24px] text-white md:text-[28px]">
          Android — telefoon, tablet, Android TV en Google TV
        </h2>
        <p>
          Op de telefoon, de tablet en Android TV / Google TV is de Xtream-login hetzelfde type flow: speler
          installeren uit de Play Store (bijvoorbeeld IPTV Smarters), URL, gebruikersnaam en wachtwoord invullen en de
          categorieën laden. Twee schermen tegelijk vragen een abonnement met twee verbindingen.
        </p>
        <p>
          <Link href="/installatiegidsen/android" className="text-white underline-offset-4 hover:underline">
            Open de Android-gids
          </Link>
          .
        </p>
      </section>

      <section className="mt-14 max-w-3xl space-y-4 text-[15px] leading-[1.6] text-slate" aria-labelledby="ios-heading">
        <h2 id="ios-heading" className="text-[24px] text-white md:text-[28px]">
          iPhone en iPad
        </h2>
        <p>
          Kies in de App Store een speler die Xtream Codes ondersteunt en vul de gegevens uit de e-mail in. Handig op
          reis of als tweede scherm — elke stream telt mee voor de verbindingen van het abonnement.
        </p>
        <p>
          Apple TV (tvOS) kan werken als er in de App Store van jouw regio een geschikte speler is; is die er niet,
          gebruik dan een Fire Stick / Android TV in de woonkamer of de iPhone met AirPlay als noodoplossing. We
          garanderen geen beschikbaarheid in elk land of op elk model.
        </p>
        <p>
          <Link href="/installatiegidsen/ios" className="text-white underline-offset-4 hover:underline">
            Open de gids voor iPhone, iPad en Apple TV
          </Link>
          .
        </p>
      </section>

      <section className="mt-14 max-w-3xl space-y-4 text-[15px] leading-[1.6] text-slate" aria-labelledby="mag-heading">
        <h2 id="mag-heading" className="text-[24px] text-white md:text-[28px]">
          MAG en set-topbox
        </h2>
        <p>
          MAG-boxen en veel set-topboxen gebruiken <strong className="text-white">portal + MAC-adres</strong> — niet
          dezelfde interface als «Xtream Codes API» op telefoonapps. Je hebt de juiste portal-URL en de MAC van het
          apparaat nodig; support helpt als je van een app naar MAG overstapt.
        </p>
        <p>
          <Link href="/installatiegidsen/mag" className="text-white underline-offset-4 hover:underline">
            Open de MAG-gids
          </Link>
          .
        </p>
      </section>

      <section className="mt-14 max-w-3xl space-y-4 text-[15px] leading-[1.6] text-slate" aria-labelledby="pc-heading">
        <h2 id="pc-heading" className="text-[24px] text-white md:text-[28px]">
          Windows / pc en Mac
        </h2>
        <p>
          Op de computer gebruik je bij voorkeur een speler met Xtream Codes. VLC kan als alternatief dienen als
          support een M3U-link stuurt — de EPG is dan meestal beperkter dan in een speciale speler. De pc telt als één
          verbinding, net als een smart-tv.
        </p>
        <p>
          <Link href="/installatiegidsen/windows" className="text-white underline-offset-4 hover:underline">
            Open de gids voor Windows / pc (inclusief macOS)
          </Link>
          .
        </p>
      </section>

      <section className="mt-16 max-w-3xl space-y-4 text-[15px] leading-[1.6] text-slate" aria-labelledby="spelers-heading">
        <h2 id="spelers-heading" className="text-[24px] text-white md:text-[28px]">
          Aanbevolen spelers (van derden)
        </h2>
        <p>
          De namen hieronder zijn <strong className="text-white">applicaties van derden</strong>. BesteIPTVNederland
          publiceert ze niet, bezit ze niet en presenteert ze niet als «officiële app van BesteIPTVNederland». Ze dienen
          alleen om met jouw gegevens bij de dienst te komen.
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="text-white">IPTV Smarters (Pro)</strong> — veelgebruikt op Android, iOS en diverse
            smart-tv's; login via Xtream Codes.
          </li>
          <li>
            <strong className="text-white">TiviMate</strong> — sterk op Android TV en Fire Stick (check in de winkel
            het verschil tussen de gratis en de betaalde editie).
          </li>
          <li>
            <strong className="text-white">Spelers uit de tv-winkel</strong> — sommige merken hebben apps die Xtream of
            M3U ondersteunen; support wijst een optie aan als de winkel beperkt is.
          </li>
          <li>
            <strong className="text-white">MAG-portal / set-topbox</strong> — eigen route (portal + MAC), niet de
            interface van Smarters.
          </li>
        </ul>
        <p>
          Login van Smarters in detail:{" "}
          <Link href="/blog/iptv-smarters-pro-nederland" className="text-white underline-offset-4 hover:underline">
            IPTV Smarters Pro Nederland
          </Link>
          .
        </p>
      </section>

      <section className="mt-16" aria-labelledby="apps-vergelijk-heading">
        <h2 id="apps-vergelijk-heading" className="text-[24px] text-white md:text-[28px]">
          Welke app kies je? — korte vergelijking
        </h2>
        <p className="mt-3 max-w-2xl text-[15px] leading-[1.55] text-slate">
          Samenvatting van de spelers die in dit overzicht al genoemd zijn. Installeer altijd uit de officiële winkel
          van het apparaat — we publiceren geen APK's en geen downloadpagina's.
        </p>
        <div className="mt-8 overflow-x-auto border border-line">
          <table className="w-full min-w-[36rem] border-collapse text-left text-[14px]">
            <caption className="border-b border-line bg-surface px-4 py-3 text-left text-[13px] text-slate">
              Vergelijking van spelers van derden per apparaat en inlogmethode
            </caption>
            <thead>
              <tr className="border-b border-line bg-surface">
                <th scope="col" className="px-4 py-3 font-medium text-white">
                  Speler
                </th>
                <th scope="col" className="px-4 py-3 font-medium text-white">
                  Het beste voor
                </th>
                <th scope="col" className="px-4 py-3 font-medium text-white">
                  Login
                </th>
                <th scope="col" className="px-4 py-3 font-medium text-white">
                  Opmerking
                </th>
              </tr>
            </thead>
            <tbody className="text-slate">
              <tr className="border-b border-line">
                <th scope="row" className="px-4 py-3 font-medium text-white">
                  IPTV Smarters (Pro)
                </th>
                <td className="px-4 py-3">Android, iOS, diverse smart-tv's</td>
                <td className="px-4 py-3">Xtream Codes</td>
                <td className="px-4 py-3">Vaak de keuze van support — app van een derde</td>
              </tr>
              <tr className="border-b border-line">
                <th scope="row" className="px-4 py-3 font-medium text-white">
                  TiviMate
                </th>
                <td className="px-4 py-3">Android TV, Fire Stick</td>
                <td className="px-4 py-3">Xtream Codes</td>
                <td className="px-4 py-3">Check in de winkel de gratis editie tegenover de betaalde</td>
              </tr>
              <tr className="border-b border-line">
                <th scope="row" className="px-4 py-3 font-medium text-white">
                  Spelers uit de tv-winkel
                </th>
                <td className="px-4 py-3">Samsung, LG en vergelijkbaar</td>
                <td className="px-4 py-3">Xtream of M3U (afhankelijk van de app)</td>
                <td className="px-4 py-3">Beschikbaarheid verschilt per model en regio</td>
              </tr>
              <tr>
                <th scope="row" className="px-4 py-3 font-medium text-white">
                  MAG-portal / set-topbox
                </th>
                <td className="px-4 py-3">MAG-box en compatibele set-topboxen</td>
                <td className="px-4 py-3">Portal-URL + MAC</td>
                <td className="px-4 py-3">
                  Zie de{" "}
                  <Link href="/installatiegidsen/mag" className="text-white underline-offset-4 hover:underline">
                    MAG-gids
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-6 max-w-2xl text-[14px] text-slate">
          Nadat je een speler hebt gekozen, volg je de{" "}
          <Link href="/installatiegidsen" className="text-white underline-offset-4 hover:underline">
            gids van jouw apparaat
          </Link>
          . Inloggegevens: nadat je het abonnement afsluit op{" "}
          <Link href="/prijzen" className="text-white underline-offset-4 hover:underline">
            Prijzen
          </Link>
          .
        </p>
      </section>

      <section className="mt-16 max-w-3xl space-y-4 text-[15px] leading-[1.6] text-slate" aria-labelledby="login-heading">
        <h2 id="login-heading" className="text-[24px] text-white md:text-[28px]">
          Xtream Codes, M3U en MAG-portal
        </h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="text-white">Xtream Codes</strong> — aanbevolen methode: server-URL, gebruikersnaam en
            wachtwoord (zonder extra spaties).
          </li>
          <li>
            <strong className="text-white">M3U</strong> — alleen als support dat expliciet aangeeft.
          </li>
          <li>
            <strong className="text-white">MAG-portal</strong> — portal-URL + MAC van het apparaat; een andere flow dan
            telefoonapps.
          </li>
        </ul>
      </section>

      <section className="mt-14 max-w-3xl space-y-4 text-[15px] leading-[1.6] text-slate" aria-labelledby="epg-vod-heading">
        <h2 id="epg-vod-heading" className="text-[24px] text-white md:text-[28px]">
          EPG, VOD en verbindingen
        </h2>
        <p>
          Na het inloggen toont de speler live zenders, de <strong className="text-white">EPG</strong> (programmagids,
          als die beschikbaar is) en, in dezelfde dienst, de bibliotheek{" "}
          <strong className="text-white">VOD</strong> (films en series op aanvraag). Check altijd het actieve aanbod
          op je account — zie ook{" "}
          <Link href="/kanalen" className="text-white underline-offset-4 hover:underline">
            Zenders
          </Link>
          .
        </p>
        <p>
          Abonnementen hebben <strong className="text-white">1, 2 of 3 verbindingen</strong>: hoeveel schermen tegelijk
          kunnen afspelen. Twee streams (bijvoorbeeld woonkamer + telefoon) vragen een abonnement met 2 verbindingen.
          Details op{" "}
          <Link href="/prijzen" className="text-white underline-offset-4 hover:underline">
            Prijzen
          </Link>
          .
        </p>
      </section>

      <section className="mt-16 max-w-3xl space-y-4 text-[15px] leading-[1.6] text-slate" aria-labelledby="beginnen-heading">
        <h2 id="beginnen-heading" className="text-[24px] text-white md:text-[28px]">
          Zo begin je
        </h2>
        <ol className="list-decimal space-y-3 pl-5">
          <li>
            Optioneel: vraag de <strong className="text-white">proef van 24 uur</strong> aan bij support om apparaat en
            netwerk te testen.
          </li>
          <li>
            Kies het abonnement op{" "}
            <Link href="/prijzen" className="text-white underline-offset-4 hover:underline">
              Prijzen
            </Link>{" "}
            (1, 2 of 3 verbindingen) en rond de betaling af.
          </li>
          <li>Ontvang de inloggegevens per e-mail en bewaar ze.</li>
          <li>Installeer een compatibele speler uit de officiële winkel van jouw apparaat.</li>
          <li>
            Volg de{" "}
            <Link href="/installatiegidsen" className="text-white underline-offset-4 hover:underline">
              gids van het apparaat
            </Link>{" "}
            — Xtream Codes (of MAG-portal, als dat jouw geval is).
          </li>
          <li>Laad de categorieën, zet favorieten vast en begin te kijken.</li>
        </ol>
      </section>

      <section className="mt-16 max-w-3xl space-y-4 text-[15px] leading-[1.6] text-slate" aria-labelledby="problemen-heading">
        <h2 id="problemen-heading" className="text-[24px] text-white md:text-[28px]">
          Veelvoorkomende problemen
        </h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="text-white">Invalid details</strong> — typefout in de URL of het wachtwoord, of het
            verkeerde logintype (M3U versus Xtream).
          </li>
          <li>
            <strong className="text-white">Buffering</strong> — bijna altijd netwerk of wifi; zie de checklist op het
            blog.
          </li>
          <li>
            <strong className="text-white">Geen streams</strong> — inactief abonnement of verbindingen op (een ander
            scherm gebruikt het account).
          </li>
          <li>
            <strong className="text-white">Onbekende APK's</strong> — vermijd ze; gebruik de officiële winkel en
            support.
          </li>
        </ul>
        <p>
          Checklist:{" "}
          <Link
            href="/blog/iptv-werkt-niet-buffering-nederland"
            className="text-white underline-offset-4 hover:underline"
          >
            IPTV werkt niet / buffering
          </Link>
          . Meer antwoorden:{" "}
          <Link href="/veelgestelde-vragen" className="text-white underline-offset-4 hover:underline">
            FAQ
          </Link>
          .
        </p>
      </section>

      <section className="mt-16" aria-labelledby="faq-apps-heading">
        <h2 id="faq-apps-heading" className="text-[24px] text-white md:text-[28px]">
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
              href: "/installatiegidsen",
              label: "Installatiegidsen",
              description: "Stap voor stap voor smart-tv, Android, Fire Stick, iOS en MAG.",
            },
            {
              href: "/prijzen",
              label: "Prijzen en abonnementen",
              description: "1, 2 of 3 verbindingen — kies het juiste abonnement.",
            },
            {
              href: "/kanalen",
              label: "Zenderaanbod",
              description: "Nederlandse zenders, sport en VOD.",
            },
            {
              href: "/wat-is-iptv",
              label: "Wat is IPTV",
              description: "Hoe de dienst en de speler werken.",
            },
            {
              href: "/veelgestelde-vragen",
              label: "Algemene FAQ",
              description: "Installatie, buffering en support.",
            },
            {
              href: "/over-ons",
              label: "Over ons",
              description: "Werkwijze, support en transparantie.",
            },
            {
              href: "/blog/iptv-smarters-pro-nederland",
              label: "IPTV Smarters Pro Nederland",
              description: "Xtream-login en veelvoorkomende fouten.",
            },
            {
              href: "/blog/beste-app-iptv-nederland",
              label: "Beste IPTV-apps",
              description: "Spelers vergelijken op de Fire Stick.",
            },
            {
              href: "/blog/iptv-werkt-niet-buffering-nederland",
              label: "Buffering / IPTV werkt niet",
              description: "Checklist voor netwerk en speler.",
            },
            {
              href: "/blog/iptv-legaal-nederland",
              label: "IPTV en legaliteit in Nederland",
              description: "Nuttige context voordat je kiest.",
            },
          ]}
        />
      </div>

      <section className="mt-16 border border-line bg-surface p-8 md:p-10">
        <h2 className="text-[24px] text-white">Klaar om je apparaat in te stellen?</h2>
        <p className="mt-3 max-w-2xl text-[15px] text-slate">
          Kies het abonnement met de juiste verbindingen, vraag de proef van 24 uur aan als je het netwerk wilt testen
          en volg de gids van jouw apparaat. Na de aankoop heb je 7 dagen garantie en support 24/7.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/prijzen" className="btn btn-solid">
            Bekijk abonnementen
          </Link>
          <Link href="/installatiegidsen" className="btn btn-ghost">
            Bekijk installatiegidsen
          </Link>
        </div>
      </section>
    </div>
  );
}
