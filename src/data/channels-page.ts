import type { LucideIcon } from "lucide-react";
import {
  Baby,
  Clapperboard,
  Film,
  Flag,
  Globe2,
  Headphones,
  Heart,
  Newspaper,
  Sparkles,
  Trophy,
  Tv,
  Zap,
} from "lucide-react";

export type ChannelCategory = {
  title: string;
  /** Short label only — no unverified numeric counts. */
  label?: string;
  description: string;
  icon: LucideIcon;
};

export type LibraryFeature = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type ChannelStat = {
  value: string;
  label: string;
};

export type SportHighlight = {
  title: string;
  description: string;
};

export type SportAuthorityBlock = {
  id: string;
  title: string;
  paragraphs: string[];
};

export type ChannelFaq = {
  q: string;
  a: string;
};

/** Placeholder lineup — the owner will replace these channel examples. */
export const channelCategories: ChannelCategory[] = [
  {
    title: "Nederlandse televisie",
    label: "NL",
    description: "NPO 1, NPO 2, NPO 3, RTL 4 en de zenders die gezinnen in Nederland elke dag kijken.",
    icon: Flag,
  },
  {
    title: "Sport NL",
    label: "Sport",
    description: "Eredivisie, ESPN en de Europese avonden — bevestig het actieve aanbod in de player.",
    icon: Trophy,
  },
  {
    title: "Films en series",
    label: "140K+",
    description: "Films en series on demand (VOD) in dezelfde dienst als de livezenders.",
    icon: Clapperboard,
  },
  {
    title: "Entertainment",
    label: "Vrije tijd",
    description: "Reality, drama en vrijetijdszenders voor het dagelijks leven in Nederland.",
    icon: Sparkles,
  },
  {
    title: "Nieuws",
    label: "Info",
    description: "NOS, RTL Nieuws en nationaal en internationaal nieuws.",
    icon: Newspaper,
  },
  {
    title: "Kinderen",
    label: "Gezin",
    description: "Content voor kinderen en gezinnen — bevestig de categorieën in de player.",
    icon: Baby,
  },
  {
    title: "Documentaires",
    label: "Docs",
    description: "Natuur, geschiedenis en ontdekking voor wie graag bijleert.",
    icon: Film,
  },
  {
    title: "Muziek",
    label: "Muziek",
    description: "Concerten, videoclips en muziekzenders voor alle leeftijden.",
    icon: Headphones,
  },
  {
    title: "Lifestyle",
    label: "Lifestyle",
    description: "Koken, wonen en welzijn in het ritme van het leven in Nederland.",
    icon: Heart,
  },
  {
    title: "Internationale zenders",
    label: "Extra",
    description: "Opties buiten Nederland als extra voor meertalige huishoudens.",
    icon: Globe2,
  },
];

export const spanishSports: SportHighlight[] = [
  {
    title: "Eredivisie",
    description:
      "Volg de Eredivisie live op het grote scherm — speelrondes, toppers en de titelstrijd, met stabiele kwaliteit als je netwerk HD/FHD aankan.",
  },
  {
    title: "ESPN",
    description:
      "ESPN in het aanbod voor wedstrijden, studio's en de verslaggeving die Nederlandse huishoudens willen op competitieavonden.",
  },
  {
    title: "NOS",
    description:
      "NOS voor nieuws, sport en samenvattingen in het aanbod, wanneer beschikbaar, zonder van dienst te wisselen.",
  },
  {
    title: "Champions League",
    description:
      "Europese avonden met dezelfde Xtream-toegang — zet de sportzenders in je favorieten vóór de aftrap.",
  },
  {
    title: "Premier League en meer",
    description:
      "Engels voetbal en andere competities voor wie verder kijkt dan de Eredivisie — handig in huizen met verschillende smaken.",
  },
  {
    title: "Formule 1, UFC en events",
    description:
      "Autosport, vechtsport en losse events in HD/4K afhankelijk van je verbinding. In de piekuren kies je liever stabiel FHD dan geforceerd Ultra HD.",
  },
];

/** Bump when refreshing seasonal ESPN / Eredivisie / rights notes. */
export const sportContentReviewed = "2026-07-20";

export const sportAuthorityBlocks: SportAuthorityBlock[] = [
  {
    id: "sport-tv",
    title: "ESPN op jouw scherm",
    paragraphs: [
      "Om sportzenders thuis te kijken zonder traditionele decoder gebruik je een actief plan van BesteIPTVNederland, een compatibele player (bijvoorbeeld IPTV Smarters) en Xtream-toegang — geen gratis M3U-lijsten die op forums rondgaan.",
      "Open na activatie de sportcategorie, zet ESPN in je favorieten en test je netwerk in de piekuren. Op avonden van de Eredivisie of de Champions League maakt 5 GHz-wifi of een kabel in de woonkamer meer verschil dan duizend extra zenders in de advertentie.",
      "We publiceren geen M3U-lijsten van ESPN om te downloaden. Wil je stabiele sport, gebruik dan het aanbod van de dienst en de installatiegidsen.",
    ],
  },
  {
    id: "eredivisie",
    title: "Eredivisie en sport in het dagelijks gebruik",
    paragraphs: [
      "Voor de meeste gezinnen betekent sport op IPTV de Eredivisie, analysezenders en Europese events. Zet je favorieten per speelronde klaar: ESPN, Nederlandse zenders voor de nabeschouwing, en een tweede scherm alleen als het plan genoeg verbindingen heeft.",
      "Bufferen in de rust is bijna altijd het netwerk of twee streams op één verbinding — geen «ontbrekende lijst». Bekijk de buffering-checklist op de blog en bevestig het aantal verbindingen op Prijzen.",
    ],
  },
  {
    id: "clubs",
    title: "ESPN, NOS en wedstrijdcontent",
    paragraphs: [
      "Sport- en nieuwszenders zitten in het aanbod van het plan wanneer ze beschikbaar zijn, met dezelfde toegang als de andere Nederlandse zenders — niet via gedeelde bestanden.",
      "Combineer ESPN en NOS met NPO 1, RTL 4 en SBS6 voor wedstrijd, nabeschouwing en nieuws zonder tussen apps te springen. Meer redactionele uitleg staat in het Eredivisie-artikel op de blog.",
    ],
  },
  {
    id: "andere-merken",
    title: "Andere sportmerken",
    paragraphs: [
      "De beschikbaarheid van merken en rechten (bijvoorbeeld seizoenspakketten) verandert met de kalender. Wat telt is het actieve aanbod op je account op het moment van de wedstrijd — bevestig het in de player na activatie of vraag support vóór een belangrijke finale.",
      "Het principe is hetzelfde voor extra sportpakketten: dienst + player + netwerk, geen anonieme lijst.",
    ],
  },
];

/**
 * Shared with `/veelgestelde-vragen` via `channelFaqs.slice(0, 2)`.
 * Keep this array stable — do not replace with /kanalen-only catalogue FAQs.
 */
export const channelFaqs: ChannelFaq[] = [
  {
    q: "Heeft BesteIPTVNederland ESPN?",
    a: "Ja — ESPN hoort bij de sportgroep van het aanbod wanneer het actief is in je plan. Zoek het na het inloggen met Xtream in de categorie Sport en zet het in je favorieten.",
  },
  {
    q: "Waar kijk ik de Eredivisie en sportzenders?",
    a: "De Eredivisie verschijnt meestal via de sportzenders (inclusief ESPN). Nieuws en samenvattingen, zoals NOS, staan in het aanbod wanneer ze beschikbaar zijn. Bevestig het in de app na activatie; support checkt het als een specifieke zender niet laadt.",
  },
  {
    q: "Waarom bieden jullie geen gratis M3U-lijsten van ESPN?",
    a: "Omdat we een betaalde dienst zijn met support en privégegevens. Pagina's met «gratis m3u-lijsten» zijn instabiel, riskant en passen niet bij ons model. Gebruik het officiële plan en de installatiegidsen.",
  },
  {
    q: "Hoeveel verbindingen heb ik nodig om de wedstrijd in de woonkamer en op mijn telefoon te kijken?",
    a: "Twee gelijktijdige streams vragen een plan met 2 verbindingen. Met 1 verbinding is er maar één scherm tegelijk. Vergelijk op /prijzen.",
  },
  {
    q: "Komt sport in 4K?",
    a: "Wanneer de stream en je netwerk het toelaten. Bij zwakke wifi kies je stabiel FHD — zeker bij toppers en de Champions League.",
  },
  {
    q: "Hoe installeer ik om Nederlandse IPTV-zenders te kijken?",
    a: "Activeer het plan, ontvang de Xtream-toegang per e-mail en volg de gids voor jouw apparaat (Smart TV, Fire Stick, Android, iOS of MAG).",
  },
];

/** FAQ visible + schema on `/kanalen` only. */
export const canalesPageFaqs: ChannelFaq[] = [
  {
    q: "Welke Nederlandse zenders zijn beschikbaar?",
    a: "De voorbeelden op deze pagina zijn onder meer publieke zenders zoals NPO 1, NPO 2, NPO 3 en RTL 4, nieuwszenders en sportzenders zoals ESPN — volgens het actieve aanbod van het plan. Bevestig altijd in de app na het inloggen.",
  },
  {
    q: "Zitten er sportzenders bij de dienst?",
    a: "Ja. Er is een sportcategorie in de player, met focus op de Eredivisie, ESPN en sportcontent wanneer die beschikbaar is. De precieze dekking hangt af van het actieve aanbod.",
  },
  {
    q: "Kan ik ESPN vinden?",
    a: "ESPN hoort bij het sportaanbod wanneer het actief is in je plan. Zoek het na het inloggen met Xtream in de categorie Sport en zet het in je favorieten.",
  },
  {
    q: "Hoe vind ik de zenders na het inloggen?",
    a: "Blader in de player door de categorieën (Nederland, Sport, Nieuws, VOD, enzovoort), gebruik de zoekfunctie van de app als die er is en zet favorieten vast. Support helpt je als een zender niet laadt.",
  },
  {
    q: "Wat is de EPG?",
    a: "De EPG is de elektronische programmagids: het schema van tijden en programma's in de player. Zo zie je wat er nu draait en wat daarna komt — wanneer de zender en het aanbod die gegevens bevatten.",
  },
  {
    q: "Zitten er films en series in het aanbod?",
    a: "Ja. Naast de livezenders is er VOD on demand — meer dan 200.000 films en meer dan 40.000 series in de dienst (de pagina gebruikt ook het kader 140K+ VOD waar dat past). De beschikbaarheid van elke titel kan veranderen.",
  },
  {
    q: "Kan ik de dienst op een Smart TV gebruiken?",
    a: "Ja. Smart TV, Fire Stick, Android, iOS, MAG en pc met een compatibele player. Bekijk de applicaties en de installatiegidsen.",
  },
  {
    q: "Kan ik meer dan één verbinding gebruiken?",
    a: "De plannen bieden 1, 2 of 3 verbindingen — het aantal schermen tegelijk. Twee streams vragen een plan met 2 verbindingen. Vergelijk op Prijzen.",
  },
  {
    q: "Werkt de dienst met gratis M3U?",
    a: "We werken niet met anonieme gratis M3U-lijsten. BesteIPTVNederland is een betaalde dienst met privégegevens en support. Gedeelde lijsten zijn instabiel en passen niet bij ons model.",
  },
  {
    q: "Is er een gratis proef?",
    a: "Je kunt vóór betaling een proef van 24 uur bij support aanvragen, om apparaat en netwerk te checken. Na aankoop geldt de garantie van 7 dagen volgens het retourbeleid.",
  },
  {
    q: "Hoe begin ik?",
    a: "Kies het plan op Prijzen, rond de betaling af, ontvang de gegevens en stel een player in. De installatiegidsen en de app-hub helpen je stap voor stap.",
  },
  {
    q: "Kan het aanbod veranderen?",
    a: "Ja. Zenders en VOD-titels kunnen worden bijgewerkt. Bevestig wat je nodig hebt in de player met het actieve account; support verduidelijkt de beschikbaarheid op dat moment.",
  },
];

export const libraryFeatures: LibraryFeature[] = [
  {
    title: "Nederlandse content",
    description: "Uitgelichte IPTV-zenders voor Nederland — NPO 1, RTL 4, SBS6, ESPN en meer.",
    icon: Flag,
  },
  {
    title: "Actueel aanbod",
    description: "Het aanbod van de dienst wordt bijgehouden voor dagelijks gebruik — bevestig altijd wat er op je account actief is.",
    icon: Sparkles,
  },
  {
    title: "HD / FHD / 4K",
    description: "Hogere kwaliteit wanneer de zender, het plan en je netwerk het toelaten.",
    icon: Clapperboard,
  },
  {
    title: "Gemaakt voor wedstrijdavonden",
    description: "Sport en Nederlandse zenders met dezelfde toegang — zet favorieten vast en check je netwerk vóór de aftrap.",
    icon: Zap,
  },
  {
    title: "De sport die ertoe doet",
    description: "Eredivisie, ESPN en de events die Nederlandse huishoudens volgen, wanneer ze in het actieve aanbod zitten.",
    icon: Trophy,
  },
  {
    title: "Vermaak voor het gezin",
    description: "Films, series en kindercategorieën — entertainment voor gezinnen in Nederland.",
    icon: Tv,
  },
];

export const heroStats: ChannelStat[] = [
  { value: "15.000+", label: "Livezenders" },
  { value: "IPTV NL", label: "Focus Nederland" },
  { value: "4K", label: "Als je netwerk het aankan" },
  { value: "99,9%", label: "Beschikbaarheid (belofte)" },
];

export const libraryStats: ChannelStat[] = [
  { value: "15.000+", label: "Livezenders" },
  { value: "140K+", label: "Films en series (VOD)" },
  { value: "4K", label: "Als je netwerk het aankan" },
  { value: "24 uur", label: "Proef op aanvraag" },
  { value: "24/7", label: "Support" },
  { value: "7 dagen", label: "Garantie" },
];

/** Atmosphere labels for brand logos — not claims of official third-party subscriptions. */
export const platformDescriptions: Record<string, string> = {
  "Prime Video": "Stijl van een VOD-aanbod — films en series on demand in de dienst.",
  "Disney Plus": "Visuele referentie voor gezinsentertainment in het IPTV-aanbod voor Nederland.",
  "HBO Max": "Visuele referentie voor series en films on demand.",
  "Apple TV+": "Visuele referentie voor premium producties op het scherm.",
  "SkyShowtime": "Visuele referentie voor populair Europees entertainment.",
  DAZN: "Visuele referentie voor sport — bevestig de merken in het actieve aanbod.",
  Netflix: "Visuele referentie voor series en films on demand.",
};
