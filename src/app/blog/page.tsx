import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedContent from "@/components/RelatedContent";
import { posts } from "@/data/blog";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Blog IPTV Nederland — gidsen en tips",
  description:
    "Blog IPTV Nederland: hoe je een dienst kiest, de beste apps, livestreams en installatie op iPhone en Apple TV.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <div className="section-shell py-16 md:py-24">
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Blog IPTV", path: "/blog" },
        ]}
      />
      <p className="label">Gidsen en tips</p>
      <h1 className="mt-4 text-[40px] tracking-[-1.2px] text-white md:text-[48px]">Blog IPTV Nederland</h1>
      <p className="mt-4 max-w-2xl text-[16px] text-slate">
        Installatiegidsen, de beste IPTV-apps en tips voor smart-tv, Android en Apple TV.
      </p>
      <div className="mt-12 grid gap-8 md:grid-cols-2">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
            <div className="img-frame relative aspect-[16/9]">
              <Image
                src={post.cover}
                alt={post.coverAlt}
                title={post.title}
                fill
                className="object-cover"
                sizes="50vw"
              />
            </div>
            <p className="mt-4 text-[13px] text-muted">
              {post.date} · {post.minutes} min leestijd
            </p>
            <h2 className="mt-2 text-[24px] text-white group-hover:text-slate">{post.title}</h2>
            <p className="mt-2 text-[14px] text-slate">{post.excerpt}</p>
          </Link>
        ))}
      </div>
      <div className="mt-12 flex flex-wrap gap-3">
        <Link href="/prijzen" className="btn btn-solid" aria-label="Bekijk IPTV-abonnementen">
          Bekijk abonnementen
        </Link>
        <Link href="/installatiegidsen" className="btn btn-ghost">
          Installatiegidsen
        </Link>
      </div>
      <RelatedContent
        title="Gerelateerd"
        links={[
          {
            href: "/installatiegidsen",
            label: "Installatie-overzicht",
            description: "Handleidingen per apparaat.",
          },
          {
            href: "/prijzen",
            label: "IPTV kopen",
            description: "Abonnementen en prijzen.",
          },
          {
            href: "/kanalen",
            label: "IPTV-zenders Nederland",
            description: "Wat je live kunt kijken.",
          },
          {
            href: "/over-ons",
            label: "Waarom BesteIPTVNederland",
            description: "Wat deze dienst anders maakt.",
          },
        ]}
      />
    </div>
  );
}
