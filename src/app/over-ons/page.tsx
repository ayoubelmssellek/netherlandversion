import Link from "next/link";
import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import RelatedContent from "@/components/RelatedContent";
import { site } from "@/data/content";
import { aboutPageJsonLd, buildMetadata } from "@/lib/seo";
import { getWhatsAppIntl } from "@/lib/whatsapp";

const pageDescription =
  "Over BesteIPTVNederland: wie we zijn, wat we bieden en hoe we klanten in Nederland helpen — support 24/7, breed aanbod, proef van 24 uur en garantie van 7 dagen.";

export const metadata: Metadata = buildMetadata({
  title: "BesteIPTVNederland — over de IPTV-dienst in Nederland",
  description: pageDescription,
  path: "/over-ons",
});

const breadcrumbItems = [
  { name: "Home", path: "/" },
  { name: "Over ons", path: "/over-ons" },
];

function supportWhatsAppHref(): string {
  const message = [
    "Hoi BesteIPTVNederland,",
    "",
    "Ik wil een vraag over de dienst stellen / de proef van 24 uur aanvragen.",
  ].join("\n");
  return `https://wa.me/${getWhatsAppIntl()}?text=${encodeURIComponent(message)}`;
}

export default function OverOnsPage() {
  const wa = supportWhatsAppHref();

  return (
    <div className="section-shell py-16 md:py-24">
      <JsonLd
        data={[
          aboutPageJsonLd({
            name: "Over BesteIPTVNederland",
            description: pageDescription,
            path: "/over-ons",
          }),
        ]}
      />
      <Breadcrumbs items={breadcrumbItems} />

      <p className="label">Over BesteIPTVNederland</p>
      <h1 className="mt-4 max-w-3xl text-[40px] tracking-[-1.2px] text-white md:text-[48px]">
        Wie we zijn — BesteIPTVNederland
      </h1>
      <p className="mt-4 max-w-3xl text-[16px] leading-[1.55] text-slate">
        {site.name} is een betaalde IPTV-dienst voor wie in Nederland live zenders, sport en VOD wil kijken op het
        apparaat dat je al hebt — met openbare abonnementen, begeleide installatie en Nederlandstalige hulp als er iets
        misgaat.
      </p>
      <p className="mt-4 max-w-3xl text-[16px] leading-[1.55] text-slate">
        Deze pagina legt uit hoe we werken, wat erbij zit, welke support je kunt verwachten en hoe je het risico klein
        houdt voordat je een abonnement neemt. We vragen geen blind vertrouwen: we laten het model zien en verwijzen
        naar het aanbod, de prijzen en de echte handleidingen op de site.
      </p>

      <section className="mt-14 max-w-3xl space-y-4 text-[15px] leading-[1.6] text-slate">
        <h2 className="text-[24px] text-white">Onze aanpak</h2>
        <p>
          Veel mensen zoeken IPTV nadat ze vastlopen in starre pakketten, lange contracten of gedeelde «lijsten» die
          elke week een ander adres hebben. Onze lijn is simpel: toegang tot een dienst met een duidelijke activatie,
          een vast aantal verbindingen en iemand die in het Nederlands antwoordt als de login of het netwerk faalt.
        </p>
        <p>
          We leggen liever uit wat erbij zit — en wat van jouw internet of apparaat afhangt — dan dat we wonderen
          beloven. De abonnementen staan op{" "}
          <Link href="/prijzen" className="text-white underline-offset-4 hover:underline">
            Prijzen
          </Link>
          ; het aanbod en de sport op{" "}
          <Link href="/kanalen" className="text-white underline-offset-4 hover:underline">
            Zenders
          </Link>
          ; de installatie bij{" "}
          <Link href="/applicaties" className="text-white underline-offset-4 hover:underline">
            Applicaties
          </Link>{" "}
          en in de{" "}
          <Link href="/installatiegidsen" className="text-white underline-offset-4 hover:underline">
            gidsen per apparaat
          </Link>
          .
        </p>
        <p>
          Over de naam: «BesteIPTVNederland» en het domein besteiptvnederland.shop horen bij deze dienst. Vergelijkbare
          namen in andere winkels of op social media zijn deze site niet — check altijd de website en het
          supportadres ({site.email}) voordat je betaalt.
        </p>
      </section>

      <section className="mt-14" aria-labelledby="over-cijfers-heading">
        <h2 id="over-cijfers-heading" className="text-[24px] text-white">
          BesteIPTVNederland in cijfers
        </h2>
        <p className="mt-3 max-w-3xl text-[15px] leading-[1.55] text-slate">
          Cijfers van de dienst die je kunt vergelijken met de abonnemententabel en het aanbod. Of een zender of titel
          er op een dag is, hangt af van het actieve abonnement en updates van de catalogus.
        </p>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { t: "+45.000", d: "Live zenders" },
            { t: "+200.000", d: "Films in VOD" },
            { t: "+40.000", d: "Series in VOD" },
            { t: "99,9%", d: "Beschikbaarheid" },
            { t: "24/7", d: "Support" },
            { t: "1 · 2 · 3", d: "Verbindingen per abonnement" },
          ].map((item) => (
            <li key={item.d} className="border border-line bg-deep px-5 py-6">
              <p className="text-[28px] tracking-[-0.6px] text-white">{item.t}</p>
              <p className="mt-2 text-[14px] text-slate">{item.d}</p>
            </li>
          ))}
        </ul>
        <p className="mt-6 max-w-3xl text-[14px] text-slate">
          Bij de hoofdpakketten:{" "}
          <Link href="/pack-kwartaal" className="text-white underline-offset-4 hover:underline">
            Kwartaal €25
          </Link>
          ,{" "}
          <Link href="/pack-basis" className="text-white underline-offset-4 hover:underline">
            Basis €45
          </Link>
          ,{" "}
          <Link href="/pack-premium" className="text-white underline-offset-4 hover:underline">
            Premium €89
          </Link>{" "}
          en{" "}
          <Link href="/pack-familie" className="text-white underline-offset-4 hover:underline">
            Familie €104
          </Link>
          . Vergelijk de volledige tabel op{" "}
          <Link href="/prijzen" className="text-white underline-offset-4 hover:underline">
            Prijzen
          </Link>
          .
        </p>
      </section>

      <section className="mt-16 max-w-3xl space-y-4 text-[15px] leading-[1.6] text-slate">
        <h2 className="text-[24px] text-white">Wat we bieden</h2>
        <p>
          De dienst combineert live televisie en een bibliotheek op aanvraag in één toegang, met login in de speler
          (meestal Xtream Codes) nadat het abonnement actief is.
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="text-white">Live zenders (+45.000)</strong> — met nadruk op Nederlandse zenders en
            sport, volgens het actieve aanbod van je account.
          </li>
          <li>
            <strong className="text-white">VOD</strong> — +200.000 films en +40.000 series, wanneer jij wilt, naast de
            live stream.
          </li>
          <li>
            <strong className="text-white">Kwaliteit</strong> — streams in HD / FHD en tot 4K als de bron, het apparaat
            en je internetverbinding dat toelaten.
          </li>
          <li>
            <strong className="text-white">EPG en catch-up</strong> — programmagids en programma's terugkijken als dat
            bij de dienst en de speler hoort.
          </li>
          <li>
            <strong className="text-white">Apparaten</strong> — smart-tv, Android, Fire Stick, iOS, MAG en pc, met
            eigen handleidingen.
          </li>
          <li>
            <strong className="text-white">Verbindingen</strong> — abonnementen met 1, 2 of 3 gelijktijdige streams,
            passend bij je huis, zonder een nep «onbeperkt».
          </li>
        </ul>
        <p>
          Wil je de techniek in het algemeen begrijpen? Lees{" "}
          <Link href="/wat-is-iptv" className="text-white underline-offset-4 hover:underline">
            wat IPTV is
          </Link>
          . Voorbeelden van zenders en sport? Open{" "}
          <Link href="/kanalen" className="text-white underline-offset-4 hover:underline">
            IPTV-zenders Nederland
          </Link>
          .
        </p>
      </section>

      <section className="mt-16 max-w-3xl space-y-6 text-[15px] leading-[1.6] text-slate">
        <h2 className="text-[24px] text-white">Waarom BesteIPTVNederland</h2>
        <div>
          <h3 className="text-[18px] text-white">Gericht op Nederlandse kijkgewoonten</h3>
          <p className="mt-2">
            We richten ons op het dagelijks leven in Nederland: nieuws van NPO, RTL en NOS, entertainment en sport
            (waaronder ESPN en de Eredivisie als die in het actieve aanbod zitten). De dienst is er voor een
            hoofdscherm thuis — en ook voor een telefoon of tablet als tweede scherm, binnen het aantal verbindingen
            van je abonnement.
          </p>
        </div>
        <div>
          <h3 className="text-[18px] text-white">Begeleide installatie</h3>
          <p className="mt-2">
            Na betaling krijg je de inloggegevens en volg je de gids van jouw apparaat. De meeste problemen zitten in
            de eerste login (URL, wachtwoord, type account in de speler) — daar maken support en de handleidingen het
            verschil. Begin bij het overzicht van{" "}
            <Link href="/applicaties" className="text-white underline-offset-4 hover:underline">
              applicaties
            </Link>{" "}
            of bij het{" "}
            <Link href="/installatiegidsen" className="text-white underline-offset-4 hover:underline">
              installatie-overzicht
            </Link>
            .
          </p>
        </div>
        <div>
          <h3 className="text-[18px] text-white">Eerlijke verbindingen</h3>
          <p className="mt-2">
            Een scherm dat afspeelt telt als één verbinding. Kijken de woonkamer en de slaapkamer tegelijk de
            wedstrijd, dan heb je twee verbindingen nodig. De pakketten en de prijzentabel maken die keuze expliciet.
          </p>
        </div>
        <div>
          <h3 className="text-[18px] text-white">Continuïteit op wedstrijdavonden</h3>
          <p className="mt-2">
            We mikken op een stabiele ervaring voor dagelijks gebruik en pieken in kijkers (uptime van 99,9%). Toch
            hangt de kwaliteit op je bank ook af van wifi, router en de bitrate van de zender. In de{" "}
            <Link href="/veelgestelde-vragen" className="text-white underline-offset-4 hover:underline">
              veelgestelde vragen
            </Link>{" "}
            en op het blog vind je checklists als het beeld hapert.
          </p>
        </div>
        <div>
          <h3 className="text-[18px] text-white">Echte mensen bij support</h3>
          <p className="mt-2">
            Je praat met ons via WhatsApp (vanaf de site) en via e-mail — niet met een algemene chatbot die je
            abonnement niet kent. Wat je kunt verwachten, staat in de volgende sectie.
          </p>
        </div>
      </section>

      <section className="mt-16 max-w-3xl border border-line bg-surface p-6 md:p-8">
        <h2 className="text-[24px] text-white">Echte support in het Nederlands</h2>
        <p className="mt-3 text-[15px] leading-[1.55] text-slate">
          Support 24/7 voor urgente vragen over login en activatie. Bij pieken (wedstrijdavonden, weekenden) kunnen
          complexere vragen langer duren — maar het kanaal bestaat en antwoordt in het Nederlands.
        </p>
        <ul className="mt-6 space-y-3 text-[14px] text-slate">
          <li>
            <span className="text-white">Kanalen:</span> WhatsApp (knop / link op de site) en e-mail{" "}
            <a href={`mailto:${site.email}`} className="text-white underline-offset-4 hover:underline">
              {site.email}
            </a>
          </li>
          <li>
            <span className="text-white">Eerste reactie meestal:</span> van minuten tot een paar uur via WhatsApp; per
            e-mail dezelfde werkdag in de meeste gevallen
          </li>
          <li>
            <span className="text-white">We helpen met:</span> inloggegevens, keuze van speler (bijvoorbeeld IPTV
            Smarters), verlengen, aantal verbindingen en veelvoorkomende installatiefouten
          </li>
          <li>
            <span className="text-white">Wat we niet doen:</span> anonieme gratis M3U-lijsten sturen of support geven
            voor afspeellijsten van derden die je op een forum vond
          </li>
        </ul>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href={wa} target="_blank" rel="noopener noreferrer" className="btn btn-solid">
            Praten via WhatsApp
          </a>
          <a href={`mailto:${site.email}`} className="btn btn-ghost">
            E-mail sturen
          </a>
        </div>
      </section>

      <section className="mt-16 max-w-3xl space-y-4 text-[15px] leading-[1.6] text-slate">
        <h2 className="text-[24px] text-white">Voor wie de dienst is</h2>
        <p>Het past vooral als je jezelf in een van deze situaties herkent:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="text-white">Eén hoofdscherm</strong> — smart-tv of Fire Stick in de woonkamer, abonnement
            met 1 verbinding (bijvoorbeeld Pakket Basis of Kwartaal).
          </li>
          <li>
            <strong className="text-white">Huis met meerdere schermen</strong> — woonkamer + slaapkamer of tablet
            tegelijk: 2 verbindingen (Premium) of 3 (Familie).
          </li>
          <li>
            <strong className="text-white">Sport</strong> — wie favorieten van ESPN en de Eredivisie wil ordenen en op
            wedstrijdavond een netwerk en genoeg verbindingen nodig heeft.
          </li>
          <li>
            <strong className="text-white">Dagelijks kijken en VOD</strong> — Nederlandse zenders doordeweeks; films en
            series als live tv niet genoeg is.
          </li>
          <li>
            <strong className="text-white">Eerst testen voordat je een jaar betaalt</strong> — begin met de proef van
            24 uur en, als dat klopt, met een kortere looptijd vóór het jaarabonnement.
          </li>
        </ul>
      </section>

      <section className="mt-16 max-w-3xl space-y-4 text-[15px] leading-[1.6] text-slate">
        <h2 className="text-[24px] text-white">Proef, garantie en vertrouwen</h2>
        <p>
          Je kunt een <strong className="text-white">proef van 24 uur</strong> bij support aanvragen voordat je
          betaalt, om je smart-tv, Fire Stick of telefoon op jouw netwerk te testen. Het is geen permanente gratis
          IPTV: het verkleint het risico.
        </p>
        <p>
          Na de aankoop geldt de <strong className="text-white">tevredenheidsgarantie van 7 dagen</strong> volgens het{" "}
          <Link href="/retourbeleid" className="text-white underline-offset-4 hover:underline">
            Retourbeleid
          </Link>
          . Lees ook de{" "}
          <Link href="/voorwaarden" className="text-white underline-offset-4 hover:underline">
            Algemene voorwaarden
          </Link>{" "}
          en het{" "}
          <Link href="/privacybeleid" className="text-white underline-offset-4 hover:underline">
            Privacybeleid
          </Link>
          .
        </p>
        <p>
          Meer over hoe de proef werkt:{" "}
          <Link href="/blog/proef-iptv-nederland" className="text-white underline-offset-4 hover:underline">
            Proef IPTV Nederland
          </Link>
          . Over gratis lijsten en risico's:{" "}
          <Link href="/blog/iptv-legaal-nederland" className="text-white underline-offset-4 hover:underline">
            Gratis IPTV-lijsten Nederland — risico's en legaliteit
          </Link>
          .
        </p>
      </section>

      <section className="mt-16 max-w-3xl space-y-4 text-[15px] leading-[1.6] text-slate">
        <h2 className="text-[24px] text-white">Dienstafspraken</h2>
        <p>
          We publiceren geen verzonnen beoordelingen en geen fictieve klantnamen. Dit zijn de afspraken waar je in de
          praktijk op kunt rekenen:
        </p>
        <ul className="list-disc space-y-3 pl-5">
          <li>
            <strong className="text-white">Activatie na betaling</strong> — we sturen de toegangsgegevens en helpen als
            de eerste login faalt.
          </li>
          <li>
            <strong className="text-white">Prijzen en verbindingen zichtbaar</strong> — pakketten vanaf €25 (kwartaal),
            €45 (basis), €89 (premium) en €104 (familie), met 1, 2 of 3 verbindingen afhankelijk van het abonnement.
          </li>
          <li>
            <strong className="text-white">Support 24/7</strong> — e-mail en WhatsApp voor installatie, verlengen en
            configuratieproblemen.
          </li>
          <li>
            <strong className="text-white">Duidelijkheid over proef en garantie</strong> — 24 uur op aanvraag; 7 dagen
            garantie volgens de gepubliceerde voorwaarden.
          </li>
          <li>
            <strong className="text-white">Breed aanbod</strong> — live en VOD in de genoemde omvang, met kwaliteit tot
            4K als de hele keten (bron, netwerk, apparaat) dat toelaat.
          </li>
        </ul>
      </section>

      <section className="mt-16 max-w-3xl border border-line bg-deep p-6 md:p-8">
        <h2 className="text-[24px] text-white">Contact</h2>
        <ul className="mt-4 space-y-3 text-[14px] text-slate">
          <li>
            E-mail:{" "}
            <a href={`mailto:${site.email}`} className="text-white underline-offset-4 hover:underline">
              {site.email}
            </a>
          </li>
          <li>
            WhatsApp:{" "}
            <a href={wa} target="_blank" rel="noopener noreferrer" className="text-white underline-offset-4 hover:underline">
              bericht sturen vanaf de site
            </a>{" "}
            (het nummer staat niet als tekst op de site)
          </li>
          <li>
            Web:{" "}
            <Link href="/" className="text-white underline-offset-4 hover:underline">
              Homepagina
            </Link>
          </li>
        </ul>
      </section>

      <RelatedContent
        title="Verder kijken"
        links={[
          {
            href: "/prijzen",
            label: "Abonnementen en prijzen",
            description: "Volledige tabel en pakketten met 1, 2 of 3 verbindingen.",
          },
          {
            href: "/kanalen",
            label: "Zenders en sport",
            description: "Nederlandse zenders, ESPN en categorieën.",
          },
          {
            href: "/applicaties",
            label: "Applicaties en apparaten",
            description: "Spelers en een overzicht van de installatie.",
          },
          {
            href: "/veelgestelde-vragen",
            label: "Veelgestelde vragen",
            description: "Installatie, betaling, proef en support.",
          },
          {
            href: "/wat-is-iptv",
            label: "Wat is IPTV",
            description: "Hoe de techniek werkt en wat je nodig hebt.",
          },
          {
            href: "/verlengen",
            label: "Abonnement verlengen",
            description: "Al klant? Verleng je toegang.",
          },
        ]}
      />

      <section className="mt-16 border border-line bg-surface p-8 md:p-10">
        <h2 className="text-[24px] text-white">Klaar voor de volgende stap?</h2>
        <p className="mt-3 max-w-2xl text-[15px] text-slate">
          Vergelijk de abonnementen of vraag de proef van 24 uur aan bij support om je netwerk en hoofdapparaat te
          testen.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/prijzen" className="btn btn-solid">
            Bekijk abonnementen
          </Link>
          <a href={wa} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
            Proef van 24 uur aanvragen
          </a>
          <Link href="/kanalen" className="btn btn-ghost">
            Bekijk zenders
          </Link>
        </div>
      </section>
    </div>
  );
}
