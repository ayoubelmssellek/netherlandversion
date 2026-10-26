import Link from "next/link";
import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQ from "@/components/FAQ";
import JsonLd from "@/components/JsonLd";
import Pricing from "@/components/Pricing";
import RelatedContent from "@/components/RelatedContent";
import { plans } from "@/data/content";
import { packList } from "@/data/packs";
import { getReviewStats } from "@/data/reviews";
import { getFamilyPlanPrice } from "@/lib/plan-pricing";
import { buildMetadata, faqJsonLd, productOffersJsonLd, serviceJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "IPTV Nederland kopen — abonnementen en prijzen",
  description:
    "IPTV Nederland kopen: tabel met abonnementen, prijs en 1–3 verbindingen. Officiële verkooppagina — activatie na betaling, proef van 24 uur en garantie van 7 dagen.",
  path: "/prijzen",
});

const breadcrumbItems = [
  { name: "Home", path: "/" },
  { name: "IPTV kopen", path: "/prijzen" },
];

const planFeatures = [
  "Live zenders (+45.000)",
  "Films en series (VOD) (+200.000 films · +40.000 series)",
  "Kwaliteit tot 4K / FHD / HD (afhankelijk van netwerk en aanbod)",
  "Tv-gids (EPG)",
  "Smart-tv, app, Fire Stick en box",
  "Beschikbaarheid 99,9% (dienstafspraak)",
  "Xtream Codes (M3U / MAG als dat wordt aangegeven)",
  "Inloggegevens na bevestiging van de betaling",
  "Support 24/7 (e-mail en WhatsApp)",
  "Proef van 24 uur op aanvraag",
  "Garantie van 7 dagen (Retourbeleid)",
];

const includedFeatures = [
  {
    title: "Meer dan 45.000 live zenders",
    body: "Lineaire televisie via internet — Nederlandse zenders, sport en internationale opties in hetzelfde abonnement.",
  },
  {
    title: "Meer dan 200.000 films en 40.000 series",
    body: "VOD-bibliotheek op aanvraag, naast de live zenders, bijgewerkt met het aanbod van de dienst.",
  },
  {
    title: "Beschikbaarheid 99,9%",
    body: "Beschikbaarheidsafspraak van de dienst. Hoe vloeiend het beeld is, hangt ook van je netwerk thuis af.",
  },
  {
    title: "Kwaliteit tot 4K",
    body: "Als de zender, het abonnement en je internet dat toelaten — Full HD en HD in het dagelijks gebruik.",
  },
  {
    title: "EPG en gangbare apparaten",
    body: "Programmagids in de speler. Stel smart-tv, Fire Stick, Android, iOS of MAG in nadat je de toegang hebt.",
  },
  {
    title: "1, 2 of 3 verbindingen",
    body: "Kies hoeveel schermen je tegelijk kunt gebruiken — passend bij je huis, zonder te betalen voor schermen die je niet gebruikt.",
  },
  {
    title: "Support 24/7",
    body: "Hulp in het Nederlands via e-mail en WhatsApp voor aankoop, installatie en verlengen.",
  },
  {
    title: "Proef 24 uur · garantie 7 dagen",
    body: "Test het netwerk voordat je betaalt; na de aankoop geldt de garantie volgens het Retourbeleid.",
  },
];

const connectionCompare = [
  {
    title: "1 verbinding",
    body: "Past als je op één scherm tegelijk kijkt — smart-tv in de woonkamer of Fire Stick. De telefoon kan hetzelfde account gebruiken, maar niet tegelijk met de tv.",
    bestFor: "Eén persoon / één hoofdscherm",
  },
  {
    title: "2 verbindingen",
    body: "Woonkamer + slaapkamer, of tv + tablet tegelijk. Zo voorkom je dat iemand anders je wedstrijd onderbreekt als er twee schermen aan staan.",
    bestFor: "Stel of twee vaste schermen",
  },
  {
    title: "3 verbindingen (gezinspakket)",
    body: "Meerdere tv's of een groter gezin. Elke live stream of VOD telt mee voor de limiet — kies alleen wat je nodig hebt.",
    bestFor: "Gezin / meerdere kamers",
  },
];

const pageFaqs = [
  {
    q: "Wat kosten de abonnementen van BesteIPTVNederland?",
    a: "De uitgelichte pakketten kosten €25, €45, €89 en €104, afhankelijk van de looptijd en het aantal verbindingen (1, 2 of 3). De tabel op deze pagina toont alle actuele prijzen — eenmalige betaling.",
  },
  {
    q: "Hoe koop en activeer ik de dienst?",
    a: "Kies het abonnement, ga naar betalen en rond het af. Na bevestiging ontvang je de inloggegevens. Daarna installeer je een compatibele speler (bijvoorbeeld met Xtream Codes) en begin je te kijken. Support helpt als je dat nodig hebt.",
  },
  {
    q: "1, 2 of 3 verbindingen — wat kies ik?",
    a: "1 verbinding: één scherm tegelijk. 2 verbindingen: twee schermen tegelijk (bijvoorbeeld woonkamer + slaapkamer). 3 verbindingen: gezinspakket voor meerdere tv's. Elk scherm dat afspeelt telt als één verbinding.",
  },
  {
    q: "Wat zit er in het abonnement?",
    a: "Meer dan 45.000 live zenders, meer dan 200.000 films en meer dan 40.000 series (VOD), kwaliteit tot 4K afhankelijk van je netwerk, EPG, support 24/7 en een beschikbaarheid van 99,9% (beschikbaarheidsafspraak). Voorbeelden van het aanbod staan op Zenders.",
  },
  {
    q: "Kan ik het proberen voordat ik een abonnement neem?",
    a: "Ja. Vraag bij support een proef van 24 uur aan om apparaat en netwerk te testen. Na de aankoop geldt de garantie van 7 dagen volgens het Retourbeleid.",
  },
  {
    q: "Hoe weet ik of het abonnement bij mijn huis past?",
    a: "Check hoeveel schermen je tegelijk nodig hebt, of je sport en Nederlandse zenders dagelijks wilt, en of je netwerk HD/4K aankan. Vergelijk de abonnementen op deze pagina en vraag zo nodig de proef van 24 uur aan.",
  },
  {
    q: "Ik ben al klant — hoe verleng ik?",
    a: "Gebruik de pagina Verlengen om de toegang te verlengen, of kies een nieuw abonnement op deze pagina als het huidige afloopt. Support wijst je de juiste route voor jouw situatie.",
  },
];

export default function PrijzenPage() {
  const offerPlans = [
    ...plans.one,
    ...plans.two,
    { id: "3conn", label: "1 jaar · 3 verbindingen", price: getFamilyPlanPrice() },
  ];
  const reviewStats = getReviewStats();

  return (
    <>
      <JsonLd
        data={[serviceJsonLd(), ...productOffersJsonLd(offerPlans), faqJsonLd(pageFaqs)]}
      />

      <section className="section-shell pb-10 pt-24 md:pb-12 md:pt-28">
        <Breadcrumbs items={breadcrumbItems} />
        <p className="animate-rise mt-6 label text-white/70">Abonnement · prijzen · verbindingen</p>
        <h1 className="animate-rise-delay-1 mt-4 max-w-3xl text-[40px] tracking-[-1.2px] text-white md:text-[48px] lg:text-[56px]">
          IPTV Nederland kopen
        </h1>
        <p className="animate-rise-delay-2 mt-5 max-w-2xl text-[16px] leading-[1.5] text-slate md:text-[18px]">
          Vergelijk abonnementen op looptijd en aantal verbindingen (1, 2 of 3). Uitgelichte pakketten voor €25, €45,
          €89 en €104 — eenmalige betaling, activatie na bevestiging en support 24/7 in het Nederlands.
        </p>
        <div className="animate-rise-delay-2 mt-8 flex flex-wrap gap-3">
          <a href="#abonnementen" className="btn btn-solid" aria-label="Abonnementen en prijzen IPTV Nederland bekijken">
            Bekijk abonnementen en prijzen
          </a>
          <Link href="/kanalen" className="btn btn-ghost" aria-label="IPTV-zenders Nederland bekijken">
            Bekijk Nederlandse zenders
          </Link>
        </div>
        <p className="mt-6 text-[13px] text-muted">
          Proef van 24 uur op aanvraag · garantie van 7 dagen · beschikbaarheid 99,9% (dienstafspraak)
          {reviewStats.reviewCount > 0 ? (
            <>
              {" "}
              ·{" "}
              <Link href="/beoordelingen" className="text-slate hover:text-white">
                {reviewStats.ratingValue.toFixed(1).replace(".", ",")}/5 · {reviewStats.reviewCount} beoordelingen
              </Link>
            </>
          ) : null}
        </p>
      </section>

      <div className="section-shell py-16 md:py-24">
        <div id="abonnementen">
          <Pricing features={planFeatures} />
        </div>

        <section className="mt-16 max-w-3xl" aria-labelledby="prijzen-lezen-heading">
          <h2 id="prijzen-lezen-heading" className="text-[24px] text-white md:text-[28px]">
            Zo lees je de prijzen en abonnementen
          </h2>
          <p className="mt-4 text-[15px] leading-7 text-slate">
            Langere abonnementen (6 maanden, 1 jaar) zijn meestal voordeliger omdat je in één keer betaalt en
            maandelijkse verlengingen niet vergeet. Het aantal verbindingen is niet «onbeperkt»: elk scherm dat
            tegelijk afspeelt, gebruikt één verbinding van het abonnement.
          </p>
          <p className="mt-3 text-[15px] leading-7 text-slate">
            Heb je alleen de woonkamer nodig, begin dan met 1 verbinding. Zijn er thuis twee kijkgewoonten, dan zijn 2
            verbindingen vaak de juiste balans. Voor drie schermen tegelijk kies je het pakket met 3 verbindingen. Op
            deze pagina staan de actuele prijzen en de checkout; voor de logica looptijd × verbindingen zonder de
            tabel, lees de gids{" "}
            <Link href="/blog/iptv-nederland-prijs-abonnementen" className="text-white underline-offset-4 hover:underline">
              zo lees je de IPTV-prijs
            </Link>
            . Praktische criteria naast de prijs:{" "}
            <Link href="/blog/beste-iptv-nederland-2026" className="text-white underline-offset-4 hover:underline">
              Beste IPTV Nederland 2026
            </Link>
            .
          </p>
        </section>

        <section className="mt-14" aria-labelledby="verbindingen-heading">
          <h2 id="verbindingen-heading" className="text-[24px] text-white md:text-[28px]">
            1 versus 2 versus 3 verbindingen
          </h2>
          <p className="mt-3 max-w-2xl text-[15px] leading-[1.55] text-slate">
            Het verkeerde aantal verbindingen is de meest voorkomende reden dat «IPTV eruit ligt» in huizen met
            meerdere schermen — vaak is het geen fout van de speler, maar de limiet van het abonnement.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {connectionCompare.map((item) => (
              <article key={item.title} className="border border-line bg-deep p-6">
                <h3 className="text-[18px] text-white">{item.title}</h3>
                <p className="mt-3 text-[14px] leading-[1.5] text-slate">{item.body}</p>
                <p className="mt-4 text-[13px] text-muted">Geschikt voor: {item.bestFor}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-16 border border-line bg-surface p-8 md:p-10" aria-labelledby="inbegrepen-heading">
          <h2 id="inbegrepen-heading" className="text-[24px] text-white md:text-[28px]">
            Inbegrepen bij alle abonnementen
          </h2>
          <p className="mt-3 max-w-2xl text-[15px] leading-[1.55] text-slate">
            Wat je krijgt met een BesteIPTVNederland-abonnement — met het resultaat in het dagelijks gebruik, niet alleen
            functienamen.
          </p>
          <ul className="mt-8 grid gap-8 sm:grid-cols-2">
            {includedFeatures.map((item) => (
              <li key={item.title}>
                <h3 className="text-[17px] text-white">{item.title}</h3>
                <p className="mt-2 text-[14px] leading-[1.5] text-slate">{item.body}</p>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-4 text-[14px]">
            <Link href="/blog/proef-iptv-nederland" className="text-slate hover:text-white">
              Zo werkt de IPTV-proef →
            </Link>
            <Link href="/verlengen" className="text-slate hover:text-white">
              Abonnement verlengen →
            </Link>
            <Link href="/applicaties" className="text-slate hover:text-white">
              Compatibele applicaties bekijken →
            </Link>
            <Link href="/veelgestelde-vragen" className="text-slate hover:text-white">
              Veelgestelde vragen — prijzen en support →
            </Link>
            <Link href="/over-ons" className="text-slate hover:text-white">
              Waarom BesteIPTVNederland →
            </Link>
          </div>
        </section>

        <section className="mt-16 max-w-3xl space-y-4 text-[15px] leading-7 text-slate" aria-labelledby="kopen-heading">
          <h2 id="kopen-heading" className="text-[24px] text-white md:text-[28px]">
            Zo koop je — van abonnement tot scherm
          </h2>
          <p>
            Het proces is rechttoe rechtaan: kies het abonnement op deze pagina, rond de betaling af in de checkout en
            ontvang na bevestiging de inloggegevens. Daarna installeer je een compatibele speler op het scherm dat je
            al hebt, vul je de toegangsgegevens in (meestal Xtream Codes) en begin je te kijken. We verkopen geen
            gedeelde lijsten van forums — we verkopen toegang tot BesteIPTVNederland met support in het Nederlands.
          </p>
          <ol className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              "Kies looptijd en aantal verbindingen",
              "Rond de betaling af in de checkout",
              "Ontvang de inloggegevens na bevestiging",
              "Stel de speler in en begin te kijken",
            ].map((step, i) => (
              <li key={step} className="border-t border-line pt-4 text-[14px] text-slate">
                <span className="micro text-white">{String(i + 1).padStart(2, "0")}</span>
                <p className="mt-2 text-white">{step}</p>
              </li>
            ))}
          </ol>
          <p className="mt-4">
            Gidsen per apparaat:{" "}
            <Link href="/applicaties" className="text-white underline-offset-4 hover:underline">
              applicaties
            </Link>{" "}
            en{" "}
            <Link href="/installatiegidsen" className="text-white underline-offset-4 hover:underline">
              installatie stap voor stap
            </Link>
            . Al klant en wil je alleen verlengen? Gebruik{" "}
            <Link href="/verlengen" className="text-white underline-offset-4 hover:underline">
              Verlengen
            </Link>
            .
          </p>
        </section>

        <section className="mt-16 max-w-3xl space-y-4 text-[15px] leading-7 text-slate" aria-labelledby="kwaliteit-heading">
          <h2 id="kwaliteit-heading" className="text-[24px] text-white md:text-[28px]">
            4K-kwaliteit en jouw netwerk
          </h2>
          <p>
            De abonnementen bieden kwaliteit tot 4K als het aanbod en je netwerk dat toelaten. Dat betekent niet dat
            elke zender de hele tijd Ultra HD is: bij sport is een stabiele Full HD vaak de betere keuze op wifi
            thuis. Voor eisen aan glasvezel, speler en realistische verwachtingen, lees{" "}
            <Link href="/blog/iptv-4k-nederland" className="text-white underline-offset-4 hover:underline">
              IPTV 4K Nederland
            </Link>
            .
          </p>
          <p>
            Twee 4K-streams tegelijk vragen een abonnement met 2 of meer verbindingen en genoeg internet. Heb je thuis
            maar één hoofdscherm, begin dan met 1 verbinding en check het beeld — je kunt de proef van 24 uur bij
            support aanvragen voordat je beslist.
          </p>
        </section>

        <section className="mt-16 border border-line bg-deep px-6 py-10 md:px-10" aria-labelledby="garantie-heading">
          <p className="label">Voor en na de aankoop</p>
          <h2 id="garantie-heading" className="mt-4 text-[24px] text-white md:text-[32px] md:tracking-[-0.6px]">
            Proef van 24 uur en garantie van 7 dagen
          </h2>
          <div className="mt-6 grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-[18px] text-white">Proef van 24 uur</h3>
              <p className="mt-3 text-[14px] leading-[1.5] text-slate">
                Vraag bij support een proef van 24 uur aan voordat je betaalt — om apparaat, app en je netwerk thuis te
                testen. Het is een afgebakend moment om met informatie te kiezen, geen onbeperkte «gratis» periode.
              </p>
            </div>
            <div>
              <h3 className="text-[18px] text-white">Garantie van 7 dagen</h3>
              <p className="mt-3 text-[14px] leading-[1.5] text-slate">
                Na de aankoop geldt de garantie van 7 dagen volgens ons{" "}
                <Link href="/retourbeleid" className="text-white underline-offset-4 hover:underline">
                  Retourbeleid
                </Link>
                . Zo verklein je het risico als de eerste dagen anders lopen dan je hoopte.
              </p>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#abonnementen" className="btn btn-solid">
              Bekijk abonnementen
            </a>
            <Link href="/blog/proef-iptv-nederland" className="btn btn-ghost">
              Zo werkt de proef
            </Link>
          </div>
        </section>

        <section className="mt-16" aria-labelledby="packs-heading">
          <h2 id="packs-heading" className="text-[24px] text-white md:text-[28px]">
            Uitgelichte pakketten
          </h2>
          <p className="mt-3 max-w-2xl text-[15px] leading-[1.55] text-slate">
            Vier abonnementen met een eigen pagina — €25, €45, €89 en €104 afhankelijk van looptijd en verbindingen. De
            tabel hierboven blijft de volledige matrix (inclusief andere looptijden).
          </p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {packList.map((pack) => {
              const price = pack.getPrice();
              return (
                <li key={pack.path}>
                  <Link
                    href={pack.path}
                    className="block h-full border border-line bg-deep p-5 transition hover:border-white/25"
                  >
                    <span className="text-[16px] text-white">{pack.shortName}</span>
                    <span className="mt-2 block text-[13px] text-muted">
                      {pack.durationLabel} · {pack.connections}{" "}
                      {pack.connections === 1 ? "verbinding" : "verbindingen"}
                    </span>
                    <span className="mt-4 block text-[22px] tracking-[-0.4px] text-white">
                      €{price}
                      <span className="ml-1 text-[13px] font-normal text-slate">{pack.pricePeriodLabel}</span>
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>

        <section className="mt-16" aria-labelledby="faq-prijzen-heading">
          <h2 id="faq-prijzen-heading" className="mb-8 text-[24px] text-white md:text-[28px]">
            Veelgestelde vragen — kopen, prijs en abonnement
          </h2>
          <FAQ items={pageFaqs} />
          <p className="mt-8 text-[14px] text-slate">
            Meer antwoorden in de{" "}
            <Link href="/veelgestelde-vragen" className="text-white underline-offset-4 hover:underline">
              volledige veelgestelde vragen
            </Link>
            .
          </p>
        </section>

        <RelatedContent
          title="Voordat je kiest"
          links={[
            {
              href: "/blog/beste-iptv-nederland-2026",
              label: "Beste IPTV Nederland 2026",
              description: "Praktische criteria voordat je een abonnement neemt.",
            },
            {
              href: "/blog/iptv-nederland-prijs-abonnementen",
              label: "Zo lees je de IPTV-prijs",
              description: "Looptijd, verbindingen en vergelijkbare kosten.",
            },
            {
              href: "/blog/proef-iptv-nederland",
              label: "Proef IPTV Nederland",
              description: "24 uur en de garantie van 7 dagen uitgelegd.",
            },
            {
              href: "/kanalen",
              label: "Sport- en Nederlandse zenders",
              description: "Check het aanbod.",
            },
            {
              href: "/applicaties",
              label: "IPTV-applicaties",
              description: "Apparaten en installatie.",
            },
            {
              href: "/wat-is-iptv",
              label: "Wat is IPTV",
              description: "Hoe de techniek werkt.",
            },
            {
              href: "/blog/iptv-4k-nederland",
              label: "IPTV 4K Nederland",
              description: "Netwerk en echte beeldkwaliteit.",
            },
            {
              href: "/over-ons",
              label: "Over BesteIPTVNederland",
              description: "Hoe we werken en de support.",
            },
          ]}
        />

        <div className="mt-16 border border-line bg-surface px-6 py-10 text-center md:px-10">
          <h2 className="text-[28px] tracking-[-0.6px] text-white md:text-[36px] md:tracking-[-0.9px]">
            Klaar om een abonnement te kiezen?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[15px] leading-[1.55] text-slate">
            Vergelijk de prijzen (€25, €45, €89 of €104 bij de uitgelichte pakketten), vraag de proef van 24 uur aan
            als je het netwerk wilt testen en reken op de garantie van 7 dagen na de aankoop.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a href="#abonnementen" className="btn btn-solid" aria-label="Abonnementen en prijzen bekijken">
              Bekijk abonnementen en prijzen
            </a>
            <Link href="/kanalen" className="btn btn-ghost">
              Bekijk zenders
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
