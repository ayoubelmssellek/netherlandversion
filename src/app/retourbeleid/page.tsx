import Breadcrumbs from "@/components/Breadcrumbs";
import { site } from "@/data/content";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Retourbeleid",
  description:
    "Retourbeleid van BesteIPTVNederland: voorwaarden, termijn van 7 dagen en hoe je een terugbetaling van de IPTV-dienst aanvraagt.",
  path: "/retourbeleid",
});

export default function RefundPolicyPage() {
  return (
    <div className="section-shell py-12 md:py-20">
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Retourbeleid", path: "/retourbeleid" },
        ]}
      />

      <header className="mt-8 max-w-3xl border-b border-line pb-10">
        <p className="label">Juridisch</p>
        <h1 className="mt-4 text-[40px] tracking-[-1.2px] text-white md:text-[48px]">Retourbeleid</h1>
        <p className="mt-6 text-[15px] leading-[1.6] text-slate">
          {site.name} raadt een <strong className="text-white">gratis proef van 24 uur</strong> aan (op aanvraag bij
          support) om de compatibiliteit te checken voordat je betaalt. Na de aankoop geldt een{" "}
          <strong className="text-white">tevredenheidsgarantie van 7 dagen</strong> onder de voorwaarden hieronder. Dit
          is geen onbeperkt gratis IPTV — de proef en de garantie zijn er om het risico bij je eerste ervaring klein te
          houden.
        </p>
      </header>

      <article className="mt-12 max-w-3xl space-y-10">
        <section>
          <h2 className="text-[20px] tracking-[-0.3px] text-white md:text-[22px]">Retourbeleid</h2>
          <p className="mt-4 text-[15px] leading-[1.6] text-slate">
            Aanvragen binnen de garantie van 7 dagen bekijken we per geval. De proef van 24 uur vóór je betaalt blijft
            de beste manier om apparaat en netwerk te testen. Na goedkeuring gaat het bedrag terug naar de oorspronkelijke
            betaalmethode.
          </p>
        </section>

        <section>
          <h2 className="text-[20px] tracking-[-0.3px] text-white md:text-[22px]">Wanneer je een terugbetaling kunt aanvragen</h2>
          <p className="mt-4 text-[15px] leading-[1.6] text-slate">
            Een terugbetaling kan in deze uitzonderlijke situaties worden overwogen:
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-[15px] leading-[1.6] text-slate">
            <li>
              Een ernstige, aantoonbare technische storing van de dienst die niet binnen 72 uur na een schriftelijke
              melding is opgelost.
            </li>
            <li>Een dubbele afschrijving of een gecontroleerde en bevestigde betaalfout.</li>
            <li>
              Opzegging binnen de garantie van 7 dagen na de eerste activatie, onder voorbehoud van beoordeling en de
              uitsluitingen hieronder.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-[20px] tracking-[-0.3px] text-white md:text-[22px]">Wanneer je geen recht hebt op terugbetaling</h2>
          <p className="mt-4 text-[15px] leading-[1.6] text-slate">In deze gevallen keren we niet terug:</p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-[15px] leading-[1.6] text-slate">
            <li>Een verandering van persoonlijke voorkeur nadat de dienst is geactiveerd.</li>
            <li>Compatibiliteitsproblemen met apparaten die je tijdens de gratis proef niet hebt getest.</li>
            <li>
              Onvoldoende internetsnelheid aan jouw kant (aanbevolen minimum: 10 Mbps voor HD, 25 Mbps voor 4K).
            </li>
            <li>
              Abonnementen buiten de garantie van 7 dagen of misbruik van de dienst (grootschalig delen, wederverkoop).
            </li>
            <li>Inhoud die door lokale geografische beperkingen is geblokkeerd.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-[20px] tracking-[-0.3px] text-white md:text-[22px]">Zo vraag je een terugbetaling aan</h2>
          <p className="mt-4 text-[15px] leading-[1.6] text-slate">Volg deze stappen:</p>
          <ol className="mt-4 list-decimal space-y-2 pl-5 text-[15px] leading-[1.6] text-slate">
            <li>
              Neem contact op met support via WhatsApp of e-mail:{" "}
              <a href={`mailto:${site.email}`} className="text-white underline-offset-4 hover:underline">
                {site.email}
              </a>
            </li>
            <li>Vermeld je volledige naam, het geregistreerde e-mailadres en een duidelijke reden.</li>
            <li>Wacht op ons antwoord, normaal binnen 5 werkdagen.</li>
            <li>
              Bij goedkeuring gaat de terugbetaling naar de oorspronkelijke betaalmethode, meestal binnen 7 tot 14
              werkdagen.
            </li>
          </ol>
        </section>

        <section>
          <h2 className="text-[20px] tracking-[-0.3px] text-white md:text-[22px]">Rechten van de consument</h2>
          <p className="mt-4 text-[15px] leading-[1.6] text-slate">
            Dit beleid houdt rekening met het herroepingsrecht bij overeenkomsten op afstand in het Burgerlijk Wetboek
            (Boek 6). Koop je een digitale dienst waarvan de levering meteen begint, dan erken je uitdrukkelijk dat je
            het herroepingsrecht verliest zodra de levering met je voorafgaande toestemming is begonnen (artikel 6:230p
            van het Burgerlijk Wetboek).
          </p>
        </section>

        <section>
          <h2 className="text-[20px] tracking-[-0.3px] text-white md:text-[22px]">Contact</h2>
          <p className="mt-4 text-[15px] leading-[1.6] text-slate">
            Vragen over betalingen of terugbetalingen? App ons via WhatsApp op de website, of mail naar{" "}
            <a href={`mailto:${site.email}`} className="text-white underline-offset-4 hover:underline">
              {site.email}
            </a>
            . Support is elke dag bereikbaar van 10:00 tot 22:00 (Nederlandse tijd).
          </p>
        </section>
      </article>
    </div>
  );
}
