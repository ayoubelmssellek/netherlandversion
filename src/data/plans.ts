import { getPriceForPlan } from "@/lib/plan-pricing";

export type ResolvedPlan = {
  id: string;
  label: string;
  productName: string;
  price: number;
  connections: number;
};

export function resolvePlan(planId?: string | null, connectionsParam?: string | null): ResolvedPlan {
  const connections = Number(connectionsParam) === 2 ? 2 : Number(connectionsParam) === 3 ? 3 : 1;

  if (planId === "3conn" || connections === 3) {
    return {
      id: "3conn",
      label: "1 jaar",
      productName: "Plan BesteIPTVNederland 1 jaar · 3 verbindingen",
      price: getPriceForPlan("3conn", 3),
      connections: 3,
    };
  }

  const map: Record<string, string> = {
    "1m": "1 maand",
    "1m2": "1 maand",
    "3m": "3 maanden",
    "3m2": "3 maanden",
    "6m": "6 maanden",
    "6m2": "6 maanden",
    "1y": "1 jaar",
    "1y2": "1 jaar",
    "2y": "2 jaar",
    "2y2": "2 jaar",
  };

  const id = planId || "1y";
  const label = map[id] || map["1y"];
  const conn = (connections === 2 ? 2 : 1) as 1 | 2;

  return {
    id,
    label,
    productName: `Plan BesteIPTVNederland ${label}`,
    price: getPriceForPlan(id, conn),
    connections: conn,
  };
}

export function formatMoney(amount: number) {
  return `€${Math.round(amount)}`;
}

/** Full inclusions for checkout summary (same product promise as pricing cards). */
export const checkoutBenefits = [
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
