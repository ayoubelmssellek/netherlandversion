/**
 * Builds a WhatsApp chat link with a prefilled order message for the chosen plan.
 * Number is never shown on the website — only used in wa.me links.
 */
export function getWhatsAppIntl(): string {
  // Internal order number only (not displayed on the site)
  return "212637573773";
}

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${getWhatsAppIntl()}?text=${encodeURIComponent(message)}`;
}

/** Prefill for the floating button and footer chat link. */
export function buildContactWhatsAppUrl(): string {
  return buildWhatsAppUrl(
    [
      "Hoi BesteIPTVNederland 👋",
      "",
      "Ik wil informatie over IPTV Nederland.",
      "Dat kan de proef van 24 uur zijn, een abonnement of hulp bij de installatie.",
    ].join("\n"),
  );
}

/** Prefill for 24h trial requests (hero, banner, CTAs). */
export function buildTestWhatsAppUrl(): string {
  return buildWhatsAppUrl(
    [
      "Hoi BesteIPTVNederland 👋",
      "",
      "Ik wil de gratis proef van 24 uur aanvragen.",
      "Belangrijkste apparaat: (bijv. Smart TV / Fire Stick / Android)",
    ].join("\n"),
  );
}

export function buildPlanWhatsAppUrl(options: {
  planLabel: string;
  price: number;
  connections: number;
}): string {
  const { planLabel, price, connections } = options;
  const connectionLabel =
    connections === 1 ? "1 verbinding" : `${connections} verbindingen`;
  const message = [
    `Hoi BesteIPTVNederland 👋`,
    ``,
    `Ik wil het volgende abonnement kopen:`,
    `• Abonnement: ${planLabel}`,
    `• Verbindingen: ${connectionLabel}`,
    `• Prijs: €${price}`,
    ``,
    `Stuur me alsjeblieft de betaal- en activatiegegevens.`,
  ].join("\n");

  return buildWhatsAppUrl(message);
}

export function openPlanWhatsApp(options: {
  planLabel: string;
  price: number;
  connections: number;
}): void {
  window.open(buildPlanWhatsAppUrl(options), "_blank", "noopener,noreferrer");
}
