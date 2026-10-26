import Breadcrumbs from "@/components/Breadcrumbs";
import { site } from "@/data/content";
import { buildMetadata, siteConfig } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Privacybeleid",
  description:
    "Privacybeleid van BesteIPTVNederland: hoe we persoonsgegevens verzamelen, gebruiken en beschermen (AVG).",
  path: "/privacybeleid",
});

const sections = [
  {
    title: "1. Verwerkingsverantwoordelijke",
    body: "De verwerkingsverantwoordelijke voor persoonsgegevens is:",
    contact: true,
    footer:
      "Voor vragen over gegevensbescherming of om je rechten onder de Algemene verordening gegevensbescherming (AVG) uit te oefenen, mail je naar het adres hierboven.",
  },
  {
    title: "2. Welke persoonsgegevens we verzamelen",
    body: "We kunnen deze persoonsgegevens verzamelen:",
    list: [
      "Naam (als je die zelf doorgeeft)",
      "E-mailadres",
      "Telefoonnummer (als dat van toepassing is)",
      "Betaalgegevens (verwerkt door derden)",
    ],
    footer: "We verzamelen alleen wat nodig is om de dienst te leveren en de ervaring op de site te verbeteren.",
  },
  {
    title: "3. Waarvoor we gegevens gebruiken",
    body: "De verzamelde persoonsgegevens gebruiken we om:",
    list: [
      "abonnementen en bestellingen te verwerken;",
      "toegangsgegevens van de dienst te sturen;",
      "klantenservice te bieden;",
      "de werking en functies van de website te verbeteren;",
      "wettelijke en fiscale verplichtingen na te komen;",
      "fraude en misbruik van de dienst te voorkomen.",
    ],
    footer: "We gebruiken gegevens niet voor doelen die niet bij deze doelen passen of die je niet hebt toegestaan.",
  },
  {
    title: "4. Rechtsgrond",
    body: "De verwerking steunt op deze rechtsgronden:",
    list: [
      "Uitvoering van een overeenkomst (de dienst die je hebt gevraagd)",
      "Jouw toestemming",
      "Nakoming van een wettelijke verplichting",
      "Gerechtvaardigd belang bij het beheren en verbeteren van de dienst.",
    ],
  },
  {
    title: "5. Betalingen",
    body: `Betalingen lopen via beveiligde externe platforms. ${site.name} slaat geen volledige bankkaartgegevens op. De partijen die de betaling verwerken, behandelen die gegevens volgens hun eigen privacybeleid en beveiligingsregels.`,
  },
  {
    title: "6. Delen met derden",
    body: "Gegevens kunnen worden gedeeld met:",
    list: [
      "Hosting- en infrastructuurleveranciers",
      "Betaaldienstverleners",
      "E-mail- of supportdiensten",
      "Overheden en andere instanties als de wet dat vraagt.",
    ],
    footer: "We verkopen, verhuren of verhandelen persoonsgegevens niet aan derden.",
  },
  {
    title: "7. Cookies en vergelijkbare technieken",
    body: "Volgens de huidige inventaris van de applicatie (frontendcode) gebruiken we geen analysecookies en geen marketingpixels van derden. De verwerking blijft beperkt tot wat nodig is om de site te laten werken:",
    list: [
      "Essentiële cookies of technische opslag, als hosting of de checkout die zet (sessie, beveiliging, werking).",
      "Strikt noodzakelijke technische voorkeuren voor de dienst, als die er zijn.",
    ],
    footer:
      "Er is geen aparte cookiepagina, omdat er in de huidige inventaris geen niet-essentiële analyse- of marketingcookies zijn om te catalogiseren (cookieregels in de Telecommunicatiewet). Zetten we later cookies van derden in voor statistiek of advertenties, dan werken we dit onderdeel bij en publiceren we zo nodig een apart cookiebeleid met een melding en toestemming. Je kunt cookies beheren of blokkeren in de instellingen van je browser.",
  },
  {
    title: "8. Bewaartermijn",
    body: "Persoonsgegevens bewaren we alleen zo lang als nodig is om:",
    list: ["de beschreven doelen te halen", "wettelijke verplichtingen na te komen", "mogelijke geschillen af te handelen"],
    footer: "Daarna verwijderen of anonimiseren we de gegevens op een veilige manier.",
  },
  {
    title: "9. Jouw rechten",
    body: "Onder de AVG heb je het recht om:",
    list: [
      "je persoonsgegevens in te zien",
      "onjuiste gegevens te laten corrigeren",
      "verwijdering van gegevens te vragen",
      "beperking van de verwerking te vragen",
      "gegevensoverdraagbaarheid te vragen",
      "bezwaar te maken tegen de verwerking",
      "je toestemming op elk moment in te trekken",
    ],
    footer: (
      <>
        Wil je een recht uitoefenen, mail dan naar:{" "}
        <a href={`mailto:${site.email}`} className="text-white underline-offset-4 hover:underline">
          {site.email}
        </a>
        . Vind je dat je rechten niet goed zijn behandeld, dan kun je een klacht indienen bij de Autoriteit
        Persoonsgegevens.
      </>
    ),
  },
  {
    title: "10. Beveiliging",
    body: "We hebben passende technische en organisatorische maatregelen genomen om persoonsgegevens te beschermen tegen:",
    list: ["onbevoegde toegang", "verlies, vernietiging of wijziging", "onrechtmatige openbaarmaking"],
    footer: "Ondanks die maatregelen kan geen enkel online systeem absolute veiligheid garanderen.",
  },
  {
    title: "11. Links naar andere websites",
    body: "Deze website kan links naar sites van derden bevatten. We zijn niet verantwoordelijk voor het privacybeleid of de inhoud van die sites. Lees hun beleid voordat je persoonsgegevens doorgeeft.",
  },
  {
    title: "12. Wijzigingen in dit privacybeleid",
    body: "We kunnen dit privacybeleid op elk moment wijzigen. Wijzigingen gelden zodra ze op de website staan. Bekijk deze pagina af en toe opnieuw.",
  },
  {
    title: "13. Contact",
    body: "Vragen over dit privacybeleid of over de verwerking van persoonsgegevens kun je stellen aan:",
    contact: true,
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="section-shell py-12 md:py-20">
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Privacybeleid", path: "/privacybeleid" },
        ]}
      />

      <header className="mt-8 max-w-3xl border-b border-line pb-10">
        <p className="label">Juridisch</p>
        <h1 className="mt-4 text-[40px] tracking-[-1.2px] text-white md:text-[48px]">Privacybeleid</h1>
        <p className="mt-2 text-[18px] text-slate">{site.name}</p>
        <p className="mt-6 text-[15px] leading-[1.6] text-slate">
          Dit privacybeleid beschrijft hoe {site.name}, via de website{" "}
          <a href={siteConfig.url} className="text-white underline-offset-4 hover:underline">
            {siteConfig.url}
          </a>
          , persoonsgegevens van gebruikers verzamelt, gebruikt, bewaart en beschermt.
        </p>
        <p className="mt-4 text-[15px] leading-[1.6] text-slate">
          Door deze website te gebruiken, verklaar je dat je dit privacybeleid hebt gelezen, begrepen en geaccepteerd.
        </p>
      </header>

      <article className="mt-12 max-w-3xl space-y-10">
        {sections.map((section) => (
          <section key={section.title}>
            <h2 className="text-[20px] tracking-[-0.3px] text-white md:text-[22px]">{section.title}</h2>
            <div className="mt-4 space-y-4 text-[15px] leading-[1.6] text-slate">
              {typeof section.body === "string" ? <p>{section.body}</p> : section.body}
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
              {section.list ? (
                <ul className="list-disc space-y-2 pl-5">
                  {section.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}
              {section.footer ? (typeof section.footer === "string" ? <p>{section.footer}</p> : section.footer) : null}
            </div>
          </section>
        ))}
      </article>
    </div>
  );
}
