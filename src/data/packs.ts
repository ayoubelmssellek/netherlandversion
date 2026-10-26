import {
  getFamilyPlanCompare,
  getFamilyPlanPrice,
  getPlans,
} from "@/lib/plan-pricing";
import { planFeatures } from "@/data/content";

export type PackSlug = "trimestral" | "basico" | "premium" | "familia";

export type PackDefinition = {
  slug: PackSlug;
  path: `/${string}`;
  /** Checkout plan id accepted by resolvePlan */
  planId: string;
  connections: 1 | 2 | 3;
  name: string;
  shortName: string;
  /** SEO title without brand suffix (buildMetadata adds | BesteIPTVNederland when needed) */
  seoTitle: string;
  seoDescription: string;
  h1: string;
  eyebrow: string;
  durationLabel: string;
  pricePeriodLabel: string;
  intro: string;
  forWhom: string;
  /** Extra H2 sections for SEO depth (title + body). */
  depthSections?: { title: string; body: string }[];
  valuePoints: string[];
  faqs: { q: string; a: string }[];
  getPrice: () => number;
  getCompare: () => number | null;
  monthlyApprox: () => string;
};

function onePlan(id: string) {
  return getPlans().one.find((p) => p.id === id)!;
}

function twoPlan(id: string) {
  return getPlans().two.find((p) => p.id === id)!;
}

/** Shared catalogue bullets — same verified list as Pricing / checkout. */
export const packIncludes = planFeatures;

/**
 * P1 pack → live SKU map (Phase 4 locked).
 * Prices always read from plan-pricing helpers (env-overridable).
 */
export const packs: Record<PackSlug, PackDefinition> = {
  trimestral: {
    slug: "trimestral",
    path: "/pack-kwartaal",
    planId: "3m",
    connections: 1,
    name: "Pack Kwartaal",
    shortName: "Kwartaal",
    seoTitle: "Pack Kwartaal IPTV — 3 maanden Nederland",
    seoDescription:
      "Pack Kwartaal IPTV Nederland: 3 maanden, 1 verbinding, eenmalige betaling. Probeer Nederlandse zenders en sport zonder jaarabonnement. Proef van 24 uur en Nederlandstalige support.",
    h1: "Pack Kwartaal IPTV — 3 maanden · 1 verbinding",
    eyebrow: "Pack Kwartaal IPTV · korte looptijd",
    durationLabel: "3 maanden",
    pricePeriodLabel: "/ 3 maanden",
    intro:
      "Het Pack Kwartaal IPTV van BesteIPTVNederland is de korte looptijd: drie maanden dienst met één gelijktijdige verbinding. Handig om je netwerk, de player en het aanbod in Nederland te checken vóór een jaarplan — eenmalige betaling, zonder onverwachte automatische verlenging.",
    forWhom:
      "Voor wie één hoofdscherm wil (Smart TV of Fire Stick in de woonkamer) en liever een kwartaal betaalt dan een heel jaar. Heb je later woonkamer + slaapkamer nodig, vergelijk dan het Pack Premium (2 verbindingen) of de volledige tabel op Prijzen.",
    depthSections: [
      {
        title: "Waarom het Pack Kwartaal IPTV",
        body: "Dit is de juiste keuze als je nog geen jaar wilt vastleggen: lang genoeg voor sportavonden en de dagelijkse routine, met hetzelfde aanbod als de andere betaalde plannen. Ideaal na de proef van 24 uur — of in plaats van een maandplan als je al weet dat je de dienst het seizoen gebruikt.",
      },
      {
        title: "Hoe je bestelt en activeert",
        body: "Vergelijk de prijs op deze pagina, vraag de proef van 24 uur via WhatsApp aan als je je netwerk nog niet hebt gecheckt, of ga door naar de betaling. Na betaling ontvang je de Xtream-gegevens en volg je de gids voor jouw apparaat. Algemene vragen: veelgestelde vragen over IPTV Nederland (/veelgestelde-vragen); later verlengen via /verlengen of met een nieuwe betaling.",
      },
    ],
    valuePoints: [
      "Looptijd: 3 maanden — minder vast dan het jaarplan",
      "Verbindingen: 1 gelijktijdige stream",
      "Hetzelfde aanbod en dezelfde functies van de dienst (zie de lijst hieronder)",
      "Eenmalige betaling voor de periode — zonder onverwachte automatische verlenging",
      "Proef van 24 uur op aanvraag bij support, vóór je betaalt",
      "Garantie van 7 dagen volgens het retourbeleid",
    ],
    faqs: [
      {
        q: "Wat is het Pack Kwartaal IPTV?",
        a: "Het plan van BesteIPTVNederland van 3 maanden met 1 verbinding: livezenders, sport en VOD in dezelfde dienst als de andere packs, met een eenmalige betaling voor het kwartaal.",
      },
      {
        q: "Wat gebeurt er na de 3 maanden?",
        a: "De toegang stopt aan het eind van de betaalde periode. Je kunt verlengen of een ander plan kiezen (bijvoorbeeld het jaarlijkse Pack Basis) wanneer je wilt — er zijn geen verborgen automatische incasso's.",
      },
      {
        q: "Kan ik daarna overstappen op een jaarplan?",
        a: "Ja. Aan het eind van het kwartaal, of wanneer je wilt, kies je een jaarplan op Prijzen of bij Pack Basis / Premium / Familie en rond je een nieuwe betaling af met het juiste plan.",
      },
      {
        q: "Is 1 verbinding thuis genoeg?",
        a: "Als je maar op één scherm tegelijk kijkt, ja. Kijken woonkamer en slaapkamer tegelijk voetbal of sport, dan heb je 2 of 3 verbindingen nodig — bekijk Pack Premium of Familie.",
      },
      {
        q: "Is de content anders dan bij het jaarpack?",
        a: "Nee. Het verschil van dit pack is de looptijd en het aantal verbindingen (hier: 3 maanden · 1 verbinding). De functies van de dienst zijn die van de inclusielijst, gelijk voor de betaalde plannen.",
      },
      {
        q: "Kan ik een proef aanvragen vóór het Pack Kwartaal?",
        a: "Ja. Vraag de proef van 24 uur aan bij support (WhatsApp). Meer uitleg in het artikel Proef IPTV Nederland (/blog/proef-iptv-nederland) — het is geen onbeperkt gratis IPTV.",
      },
    ],
    getPrice: () => onePlan("3m").price,
    getCompare: () => onePlan("3m").compare,
    monthlyApprox: () => {
      const p = onePlan("3m").price;
      return (p / 3).toFixed(2).replace(".", ",");
    },
  },
  basico: {
    slug: "basico",
    path: "/pack-basis",
    planId: "1y",
    connections: 1,
    name: "Pack Basis",
    shortName: "Basis",
    seoTitle: "Pack Basis IPTV — 1 jaar · 1 verbinding",
    seoDescription:
      "Pack Basis BesteIPTVNederland: 1 jaar, 1 verbinding, de beste jaarwaarde voor één scherm. Eenmalige betaling, activatie en Nederlandstalige support.",
    h1: "Pack Basis — 1 jaar · 1 verbinding",
    eyebrow: "Jaar · 1 scherm · beste €/maand individueel",
    durationLabel: "1 jaar",
    pricePeriodLabel: "/ jaar",
    intro:
      "Het Pack Basis is het instap-jaarplan voor wie op één scherm tegelijk kijkt. Je betaalt het jaar vooruit en krijgt de beste vergelijkbare maandprijs onder de opties met 1 verbinding — zonder verzonnen «kwaliteitsniveaus»: het aanbod en de functies zijn die van BesteIPTVNederland.",
    forWhom:
      "Ideaal voor één persoon of een huishouden dat alleen de Smart TV in de woonkamer (of de Fire Stick) tegelijk gebruikt. Heb je twee gelijktijdige streams nodig, dan past het Pack Premium (2 verbindingen) beter.",
    valuePoints: [
      "Looptijd: 12 maanden",
      "Verbindingen: 1 gelijktijdige stream",
      "Beste jaarwaarde voor individueel gebruik (1 scherm)",
      "Dezelfde functies van de dienst (lijst hieronder)",
      "Eenmalige betaling — verleng wanneer je wilt via /verlengen",
      "Proef van 24 uur op aanvraag · garantie van 7 dagen",
    ],
    faqs: [
      {
        q: "Is 1 verbinding genoeg als ik ook mijn telefoon gebruik?",
        a: "Je kunt het op je telefoon installeren, maar een tweede scherm dat tegelijk afspeelt telt als tweede verbinding. Met het Pack Basis is er maar één live- of VOD-stream tegelijk.",
      },
      {
        q: "Is dit beter dan het Pack Kwartaal?",
        a: "Als je al weet dat je de dienst het hele jaar op één scherm gebruikt, pakt het Pack Basis meestal voordeliger uit per maand. Ben je nog je kijkgedrag en netwerk aan het testen, dan houdt het Kwartaal de looptijd korter.",
      },
      {
        q: "Hoe verleng ik aan het eind van het jaar?",
        a: "Gebruik de pagina Verlengen of koop het juiste plan opnieuw. Er is geen onverwachte automatische verlenging aan het eind van de betaalde periode.",
      },
      {
        q: "Heeft het Pack Basis minder zenders dan Premium?",
        a: "Nee. Bij onze plannen is het echte verschil looptijd × verbindingen × prijs — geen apart verzonnen «premium»-aanbod.",
      },
    ],
    getPrice: () => onePlan("1y").price,
    getCompare: () => onePlan("1y").compare,
    monthlyApprox: () => {
      const p = onePlan("1y").price;
      return (p / 12).toFixed(2).replace(".", ",");
    },
  },
  premium: {
    slug: "premium",
    path: "/pack-premium",
    planId: "1y2",
    connections: 2,
    name: "Pack Premium",
    shortName: "Premium",
    seoTitle: "Pack Premium IPTV — 1 jaar · 2 verbindingen",
    seoDescription:
      "Pack Premium IPTV Nederland: 1 jaar met 2 gelijktijdige verbindingen. Woonkamer + slaapkamer of tv + tablet, eenmalige betaling, proef van 24 uur en Nederlandstalige support.",
    h1: "Pack Premium IPTV — 1 jaar · 2 verbindingen",
    eyebrow: "Pack Premium IPTV · 2 schermen tegelijk",
    durationLabel: "1 jaar",
    pricePeriodLabel: "/ jaar",
    intro:
      "Het Pack Premium IPTV van BesteIPTVNederland is voor huizen waar twee kijkgewoonten tegelijk lopen — woonkamer en slaapkamer, of tv en tablet. Twee gelijktijdige verbindingen gedurende een jaar, met hetzelfde aanbod als de andere plannen. Kwaliteit tot 4K hangt af van de content en je netwerk; we verkopen geen apart «alleen 4K»-niveau.",
    forWhom:
      "Voor stellen of twee vaste schermen die niet willen dat de ene stream de andere afkapt. Heb je drie streams nodig (meerdere kamers), bekijk dan het Pack Familie. Gebruik je maar één scherm, dan volstaat het Pack Basis en is dat goedkoper.",
    depthSections: [
      {
        title: "Waarom het Pack Premium IPTV (en niet alleen «duurder»)",
        body: "Premium betekent hier twee verbindingen — geen geheim aanbod. In Nederland is de ergernis vaak dat de wedstrijd in de woonkamer wegvalt zodra iemand de tablet opent. Dit pack vangt die piek een jaar lang op, met een eenmalige betaling en Nederlandstalige support.",
      },
      {
        title: "Hoe je het Pack Premium bestelt",
        body: "Bevestig de prijs op deze pagina, vraag de proef van 24 uur aan als je je huis nog niet hebt gecheckt, of ga naar de betaling. Gebruik na activatie de installatiegidsen. Vergelijk alternatieven op Prijzen of bij het Pack Familie (3 verbindingen).",
      },
    ],
    valuePoints: [
      "Looptijd: 12 maanden",
      "Verbindingen: 2 gelijktijdige streams",
      "Typisch gebruik: woonkamer + slaapkamer / tv + tablet",
      "Dezelfde functies van de dienst als de andere betaalde packs",
      "Eenmalige betaling voor het jaar",
      "Proef van 24 uur op aanvraag · garantie van 7 dagen",
    ],
    faqs: [
      {
        q: "Wat is het Pack Premium IPTV?",
        a: "Het jaarplan van BesteIPTVNederland met 2 gelijktijdige verbindingen: ideaal voor twee actieve schermen tegelijk, met dezelfde dienst (zenders, sport, VOD) als de andere packs.",
      },
      {
        q: "Wat telt als een verbinding?",
        a: "Elke actieve weergave (livezender of VOD) op een apparaat telt mee voor de limiet. Twee schermen die tegelijk kijken = twee verbindingen.",
      },
      {
        q: "Werkt het voor twee verschillende huizen?",
        a: "De limiet gaat over gelijktijdige streams, niet over «adressen». In de praktijk verbruiken twee plekken die tegelijk kijken allebei een verbinding. Voor drie streams gebruik je het Pack Familie.",
      },
      {
        q: "Heeft Premium exclusief 4K?",
        a: "Nee. De plannen bieden kwaliteit tot 4K wanneer de content en je internet het toelaten. Het verschil van dit pack is 2 verbindingen — geen privé 4K-aanbod.",
      },
      {
        q: "Kan ik met Basis beginnen en later wisselen?",
        a: "Je kunt bij de betaling een ander plan kiezen als je meer verbindingen nodig hebt. Vergelijk ook de volledige tabel op Prijzen (maand, 6 maanden, enzovoort).",
      },
      {
        q: "Kan ik het Pack Premium eerst proberen?",
        a: "Ja — proef van 24 uur op aanvraag bij support. De volledige uitleg staat in het artikel Proef IPTV Nederland (/blog/proef-iptv-nederland).",
      },
    ],
    getPrice: () => twoPlan("1y2").price,
    getCompare: () => twoPlan("1y2").compare,
    monthlyApprox: () => {
      const p = twoPlan("1y2").price;
      return (p / 12).toFixed(2).replace(".", ",");
    },
  },
  familia: {
    slug: "familia",
    path: "/pack-familie",
    planId: "3conn",
    connections: 3,
    name: "Pack Familie",
    shortName: "Familie",
    seoTitle: "Pack Familie IPTV — 1 jaar · 3 verbindingen",
    seoDescription:
      "Pack Familie BesteIPTVNederland: 1 jaar met 3 gelijktijdige verbindingen voor meerdere kamers. Eenmalige betaling, activatie en Nederlandstalige support.",
    h1: "Pack Familie — 1 jaar · 3 verbindingen",
    eyebrow: "Jaar · huis met meerdere schermen",
    durationLabel: "1 jaar",
    pricePeriodLabel: "/ jaar",
    intro:
      "Het Pack Familie is het jaarplan met drie gelijktijdige verbindingen — bedoeld voor huizen met meerdere tv's of apparaten die tegelijk aan staan. We beloven geen «vier apparaten» of verzonnen extra's: het zijn drie streams, met dezelfde dienst en gecontroleerde inclusies als de andere plannen.",
    forWhom:
      "Voor gezinnen of gedeelde huizen waar drie schermen tegelijk kunnen kijken (verschillende kamers, tieners met een tablet, enzovoort). Heb je er maar twee nodig, dan volstaat het Pack Premium; bij één scherm het Pack Basis.",
    valuePoints: [
      "Looptijd: 12 maanden",
      "Verbindingen: 3 gelijktijdige streams",
      "Typisch gebruik: meerdere kamers / grotere huishoudens",
      "Dezelfde functies van de dienst (lijst hieronder)",
      "Eenmalige betaling voor het jaar",
      "Proef van 24 uur op aanvraag · garantie van 7 dagen",
    ],
    faqs: [
      {
        q: "Zijn het 3 of 4 apparaten?",
        a: "Bij deze dienst hoort het Pack Familie bij 3 gelijktijdige verbindingen — de waarde en het betaalplan (3conn). We adverteren geen vierde stream die het plan niet bevat.",
      },
      {
        q: "Tellen kinderen met een tablet mee?",
        a: "Ja, als ze tegelijk met andere schermen content afspelen. Elke actieve stream verbruikt één verbinding, ongeacht de leeftijd.",
      },
      {
        q: "Kan ik het op verschillende locaties gebruiken?",
        a: "De praktische limiet is het aantal gelijktijdige weergaven. Drie actieve streams — ook op verschillende plekken — vullen het Pack Familie.",
      },
      {
        q: "Waar vergelijk ik het met de andere packs?",
        a: "Op deze pagina, bij de andere packs, of in de volledige prijstabel als je maand- of 6-maandslooptijden wilt.",
      },
    ],
    getPrice: () => getFamilyPlanPrice(),
    getCompare: () => getFamilyPlanCompare(),
    monthlyApprox: () => {
      const p = getFamilyPlanPrice();
      return (p / 12).toFixed(2).replace(".", ",");
    },
  },
};

export const packList: PackDefinition[] = [
  packs.trimestral,
  packs.basico,
  packs.premium,
  packs.familia,
];

export function getPack(slug: PackSlug): PackDefinition {
  return packs[slug];
}

export function checkoutHrefForPack(pack: PackDefinition): string {
  return `/checkout?plan=${encodeURIComponent(pack.planId)}&connections=${pack.connections}`;
}

export function siblingPacks(slug: PackSlug): PackDefinition[] {
  return packList.filter((p) => p.slug !== slug);
}

/** Plan ids that have dedicated pack product pages (avoid duplicate Product on /prijzen). */
export const PACK_OWNED_PLAN_IDS = new Set(["3m", "1y", "1y2", "3conn"]);
