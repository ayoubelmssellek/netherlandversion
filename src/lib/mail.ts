import nodemailer from "nodemailer";
import { getWhatsAppIntl } from "@/lib/whatsapp";

export type OrderPayload = {
  orderId: string;
  planId: string;
  planLabel: string;
  productName: string;
  price: number;
  connections: number;
  email: string;
  name: string;
  whatsapp?: string;
  country?: string;
};

export type ReviewSubmissionPayload = {
  name: string;
  email: string;
  location: string;
  rating: number;
  comment: string;
};

function buildOrderWhatsAppUrl(order: OrderPayload) {
  const connectionLabel =
    order.connections === 1 ? "1 verbinding" : `${order.connections} verbindingen`;
  const message = [
    `Hoi BesteIPTVNederland 👋`,
    ``,
    `Ik heb net een bestelling geplaatst op de website.`,
    `• Bestelling: #${order.orderId}`,
    `• Abonnement: ${order.productName}`,
    `• Verbindingen: ${connectionLabel}`,
    `• Prijs: ${money(order.price)}`,
    order.name ? `• Naam: ${order.name}` : null,
    order.email ? `• E-mail: ${order.email}` : null,
    ``,
    `Stuur me alsjeblieft de betaallink en de activatiegegevens.`,
  ]
    .filter(Boolean)
    .join("\n");

  return `https://wa.me/${getWhatsAppIntl()}?text=${encodeURIComponent(message)}`;
}

function requiredEnv(key: string): string {
  const value = process.env[key]?.trim();
  if (!value) {
    throw new Error(`E-mailomgevingsvariabele ontbreekt: ${key}`);
  }
  return value;
}

export function isMailConfigured(): boolean {
  return Boolean(
    process.env.SMTP_USER?.trim() &&
      process.env.SMTP_PASS?.trim() &&
      process.env.SMTP_FROM?.trim() &&
      process.env.ORDER_NOTIFY_EMAIL?.trim(),
  );
}

export function createMailTransport() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST?.trim() || "smtp.hostinger.com",
    port: Number(process.env.SMTP_PORT || 465),
    secure: true, // 465 = SSL
    auth: {
      user: requiredEnv("SMTP_USER"),
      pass: requiredEnv("SMTP_PASS"),
    },
  });
}

function money(amount: number) {
  return `€${Math.round(amount)}`;
}

function customerHtml(order: OrderPayload) {
  const whatsappUrl = buildOrderWhatsAppUrl(order);
  const greetingName = escapeHtml(order.name || "klant");

  return `
  <div style="font-family:Arial,sans-serif;line-height:1.5;color:#111;max-width:560px">
    <h1 style="font-size:22px;margin:0 0 12px">Bedankt voor je bestelling!</h1>
    <p>Hoi ${greetingName},</p>
    <p>We hebben je bestelling bij BesteIPTVNederland ontvangen: <strong>#${escapeHtml(order.orderId)}</strong>.</p>
    <table style="width:100%;border-collapse:collapse;margin:16px 0">
      <tr><td style="padding:6px 0">Abonnement</td><td style="padding:6px 0;text-align:right"><strong>${escapeHtml(order.productName)}</strong></td></tr>
      <tr><td style="padding:6px 0">Verbindingen</td><td style="padding:6px 0;text-align:right">${order.connections}</td></tr>
      <tr><td style="padding:6px 0">Totaal</td><td style="padding:6px 0;text-align:right"><strong>${money(order.price)}</strong></td></tr>
    </table>
    <p><strong>Volgende stappen</strong></p>
    <ol>
      <li>
        Heb je WhatsApp, neem dan contact op via de bedankpagina of klik op de knop hieronder om sneller de betaallink te krijgen.
        <div style="margin:14px 0 8px">
          <a href="${whatsappUrl}" style="display:inline-block;background:#25D366;color:#ffffff;text-decoration:none;font-weight:600;padding:12px 18px;border-radius:4px">
            Chat openen in WhatsApp
          </a>
        </div>
        <p style="margin:0 0 8px;font-size:13px;color:#555;word-break:break-all">
          Of kopieer deze link: <a href="${whatsappUrl}" style="color:#25D366">${escapeHtml(whatsappUrl)}</a>
        </p>
      </li>
      <li>Heb je geen WhatsApp, antwoord dan op deze e-mail of wacht even — we sturen je hier je <strong>veilige betaallink</strong>.</li>
      <li>Na de betaling activeren we je account en helpen we je met de installatie.</li>
    </ol>
    <p style="color:#555;font-size:13px">BesteIPTVNederland · support@besteiptvnederland.shop</p>
  </div>`;
}

function adminHtml(order: OrderPayload) {
  return `
  <div style="font-family:Arial,sans-serif;line-height:1.5;color:#111;max-width:560px">
    <h1 style="font-size:22px;margin:0 0 12px">Nieuwe bestelling #${escapeHtml(order.orderId)}</h1>
    <table style="width:100%;border-collapse:collapse;margin:16px 0">
      <tr><td style="padding:6px 0">Naam</td><td style="padding:6px 0;text-align:right">${escapeHtml(order.name)}</td></tr>
      <tr><td style="padding:6px 0">E-mail</td><td style="padding:6px 0;text-align:right">${escapeHtml(order.email)}</td></tr>
      <tr><td style="padding:6px 0">WhatsApp</td><td style="padding:6px 0;text-align:right">${escapeHtml(order.whatsapp || "—")}</td></tr>
      <tr><td style="padding:6px 0">Land</td><td style="padding:6px 0;text-align:right">${escapeHtml(order.country || "—")}</td></tr>
      <tr><td style="padding:6px 0">Abonnement</td><td style="padding:6px 0;text-align:right">${escapeHtml(order.productName)}</td></tr>
      <tr><td style="padding:6px 0">Abonnement-ID</td><td style="padding:6px 0;text-align:right">${escapeHtml(order.planId)}</td></tr>
      <tr><td style="padding:6px 0">Verbindingen</td><td style="padding:6px 0;text-align:right">${order.connections}</td></tr>
      <tr><td style="padding:6px 0">Totaal</td><td style="padding:6px 0;text-align:right"><strong>${money(order.price)}</strong></td></tr>
    </table>
    <p>Stuur de klant de betaallink via WhatsApp of e-mail.</p>
  </div>`;
}

function reviewAdminHtml(review: ReviewSubmissionPayload) {
  return `
  <div style="font-family:Arial,sans-serif;line-height:1.5;color:#111;max-width:560px">
    <h1 style="font-size:22px;margin:0 0 12px">Nieuwe beoordeling op de site</h1>
    <table style="width:100%;border-collapse:collapse;margin:16px 0">
      <tr><td style="padding:6px 0">Naam</td><td style="padding:6px 0;text-align:right">${escapeHtml(review.name)}</td></tr>
      <tr><td style="padding:6px 0">E-mail</td><td style="padding:6px 0;text-align:right">${escapeHtml(review.email)}</td></tr>
      <tr><td style="padding:6px 0">Plaats</td><td style="padding:6px 0;text-align:right">${escapeHtml(review.location || "—")}</td></tr>
      <tr><td style="padding:6px 0">Score</td><td style="padding:6px 0;text-align:right"><strong>${review.rating}/5</strong></td></tr>
    </table>
    <p style="white-space:pre-wrap;border-top:1px solid #eee;padding-top:12px">${escapeHtml(review.comment)}</p>
    <p style="color:#555;font-size:13px">Controleer en voeg bij goedkeuring toe aan src/data/client-reviews.json</p>
  </div>`;
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

/** Sends the order confirmation to the customer and a copy to the shop inbox. */
export async function sendOrderEmails(order: OrderPayload) {
  if (!isMailConfigured()) {
    return { sent: false as const, reason: "SMTP niet geconfigureerd" };
  }

  const transporter = createMailTransport();
  const from = requiredEnv("SMTP_FROM");
  const notifyTo = requiredEnv("ORDER_NOTIFY_EMAIL");

  const whatsappUrl = buildOrderWhatsAppUrl(order);

  await transporter.sendMail({
    from,
    to: order.email,
    subject: `BesteIPTVNederland bestelling #${order.orderId} — volgende stappen`,
    html: customerHtml(order),
    text: [
      `Bedankt voor je bestelling #${order.orderId}.`,
      `Abonnement: ${order.productName}`,
      `Verbindingen: ${order.connections}`,
      `Totaal: ${money(order.price)}`,
      ``,
      `Volgende stappen:`,
      `1) Heb je WhatsApp, neem dan contact op via de bedankpagina of open deze link voor een snellere betaling:`,
      whatsappUrl,
      `2) Heb je geen WhatsApp, antwoord dan op deze e-mail of wacht even — we sturen je hier de veilige betaallink.`,
      `3) Na de betaling activeren we je account en helpen we je met de installatie.`,
      ``,
      `BesteIPTVNederland · support@besteiptvnederland.shop`,
    ].join("\n"),
  });

  await transporter.sendMail({
    from,
    to: notifyTo,
    replyTo: order.email,
    subject: `[Bestelling] #${order.orderId} — ${order.productName} — ${money(order.price)}`,
    html: adminHtml(order),
    text: [
      `Nieuwe bestelling #${order.orderId}`,
      `Naam: ${order.name}`,
      `E-mail: ${order.email}`,
      `WhatsApp: ${order.whatsapp || "—"}`,
      `Land: ${order.country || "—"}`,
      `Abonnement: ${order.productName}`,
      `Verbindingen: ${order.connections}`,
      `Totaal: ${money(order.price)}`,
    ].join("\n"),
  });

  return { sent: true as const };
}

/** Notifies the shop inbox when a visitor submits a review on /beoordelingen. */
export async function sendReviewSubmissionEmail(review: ReviewSubmissionPayload) {
  if (!isMailConfigured()) {
    return { sent: false as const, reason: "SMTP niet geconfigureerd" };
  }

  const transporter = createMailTransport();
  const from = requiredEnv("SMTP_FROM");
  const notifyTo = requiredEnv("ORDER_NOTIFY_EMAIL");

  await transporter.sendMail({
    from,
    to: notifyTo,
    replyTo: review.email,
    subject: `[Beoordeling] ${review.rating}/5 — ${review.name}`,
    html: reviewAdminHtml(review),
    text: [
      `Nieuwe beoordeling op de site`,
      `Naam: ${review.name}`,
      `E-mail: ${review.email}`,
      `Plaats: ${review.location || "—"}`,
      `Score: ${review.rating}/5`,
      ``,
      review.comment,
    ].join("\n"),
  });

  return { sent: true as const };
}
