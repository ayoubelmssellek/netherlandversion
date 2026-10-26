import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQ from "@/components/FAQ";
import JsonLd from "@/components/JsonLd";
import RelatedContent from "@/components/RelatedContent";
import {
  checkoutHrefForPack,
  getPack,
  packIncludes,
  siblingPacks,
  type PackSlug,
} from "@/data/packs";
import { site } from "@/data/content";
import { formatRatingLabel, getReviewStats } from "@/data/reviews";
import { faqJsonLd, packProductJsonLd } from "@/lib/seo";
import { getWhatsAppIntl } from "@/lib/whatsapp";

/** Visible copy may wrap “Retourbeleid”; schema keeps the plain strings. */
function withRefundPolicyLink(text: string) {
  const marker = ["Retourbeleid", "retourbeleid"].find((m) => text.includes(m));
  if (!marker) return text;
  const index = text.indexOf(marker);
  return (
    <>
      {text.slice(0, index)}
      <Link href="/retourbeleid" className="text-white underline-offset-4 hover:underline">
        {marker}
      </Link>
      {text.slice(index + marker.length)}
    </>
  );
}

export default function PackLanding({ slug }: { slug: PackSlug }) {
  const pack = getPack(slug);
  const price = pack.getPrice();
  const compare = pack.getCompare();
  const checkout = checkoutHrefForPack(pack);
  const wa = `https://wa.me/${getWhatsAppIntl()}?text=${encodeURIComponent(
    `Hoi BesteIPTVNederland — ik wil de ${pack.name} IPTV Nederland (€${price}, ${pack.connections} ${
      pack.connections > 1 ? "verbindingen" : "verbinding"
    }).`,
  )}`;
  const siblings = siblingPacks(slug);
  const reviewStats = getReviewStats();

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Prijzen", path: "/prijzen" },
    { name: pack.name, path: pack.path },
  ];

  return (
    <>
      <JsonLd
        data={[
          packProductJsonLd({
            path: pack.path,
            planId: pack.planId,
            name: pack.name,
            description: pack.seoDescription,
            price,
            connections: pack.connections,
            durationLabel: pack.durationLabel,
          }),
          faqJsonLd(pack.faqs),
        ]}
      />

      <div className="section-shell py-16 md:py-24">
        <Breadcrumbs items={crumbs} />

        <p className="label mt-8">{pack.eyebrow}</p>
        <h1 className="mt-4 max-w-3xl text-[40px] tracking-[-1.2px] text-white md:text-[48px]">
          {pack.h1}
        </h1>

        <div className="mt-6 flex flex-wrap items-baseline gap-3">
          <span className="text-[40px] tracking-[-1px] text-white">€{price}</span>
          {compare != null ? (
            <span className="text-[16px] text-muted line-through">€{compare}</span>
          ) : null}
          <span className="text-[14px] text-muted">{pack.pricePeriodLabel}</span>
        </div>
        <p className="mt-2 text-[14px] text-slate">
          ≈ €{pack.monthlyApprox()}/maand · {pack.connections}{" "}
          {pack.connections > 1 ? "verbindingen" : "verbinding"} · eenmalige betaling
          {reviewStats.reviewCount > 0 ? (
            <>
              {" "}
              ·{" "}
              <Link href="/beoordelingen" className="text-slate hover:text-white">
                {formatRatingLabel(reviewStats)}
              </Link>
            </>
          ) : null}
        </p>

        <p className="mt-6 max-w-2xl text-[16px] leading-[1.55] text-slate">{pack.intro}</p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link href={checkout} className="btn btn-solid" aria-label={`${pack.name} bestellen`}>
            Dit abonnement bestellen
          </Link>
          <a href={wa} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
            24 uur proef aanvragen (WhatsApp)
          </a>
          <Link href="/prijzen" className="btn btn-ghost">
            Alle prijzen bekijken
          </Link>
        </div>

        <section className="mt-16 max-w-3xl">
          <h2 className="text-[24px] text-white">Wat zit er in de {pack.name}</h2>
          <p className="mt-3 text-[15px] text-slate">
            De inhoud is hetzelfde als bij de andere betaalde abonnementen van BesteIPTVNederland; het verschil van dit pakket is{" "}
            <strong className="text-white">
              {pack.durationLabel} · {pack.connections}{" "}
              {pack.connections > 1 ? "verbindingen" : "verbinding"}
            </strong>
            .
          </p>
          <ul className="mt-6 grid gap-2 sm:grid-cols-2">
            {packIncludes.map((item) => (
              <li key={item} className="text-[14px] text-slate">
                <span className="mr-2 text-white">—</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-14 max-w-3xl space-y-4">
          <h2 className="text-[24px] text-white">Voor wie dit abonnement is</h2>
          <p className="text-[15px] leading-[1.6] text-slate">{pack.forWhom}</p>
          <ul className="space-y-2">
            {pack.valuePoints.map((point) => (
              <li key={point} className="text-[14px] text-slate">
                <span className="mr-2 text-white">—</span>
                {withRefundPolicyLink(point)}
              </li>
            ))}
          </ul>
        </section>

        {pack.depthSections?.map((section) => (
          <section key={section.title} className="mt-14 max-w-3xl space-y-3">
            <h2 className="text-[24px] text-white">{section.title}</h2>
            <p className="text-[15px] leading-[1.6] text-slate">{section.body}</p>
          </section>
        ))}

        <section className="mt-14">
          <h2 className="mb-6 text-[24px] text-white">Vragen over de {pack.name}</h2>
          <FAQ items={pack.faqs} />
        </section>

        <section className="mt-16">
          <h2 className="text-[24px] text-white">Andere abonnementen</h2>
          <p className="mt-3 max-w-2xl text-[15px] text-slate">
            Vergelijk de andere pakketten of open de{" "}
            <Link href="/prijzen" className="text-white underline-offset-4 hover:underline">
              volledige prijstabel
            </Link>{" "}
            (maandelijks, 6 maanden en de overige combinaties).
          </p>
          <ul className="mt-8 grid gap-4 md:grid-cols-3">
            {siblings.map((sib) => (
              <li key={sib.slug}>
                <Link
                  href={sib.path}
                  className="block h-full border border-line bg-deep p-5 transition hover:border-white/25"
                >
                  <span className="text-[16px] text-white">{sib.name}</span>
                  <span className="mt-2 block text-[14px] text-muted">
                    €{sib.getPrice()}
                    {sib.pricePeriodLabel} · {sib.connections}{" "}
                    {sib.connections > 1 ? "verbindingen" : "verbinding"}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <RelatedContent
          title="Voor of na je aankoop"
          links={[
            {
              href: "/prijzen",
              label: "Alle prijzen en verbindingen",
              description: "Vergelijk hier de volledige matrix.",
            },
            {
              href: "/applicaties",
              label: "Apps en apparaten",
              description: "Smart TV, Android, Fire Stick, iOS.",
            },
            {
              href: "/kanalen",
              label: "Zenders en sport",
              description: "Check de Nederlandse catalogus.",
            },
            {
              href: "/veelgestelde-vragen",
              label: "Veelgestelde vragen",
              description: "Installatie, betaling en support.",
            },
            {
              href: "/installatiegidsen",
              label: "Installatiegidsen",
              description: "Stap voor stap per apparaat na aankoop.",
            },
            {
              href: "/retourbeleid",
              label: "Retourbeleid",
              description: "Voorwaarden van de 7 dagen garantie.",
            },
            {
              href: "/blog/proef-iptv-nederland",
              label: "Hoe de proef van 24 uur werkt",
              description: "Vraag je aan bij support; het is geen onbeperkt gratis IPTV.",
            },
            {
              href: "/pack-kwartaal",
              label: "Kwartaalpakket IPTV",
              description: "3 maanden · 1 verbinding: korte looptijd.",
            },
            {
              href: "/pack-premium",
              label: "Premiumpakket IPTV",
              description: "1 jaar · 2 verbindingen: woonkamer + een extra scherm.",
            },
          ].filter((link) => link.href !== pack.path)}
        />

        <div className="mt-16 flex flex-col justify-between gap-6 border border-line bg-surface px-6 py-8 md:flex-row md:items-center md:px-10">
          <div>
            <h2 className="text-[24px] text-white md:text-[28px]">Klaar voor de {pack.name}?</h2>
            <p className="mt-2 max-w-xl text-[14px] text-slate">
              €{price}
              {pack.pricePeriodLabel} · mail {site.email} als je hulp nodig hebt bij de betaling.
            </p>
          </div>
          <Link href={checkout} className="btn btn-solid shrink-0" aria-label={`${pack.name} bestellen`}>
            Naar betalen
          </Link>
        </div>
      </div>
    </>
  );
}
