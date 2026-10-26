import Link from "next/link";
import Reveal from "@/components/channels/Reveal";

const trustBadges = ["Proef van 24 uur op aanvraag", "7 dagen garantie", "Support 24/7", "Veilig betalen"];

export default function ChannelsFinalCta() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 70% 80% at 50% 50%, rgba(255,255,255,0.10), transparent 65%), linear-gradient(180deg, #030303 0%, #0a0a0a 100%)",
        }}
      />
      <div className="section-shell relative">
        <Reveal>
          <div className="mx-auto max-w-3xl rounded-3xl border border-white/15 bg-white/[0.04] px-6 py-12 text-center backdrop-blur-md md:px-12 md:py-16">
            <p className="label text-white/60">IPTV Nederland kopen</p>
            <h2 className="mt-4 text-[36px] tracking-[-0.9px] text-white md:text-[48px]">
              Klaar om Nederlandse zenders op je scherm te kijken?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-[16px] text-slate">
              Kies een abonnement van BesteIPTVNederland, stel een speler in op het apparaat dat je al hebt en begin met
              Nederlandse tv, sport en VOD. Je kunt de proef van 24 uur aanvragen bij support; na aankoop heb je 7 dagen
              garantie.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link href="/prijzen" className="btn btn-solid" aria-label="Bekijk abonnementen IPTV Nederland">
                Bekijk abonnementen
              </Link>
              <Link href="/applicaties" className="btn btn-ghost" aria-label="Bekijk compatibele apps">
                Bekijk apps
              </Link>
            </div>
            <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              {trustBadges.map((badge) => (
                <li key={badge} className="text-[12px] uppercase tracking-[0.35px] text-muted">
                  {badge}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
