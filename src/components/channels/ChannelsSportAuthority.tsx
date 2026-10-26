import Link from "next/link";
import { sportAuthorityBlocks, sportContentReviewed } from "@/data/channels-page";
import Reveal from "@/components/channels/Reveal";

export default function ChannelsSportAuthority() {
  return (
    <section className="border-y border-line bg-deep py-20 md:py-28">
      <div className="section-shell">
        <Reveal>
          <p className="label">Sport in de catalogus</p>
          <h2 className="mt-4 max-w-3xl text-[36px] tracking-[-0.9px] text-white md:text-[44px]">
            Sport in de catalogus: Eredivisie, ESPN en meer
          </h2>
          <p className="mt-4 max-w-2xl text-[16px] leading-[1.5] text-slate">
            Dit vind je in de dienst van BesteIPTVNederland, zonder gedeelde M3U-lijsten. Voor de stap-voor-stap uitleg
            over <em className="text-slate">hoe je</em> ESPN kijkt (speler, favorieten, verbinding), gebruik je de
            bloggids. Catalogus gecontroleerd op {sportContentReviewed}; die wordt elk sportseizoen bijgewerkt.
          </p>
        </Reveal>

        <div className="mt-12 space-y-10">
          {sportAuthorityBlocks.map((block, index) => (
            <Reveal key={block.id} delayMs={(index % 3) * 40}>
              <article id={block.id} className="max-w-3xl scroll-mt-28">
                <h3 className="text-[22px] text-white md:text-[24px]">{block.title}</h3>
                {block.paragraphs.map((p) => (
                  <p key={p.slice(0, 40)} className="mt-3 text-[15px] leading-7 text-slate">
                    {p}
                  </p>
                ))}
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 flex flex-wrap gap-3">
          <Link href="/blog/iptv-sport-nederland" className="btn btn-ghost">
            ESPN kijken (gids)
          </Link>
          <Link href="/blog/iptv-eredivisie-nederland" className="btn btn-ghost">
            Eredivisie en live voetbal
          </Link>
          <Link href="/prijzen" className="btn btn-solid" aria-label="Bekijk abonnementen voor sport">
            Bekijk abonnementen
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
