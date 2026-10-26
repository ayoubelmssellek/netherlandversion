import Link from "next/link";
import ReviewStars from "@/components/reviews/ReviewStars";
import { formatRatingLabel, getFeaturedReviews, getReviewStats } from "@/data/reviews";

export default function ClientReviews() {
  const stats = getReviewStats();
  const featured = getFeaturedReviews();

  return (
    <section className="section-shell py-16 md:py-20" aria-labelledby="reviews-heading">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div className="max-w-2xl">
          <p className="label">Klantbeoordelingen</p>
          <h2
            id="reviews-heading"
            className="mt-3 text-[28px] tracking-[-0.6px] text-white md:text-[36px]"
          >
            Wat gebruikers ervan vinden
          </h2>
          <p className="mt-3 text-[15px] leading-[1.5] text-slate">
            Gemiddeld <strong className="text-white">{stats.ratingValue.toFixed(1).replace(".", ",")}</strong> uit{" "}
            <strong className="text-white">{stats.reviewCount}</strong> beoordelingen: bekijk meer op de
            beoordelingenpagina of laat zelf een review achter.
          </p>
        </div>
        <p className="text-[13px] text-muted">{formatRatingLabel(stats)}</p>
      </div>

      <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((review) => (
          <li key={review.id} className="border-t border-line pt-5">
            <ReviewStars rating={review.rating} />
            <p className="mt-3 text-[14px] leading-[1.55] text-slate">&ldquo;{review.comment}&rdquo;</p>
            <p className="mt-4 text-[13px] text-white">
              {review.author}
              <span className="text-muted"> · {review.location}</span>
            </p>
          </li>
        ))}
      </ul>

      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/beoordelingen" className="btn btn-ghost">
          Alle beoordelingen
        </Link>
        <Link href="/beoordelingen#beoordeling-achterlaten" className="btn btn-solid">
          Beoordeling achterlaten
        </Link>
      </div>
    </section>
  );
}
