import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import RelatedContent from "@/components/RelatedContent";
import { getPost, postCoverSrc, posts } from "@/data/blog";
import { articleJsonLd, buildMetadata, faqJsonLd, siteConfig } from "@/lib/seo";
import { buildTestWhatsAppUrl } from "@/lib/whatsapp";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Artikel" };
  const cover = postCoverSrc(post.cover);
  const ogImage = cover.startsWith("http") ? cover : cover;
  return buildMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    type: "article",
    publishedTime: post.date,
    image: ogImage,
  });
}

/** Friendly anchors for bare `/path` mentions (varied, not over-optimized). */
const INTERNAL_PATH_LABELS: Record<string, string> = {
  "/": "home BesteIPTVNederland",
  "/prijzen": "Prijzen",
  "/kanalen": "Zenders",
  "/veelgestelde-vragen": "veelgestelde vragen",
  "/applicaties": "Applicaties",
  "/over-ons": "Over ons",
  "/verlengen": "verlengen",
  "/retourbeleid": "Retourbeleid",
  "/voorwaarden": "Voorwaarden",
  "/privacybeleid": "Privacy",
  "/wat-is-iptv": "wat is IPTV",
  "/installatiegidsen": "installatiegidsen",
  "/pack-kwartaal": "Pakket Kwartaal",
  "/pack-basis": "Pakket Basis",
  "/pack-premium": "Pakket Premium",
  "/pack-familie": "Pakket Familie",
  "/m3u-xtream-omzetter": "omzetter M3U ↔ Xtream",
  "/iptv-account-checker": "accountchecker",
  "/m3u-lijst-bijwerken": "M3U-lijst bijwerken",
  "/iptv-nederland-whatsapp": "WhatsApp BesteIPTVNederland",
  "/wederverkopers": "Wederverkopers",
  "/blog": "blog",
  "/blog/proef-iptv-nederland": "proef IPTV Nederland",
  "/blog/beste-iptv-nederland-2026": "beste IPTV Nederland 2026",
  "/blog/iptv-legaal-nederland": "IPTV legaal / lijsten",
  "/blog/iptv-smarters-pro-nederland": "IPTV Smarters Pro",
  "/blog/iptv-werkt-niet-buffering-nederland": "gids bij buffering",
  "/blog/iptv-nederland-prijs-abonnementen": "zo lees je de IPTV-prijs",
  "/blog/iptv-sport-nederland": "sport op IPTV",
  "/blog/iptv-eredivisie-nederland": "Eredivisie en IPTV",
  "/blog/iptv-vs-betaalde-tv-nederland": "IPTV vs betaalde tv",
  "/blog/goedkope-iptv-nederland": "goedkope IPTV Nederland",
  "/blog/nederlandse-tv-in-het-buitenland": "Nederlandse tv in het buitenland",
  "/blog/iptv-nederland-in-frankrijk": "IPTV Nederland in Frankrijk",
  "/blog/iptv-nederland-in-zwitserland": "IPTV Nederland in Zwitserland",
  "/blog/iptv-meerdere-apparaten-nederland": "IPTV op meerdere apparaten",
  "/blog/wk-2026-iptv-nederland": "WK 2026 IPTV",
  "/blog/internet-voor-iptv": "internet voor IPTV",
  "/blog/voetbal-kijken-iptv-nederland": "voetbal kijken via IPTV",
  "/blog/iptv-voor-gezinnen-nederland": "IPTV voor gezinnen",
  "/blog/iptv-ontbrekende-zenders": "ontbrekende zenders",
  "/blog/epg-laadt-niet": "EPG laadt niet",
  "/blog/wat-is-m3u": "wat is M3U",
  "/blog/xtream-codes-nederland": "Xtream Codes",
  "/blog/tivimate-nederland": "TiviMate Nederland",
  "/blog/tivimate-vs-iptv-smarters-pro": "TiviMate vs Smarters",
  "/blog/iptv-nederland-gids": "IPTV Nederland gids",
  "/blog/vpn-iptv-nederland": "VPN voor IPTV",
  "/blog/voordelen-iptv-nederland": "voordelen van IPTV",
  "/blog/woordenlijst-iptv-nederland": "woordenlijst IPTV",
  "/blog/iptv-4k-nederland": "IPTV 4K Nederland",
  "/blog/iptv-box-nederland": "IPTV-box Nederland",
  "/blog/beste-app-iptv-nederland": "beste IPTV-app",
  "/blog/checklist-iptv-nederland": "checklist IPTV",
  "/blog/iptv-livestream-nederland": "IPTV-livestream",
  "/blog/iptv-nederland-iphone-ipad": "IPTV op iPhone en iPad",
  "/blog/iptv-android-nederland-installeren": "IPTV Android installeren",
  "/installatiegidsen/android": "gids Android",
  "/installatiegidsen/firestick": "gids Fire Stick",
  "/installatiegidsen/smart-tv": "gids smart-tv",
};

const linkClass = "text-white underline-offset-4 hover:underline";

function isExternalHref(href: string) {
  return /^https?:\/\//i.test(href);
}

function renderInline(text: string) {
  const parts: ReactNode[] = [];
  const re =
    /\[([^\]]+)\]\((https?:\/\/[^)\s]+|\/[a-zA-Z0-9][a-zA-Z0-9\-\/#]*)\)|(\/(?:[a-z0-9]+(?:-[a-z0-9]+)*)(?:\/(?:[a-z0-9]+(?:-[a-z0-9]+)*))*(?:#[a-z0-9\-]+)?)/g;
  let last = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  while ((match = re.exec(text)) !== null) {
    if (match.index > last) parts.push(text.slice(last, match.index));

    if (match[1] && match[2]) {
      const label = match[1];
      const href = match[2];
      if (isExternalHref(href)) {
        parts.push(
          <a key={`a-${key++}`} href={href} target="_blank" rel="noopener noreferrer" className={linkClass}>
            {label}
          </a>,
        );
      } else {
        parts.push(
          <Link key={`a-${key++}`} href={href} className={linkClass}>
            {label}
          </Link>,
        );
      }
    } else if (match[3]) {
      const href = match[3];
      const base = href.split("#")[0] || href;
      const label = INTERNAL_PATH_LABELS[base] || INTERNAL_PATH_LABELS[href] || href.replace(/^\//, "");
      parts.push(
        <Link key={`a-${key++}`} href={href} className={linkClass}>
          {label}
        </Link>,
      );
    }

    last = match.index + match[0].length;
  }

  if (last < text.length) parts.push(text.slice(last));
  return parts.length ? parts : text;
}

function BlogBodyBlock({ block }: { block: string }) {
  if (block.startsWith("### ")) {
    return (
      <h3 className="pt-2 text-[22px] tracking-[-0.4px] text-white md:text-[24px]">{block.slice(4)}</h3>
    );
  }
  if (block.startsWith("## ")) {
    return (
      <h2 className="pt-4 text-[28px] tracking-[-0.6px] text-white md:text-[32px]">{block.slice(3)}</h2>
    );
  }
  return <p>{renderInline(block)}</p>;
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const hubLinks = [
    {
      href: "/",
      label: "IPTV Nederland — home",
      description: "BesteIPTVNederland: aanbod en hoe je begint.",
    },
    {
      href: "/prijzen",
      label: "IPTV Nederland kopen",
      description: "Abonnementen, prijs en verbindingen.",
    },
    {
      href: "/kanalen",
      label: "IPTV-zenders Nederland",
      description: "Nederlandse zenders, Eredivisie en sport.",
    },
  ];

  const relatedMap = new Map<string, { href: string; label: string; description?: string }>();
  for (const link of [...hubLinks, ...(post.relatedPaths || [])]) {
    if (!relatedMap.has(link.href)) relatedMap.set(link.href, link);
  }
  const related = Array.from(relatedMap.values()).slice(0, 6);

  const coverSrc = postCoverSrc(post.cover);

  return (
    <article className="section-shell py-16 md:py-24">
      <JsonLd
        data={articleJsonLd({
          title: post.title,
          description: post.excerpt,
          path: `/blog/${post.slug}`,
          datePublished: post.date,
          dateModified: post.updated,
          image: coverSrc.startsWith("http") ? coverSrc : new URL(coverSrc, siteConfig.url).toString(),
        })}
      />
      {post.faqs && post.faqs.length > 0 ? <JsonLd data={faqJsonLd(post.faqs)} /> : null}
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Blog IPTV", path: "/blog" },
          { name: post.title, path: `/blog/${post.slug}` },
        ]}
      />
      <Link href="/blog" className="text-[14px] text-slate hover:text-white">
        ← Terug naar het blog
      </Link>
      <h1 className="mt-4 max-w-3xl text-[40px] tracking-[-1.2px] text-white md:text-[48px]">{post.title}</h1>
      <p className="mt-3 text-[13px] text-muted">
        <time dateTime={post.date}>{post.date}</time>
        {post.updated ? (
          <>
            {" "}
            · bijgewerkt <time dateTime={post.updated}>{post.updated}</time>
          </>
        ) : null}{" "}
        · {post.minutes} min leestijd · BesteIPTVNederland
      </p>
      {slug === "proef-iptv-nederland" ? (
        <div className="mt-8 max-w-3xl border border-line bg-surface px-5 py-6 md:px-8 md:py-7">
          <p className="text-[13px] font-medium uppercase tracking-[0.04em] text-muted">Snel aanvragen</p>
          <h2 className="mt-2 text-[22px] tracking-[-0.4px] text-white md:text-[26px]">
            Weet je al wat de proef inhoudt? Vraag hem aan via WhatsApp
          </h2>
          <p className="mt-3 text-[15px] leading-[1.5] text-slate">
            24 uur op aanvraag — test je smart-tv, app en netwerk. Dit is geen onbeperkt gratis IPTV. Lees de gids
            hieronder en open WhatsApp met een kant-en-klaar bericht als je zover bent.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href={buildTestWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-solid"
              aria-label="24 uur proef aanvragen via WhatsApp"
            >
              Proef aanvragen via WhatsApp
            </a>
            <Link href="/prijzen" className="btn btn-ghost">
              Bekijk abonnementen
            </Link>
          </div>
        </div>
      ) : null}
      <div className="img-frame relative mt-8 aspect-[21/9]">
        <Image
          src={post.cover}
          alt={post.coverAlt}
          title={post.title}
          fill
          className="object-cover"
          priority
          sizes="(max-width: 768px) 100vw, 1100px"
        />
      </div>
      <div className="mx-auto mt-10 max-w-3xl space-y-5 text-[16px] leading-[1.55] text-slate">
        {post.content.map((block) => (
          <BlogBodyBlock key={block.slice(0, 48)} block={block} />
        ))}
      </div>
      {post.faqs && post.faqs.length > 0 ? (
        <div className="mx-auto mt-12 max-w-3xl space-y-6">
          <h2 className="text-[28px] tracking-[-0.6px] text-white md:text-[32px]">Veelgestelde vragen</h2>
          {post.faqs.map((faq) => (
            <div key={faq.q}>
              <h3 className="text-[18px] text-white">{faq.q}</h3>
              <p className="mt-2 text-[16px] leading-[1.55] text-slate">{renderInline(faq.a)}</p>
            </div>
          ))}
        </div>
      ) : null}
      <div className="mt-12 flex flex-wrap justify-center gap-3">
        <Link href="/prijzen" className="btn btn-solid" aria-label="IPTV nu kopen">
          Bekijk abonnementen
        </Link>
        <Link href="/installatiegidsen" className="btn btn-ghost">
          Installatiegidsen
        </Link>
        {slug === "proef-iptv-nederland" ? (
          <a
            href={buildTestWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost"
            aria-label="24 uur proef aanvragen via WhatsApp"
          >
            Proef aanvragen via WhatsApp
          </a>
        ) : (
          <Link href="/blog/proef-iptv-nederland" className="btn btn-ghost">
            24 uur proef aanvragen
          </Link>
        )}
      </div>
      <RelatedContent title="Gerelateerde pagina's" links={related} />
    </article>
  );
}
