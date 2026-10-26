import { Globe2, Languages, Users } from "lucide-react";
import Reveal from "@/components/channels/Reveal";

const points = [
  {
    icon: Languages,
    title: "Meertalige huishoudens",
    description:
      "Zenders uit Europa en Amerika als aanvulling: handig voor gezinnen in Nederland die ook internationaal kijken.",
  },
  {
    icon: Globe2,
    title: "Extra voordeel",
    description:
      "De focus ligt op Nederlandse IPTV. Internationale pakketten zijn er om je keuze uit te breiden, niet om Nederlandse tv te vervangen.",
  },
  {
    icon: Users,
    title: "Gemaakt voor wie in Nederland woont",
    description:
      "Alles wat je nodig hebt in IPTV voor Nederland: eerst lokale zenders, met internationaal erbij wanneer je wilt.",
  },
];

export default function InternationalChannels() {
  return (
    <section className="section-shell py-20 md:py-28">
      <Reveal>
        <p className="label">Extra</p>
        <h2 className="mt-4 max-w-2xl text-[36px] tracking-[-0.9px] text-white md:text-[44px]">
          Ook internationale zenders
        </h2>
        <p className="mt-4 max-w-2xl text-[16px] text-slate">
          Naast de IPTV-zenders voor Nederland bevat de catalogus internationale opties voor wie in Nederland woont: een
          aanvulling, niet het hoofdproduct. Geen verzonnen landcijfers: check in de speler wat er actief is.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {points.map((point, index) => {
          const Icon = point.icon;
          return (
            <Reveal key={point.title} delayMs={index * 70}>
              <article className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:border-white/20">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] text-white">
                  <Icon size={20} aria-hidden="true" />
                </div>
                <h3 className="mt-5 text-[18px] text-white">{point.title}</h3>
                <p className="mt-3 text-[14px] leading-[1.45] text-slate">{point.description}</p>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
