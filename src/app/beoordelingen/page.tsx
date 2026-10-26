import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import ReviewForm from "@/components/reviews/ReviewForm";
import ReviewStars from "@/components/reviews/ReviewStars";
import { getReviewStats, reviews } from "@/data/reviews";
import { buildMetadata, reviewsProductJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Beoordelingen IPTV Nederland — klanten BesteIPTVNederland",
  description:
    "Klantbeoordelingen van BesteIPTVNederland: installatie, Nederlandse zenders, sport en support. Lees ervaringen en laat je eigen beoordeling achter.",
  path: "/beoordelingen",
});

const breadcrumbItems = [
  { name: "Home", path: "/" },
  { name: "Beoordelingen", path: "/beoordelingen" },
];

export default function BeoordelingenPage() {
  const stats = getReviewStats();

  return (
    <>
      <JsonLd data={reviewsProductJsonLd()} />
      <section className="section-shell pb-10 pt-24 md:pb-12 md:pt-28">
        <Breadcrumbs items={breadcrumbItems} />
        <p className="animate-rise mt-6 label text-white/70">Ervaringen van klanten</p>
        <h1 className="animate-rise-delay-1 mt-4 max-w-3xl text-[36px] tracking-[-1px] text-white md:text-[48px]">
          Beoordelingen BesteIPTVNederland
        </h1>
        {stats.reviewCount > 0 ? (
          <p className="animate-rise-delay-2 mt-5 max-w-2xl text-[16px] leading-[1.5] text-slate md:text-[18px]">
            Gemiddeld{" "}
            <strong className="text-white">{stats.ratingValue.toFixed(1).replace(".", ",")}/5</strong> op basis van{" "}
            <strong className="text-white">{stats.reviewCount}</strong> gepubliceerde beoordelingen. Nieuwe inzendingen
            worden eerst nagekeken voordat ze hier verschijnen.
          </p>
        ) : (
          <p className="animate-rise-delay-2 mt-5 max-w-2xl text-[16px] leading-[1.5] text-slate md:text-[18px]">
            Er staan nog geen gepubliceerde beoordelingen. Nieuwe inzendingen worden eerst nagekeken voordat ze hier
            verschijnen.
          </p>
        )}
        <div className="mt-6 flex flex-wrap gap-3">
          <a href="#beoordeling-plaatsen" className="btn btn-solid">
            Beoordeling achterlaten
          </a>
          <Link href="/prijzen" className="btn btn-ghost">
            Bekijk abonnementen
          </Link>
        </div>
      </section>

      <section className="section-shell pb-16 md:pb-20" aria-labelledby="lijst-beoordelingen">
        <h2 id="lijst-beoordelingen" className="text-[24px] text-white md:text-[28px]">
          Alle beoordelingen
        </h2>
        {reviews.length === 0 ? (
          <p className="mt-8 text-[15px] leading-[1.55] text-slate">Nog geen beoordelingen gepubliceerd.</p>
        ) : (
          <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review) => (
              <li key={review.id} className="border-t border-line pt-5">
                <ReviewStars rating={review.rating} />
                <p className="mt-3 text-[14px] leading-[1.55] text-slate">&ldquo;{review.comment}&rdquo;</p>
                <p className="mt-4 text-[13px] text-white">
                  {review.author}
                  <span className="text-muted"> · {review.location}</span>
                </p>
                <time className="mt-1 block text-[12px] text-muted" dateTime={review.date}>
                  {new Date(review.date).toLocaleDateString("nl-NL", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </time>
              </li>
            ))}
          </ul>
        )}
      </section>

      <section className="section-shell pb-20 md:pb-28" aria-labelledby="beoordeling-plaatsen">
        <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[1fr_1.05fr] lg:items-start">
          <div>
            <p className="label">Deel je ervaring</p>
            <h2 className="mt-3 text-[24px] text-white md:text-[28px]">Wil je hier verschijnen?</h2>
            <p className="mt-3 text-[15px] leading-[1.55] text-slate">
              Vul het formulier in. We ontvangen je beoordeling per e-mail, filteren spam en publiceren alleen wat
              andere klanten echt helpt.
            </p>
            <p className="mt-4 text-[13px] text-muted">
              Ben je al klant? Noem je apparaat (smart-tv, Fire Stick…) en of je vooral sport of VOD kijkt — dat helpt
              iemand die een abonnement kiest.
            </p>
          </div>
          <ReviewForm />
        </div>
      </section>
    </>
  );
}
