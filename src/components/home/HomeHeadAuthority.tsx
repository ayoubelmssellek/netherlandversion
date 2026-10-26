import Link from "next/link";

const hubs = [
  {
    href: "/wat-is-iptv",
    label: "Wat is IPTV",
    detail: "Uitleg en hoe het werkt",
  },
  {
    href: "/kanalen",
    label: "Zenders en sport",
    detail: "NPO 1, RTL 4, ESPN, NOS",
  },
  {
    href: "/applicaties",
    label: "Apps",
    detail: "Smart TV, Fire Stick, Android, iOS",
  },
  {
    href: "/installatiegidsen",
    label: "Installatiegidsen",
    detail: "Stap voor stap per apparaat",
  },
  {
    href: "/prijzen",
    label: "Kopen / abonnementen",
    detail: "Prijs, verbindingen en betaling",
  },
  {
    href: "/veelgestelde-vragen",
    label: "Veelgestelde vragen",
    detail: "Installatie, proef en support",
  },
  {
    href: "/blog/beste-iptv-nederland-2026",
    label: "Beste IPTV Nederland 2026",
    detail: "Echte criteria voordat je een abonnement neemt",
  },
  {
    href: "/blog/proef-iptv-nederland",
    label: "Proef IPTV Nederland",
    detail: "24 uur op aanvraag bij support",
  },
  {
    href: "/blog/iptv-sport-nederland",
    label: "ESPN IPTV Nederland",
    detail: "Sport en favorieten in de speler",
  },
];

/** Compact hub strip — no long essay (deep copy lives on linked pages). */
export default function HomeHeadAuthority() {
  return (
    <section className="border-t border-line bg-surface py-16 md:py-20" aria-labelledby="iptv-nederland-hubs">
      <div className="section-shell">
        <p className="label">Ontdekken</p>
        <h2
          id="iptv-nederland-hubs"
          className="mt-4 max-w-3xl text-[28px] tracking-[-0.6px] text-white md:text-[36px] md:tracking-[-0.9px]"
        >
          Handige pagina&apos;s over IPTV Nederland
        </h2>
        <p className="mt-4 max-w-2xl text-[15px] leading-[1.55] text-slate">
          Snel naar wat het meest telt: catalogus, installatie, abonnementen en gidsen. Het domein
          besteiptvnederland.shop hoort bij deze dienst.
        </p>
        <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {hubs.map((hub) => (
            <li key={hub.href}>
              <Link
                href={hub.href}
                className="block h-full border border-line bg-deep p-5 transition hover:border-white/25"
              >
                <span className="text-[16px] text-white">{hub.label}</span>
                <span className="mt-2 block text-[13px] text-muted">{hub.detail}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
