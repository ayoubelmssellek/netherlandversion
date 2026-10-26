import Link from "next/link";
import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import RenewForm from "@/components/RenewForm";
import RelatedContent from "@/components/RelatedContent";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "IPTV-abonnement verlengen in Nederland",
  description:
    "Verleng IPTV Nederland: breid je BesteIPTVNederland-abonnement uit zonder je toegang te verliezen. E-mail of gebruikersnaam — extra verbindingen regel je apart.",
  path: "/verlengen",
});

export default function RenewPage() {
  return (
    <div className="section-shell py-16 md:py-24">
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "IPTV verlengen", path: "/verlengen" },
        ]}
      />
      <p className="label">Bestaande klanten</p>
      <h1 className="mt-4 text-[40px] tracking-[-1.2px] text-white md:text-[48px]">
        IPTV-abonnement verlengen
      </h1>
      <p className="mt-4 max-w-2xl text-[16px] text-slate">
        Deze pagina is voor wie al een BesteIPTVNederland-account heeft en de toegang wil verlengen. Ben je nog geen
        klant, ga dan naar{" "}
        <Link href="/prijzen" className="text-white underline-offset-4 hover:underline">
          IPTV Nederland kopen
        </Link>{" "}
        — de abonnementen en prijzen voor een eerste aankoop staan daar.
      </p>

      <section className="mt-10 max-w-3xl space-y-4 text-[15px] leading-7 text-slate">
        <h2 className="text-[20px] text-white">Wat er gebeurt als je verlengt</h2>
        <p>
          Bij een verlenging houd je normaal dezelfde gebruikersnaam en dezelfde instellingen in je speler (Smarters,
          smart-tv, Fire Stick). Je hoeft niet alles opnieuw te installeren — controleer alleen of de periode weer
          actief is. Wil je <strong className="text-white">meer verbindingen</strong> (bijvoorbeeld van 1 naar 2), zet
          dat dan in je aanvraag of kies het juiste abonnement op de prijzenpagina en stem het af met support.
        </p>
        <p>
          Op tijd verlengen voorkomt dat het beeld wegvalt in de rust van de wedstrijd. Loopt je einddatum bijna af,
          gebruik dan het formulier hieronder met het e-mailadres van de aankoop of je Xtream-gebruikersnaam.
        </p>
      </section>

      <RenewForm />

      <section className="mt-12 max-w-3xl space-y-4 text-[15px] leading-7 text-slate">
        <h2 className="text-[20px] text-white">Verlengen of opnieuw kopen</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="text-white">Verlengen:</strong> je hebt al toegang — je verlengt dezelfde toegang.
          </li>
          <li>
            <strong className="text-white">Een nieuw abonnement kopen:</strong> de eerste keer, of je wilt de looptijd
            of het aantal verbindingen wijzigen via de checkout op /prijzen.
          </li>
        </ul>
        <p>
          Twijfel je over de prijs?{" "}
          <Link href="/blog/iptv-nederland-prijs-abonnementen" className="text-white underline-offset-4 hover:underline">
            IPTV Nederland: prijs en abonnementen
          </Link>
          . Technische problemen na het verlengen?{" "}
          <Link
            href="/blog/iptv-werkt-niet-buffering-nederland"
            className="text-white underline-offset-4 hover:underline"
          >
            Checklist bij buffering
          </Link>
          .
        </p>
      </section>

      <RelatedContent
        title="Extra hulp"
        links={[
          {
            href: "/prijzen",
            label: "Bekijk abonnementen (nieuwe aankoop)",
            description: "Looptijden en aantal verbindingen.",
          },
          {
            href: "/installatiegidsen",
            label: "Speler opnieuw instellen",
            description: "Als de toegang is gewijzigd of de app om een herstart vraagt.",
          },
          {
            href: "/retourbeleid",
            label: "Retourbeleid",
            description: "Proef van 24 uur en 7 dagen garantie.",
          },
          {
            href: "/over-ons",
            label: "Over de dienst",
            description: "Support en afspraken.",
          },
        ]}
      />
    </div>
  );
}
