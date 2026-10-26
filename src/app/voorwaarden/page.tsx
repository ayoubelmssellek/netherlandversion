import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { site } from "@/data/content";
import { buildMetadata, siteConfig } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Algemene voorwaarden",
  description:
    "Algemene voorwaarden van BesteIPTVNederland: gebruik van de website, IPTV-abonnementen in Nederland, betalingen en contact.",
  path: "/voorwaarden",
});

const sections = [
  {
    title: "1. Toepassingsgebied",
    body: `Deze voorwaarden regelen het gebruik van de website en de diensten van ${site.name}, inclusief abonnementen, support en bijbehorende functies.`,
  },
  {
    title: "2. Voorwaarden voor gebruik",
    body: "Door onze diensten te gebruiken, verklaar je dat je:",
    list: [
      "minstens 18 jaar bent;",
      "juiste en actuele gegevens doorgeeft;",
      "de dienst gebruikt volgens het toepasselijke recht.",
    ],
    footer: "We kunnen de dienst weigeren of opschorten als je niet aan deze voorwaarden voldoet.",
  },
  {
    title: "3. Abonnementen en toegang",
    body: `${site.name} biedt verschillende IPTV-abonnementen voor Nederland. Na bevestiging van de betaling ontvang je de toegangsgegevens per e-mail. De toegang is persoonlijk en niet overdraagbaar, behalve als een abonnement voor meerdere apparaten dat uitdrukkelijk toestaat.`,
  },
  {
    title: "4. Aanvaardbaar gebruik",
    body: "Je verplicht je om niet:",
    list: [
      "de dienst voor illegale doeleinden te gebruiken;",
      "toegangsgegevens op een misbruikende manier te delen;",
      "technische systemen te proberen binnen te komen of te verstoren;",
      "de dienst zonder toestemming te kopiëren, te verspreiden of commercieel te exploiteren.",
    ],
    footer: "Een overtreding kan leiden tot directe opschorting van het account, zonder recht op terugbetaling.",
  },
  {
    title: "5. Betalingen",
    body: "Betalingen lopen via beveiligde externe platforms. Prijzen op de website kunnen op elk moment wijzigen, zonder dat dit al bevestigde bestellingen raakt. Automatische verlenging gebeurt alleen als dat bij de aankoop uitdrukkelijk is aangegeven.",
  },
  {
    title: "6. Opzeggen",
    body: (
      <>
        Je kunt het abonnement op elk moment opzeggen. Opzeggen voorkomt toekomstige verlengingen, maar geeft geen recht
        op terugbetaling van al betaalde periodes, tenzij het{" "}
        <Link href="/retourbeleid" className="text-white underline-offset-4 hover:underline">
          Retourbeleid
        </Link>{" "}
        iets anders bepaalt.
      </>
    ),
  },
  {
    title: "7. Beschikbaarheid van de dienst",
    body: `${site.name} doet zijn best om de dienst zo stabiel mogelijk te houden. Toch geldt:`,
    list: [
      "we garanderen geen ononderbroken beschikbaarheid;",
      "technisch onderhoud kan nodig zijn;",
      "tijdelijke onderbrekingen buiten onze controle kunnen voorkomen.",
    ],
    footer: "We zijn niet aansprakelijk voor storingen door jouw internet of door derden.",
  },
  {
    title: "8. Wijzigingen in de dienst",
    body: "We behouden ons het recht voor om:",
    list: [
      "functies te wijzigen;",
      "systemen bij te werken;",
      "inhoud te wijzigen of te verwijderen;",
      "delen van de dienst op te schorten of te stoppen.",
    ],
  },
  {
    title: "9. Intellectueel eigendom",
    body: `Alle elementen van deze website, waaronder ontwerp, tekst, structuur en merk, zijn eigendom van ${site.name} of van de betreffende licentiegevers. Reproduceren, aanpassen of commercieel gebruiken zonder voorafgaande toestemming is niet toegestaan.`,
  },
  {
    title: "10. Beperking van aansprakelijkheid",
    body: "Voor zover de wet dat toestaat:",
    list: [
      "garanderen we niet dat de dienst foutloos is;",
      "zijn we niet aansprakelijk voor indirecte schade of gevolgschade;",
      "zijn we niet aansprakelijk voor tijdelijke storingen of onbeschikbaarheid.",
    ],
    footer:
      "Je gebruikt de dienst op eigen verantwoordelijkheid, onverminderd de rechten die het consumentenrecht je dwingend toekent.",
  },
  {
    title: "11. Externe links",
    body: "Deze website kan links naar websites van derden bevatten. We zijn niet verantwoordelijk voor de inhoud of de praktijken van die sites.",
  },
  {
    title: "12. Gegevensbescherming",
    body: (
      <>
        Persoonsgegevens verwerken we volgens ons{" "}
        <Link href="/privacybeleid" className="text-white underline-offset-4 hover:underline">
          Privacybeleid
        </Link>
        . Lees dat beleid om te zien hoe gegevens worden verzameld en gebruikt.
      </>
    ),
  },
  {
    title: "13. Wijziging van deze voorwaarden",
    body: `${site.name} kan deze voorwaarden op elk moment bijwerken. Blijf je de website gebruiken na een wijziging, dan accepteer je de bijgewerkte voorwaarden.`,
  },
  {
    title: "14. Toepasselijk recht en bevoegde rechter",
    body: "Deze voorwaarden vallen onder Nederlands recht. Geschillen worden voorgelegd aan de bevoegde rechter in Nederland, onverminderd de dwingende forumregels die voor jou als consument gelden.",
  },
  {
    title: "15. Contact",
    body: "Vragen over deze algemene voorwaarden:",
    contact: true,
  },
];

export default function TermsPage() {
  return (
    <div className="section-shell py-12 md:py-20">
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Algemene voorwaarden", path: "/voorwaarden" },
        ]}
      />

      <header className="mt-8 max-w-3xl border-b border-line pb-10">
        <p className="label">Juridisch</p>
        <h1 className="mt-4 text-[40px] tracking-[-1.2px] text-white md:text-[48px]">Algemene voorwaarden</h1>
        <p className="mt-2 text-[18px] text-slate">{site.name}</p>
        <p className="mt-6 text-[15px] leading-[1.6] text-slate">
          Welkom bij {site.name}. Door de website{" "}
          <a href={siteConfig.url} className="text-white underline-offset-4 hover:underline">
            {siteConfig.url}
          </a>{" "}
          en de diensten te gebruiken, verklaar je dat je deze algemene voorwaarden hebt gelezen, begrepen en
          geaccepteerd.
        </p>
        <p className="mt-4 text-[15px] leading-[1.6] text-slate">
          Ben je het er niet mee eens, stop dan meteen met het gebruik van de website en de diensten.
        </p>
      </header>

      <article className="mt-12 max-w-3xl space-y-10">
        {sections.map((section) => (
          <section key={section.title}>
            <h2 className="text-[20px] tracking-[-0.3px] text-white md:text-[22px]">{section.title}</h2>
            <div className="mt-4 space-y-4 text-[15px] leading-[1.6] text-slate">
              {typeof section.body === "string" ? <p>{section.body}</p> : section.body}
              {section.list ? (
                <ul className="list-disc space-y-2 pl-5">
                  {section.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}
              {section.footer ? <p>{section.footer}</p> : null}
              {section.contact ? (
                <ul className="space-y-2">
                  <li>
                    <strong className="text-white">{site.name}</strong>
                  </li>
                  <li>
                    Website:{" "}
                    <a href={siteConfig.url} className="text-white underline-offset-4 hover:underline">
                      {siteConfig.url}
                    </a>
                  </li>
                  <li>
                    E-mail:{" "}
                    <a href={`mailto:${site.email}`} className="text-white underline-offset-4 hover:underline">
                      {site.email}
                    </a>
                  </li>
                </ul>
              ) : null}
            </div>
          </section>
        ))}
      </article>
    </div>
  );
}
