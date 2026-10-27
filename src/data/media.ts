import type { StaticImageData } from "next/image";

import discovery from "@/assets/channels/discovery-iptv-nederland.png";
import espn from "@/assets/channels/espn-iptv-nederland.png";
import espn2 from "@/assets/channels/espn-2-iptv-nederland.png";
import net5 from "@/assets/channels/net5-iptv-nederland.png";
import npo1 from "@/assets/channels/npo-1-iptv-nederland.png";
import npo2 from "@/assets/channels/npo-2-iptv-nederland.png";
import npo3 from "@/assets/channels/npo-3-iptv-nederland.png";
import npoKlassiek from "@/assets/channels/npo-klassiek-iptv-nederland.png";
import rtl from "@/assets/channels/rtl-iptv-nederland.png";
import rtl4 from "@/assets/channels/rtl-4-iptv-nederland.png";
import rtl5 from "@/assets/channels/rtl-5-iptv-nederland.png";
import rtl6 from "@/assets/channels/rtl-6-iptv-nederland.png";
import rtl7 from "@/assets/channels/rtl-7-iptv-nederland.png";
import rtl8 from "@/assets/channels/rtl-8-iptv-nederland.png";
import rtlZ from "@/assets/channels/rtl-z-iptv-nederland.png";
import sbs6 from "@/assets/channels/sbs6-iptv-nederland.png";
import sbs9 from "@/assets/channels/sbs9-iptv-nederland.png";
import veronica from "@/assets/channels/veronica-iptv-nederland.png";

import appleTvPlus from "@/assets/entertainment-brands/apple-tv-iptv-nederland.jpg";
import dazn from "@/assets/entertainment-brands/dazn-iptv-nederland.webp";
import disneyPlus from "@/assets/entertainment-brands/disney-plus-iptv-nederland.jpg";
import hboMax from "@/assets/entertainment-brands/hbo-max-iptv-nederland.jpg";
import netflixBrand from "@/assets/entertainment-brands/netflix-iptv-nederland.png";
import primeVideo from "@/assets/entertainment-brands/prime-video-iptv-nederland.jpg";
import skyshowtime from "@/assets/entertainment-brands/skyshowtime-iptv-nederland.jpg";

import avatarTheWayOfWater from "@/assets/movies/avatar-iptv-nederland.jpg";
import theOdesy from "@/assets/movies/the-odyssey-iptv-nederland.jpg";
import deadpoolWolverine from "@/assets/movies/deadpool-iptv-nederland.jpg";
import dunePartTwo from "@/assets/movies/dune-iptv-nederland.jpg";
import gladiatorIi from "@/assets/movies/gladiator-iptv-nederland.jpg";
import insideOut2 from "@/assets/movies/inside-out-iptv-nederland.jpg";
import johnWickChapter4 from "@/assets/movies/john-wick-iptv-nederland.jpg";
import oppenheimer from "@/assets/movies/oppenheimer-iptv-nederland.jpg";

import applePay from "@/assets/payments/apple-pay-iptv-nederland.webp";
import googlePay from "@/assets/payments/google-pay-iptv-nederland.webp";
import mastercard from "@/assets/payments/mastercard-iptv-nederland.webp";
import paypal from "@/assets/payments/paypal-iptv-nederland.webp";
import visa from "@/assets/payments/visa-iptv-nederland.webp";

import championsLeague from "@/assets/sports-brands/champions-league-iptv-nederland.jpg";
import formula1 from "@/assets/sports-brands/formula-1-iptv-nederland.jpg";
import laLiga from "@/assets/sports-brands/eredivisie-sport-iptv-nederland.jpg";
import nba from "@/assets/sports-brands/nba-iptv-nederland.jpg";
import premierLeague from "@/assets/sports-brands/premier-league-iptv-nederland.jpg";
import ufc from "@/assets/sports-brands/ufc-iptv-nederland.jpg";

import betterCallSaul from "@/assets/tv-shows/better-call-saul-iptv-nederland.jpg";
import breakingBad from "@/assets/tv-shows/breaking-bad-iptv-nederland.jpg";
import gameOfThrones from "@/assets/tv-shows/game-of-thrones-iptv-nederland.jpg";
import houseOfTheDragon from "@/assets/tv-shows/house-of-the-dragon-iptv-nederland.jpg";
import laCasaDePapel from "@/assets/tv-shows/la-casa-de-papel-iptv-nederland.jpg";
import strangerThings from "@/assets/tv-shows/stranger-things-iptv-nederland.jpg";

export type SeoKeyword = "informational" | "commercial" | "transactional";

export type SeoImage = {
  src: StaticImageData;
  alt: string;
  title: string;
  keyword: SeoKeyword;
  entity: string;
};

/** `entity` keys for the home guide must match ChannelsShowcase GUIDE_ORDER. */
export const channelLogos: SeoImage[] = [
  { src: npo1, alt: "NPO 1 IPTV Nederland", title: "NPO 1 — IPTV Nederland", keyword: "informational", entity: "NPO 1" },
  { src: npo2, alt: "NPO 2 IPTV Nederland", title: "NPO 2 — IPTV Nederland", keyword: "informational", entity: "NPO 2" },
  { src: npo3, alt: "NPO 3 IPTV Nederland", title: "NPO 3 — IPTV Nederland", keyword: "informational", entity: "NPO 3" },
  { src: npoKlassiek, alt: "NPO Klassiek IPTV Nederland", title: "NPO Klassiek — IPTV Nederland", keyword: "informational", entity: "NPO Klassiek" },
  { src: rtl4, alt: "RTL 4 IPTV Nederland", title: "RTL 4 — IPTV Nederland", keyword: "informational", entity: "RTL 4" },
  { src: rtl5, alt: "RTL 5 IPTV Nederland", title: "RTL 5 — IPTV Nederland", keyword: "informational", entity: "RTL 5" },
  { src: rtl6, alt: "RTL 6 IPTV Nederland", title: "RTL 6 — IPTV Nederland", keyword: "informational", entity: "RTL 6" },
  { src: rtl7, alt: "RTL 7 IPTV Nederland", title: "RTL 7 — IPTV Nederland", keyword: "transactional", entity: "RTL 7" },
  { src: rtl8, alt: "RTL 8 IPTV Nederland", title: "RTL 8 — IPTV Nederland", keyword: "informational", entity: "RTL 8" },
  { src: rtlZ, alt: "RTL Z IPTV Nederland", title: "RTL Z — IPTV Nederland", keyword: "informational", entity: "RTL Z" },
  { src: rtl, alt: "RTL IPTV Nederland", title: "RTL — IPTV Nederland", keyword: "informational", entity: "RTL" },
  { src: sbs6, alt: "SBS6 IPTV Nederland", title: "SBS6 — IPTV Nederland", keyword: "informational", entity: "SBS6" },
  { src: sbs9, alt: "SBS9 IPTV Nederland", title: "SBS9 — IPTV Nederland", keyword: "informational", entity: "SBS9" },
  { src: net5, alt: "Net5 IPTV Nederland", title: "Net5 — IPTV Nederland", keyword: "informational", entity: "Net5" },
  { src: veronica, alt: "Veronica IPTV Nederland", title: "Veronica — IPTV Nederland", keyword: "informational", entity: "Veronica" },
  { src: espn, alt: "ESPN IPTV Nederland", title: "ESPN — IPTV Nederland", keyword: "transactional", entity: "ESPN" },
  { src: espn2, alt: "ESPN 2 IPTV Nederland", title: "ESPN 2 — IPTV Nederland", keyword: "transactional", entity: "ESPN 2" },
  { src: discovery, alt: "Discovery IPTV Nederland", title: "Discovery — IPTV Nederland", keyword: "informational", entity: "Discovery" },
];

export const entertainmentBrands: SeoImage[] = [
  {
    src: netflixBrand,
    alt: "Netflix IPTV Nederland",
    title: "Netflix Nederland",
    keyword: "commercial",
    entity: "Netflix",
  },
  {
    src: primeVideo,
    alt: "Prime Video IPTV Nederland",
    title: "Prime Video Nederland",
    keyword: "commercial",
    entity: "Prime Video",
  },
  {
    src: disneyPlus,
    alt: "Disney+ IPTV Nederland",
    title: "Disney Plus Nederland",
    keyword: "commercial",
    entity: "Disney Plus",
  },
  {
    src: hboMax,
    alt: "HBO Max IPTV Nederland",
    title: "HBO Max Nederland",
    keyword: "commercial",
    entity: "HBO Max",
  },
  {
    src: appleTvPlus,
    alt: "Apple TV IPTV Nederland",
    title: "Apple TV Plus Nederland",
    keyword: "commercial",
    entity: "Apple TV+",
  },
  {
    src: skyshowtime,
    alt: "SkyShowtime IPTV Nederland",
    title: "SkyShowtime Nederland",
    keyword: "commercial",
    entity: "SkyShowtime",
  },
  {
    src: dazn,
    alt: "DAZN IPTV Nederland",
    title: "DAZN Nederland",
    keyword: "commercial",
    entity: "DAZN",
  },
];

export const sportsBrands: SeoImage[] = [
  {
    src: championsLeague,
    alt: "Champions League IPTV Nederland",
    title: "UEFA Champions League",
    keyword: "commercial",
    entity: "UEFA Champions League",
  },
  {
    src: premierLeague,
    alt: "Premier League IPTV Nederland",
    title: "Premier League",
    keyword: "commercial",
    entity: "Premier League",
  },
  {
    src: laLiga,
    alt: "Eredivisie IPTV Nederland",
    title: "Eredivisie",
    keyword: "commercial",
    entity: "Eredivisie",
  },
  {
    src: formula1,
    alt: "Formule 1 IPTV Nederland",
    title: "Formula 1",
    keyword: "commercial",
    entity: "Formula 1",
  },
  {
    src: ufc,
    alt: "UFC IPTV Nederland",
    title: "UFC",
    keyword: "commercial",
    entity: "UFC",
  },
  {
    src: nba,
    alt: "NBA IPTV Nederland",
    title: "NBA",
    keyword: "commercial",
    entity: "NBA",
  },
];

const moviePosters: SeoImage[] = [
  {
    src: theOdesy,
    alt: "The Odyssey IPTV Nederland",
    title: "The Odyssey",
    keyword: "informational",
    entity: "The Odyssey",
  },
  {
    src: oppenheimer,
    alt: "Oppenheimer IPTV Nederland",
    title: "Oppenheimer",
    keyword: "informational",
    entity: "Oppenheimer",
  },
  {
    src: dunePartTwo,
    alt: "Dune IPTV Nederland",
    title: "Dune Part Two",
    keyword: "informational",
    entity: "Dune Part Two",
  },
  {
    src: deadpoolWolverine,
    alt: "Deadpool IPTV Nederland",
    title: "Deadpool & Wolverine",
    keyword: "informational",
    entity: "Deadpool & Wolverine",
  },
  {
    src: avatarTheWayOfWater,
    alt: "Avatar IPTV Nederland",
    title: "Avatar The Way of Water",
    keyword: "informational",
    entity: "Avatar The Way of Water",
  },
  {
    src: johnWickChapter4,
    alt: "John Wick IPTV Nederland",
    title: "John Wick Chapter 4",
    keyword: "informational",
    entity: "John Wick Chapter 4",
  },
  {
    src: gladiatorIi,
    alt: "Gladiator IPTV Nederland",
    title: "Gladiator II",
    keyword: "informational",
    entity: "Gladiator II",
  },
  {
    src: insideOut2,
    alt: "Inside Out IPTV Nederland",
    title: "Inside Out 2",
    keyword: "informational",
    entity: "Inside Out 2",
  },
];

const tvShowPosters: SeoImage[] = [
  {
    src: strangerThings,
    alt: "Stranger Things IPTV Nederland",
    title: "Stranger Things",
    keyword: "informational",
    entity: "Stranger Things",
  },
  {
    src: breakingBad,
    alt: "Breaking Bad IPTV Nederland",
    title: "Breaking Bad",
    keyword: "informational",
    entity: "Breaking Bad",
  },
  {
    src: gameOfThrones,
    alt: "Game of Thrones IPTV Nederland",
    title: "Game of Thrones",
    keyword: "informational",
    entity: "Game of Thrones",
  },
  {
    src: houseOfTheDragon,
    alt: "House of the Dragon IPTV Nederland",
    title: "House of the Dragon",
    keyword: "informational",
    entity: "House of the Dragon",
  },
  {
    src: laCasaDePapel,
    alt: "La Casa de Papel IPTV Nederland",
    title: "La Casa de Papel",
    keyword: "informational",
    entity: "La Casa de Papel",
  },
  {
    src: betterCallSaul,
    alt: "Better Call Saul IPTV Nederland",
    title: "Better Call Saul",
    keyword: "informational",
    entity: "Better Call Saul",
  },
];

/** Full VOD strip (movies + series, interleaved for the marquee). */
export const posterImages: SeoImage[] = (() => {
  const mixed: SeoImage[] = [];
  const max = Math.max(moviePosters.length, tvShowPosters.length);
  for (let i = 0; i < max; i += 1) {
    if (moviePosters[i]) mixed.push(moviePosters[i]);
    if (tvShowPosters[i]) mixed.push(tvShowPosters[i]);
  }
  return mixed;
})();

export const featuredSportsImage = sportsBrands[0];

export const paymentMethods: SeoImage[] = [
  {
    src: visa,
    alt: "Visa IPTV Nederland",
    title: "Visa",
    keyword: "commercial",
    entity: "Visa",
  },
  {
    src: mastercard,
    alt: "Mastercard IPTV Nederland",
    title: "Mastercard",
    keyword: "commercial",
    entity: "Mastercard",
  },
  {
    src: paypal,
    alt: "PayPal IPTV Nederland",
    title: "PayPal",
    keyword: "commercial",
    entity: "PayPal",
  },
  {
    src: applePay,
    alt: "Apple Pay IPTV Nederland",
    title: "Apple Pay",
    keyword: "commercial",
    entity: "Apple Pay",
  },
  {
    src: googlePay,
    alt: "Google Pay IPTV Nederland",
    title: "Google Pay",
    keyword: "commercial",
    entity: "Google Pay",
  },
];
