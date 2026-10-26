import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import RelatedContent from "@/components/RelatedContent";
import { getGuide, guides } from "@/data/guides";
import { buildMetadata, faqJsonLd, howToJsonLd } from "@/lib/seo";

/** Visible FAQ may wrap “Retourbeleid”; schema uses plain guide.faqs strings. */
function withRefundPolicyLink(answer: string) {
  const markers = ["Retourbeleid"];
  for (const marker of markers) {
    const index = answer.indexOf(marker);
    if (index === -1) continue;
    return (
      <>
        {answer.slice(0, index)}
        <Link href="/retourbeleid" className="text-white underline-offset-4 hover:underline">
          Retourbeleid
        </Link>
        {answer.slice(index + marker.length)}
      </>
    );
  }
  return answer;
}

export function generateStaticParams() {
  return guides.map((g) => ({ device: g.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ device: string }> }) {
  const { device } = await params;
  const guide = getGuide(device);
  if (!guide) return { title: "Installatiegids" };
  return buildMetadata({
    title: guide.seoTitle || `${guide.title} — IPTV installeren`,
    description: guide.seoDescription || guide.short,
    path: `/installatiegidsen/${guide.slug}`,
  });
}

export default async function DeviceGuidePage({ params }: { params: Promise<{ device: string }> }) {
  const { device } = await params;
  const guide = getGuide(device);
  if (!guide) notFound();

  const breadcrumbItems = [
    { name: "Home", path: "/" },
    { name: "Applicaties", path: "/applicaties" },
    { name: "Installatiegidsen", path: "/installatiegidsen" },
    { name: guide.title, path: `/installatiegidsen/${guide.slug}` },
  ];

  const otherGuides = guides
    .filter((g) => g.slug !== guide.slug)
    .slice(0, 3)
    .map((g) => ({
      href: `/installatiegidsen/${g.slug}`,
      label: g.title,
      description: g.short,
    }));

  const relatedBlog =
    guide.slug === "android"
      ? {
          href: "/blog/iptv-android-nederland-installeren",
          label: "IPTV Android — fouten en diagnose",
          description: "Ongeldige gegevens, lege streams en netwerk — dit is niet de installatiegids.",
        }
      : guide.slug === "firestick"
        ? {
            href: "/blog/iptv-smarters-pro-nederland",
            label: "IPTV Smarters Pro — toegang en fouten",
            description: "Xtream en meldingen van de speler (de installatie staat in deze gids).",
          }
        : guide.slug === "ios"
          ? {
              href: "/blog/iptv-nederland-iphone-ipad",
              label: "IPTV op iPhone en iPad",
              description: "Gewoonten en netwerk op iOS.",
            }
          : {
              href: "/blog/iptv-werkt-niet-buffering-nederland",
              label: "IPTV werkt niet / buffering",
              description: "Checklist voor netwerk en kwaliteit.",
            };

  const androidExtraLinks =
    guide.slug === "android"
      ? [
          {
            href: "/blog/iptv-smarters-pro-nederland",
            label: "IPTV Smarters Pro — toegang",
            description: "Xtream-velden en fouten van de speler.",
          },
          {
            href: "/blog/iptv-werkt-niet-buffering-nederland",
            label: "IPTV werkt niet / buffering",
            description: "Checklist voor netwerk en kwaliteit.",
          },
        ]
      : [];

  const jsonLd = [
    howToJsonLd({
      name: `IPTV installeren — ${guide.title}`,
      description: guide.short,
      path: `/installatiegidsen/${guide.slug}`,
      steps: guide.steps,
    }),
    ...(guide.faqs && guide.faqs.length > 0 ? [faqJsonLd(guide.faqs)] : []),
  ];

  return (
    <article className="section-shell py-16 md:py-24">
      <JsonLd data={jsonLd} />
      <Breadcrumbs items={breadcrumbItems} />
      <div className="flex flex-wrap gap-4 text-[14px]">
        <Link href="/applicaties" className="text-slate hover:text-white">
          ← IPTV-applicaties
        </Link>
        <Link href="/installatiegidsen" className="text-slate hover:text-white">
          Alle gidsen
        </Link>
      </div>
      <h1 className="mt-4 text-[40px] tracking-[-1.2px] text-white md:text-[48px]">{guide.title}</h1>
      <p className="mt-4 max-w-3xl text-[16px] text-slate">{guide.intro}</p>

      <section className="mt-10 border border-line bg-deep p-6 md:p-8">
        <h2 className="text-[20px] text-white">Voordat je begint</h2>
        <ul className="mt-4 space-y-2 text-[14px] text-slate">
          {guide.needs.map((n) => (
            <li key={n}>— {n}</li>
          ))}
        </ul>
      </section>

      <section className="mt-8 space-y-4">
        <h2 className="text-[20px] text-white">Stappen om IPTV te installeren</h2>
        <ol className="mt-4 space-y-4">
          {guide.steps.map((step, i) => (
            <li key={step.title} className="border border-line bg-black p-5">
              <h3 className="text-[16px] font-medium text-white">
                <span className="text-slate">{i + 1}.</span> {step.title}
              </h3>
              <p className="mt-2 text-[14px] text-slate">{step.body}</p>
            </li>
          ))}
        </ol>
      </section>

      {guide.sections?.map((section) => (
        <section key={section.heading} className="mt-10 max-w-3xl">
          <h2 className="text-[20px] text-white">{section.heading}</h2>
          {section.paragraphs.map((p) => (
            <p key={p.slice(0, 48)} className="mt-3 text-[15px] leading-7 text-slate">
              {p}
            </p>
          ))}
        </section>
      ))}

      <section className="mt-8 border border-line bg-surface p-6">
        <h2 className="text-[20px] text-white">Tips</h2>
        <ul className="mt-3 space-y-2 text-[14px] text-slate">
          {guide.tips.map((t) => (
            <li key={t}>— {t}</li>
          ))}
        </ul>
      </section>

      {guide.faqs && guide.faqs.length > 0 ? (
        <section className="mt-10 max-w-3xl">
          <h2 className="text-[20px] text-white">Veelgestelde vragen</h2>
          <div className="mt-4 space-y-4">
            {guide.faqs.map((f) => (
              <div key={f.q} className="border border-line bg-deep p-5">
                <h3 className="text-[16px] font-medium text-white">{f.q}</h3>
                <p className="mt-2 text-[14px] text-slate">{withRefundPolicyLink(f.a)}</p>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      <div className="mt-10 flex flex-wrap gap-3">
        <Link href="/prijzen" className="btn btn-solid" aria-label="IPTV-abonnementen bekijken">
          Bekijk abonnementen
        </Link>
        <Link href="/kanalen" className="btn btn-ghost">
          Nederlandse zenders en Eredivisie
        </Link>
        <Link href="/blog/iptv-werkt-niet-buffering-nederland" className="btn btn-ghost">
          IPTV met buffering?
        </Link>
      </div>

      <RelatedContent
        title="Meer gidsen en kopen"
        links={[
          {
            href: "/applicaties",
            label: "Overzicht IPTV-applicaties",
            description: "Apparaten en spelers in één oogopslag.",
          },
          {
            href: "/installatiegidsen",
            label: "Alle installatiegidsen",
            description: "Index per apparaat.",
          },
          {
            href: "/prijzen",
            label: "Bekijk onze abonnementen",
            description: "Activatie en inloggegevens na betaling.",
          },
          {
            href: "/kanalen",
            label: "Nederlandse zenders bekijken",
            description: "NPO, RTL, ESPN en sport.",
          },
          relatedBlog,
          ...androidExtraLinks,
          ...otherGuides,
        ]}
      />
    </article>
  );
}
