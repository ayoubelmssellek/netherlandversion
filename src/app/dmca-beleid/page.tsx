import Breadcrumbs from "@/components/Breadcrumbs";
import { site } from "@/data/content";
import { buildMetadata, siteConfig } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "DMCA-beleid",
  description:
    "DMCA-beleid van BesteIPTVNederland: hoe je een melding van auteursrechtinbreuk doet en hoe meldingen worden beoordeeld.",
  path: "/dmca-beleid",
});

export default function DmcaPage() {
  return (
    <div className="section-shell py-12 md:py-20">
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "DMCA-beleid", path: "/dmca-beleid" },
        ]}
      />

      <header className="mt-8 max-w-3xl border-b border-line pb-10">
        <p className="label">Juridisch</p>
        <h1 className="mt-4 text-[40px] tracking-[-1.2px] text-white md:text-[48px]">DMCA-beleid</h1>
        <p className="mt-2 text-[18px] text-slate">{site.name}</p>
        <p className="mt-6 text-[15px] leading-[1.6] text-slate">
          {site.name} respecteert intellectueel eigendom en reageert op geldige meldingen van vermeende
          auteursrechtinbreuk die te maken hebben met de inhoud van de website{" "}
          <a href={siteConfig.url} className="text-white underline-offset-4 hover:underline">
            {siteConfig.url}
          </a>
          . Dit beleid volgt het toepasselijke recht in Nederland en de Europese Unie, naast de uitgangspunten van de
          DMCA.
        </p>
      </header>

      <article className="mt-12 max-w-3xl space-y-10">
        <section>
          <h2 className="text-[20px] tracking-[-0.3px] text-white md:text-[22px]">Een inbreuk melden</h2>
          <p className="mt-4 text-[15px] leading-[1.6] text-slate">
            Denk je dat materiaal op deze website (tekst of afbeeldingen) jouw rechten schendt, stuur dan een melding
            naar{" "}
            <a href={`mailto:${site.email}`} className="text-white underline-offset-4 hover:underline">
              {site.email}
            </a>{" "}
            met een omschrijving van het werk, de betreffende URL, je contactgegevens en een verklaring te goeder trouw.
          </p>
        </section>

        <section>
          <h2 className="text-[20px] tracking-[-0.3px] text-white md:text-[22px]">Beoordeling</h2>
          <p className="mt-4 text-[15px] leading-[1.6] text-slate">
            Volledige meldingen worden met voorrang bekeken — meestal binnen 24 tot 48 uur.
          </p>
        </section>

        <section>
          <h2 className="text-[20px] tracking-[-0.3px] text-white md:text-[22px]">Onjuiste verklaringen</h2>
          <p className="mt-4 text-[15px] leading-[1.6] text-slate">
            Wie bewust een onjuiste inbreuk meldt, kan daarvoor aansprakelijk zijn, inclusief advocaatkosten, volgens
            het toepasselijke recht.
          </p>
        </section>

        <section>
          <h2 className="text-[20px] tracking-[-0.3px] text-white md:text-[22px]">Contact</h2>
          <ul className="mt-4 space-y-2 text-[15px] leading-[1.6] text-slate">
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
        </section>
      </article>
    </div>
  );
}
