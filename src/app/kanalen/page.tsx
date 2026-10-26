import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQ from "@/components/FAQ";
import JsonLd from "@/components/JsonLd";
import ChannelCategories from "@/components/channels/ChannelCategories";
import ChannelsFinalCta from "@/components/channels/ChannelsFinalCta";
import ChannelsHero from "@/components/channels/ChannelsHero";
import ChannelsSportAuthority from "@/components/channels/ChannelsSportAuthority";
import ChannelsStats from "@/components/channels/ChannelsStats";
import FeaturedDutchChannels from "@/components/channels/FeaturedDutchChannels";
import InternationalChannels from "@/components/channels/InternationalChannels";
import DutchSports from "@/components/channels/DutchSports";
import StreamingPlatforms from "@/components/channels/StreamingPlatforms";
import WhyLibrary from "@/components/channels/WhyLibrary";
import RelatedContent from "@/components/RelatedContent";
import { channelLogos, entertainmentBrands, sportsBrands } from "@/data/media";
import { buildMetadata, faqJsonLd, itemListJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "IPTV-zenders Nederland — NPO, sport en VOD",
  description:
    "Zenderaanbod IPTV Nederland: voorbeelden als NPO, RTL en ESPN, sport met de Eredivisie, EPG, films en series. Ontdek wat je bij BesteIPTVNederland vindt en hoe je begint.",
  path: "/kanalen",
});

const breadcrumbItems = [
  { name: "Home", path: "/" },
  { name: "IPTV-zenders Nederland", path: "/kanalen" },
];

const pageFaqs = [
  {
    q: "Welke Nederlandse zenders zijn beschikbaar?",
    a: "Voorbeelden op deze pagina zijn algemene zenders zoals NPO, RTL en ESPN, plus nieuws (NOS) en sport — afhankelijk van het actieve aanbod van je abonnement. Check het altijd in de app na het inloggen.",
  },
  {
    q: "Zitten er sportzenders bij?",
    a: "Ja. In de speler is er een sportcategorie, met focus op de Eredivisie, ESPN en andere sportzenders als ze beschikbaar zijn. De exacte dekking hangt af van het actieve aanbod.",
  },
  {
    q: "Kan ik ESPN en de Eredivisie vinden?",
    a: "ESPN en de Eredivisie horen bij het sportaanbod als ze actief zijn op je abonnement. Log in met Xtream, zoek ze in de categorie Sport en zet ze bij je favorieten.",
  },
  {
    q: "Hoe vind ik zenders na het inloggen?",
    a: "Blader in de speler door de categorieën (Nederland, Sport, Nieuws, VOD, enzovoort), gebruik de zoekfunctie van de app als die er is en pin favorieten. Support helpt als een zender niet laadt.",
  },
  {
    q: "Wat is de EPG?",
    a: "De EPG is de elektronische programmagids: de tijden en programma's in de speler. Je ziet wat er nu draait en wat daarna komt — als de zender en het aanbod dat meeleveren.",
  },
  {
    q: "Zitten er films en series bij?",
    a: "Ja. Naast live zenders is er VOD — meer dan 200.000 films en meer dan 40.000 series. Of een titel er is, kan veranderen.",
  },
  {
    q: "Werkt het op een smart-tv?",
    a: "Ja. Smart-tv, Fire Stick, Android, iOS, MAG en pc met een compatibele speler. Zie de applicaties en de installatiegidsen.",
  },
  {
    q: "Kan ik meer dan één verbinding gebruiken?",
    a: "Abonnementen hebben 1, 2 of 3 verbindingen — het aantal schermen tegelijk. Twee streams vragen een abonnement met 2 verbindingen. Vergelijk op Prijzen.",
  },
  {
    q: "Werkt de dienst met een gratis M3U?",
    a: "We werken niet met anonieme gratis M3U-lijsten. BesteIPTVNederland is een betaalde dienst met privé-inloggegevens en support. Gedeelde lijsten zijn instabiel en horen niet bij ons model.",
  },
  {
    q: "Is er een gratis proef?",
    a: "Je kunt bij support een proef van 24 uur aanvragen voordat je betaalt, om apparaat en netwerk te testen. Na de aankoop geldt de garantie van 7 dagen volgens het Retourbeleid.",
  },
  {
    q: "Hoe begin ik?",
    a: "Kies een abonnement op Prijzen, rond de betaling af, ontvang de gegevens en stel een speler in. De installatiegidsen en het app-overzicht helpen je stap voor stap.",
  },
  {
    q: "Kan het aanbod veranderen?",
    a: "Ja. Zenders en VOD-titels kunnen worden bijgewerkt. Check wat je nodig hebt in de speler met je actieve account; support legt een specifieke beschikbaarheid uit.",
  },
];

// Logo lookup keys (entities) come from src/data/media.ts — keep in sync with that file.
const dutchChannels = channelLogos;
const heroLogos = channelLogos;

export default function ChannelsPage() {
  return (
    <main>
      <JsonLd
        data={[
          faqJsonLd(pageFaqs),
          ...(dutchChannels.length
            ? [
                itemListJsonLd({
                  name: "Uitgelichte Nederlandse zenders",
                  description:
                    "Selectie van Nederlandse zenders op deze cataloguspagina van BesteIPTVNederland (dit is geen M3U-lijst om te downloaden).",
                  path: "/kanalen",
                  items: dutchChannels.map((channel) => ({ name: channel.entity })),
                }),
              ]
            : []),
        ]}
      />

      <div className="section-shell pt-8 md:pt-10">
        <Breadcrumbs items={breadcrumbItems} />
      </div>

      <ChannelsHero floatingLogos={heroLogos} />

      <section className="section-shell py-16 md:py-20" aria-labelledby="catalogus-heading">
        <p className="label">Hoe het werkt</p>
        <h2 id="catalogus-heading" className="mt-4 max-w-2xl text-[32px] tracking-[-0.8px] text-white md:text-[40px]">
          Hoe het aanbod van BesteIPTVNederland werkt
        </h2>
        <div className="mt-6 max-w-3xl space-y-4 text-[15px] leading-[1.6] text-slate">
          <p>
            BesteIPTVNederland is een <strong className="text-white">betaalde IPTV-dienst</strong>: na de aankoop krijg
            je privé-inloggegevens en laad je het aanbod in een compatibele speler (meestal Xtream Codes). Zenders en
            VOD staan in categorieën in de app — het is geen anonieme M3U-lijst van een forum.
          </p>
          <p>
            Of een zender of titel er is, kan veranderen. Check altijd het actieve aanbod in de speler met je account.
            Voor de techniek, lees{" "}
            <Link href="/wat-is-iptv" className="text-white underline decoration-white/30 underline-offset-2 hover:decoration-white">
              wat IPTV is
            </Link>
            ; om een speler te kiezen, zie de{" "}
            <Link href="/applicaties" className="text-white underline decoration-white/30 underline-offset-2 hover:decoration-white">
              compatibele applicaties
            </Link>
            .
          </p>
        </div>
      </section>

      <ChannelCategories />

      <FeaturedDutchChannels channels={dutchChannels} />

      <DutchSports sportsLogos={sportsBrands} channelLogos={channelLogos} />
      <ChannelsSportAuthority />

      <section className="section-shell py-16 md:py-20" aria-labelledby="meer-categorieen-heading">
        <p className="label">Meer dan sport</p>
        <h2 id="meer-categorieen-heading" className="mt-4 max-w-2xl text-[32px] tracking-[-0.8px] text-white md:text-[40px]">
          Nieuws, kinderprogramma's en entertainment
        </h2>
        <div className="mt-6 max-w-3xl space-y-4 text-[15px] leading-[1.6] text-slate">
          <p>
            Het aanbod is meer dan voetbal. Bij nieuws horen bekende voorbeelden als NOS, NPO en RTL Nieuws — handig
            voor de dagelijkse routine in Nederland. Er zijn ook entertainment- en kindercategorieën voor gezinnen;
            check de exacte namen in de speler na het inloggen.
          </p>
          <p>
            Gebruik favorieten en categorieën in de speler voor wat er thuis toe doet: nieuws in de ochtend, sport in
            de avond, kinderprogramma's in het weekend. Geen verzonnen cijfers — wat telt, is wat er op jouw account
            actief is.
          </p>
        </div>
      </section>

      <section id="vod" className="section-shell scroll-mt-24 pb-8 md:pb-10" aria-labelledby="vod-heading">
        <p className="label">Live en on demand</p>
        <h2 id="vod-heading" className="mt-4 max-w-2xl text-[32px] tracking-[-0.8px] text-white md:text-[40px]">
          Films, series en VOD
        </h2>
        <div className="mt-6 max-w-3xl space-y-4 text-[15px] leading-[1.6] text-slate">
          <p>
            <strong className="text-white">Live tv</strong> volgt de lineaire gids (nieuws, sport, algemene zenders).{" "}
            <strong className="text-white">VOD</strong> (video on demand) zijn films en series op aanvraag, in dezelfde
            dienst en met dezelfde toegang. In de dienst zitten meer dan 200.000 films en meer dan 40.000 series.
          </p>
          <p>
            De platformlogo's hieronder zijn een visuele verwijzing naar het soort content — ze betekenen niet dat
            officiële abonnementen op Netflix, Disney+, HBO Max of vergelijkbare diensten in het pakket zitten.
          </p>
        </div>
      </section>
      <StreamingPlatforms platforms={entertainmentBrands} />

      <section className="border-y border-line bg-deep py-16 md:py-20" aria-labelledby="epg-heading">
        <div className="section-shell max-w-3xl">
          <p className="label">Tv-gids</p>
          <h2 id="epg-heading" className="mt-4 text-[32px] tracking-[-0.8px] text-white md:text-[40px]">
            EPG — elektronische programmagids
          </h2>
          <div className="mt-6 space-y-4 text-[15px] leading-[1.6] text-slate">
            <p>
              De <strong className="text-white">EPG</strong> (Electronic Programme Guide) is de programmagids in de
              speler: je ziet wat er nu draait, wat daarna komt en je navigeert makkelijker.
            </p>
            <p>
              De EPG komt via een compatibele app, als de zender en het aanbod die meeleveren. We claimen geen dekking
              van 100% van alle zenders — check het op je apparaat na het inloggen.
            </p>
          </div>
        </div>
      </section>

      <InternationalChannels />

      <section className="section-shell py-16 md:py-20" aria-labelledby="apparaten-heading">
        <p className="label">Waar je kijkt</p>
        <h2 id="apparaten-heading" className="mt-4 max-w-2xl text-[32px] tracking-[-0.8px] text-white md:text-[40px]">
          Apparaten en applicaties
        </h2>
        <div className="mt-6 max-w-3xl space-y-4 text-[15px] leading-[1.6] text-slate">
          <p>
            Het aanbod verschijnt in de <strong className="text-white">speler</strong> — de app die je op het apparaat
            installeert. Gangbare apparaten: smart-tv, Fire Stick, Android, iOS, MAG en pc. Kies de juiste app en stel
            Xtream in (of de methode die voor MAG geldt).
          </p>
          <p>
            Deze pagina legt het aanbod uit; de installatie stap voor stap staat in de gidsen. Dit vervangt geen
            volledige handleiding.
          </p>
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/applicaties" className="btn btn-solid" aria-label="Compatibele applicaties bekijken">
            Bekijk applicaties
          </Link>
          <Link href="/installatiegidsen" className="btn btn-ghost" aria-label="Installatiegidsen bekijken">
            Installatiegidsen
          </Link>
        </div>
      </section>

      <ChannelsStats />
      <WhyLibrary />

      <section className="section-shell py-16 md:py-24" aria-labelledby="faq-zenders-heading">
        <h2 id="faq-zenders-heading" className="mb-8 text-[24px] text-white md:text-[36px] md:tracking-[-0.9px]">
          Veelgestelde vragen over het aanbod
        </h2>
        <FAQ items={pageFaqs} />
      </section>

      <div className="section-shell pb-16 md:pb-24">
        <RelatedContent
          title="Verder kijken"
          links={[
            {
              href: "/prijzen",
              label: "Prijzen en abonnementen",
              description: "1, 2 of 3 verbindingen — kies het juiste abonnement.",
            },
            {
              href: "/applicaties",
              label: "Compatibele applicaties",
              description: "Smart-tv, Fire Stick, Android, iOS, MAG en pc.",
            },
            {
              href: "/wat-is-iptv",
              label: "Wat is IPTV",
              description: "Hoe de dienst en de speler werken.",
            },
            {
              href: "/installatiegidsen",
              label: "Installatiegidsen",
              description: "Stel de speler in op jouw apparaat.",
            },
            {
              href: "/veelgestelde-vragen",
              label: "Veelgestelde vragen",
              description: "Installatie, buffering en support.",
            },
            {
              href: "/over-ons",
              label: "Over ons",
              description: "Wie we zijn en hoe we werken.",
            },
            {
              href: "/blog/iptv-sport-nederland",
              label: "Sport op IPTV Nederland",
              description: "ESPN en sport kijken met abonnement en speler.",
            },
            {
              href: "/blog/iptv-eredivisie-nederland",
              label: "Eredivisie en clubzenders",
              description: "Clubvoetbal en speelrondes.",
            },
            {
              href: "/blog/iptv-werkt-niet-buffering-nederland",
              label: "Buffering tijdens de wedstrijd?",
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

      <ChannelsFinalCta />
    </main>
  );
}
