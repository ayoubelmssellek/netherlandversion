import Image from "next/image";
import Link from "next/link";
import FAQ from "@/components/FAQ";
import JsonLd from "@/components/JsonLd";
import Pricing from "@/components/Pricing";
import RelatedContent from "@/components/RelatedContent";
import ChannelsShowcase from "@/components/home/ChannelsShowcase";
import ClientReviews from "@/components/home/ClientReviews";
import HomeHeadAuthority from "@/components/home/HomeHeadAuthority";
import { posts } from "@/data/blog";
import { packList } from "@/data/packs";
import { channelLogos, entertainmentBrands, paymentMethods, posterImages } from "@/data/media";
import { buildMetadata, faqJsonLd } from "@/lib/seo";
import heroImage from "@/assets/images/iptv-nederland-familia-smart-tv-sala.jpeg";

export const metadata = buildMetadata({
  title: "IPTV Nederland — BesteIPTVNederland | Nederlandse zenders, sport en VOD",
  description:
    "IPTV Nederland met BesteIPTVNederland: Nederlandse zenders, Eredivisie, VOD en abonnementen met 1–3 verbindingen. Proef van 24 uur, begeleide installatie en support in het Nederlands.",
  path: "/",
});

const homeFaqs = [
  {
    q: "Wat is IPTV Nederland?",
    a: "IPTV Nederland is televisie via internet voor huishoudens in Nederland: live zenders, sport en VOD in een speler op het scherm dat je al hebt. BesteIPTVNederland is een betaalde dienst met abonnementen, begeleide installatie en Nederlandstalige support — geen gratis M3U-lijsten.",
  },
  {
    q: "Wat is BesteIPTVNederland?",
    a: "Een betaalde IPTV-dienst voor huishoudens in Nederland: live zenders, sport en VOD. Je koopt een abonnement, krijgt de inloggegevens en stelt een speler in op het scherm dat je al hebt — met support in het Nederlands.",
  },
  {
    q: "Wat kosten de abonnementen?",
    a: "De uitgelichte pakketten kosten €25, €45, €89 en €104, afhankelijk van de looptijd en het aantal verbindingen (1, 2 of 3). De volledige tabel staat op Prijzen — eenmalige betaling, zonder verrassende automatische verlenging.",
  },
  {
    q: "Hoe koop en activeer ik de dienst?",
    a: "Kies een abonnement, rond de betaling af en je ontvangt na bevestiging de toegangsgegevens. Daarna installeer je een compatibele speler en vul je de gegevens in. Support helpt als je vastloopt.",
  },
  {
    q: "Is er een proefperiode of garantie?",
    a: "Je kunt bij support een proef van 24 uur aanvragen voordat je betaalt, om apparaat en netwerk te testen. Na de aankoop geldt de garantie van 7 dagen volgens het Retourbeleid.",
  },
  {
    q: "Hoe kies ik het beste IPTV-abonnement voor Nederland?",
    a: "Bepaal hoeveel schermen je tegelijk gebruikt, of je sport en Nederlandse zenders nodig hebt, en of je een korte looptijd wilt (Pakket Kwartaal) of een jaar. Meer criteria staan in de gids Beste IPTV Nederland 2026; prijzen op Prijzen.",
  },
  {
    q: "Wat onderscheidt BesteIPTVNederland?",
    a: "Openbare abonnementen, een aanbod met Nederlandse zenders en sport, begeleide installatie op de apparaten die je al hebt en support 24/7 in het Nederlands — zonder anonieme «gratis» M3U-lijsten.",
  },
];

const homeDevices = [
  {
    title: "Smart-tv (Samsung, LG en vergelijkbaar)",
    body: "Installeer een compatibele speler uit de tv-winkel, vul de Xtream-gegevens in en laad de gids. De exacte stappen staan in de installatiegidsen.",
  },
  {
    title: "Fire Stick en Android-boxen",
    body: "Installeer de aanbevolen app, log in met de gegevens die je na betaling krijgt en check de beeldkwaliteit op je wifi of via de kabel.",
  },
  {
    title: "Telefoon en tablet (Android / iOS)",
    body: "Handig thuis of onderweg: hetzelfde account op een klein scherm telt mee voor het aantal verbindingen van je abonnement.",
  },
  {
    title: "Pc, Mac en MAG",
    body: "Op de computer gebruik je een compatibele speler; op MAG-boxen loopt de toegang meestal via een portal. Support zegt welke methode bij jouw apparaat hoort.",
  },
];

const featuredPosts = (
  [
    "beste-iptv-nederland-2026",
    "proef-iptv-nederland",
    "iptv-smarters-pro-nederland",
    "iptv-sport-nederland",
  ]
    .map((slug) => posts.find((p) => p.slug === slug))
    .filter((p): p is (typeof posts)[number] => Boolean(p))
);

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqJsonLd(homeFaqs)} />

      <section
        className="relative isolate overflow-hidden bg-black"
        style={{ height: "calc(100svh - var(--site-header-h))" }}
      >
        <Image
          src={heroImage}
          alt="Gezin kijkt IPTV Nederland op de smart-tv — BesteIPTVNederland met Nederlandse zenders, sport en VOD"
          title="IPTV Nederland — gezin kijkt tv met BesteIPTVNederland"
          fill
          priority
          quality={92}
          className="object-cover object-[68%_42%] sm:object-[72%_40%] lg:object-[75%_38%]"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent md:from-black/95 md:via-black/55 md:to-transparent lg:via-black/40"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/25"
          aria-hidden="true"
        />

        <div className="section-shell relative flex h-full items-center py-6">
          <div className="w-full max-w-[36rem] lg:max-w-[38rem]">
            <p className="animate-rise-y label flex items-center gap-3">
              <span className="inline-block h-0.5 w-8 bg-pt-green-bright" aria-hidden="true" />
              BesteIPTVNederland
            </p>
            <h1 className="animate-rise-y-delay-1 mt-4 text-[32px] leading-[1.05] tracking-[-1px] text-white sm:text-[40px] md:text-[46px] lg:text-[52px]">
              IPTV Nederland — Nederlandse zenders, sport en VOD
            </h1>
            <p className="animate-rise-y-delay-1 mt-3 max-w-lg text-[16px] leading-[1.35] tracking-[-0.2px] text-white/90 sm:text-[18px] md:text-[20px]">
              IPTV-abonnement voor Nederland, voor smart-tv, Android en Fire Stick, met de Eredivisie in het aanbod en
              support in het Nederlands.
            </p>
            <p className="animate-rise-y-delay-2 mt-4 max-w-md text-[14px] leading-[1.45] text-slate md:text-[15px]">
              Bekijk de prijs van IPTV Nederland, kies 1 tot 3 verbindingen en vraag de proef van 24 uur aan voordat je
              koopt.
            </p>
            <div className="animate-rise-y-delay-2 mt-6 flex flex-wrap gap-3">
              <Link href="/prijzen" className="btn btn-solid" aria-label="Prijzen IPTV Nederland bekijken">
                Bekijk prijzen
              </Link>
              <Link
                href="/blog/proef-iptv-nederland"
                className="btn btn-ghost"
                aria-label="Zo werkt de proef van IPTV Nederland"
              >
                Proef IPTV 24 uur
              </Link>
            </div>
            <p className="mt-4 text-[12px] text-muted md:text-[13px]">
              7 dagen garantie · activatie na betaling · begeleide installatie
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-surface py-16 md:py-20" aria-labelledby="wat-zit-erin-heading">
        <div className="section-shell">
          <p className="label">De dienst</p>
          <h2
            id="wat-zit-erin-heading"
            className="mt-4 max-w-3xl text-[32px] tracking-[-0.8px] text-white md:text-[40px]"
          >
            Wat zit er in BesteIPTVNederland
          </h2>
          <p className="mt-4 max-w-2xl text-[15px] leading-[1.55] text-slate">
            Live zenders, VOD, verbindingen en support — het belangrijkste voordat je abonnementen vergelijkt op{" "}
            <Link href="/prijzen" className="text-white underline-offset-4 hover:underline">
              Prijzen
            </Link>
            .
          </p>
          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "+45.000 live zenders",
                body: "Nederlandse zenders, sport en internationale opties in hetzelfde abonnement.",
              },
              {
                title: "Films en series (VOD)",
                body: "Bibliotheek op aanvraag naast de live zenders — details op Zenders.",
              },
              {
                title: "1, 2 of 3 verbindingen",
                body: "Kies hoeveel schermen je tegelijk kunt gebruiken.",
              },
              {
                title: "Support 24/7",
                body: "Hulp in het Nederlands via e-mail en WhatsApp.",
              },
              {
                title: "Beschikbaarheid 99,9%",
                body: "Dienstafspraak; hoe vloeiend het beeld is, hangt ook van jouw netwerk af.",
              },
              {
                title: "Proef 24 uur · garantie 7 dagen",
                body: "Test voordat je betaalt; na de aankoop geldt het Retourbeleid.",
              },
            ].map((item) => (
              <li key={item.title} className="border-t border-line pt-5">
                <h3 className="text-[18px] text-white md:text-[20px]">{item.title}</h3>
                <p className="mt-2 text-[14px] leading-[1.5] text-slate">{item.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-shell py-16 md:py-24">
        <Pricing />
      </section>

      <ClientReviews />

      <section className="section-shell pb-12 md:pb-16" aria-labelledby="home-packs-heading">
        <p className="label">Uitgelichte pakketten</p>
        <h2
          id="home-packs-heading"
          className="mt-4 max-w-3xl text-[28px] tracking-[-0.6px] text-white md:text-[36px]"
        >
          Vier abonnementen met een eigen pagina
        </h2>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {packList.map((pack) => {
            const price = pack.getPrice();
            const isTopSeller = pack.slug === "basico";
            return (
              <li key={pack.path}>
                <Link
                  href={pack.path}
                  className={`relative block h-full border bg-deep p-5 pt-7 transition hover:border-white/25 ${
                    isTopSeller ? "border-pt-red/50" : "border-line"
                  }`}
                >
                  {isTopSeller ? (
                    <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-sm bg-pt-red px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.06em] text-white">
                      Meest gekozen
                    </span>
                  ) : null}
                  <h3 className="text-[18px] text-white">{pack.shortName}</h3>
                  <p className="mt-2 text-[13px] text-muted">
                    {pack.durationLabel} · {pack.connections}{" "}
                    {pack.connections === 1 ? "verbinding" : "verbindingen"}
                  </p>
                  <p className="mt-4 text-[22px] tracking-[-0.4px] text-white">
                    €{price}
                    <span className="ml-1 text-[13px] font-normal text-slate">{pack.pricePeriodLabel}</span>
                  </p>
                </Link>
              </li>
            );
          })}
        </ul>
        <p className="mt-8 text-[14px] text-slate">
          <Link href="/prijzen" className="text-white underline-offset-4 hover:underline">
            Bekijk alle abonnementen
          </Link>
        </p>
      </section>

      <section className="section-shell pb-16 md:pb-20">
        <p className="label text-center">Betalen</p>
        <ul
          className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-4"
          aria-label="Betaalmethoden"
        >
          {paymentMethods.map((method) => (
            <li key={method.entity} className="relative h-9 w-[72px] sm:h-10 sm:w-20">
              <Image
                src={method.src}
                alt={method.alt}
                title={method.title}
                fill
                className="object-contain"
                sizes="80px"
              />
            </li>
          ))}
        </ul>
        <p className="mt-6 text-center text-[13px] text-muted">
          Kaarten en digitale wallets · toegang na bevestiging van de betaling
        </p>
      </section>

      <ChannelsShowcase channels={channelLogos} />

      <section className="border-t border-line py-20 md:py-28" aria-labelledby="vod-heading">
        <div className="section-shell">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="label">On demand</p>
              <h2
                id="vod-heading"
                className="mt-4 max-w-2xl text-[36px] tracking-[-0.9px] text-white md:text-[40px]"
              >
                Films en series wanneer jij wilt
              </h2>
              <p className="mt-4 max-w-2xl text-[15px] leading-[1.55] text-slate">
                VOD in dezelfde dienst als de live zenders: meer dan 200.000 films en meer dan 40.000 series. Ideaal
                voor avonden zonder vaste programmering — je start na de activatie.
              </p>
            </div>
            <Link href="/kanalen" className="btn btn-ghost">
              Bekijk zenders
            </Link>
          </div>
          <div
            className="relative mt-2 h-[176px] w-full max-w-full overflow-hidden sm:h-[197px] md:h-[224px]"
            role="region"
            aria-label="VOD-aanbod — uitgelichte films en series"
          >
            <div className="animate-vod-marquee absolute top-0 left-0 flex w-max gap-3 hover:[animation-play-state:paused] focus-within:[animation-play-state:paused]">
              {[...posterImages.slice(0, 10), ...posterImages.slice(0, 10)].map((poster, index) => {
                const isDuplicate = index >= 10;
                return (
                  <Image
                    key={`${poster.entity}-${index}`}
                    src={poster.src}
                    alt={poster.alt}
                    title={isDuplicate ? undefined : poster.title}
                    width={168}
                    height={224}
                    className="img-frame h-[176px] w-[132px] shrink-0 object-cover sm:h-[197px] sm:w-[148px] md:h-[224px] md:w-[168px]"
                    sizes="168px"
                    quality={75}
                    draggable={false}
                    aria-hidden={isDuplicate || undefined}
                  />
                );
              })}
            </div>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-4">
            {entertainmentBrands.map((brand) => (
              <div key={brand.entity} className="relative h-10 w-20">
                <Image
                  src={brand.src}
                  alt={brand.alt}
                  title={brand.title}
                  fill
                  className="object-contain"
                  sizes="80px"
                />
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-[13px] text-muted">
            Aanbod wordt regelmatig bijgewerkt — films en series op aanvraag in het abonnement
          </p>
        </div>
      </section>

      <section className="section-shell py-16 md:py-20" aria-labelledby="devices-heading">
        <p className="label">Compatibiliteit</p>
        <h2
          id="devices-heading"
          className="mt-4 max-w-2xl text-[32px] tracking-[-0.8px] text-white md:text-[40px]"
        >
          Werkt op de apparaten die je al hebt
        </h2>
        <p className="mt-5 max-w-2xl text-[15px] leading-[1.5] text-slate">
          Smart-tv, Fire Stick, Android, iOS, MAG of pc — installeer een speler en vul de gegevens in na de betaling.
        </p>
        <div className="mt-10 grid gap-8 sm:grid-cols-2">
          {homeDevices.map((device) => (
            <div key={device.title}>
              <h3 className="text-[18px] text-white md:text-[20px]">{device.title}</h3>
              <p className="mt-2 text-[14px] leading-[1.5] text-slate">{device.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/applicaties" className="btn btn-ghost">
            Applicaties
          </Link>
          <Link href="/installatiegidsen" className="btn btn-ghost">
            Installatiegidsen
          </Link>
        </div>
      </section>

      <section className="section-shell pb-16 md:pb-20" aria-labelledby="garantie-heading">
        <div className="border border-line bg-surface px-6 py-10 md:px-10 md:py-12">
          <p className="label">Voor en na de aankoop</p>
          <h2
            id="garantie-heading"
            className="mt-4 max-w-2xl text-[28px] tracking-[-0.6px] text-white md:text-[36px]"
          >
            Proef van 24 uur en garantie van 7 dagen
          </h2>
          <div className="mt-6 grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-[18px] text-white">Proef van 24 uur</h3>
              <p className="mt-3 text-[14px] leading-[1.5] text-slate">
                Vraag bij support een proef aan voordat je betaalt — test apparaat en netwerk.{" "}
                <Link href="/blog/proef-iptv-nederland" className="text-white underline-offset-4 hover:underline">
                  Zo vraag je de proef aan
                </Link>
                .
              </p>
            </div>
            <div>
              <h3 className="text-[18px] text-white">Garantie van 7 dagen</h3>
              <p className="mt-3 text-[14px] leading-[1.5] text-slate">
                Na de aankoop, volgens het{" "}
                <Link href="/retourbeleid" className="text-white underline-offset-4 hover:underline">
                  Retourbeleid
                </Link>
                .
              </p>
            </div>
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/prijzen" className="btn btn-solid" aria-label="Abonnementen bekijken">
              Bekijk abonnementen
            </Link>
            <Link href="/veelgestelde-vragen" className="btn btn-ghost">
              Veelgestelde vragen
            </Link>
          </div>
        </div>
      </section>

      <HomeHeadAuthority />

      <section id="faq" className="section-shell py-16 md:py-20">
        <p className="label mb-4">Support</p>
        <h2 className="mb-8 text-[32px] tracking-[-0.8px] text-white md:text-[40px]">Veelgestelde vragen</h2>
        <FAQ items={homeFaqs} />
        <p className="mt-8 text-[14px] text-slate">
          Meer antwoorden in de{" "}
          <Link href="/veelgestelde-vragen" className="text-white hover:underline">
            volledige FAQ
          </Link>
          .
        </p>
      </section>

      <section className="border-t border-line bg-deep py-16 md:py-20" aria-labelledby="aan-de-slag-heading">
        <div className="section-shell">
          <p className="label">Stap voor stap</p>
          <h2
            id="aan-de-slag-heading"
            className="mt-4 text-[28px] text-white md:text-[36px] md:tracking-[-0.9px]"
          >
            Zo begin je
          </h2>
          <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { t: "Kies het abonnement", b: "Looptijd en 1–3 verbindingen op Prijzen." },
              { t: "Betaal", b: "Checkout op de site — eenmalige betaling." },
              { t: "Ontvang toegang", b: "Inloggegevens na bevestiging." },
              { t: "Installeer en kijk", b: "Speler + Xtream; gidsen als je ze nodig hebt." },
            ].map((step, i) => (
              <li key={step.t} className="border-t border-line pt-4">
                <span className="micro text-white">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-2 text-[16px] text-white">{step.t}</h3>
                <p className="mt-2 text-[13px] leading-[1.45] text-slate">{step.b}</p>
              </li>
            ))}
          </ol>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/prijzen" className="btn btn-solid" aria-label="Abonnementen bekijken">
              Bekijk abonnementen
            </Link>
            <Link href="/installatiegidsen" className="btn btn-ghost">
              Installatiegidsen
            </Link>
          </div>
        </div>
      </section>

      <section className="section-shell py-16 md:py-24">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <p className="label">Gidsen</p>
            <h2 className="mt-4 text-[32px] tracking-[-0.8px] text-white md:text-[40px]">Handige artikelen</h2>
          </div>
          <Link href="/blog" className="text-[14px] text-slate hover:text-white">
            Bekijk het blog
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {featuredPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
              <div className="img-frame relative aspect-[16/10]">
                <Image
                  src={post.cover}
                  alt={post.coverAlt}
                  title={post.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-[1.02]"
                  sizes="25vw"
                />
              </div>
              <h3 className="mt-4 text-[18px] leading-[1.15] text-white group-hover:text-slate md:text-[20px]">
                {post.title}
              </h3>
              <p className="mt-2 line-clamp-2 text-[13px] text-mid">{post.excerpt}</p>
            </Link>
          ))}
        </div>
        <RelatedContent
          title="Belangrijke pagina's"
          links={[
            {
              href: "/wat-is-iptv",
              label: "Wat is IPTV",
              description: "Definitie en hoe het werkt.",
            },
            {
              href: "/kanalen",
              label: "IPTV-zenders Nederland",
              description: "Nederlandse zenders en sport.",
            },
            {
              href: "/applicaties",
              label: "IPTV-applicaties",
              description: "Apparaten en installatie.",
            },
            {
              href: "/prijzen",
              label: "IPTV Nederland kopen",
              description: "Abonnementen, prijzen en verbindingen.",
            },
            {
              href: "/veelgestelde-vragen",
              label: "Veelgestelde vragen",
              description: "Antwoorden van support.",
            },
            {
              href: "/blog/beste-iptv-nederland-2026",
              label: "Beste IPTV Nederland 2026",
              description: "Checklist voordat je een abonnement neemt.",
            },
            {
              href: "/blog/iptv-vs-betaalde-tv-nederland",
              label: "IPTV versus betaalde tv",
              description: "Volledige vergelijking in het blog.",
            },
            {
              href: "/blog/woordenlijst-iptv-nederland",
              label: "Woordenlijst IPTV",
              description: "EPG, VOD, Xtream, M3U.",
            },
          ]}
        />

        <div className="mt-16 border border-line bg-deep px-6 py-10 text-center md:px-10">
          <h2 className="text-[28px] tracking-[-0.6px] text-white md:text-[36px]">Klaar om te beginnen?</h2>
          <p className="mx-auto mt-4 max-w-xl text-[15px] leading-[1.55] text-slate">
            Vergelijk de abonnementen, vraag de proef van 24 uur aan als je het netwerk wilt testen, en reken op de
            garantie van 7 dagen.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link href="/prijzen" className="btn btn-solid" aria-label="Abonnementen bekijken">
              Bekijk abonnementen
            </Link>
            <Link href="/over-ons" className="btn btn-ghost">
              Over ons
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
