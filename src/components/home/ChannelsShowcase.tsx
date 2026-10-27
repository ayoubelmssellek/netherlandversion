"use client";

import Image from "next/image";
import Link from "next/link";
import {
  useCallback,
  useEffect,
  useId,
  useMemo,
  useState,
  type KeyboardEvent,
} from "react";
import type { SeoImage } from "@/data/media";

type ChannelsShowcaseProps = {
  channels: SeoImage[];
};

type GuideMeta = {
  number: string;
  category: string;
  blurb: string;
};

const GUIDE_META: Record<string, GuideMeta> = {
  "NPO 1": {
    number: "01",
    category: "Algemeen",
    blurb: "NPO 1 live, in het IPTV Nederland-abonnement.",
  },
  "RTL 4": {
    number: "02",
    category: "Algemeen",
    blurb: "RTL 4: series, nieuws en entertainment.",
  },
  SBS6: {
    number: "03",
    category: "Algemeen",
    blurb: "SBS6 in dezelfde Xtream-toegang.",
  },
  "NPO 2": {
    number: "04",
    category: "Algemeen",
    blurb: "NPO 2, met actualiteit en cultuur.",
  },
  ESPN: {
    number: "05",
    category: "Sport",
    blurb: "ESPN voor de Eredivisie en Europese avonden.",
  },
  Veronica: {
    number: "06",
    category: "Entertainment",
    blurb: "Veronica in het entertainmentaanbod.",
  },
};

/** Keys must match `channelLogos[].entity` in `src/data/media.ts`. */
const GUIDE_ORDER = ["NPO 1", "RTL 4", "SBS6", "NPO 2", "ESPN", "Veronica"];
const AUTO_MS = 3200;

export default function ChannelsShowcase({ channels }: ChannelsShowcaseProps) {
  const listId = useId();

  const guideChannels = useMemo(() => {
    const byEntity = new Map(channels.map((channel) => [channel.entity, channel]));
    return GUIDE_ORDER.map((name) => byEntity.get(name)).filter((channel): channel is SeoImage => Boolean(channel));
  }, [channels]);

  // Start at 01 and auto-cycle through 06
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const active = guideChannels[activeIndex] ?? guideChannels[0];
  const meta = active ? GUIDE_META[active.entity] : undefined;
  const count = guideChannels.length;

  const selectChannel = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  useEffect(() => {
    if (count < 2 || paused) return;

    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const id = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % count);
    }, AUTO_MS);

    return () => window.clearInterval(id);
  }, [count, paused]);

  const onListKeyDown = useCallback(
    (event: KeyboardEvent<HTMLDivElement>) => {
      if (!count) return;

      if (event.key === "ArrowDown" || event.key === "ArrowRight") {
        event.preventDefault();
        setActiveIndex((current) => (current + 1) % count);
      }
      if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
        event.preventDefault();
        setActiveIndex((current) => (current - 1 + count) % count);
      }
      if (event.key === "Home") {
        event.preventDefault();
        setActiveIndex(0);
      }
      if (event.key === "End") {
        event.preventDefault();
        setActiveIndex(count - 1);
      }
    },
    [count],
  );

  if (!active) return null;

  return (
    <section className="border-y border-line bg-[#070707] py-10 md:py-14" aria-labelledby="channels-showcase-heading">
      <div className="section-shell">
        <div className="flex flex-col gap-4 border-b border-line pb-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="label">Zenders IPTV Nederland</p>
            <h2
              id="channels-showcase-heading"
              className="mt-3 text-[28px] tracking-[-0.7px] text-white md:text-[36px]"
            >
              Zenders IPTV Nederland
            </h2>
            <p className="mt-2 max-w-xl text-[14px] leading-[1.45] text-slate md:text-[15px]">
              Voorbeelden uit de actieve catalogus: NPO 1, RTL 4, SBS6, NPO 2, ESPN en Veronica. De volledige lijst staat
              op Zenders.
            </p>
          </div>

          <div className="flex shrink-0 flex-wrap gap-2">
            <Link href="/kanalen" className="btn btn-ghost" aria-label="Bekijk de zenderlijst IPTV Nederland">
              Zenderlijst
            </Link>
            <Link href="/prijzen" className="btn btn-solid" aria-label="Bekijk prijzen IPTV Nederland">
              Bekijk prijzen
            </Link>
          </div>
        </div>

        <div
          className="grid lg:grid-cols-[minmax(200px,260px)_minmax(0,1fr)]"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
              setPaused(false);
            }
          }}
        >
          <div
            role="listbox"
            id={listId}
            aria-label="Kies een IPTV-zender Nederland"
            aria-activedescendant={`${listId}-option-${activeIndex}`}
            tabIndex={0}
            onKeyDown={onListKeyDown}
            className="border-line outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070707] lg:border-r"
          >
            {guideChannels.map((channel, index) => {
              const isActive = index === activeIndex;
              const channelMeta = GUIDE_META[channel.entity];
              return (
                <button
                  key={channel.entity}
                  type="button"
                  role="option"
                  id={`${listId}-option-${index}`}
                  aria-selected={isActive}
                  onClick={() => selectChannel(index)}
                  className={`group flex w-full items-center gap-3 border-b border-line px-3 py-2.5 text-left transition-colors duration-200 md:px-4 ${
                    isActive
                      ? "bg-pt-red text-white"
                      : "bg-transparent text-slate hover:bg-pt-green/10 hover:text-white"
                  }`}
                >
                  <span
                    className={`font-mono text-[11px] tracking-wider ${isActive ? "text-white/60" : "text-muted"}`}
                  >
                    {channelMeta?.number ?? String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="relative h-6 w-10 shrink-0 rounded bg-white">
                    <Image
                      src={channel.src}
                      alt={channel.alt}
                      title={channel.title}
                      fill
                      className="object-contain"
                      sizes="40px"
                      aria-hidden="true"
                    />
                  </span>
                  <span className="min-w-0 flex-1 truncate text-[13px] font-medium">{channel.entity}</span>
                </button>
              );
            })}
          </div>

          <div
            role="region"
            aria-live="polite"
            aria-labelledby={`${listId}-option-${activeIndex}`}
            className="flex items-center gap-5 bg-deep px-5 py-5 md:gap-8 md:px-8 md:py-6"
          >
            <div className="relative h-16 w-28 shrink-0 rounded-lg bg-white md:h-20 md:w-36">
              <Image
                key={active.entity}
                src={active.src}
                alt={active.alt}
                title={active.title}
                fill
                className="object-contain animate-rise"
                sizes="144px"
                priority={activeIndex === 0}
              />
            </div>
            <div key={active.entity} className="min-w-0 flex-1 animate-rise">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-[22px] tracking-[-0.4px] text-white md:text-[26px]">{active.entity}</h3>
                <span className="text-[11px] uppercase tracking-[0.06em] text-muted">
                  {meta?.category ?? "Zender"} · live
                </span>
              </div>
              <p className="mt-2 text-[14px] leading-[1.45] text-slate">{meta?.blurb}</p>
              <Link
                href="/kanalen"
                className="mt-3 inline-block text-[13px] text-white underline-offset-4 hover:underline"
              >
                Volledige catalogus →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
