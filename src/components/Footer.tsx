import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/content";
import { packList } from "@/data/packs";
import { buildContactWhatsAppUrl } from "@/lib/whatsapp";
import brandLogo from "@/assets/brand/beste-iptv-nederland-logo.jpg";

function footerPackLabel(pack: (typeof packList)[number]): string {
  const price = pack.getPrice();
  const period =
    pack.slug === "trimestral"
      ? "/3 maanden"
      : "/jaar";
  return `${pack.name} · €${price}${period}`;
}

export default function Footer() {
  const year = new Date().getFullYear();
  const wa = buildContactWhatsAppUrl();

  return (
    <footer className="mt-auto border-t border-line bg-deep">
      <div className="pt-flag-rail" aria-hidden="true" />
      <div className="section-shell grid gap-12 py-16 md:grid-cols-4 md:gap-8">
        <div className="md:col-span-1">
          <Link href="/" className="inline-flex shrink-0" aria-label="BesteIPTVNederland — home">
            <Image
              src={brandLogo}
              alt="BesteIPTVNederland — logo IPTV Nederland"
              title="BesteIPTVNederland"
              height={44}
              width={148}
              className="h-11 w-auto"
            />
          </Link>
          <p className="mt-4 max-w-xs text-[13px] leading-[1.4] tracking-[-0.16px] text-slate">
            IPTV-dienst voor Nederland: nationale zenders, sport en VOD, met begeleide installatie en doorlopende support.
          </p>
        </div>

        <div>
          <p className="label mb-4">Ontdekken</p>
          <ul className="space-y-3 text-[14px] text-footer">
            <li>
              <Link href="/" className="hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link href="/wat-is-iptv" className="hover:text-white">
                Wat is IPTV
              </Link>
            </li>
            <li>
              <Link href="/kanalen" className="hover:text-white">
                Zenders
              </Link>
            </li>
            <li>
              <Link href="/applicaties" className="hover:text-white">
                Apps
              </Link>
            </li>
            <li>
              <Link href="/prijzen" className="hover:text-white">
                Prijzen
              </Link>
            </li>
            <li>
              <Link href="/veelgestelde-vragen" className="hover:text-white">
                Veelgestelde vragen
              </Link>
            </li>
            <li>
              <Link href="/beoordelingen" className="hover:text-white">
                Beoordelingen
              </Link>
            </li>
            <li>
              <Link href="/over-ons" className="hover:text-white">
                Over ons
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-white">
                Artikelen
              </Link>
            </li>
            <li>
              <Link href="/wederverkopers" className="hover:text-white">
                Wederverkopers
              </Link>
            </li>
            <li>
              <Link href="/iptv-nederland-whatsapp" className="hover:text-white">
                WhatsApp IPTV Nederland
              </Link>
            </li>
            <li>
              <Link href="/m3u-xtream-omzetter" className="hover:text-white">
                M3U ↔ Xtream-omzetter
              </Link>
            </li>
            <li>
              <Link href="/iptv-account-checker" className="hover:text-white">
                Accountchecker
              </Link>
            </li>
            <li>
              <Link href="/m3u-lijst-bijwerken" className="hover:text-white">
                M3U-lijst bijwerken
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="label mb-4">Abonnementen</p>
          <ul className="space-y-3 text-[14px] text-footer">
            <li>
              <Link href="/prijzen" className="hover:text-white">
                Abonnementen en prijzen
              </Link>
            </li>
            {packList.map((pack) => (
              <li key={pack.path}>
                <Link href={pack.path} className="hover:text-white">
                  {footerPackLabel(pack)}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/verlengen" className="hover:text-white">
                Verlengen
              </Link>
            </li>
            <li>
              <Link href="/installatiegidsen" className="hover:text-white">
                Installatiegidsen
              </Link>
            </li>
          </ul>
          <p className="label mb-4 mt-10">Juridisch</p>
          <ul className="space-y-3 text-[14px] text-footer">
            <li>
              <Link href="/privacybeleid" className="hover:text-white">
                Privacybeleid
              </Link>
            </li>
            <li>
              <Link href="/voorwaarden" className="hover:text-white">
                Voorwaarden
              </Link>
            </li>
            <li>
              <Link href="/retourbeleid" className="hover:text-white">
                Retourneren
              </Link>
            </li>
            <li>
              <Link href="/dmca-beleid" className="hover:text-white">
                DMCA
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="label mb-4">Contact</p>
          <ul className="space-y-3 text-[14px] text-footer">
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-white">
                {site.email}
              </a>
            </li>
            <li>
              <a href={wa} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                WhatsApp (directe chat)
              </a>
            </li>
            <li>
              <Link href="/iptv-nederland-whatsapp" className="hover:text-white">
                WhatsApp-gids BesteIPTVNederland
              </Link>
            </li>
            <li>
              <Link href="/over-ons" className="hover:text-white">
                Wie we zijn en hoe we je helpen
              </Link>
            </li>
          </ul>
          <Link href="/prijzen" className="btn btn-ghost mt-6" aria-label="Bekijk abonnementen BesteIPTVNederland">
            Bekijk abonnementen
          </Link>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="section-shell flex flex-col gap-2 py-5 text-[13px] text-footer sm:flex-row sm:justify-between">
          <p>
            © {year} {site.name}
          </p>
          <p>Activatie na betaling · 7 dagen garantie · proef van 24 uur op aanvraag</p>
        </div>
      </div>
    </footer>
  );
}
