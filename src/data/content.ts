import { getPlans } from "@/lib/plan-pricing";

export const site = {
  name: "BesteIPTVNederland",
  tagline: "Stabiel streamen in Nederland — zenders, sport en VOD",
  email: "support@besteiptvnederland.shop",
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/kanalen", label: "Kanalen" },
  { href: "/prijzen", label: "Prijzen" },
  { href: "/applicaties", label: "Applicaties" },
  { href: "/wederverkopers", label: "Wederverkopers" },
  { href: "/veelgestelde-vragen", label: "Veelgestelde vragen" },
];

export const planFeatures = [
  "Livezenders (+45.000)",
  "Films en series (VOD) (+200.000 films · +40.000 series)",
  "Alle PPV-events en premium sport",
  "Kwaliteit 4K / FHD / HD",
  "Tv-gids (EPG) en programma's terugkijken",
  "Smart TV, app en box",
  "Anti-freeze-technologie",
  "Beschikbaarheid 99,9% (servicebelofte)",
  "Xtream Codes / M3U / MAG",
  "Activatie na betalingsbevestiging",
  "Support 24/7",
  "Ingebouwde VPN en privacybescherming",
  "Zenders voor volwassenen (optioneel)",
  "7 dagen garantie",
];

/** Prices & checkout URLs from Vercel env — see `lib/plan-pricing.ts` and `.env.example`. */
export const plans = getPlans();

export const faqs = [
  {
    q: "Wat is BesteIPTVNederland?",
    a: "Een IPTV-dienst in Nederland met Nederlandse zenders, sport en VOD. Je koopt een plan, krijgt Xtream-gegevens en installeert een player op het scherm dat je al hebt — met Nederlandstalige support.",
  },
  {
    q: "Wat kosten de plannen?",
    a: "De prijzen beginnen bij het maandplan en dalen bij langere looptijden. Op de prijspagina vergelijk je duur en aantal verbindingen — eenmalige betaling, zonder onverwachte automatische verlenging.",
  },
  {
    q: "Hoe koop en activeer ik de dienst?",
    a: "Kies het plan, rond de betaling af en volg de instructies op /bedankt. Meestal volgt de activatie snel na de betalingsbevestiging — support helpt je als het nodig is.",
  },
  {
    q: "Is er een proefperiode of garantie?",
    a: "Je kunt vóór betaling een proef van 24 uur bij support aanvragen, om je apparaten en netwerk te checken. Na aankoop geldt de tevredenheidsgarantie van 7 dagen volgens het retourbeleid — het is geen onbeperkt gratis IPTV.",
  },
  {
    q: "Hoe weet ik of IPTV Nederland bij mij thuis past?",
    a: "Kijk naar gelijktijdige schermen, ESPN en de Eredivisie, je netwerk en support. Er staat een korte checklist op de blog; voor “beste IPTV Nederland” is het hoofdartikel Beste IPTV Nederland 2026 (/blog/beste-iptv-nederland-2026). Daarna vergelijk je de plannen.",
  },
  {
    q: "Wat onderscheidt BesteIPTVNederland?",
    a: "We richten ons op stabiliteit voor kijkers in Nederland, een aanbod met Nederlandse zenders en sport, begeleide installatie en doorlopende support — niet alleen op een lange lijst zendernamen.",
  },
  {
    q: "Wat zit erin?",
    a: "Livezenders, sport (inclusief de Eredivisie en premium sportzenders wanneer die in het aanbod zitten), films en series on demand, en kwaliteit tot 4K afhankelijk van je netwerk en apparaat.",
  },
  {
    q: "Werkt het op Smart TV en Android-boxen?",
    a: "Ja. De meeste Smart TV's, Fire Stick, Android-boxen, telefoons en pc's werken met een compatibele player (bijvoorbeeld IPTV Smarters). Bekijk de installatiegidsen.",
  },
  {
    q: "Heb ik speciale hardware nodig?",
    a: "Nee. Gebruik de Smart TV, Fire Stick, Android-box, telefoon of pc die je al hebt. Een stabiele verbinding (liefst 15–20 Mbps of meer) maakt HD en 4K prettiger.",
  },
  {
    q: "Hoe installeer ik na aankoop?",
    a: "Installeer een compatibele player, vul de gegevens in die je na betaling krijgt en laad de tv-gids. De tutorials behandelen Smart TV, Android, Fire Stick, iOS en MAG.",
  },
  {
    q: "Kan ik het plan verlengen?",
    a: "Ja. Gebruik /verlengen of koop een nieuw plan op /prijzen als het huidige afloopt.",
  },
  {
    q: "Is IPTV legaal in Nederland?",
    a: "De IPTV-techniek zelf geeft daar geen antwoord op — het gaat om de herkomst van de content en het model van de dienst. We publiceren geen gratis M3U-lijsten. Lees het artikel over legale IPTV (/blog/iptv-legaal-nederland) en de voorwaarden (/voorwaarden).",
  },
  {
    q: "Hoe neem ik contact op met support?",
    a: `Per e-mail (${site.email}) of WhatsApp via de website. We helpen bij aankoop, installatie en verlenging.`,
  },
];

/**
 * Trust commitments — factual service promises, NOT fabricated customer reviews.
 * Do not present these as named third-party testimonials.
 */
export const trustCommitments = [
  {
    title: "Activatie na betaling",
    body: "Na de betalingsbevestiging sturen we de inloggegevens en helpen we met de installatie als je dat wilt.",
  },
  {
    title: "7 dagen garantie",
    body: "Proef van 24 uur op aanvraag bij support. Na aankoop geldt een garantie van 7 dagen volgens het retourbeleid.",
  },
  {
    title: "Nederlandstalige support",
    body: "Hulp via e-mail en WhatsApp bij het instellen op Smart TV, Android, Fire Stick en andere apparaten.",
  },
  {
    title: "Gemaakt voor Nederland",
    body: "Aanbod met focus op Nederlandse zenders en sport, voor dagelijks kijken en Eredivisie-avonden.",
  },
  {
    title: "Meerdere schermen",
    body: "Plannen met 1, 2 of 3 verbindingen — kies wat bij je huis past, zonder te betalen voor schermen die je niet gebruikt.",
  },
  {
    title: "Veilig betalen",
    body: "Betalen met kaart en digitale wallets. De accountgegevens gaan na de bestelling via besloten kanalen.",
  },
];
