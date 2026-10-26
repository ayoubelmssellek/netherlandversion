"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense, useMemo } from "react";
import CheckoutHeader from "@/components/CheckoutHeader";
import { site } from "@/data/content";
import { formatMoney, resolvePlan } from "@/data/plans";
import { getWhatsAppIntl } from "@/lib/whatsapp";

function ThankYouContent() {
  const params = useSearchParams();
  const order = params.get("order") || "4453";
  const name = params.get("name") || "";
  const email = params.get("email") || "";
  const customerWhatsapp = params.get("whatsapp") || "";
  const plan = useMemo(
    () => resolvePlan(params.get("plan"), params.get("connections")),
    [params],
  );

  const connectionLabel =
    plan.connections === 1 ? "1 verbinding" : `${plan.connections} verbindingen`;

  const whatsappMessage = [
    `Hoi BesteIPTVNederland 👋`,
    ``,
    `Ik heb net een bestelling geplaatst op de website.`,
    `• Bestelling: #${order}`,
    `• Abonnement: ${plan.productName}`,
    `• Verbindingen: ${plan.connections}`,
    `• Prijs: ${formatMoney(plan.price)}`,
    name ? `• Naam: ${name}` : null,
    email ? `• E-mail: ${email}` : null,
    customerWhatsapp ? `• WhatsApp: ${customerWhatsapp}` : null,
    ``,
    `Stuur me alsjeblieft de betaallink en de activatiegegevens.`,
  ]
    .filter(Boolean)
    .join("\n");

  return (
    <div className="min-h-screen bg-black">
      <CheckoutHeader step={2} />

      <div className="mx-auto w-full max-w-lg px-4 py-6 sm:px-6 sm:py-8">
        <h1 className="text-[26px] tracking-[-0.6px] text-white md:text-[30px]">
          Bestelling #{order} ontvangen
        </h1>
        <p className="mt-2 text-[14px] leading-[1.45] text-slate">
          Tik op WhatsApp om de betaallink te krijgen en de dienst te activeren — we zijn 24/7 online.
        </p>

        <div className="mt-5 rounded-[8px] border border-line bg-surface px-4 py-3">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <p className="text-[15px] font-medium text-white">{plan.productName}</p>
              <p className="mt-0.5 text-[12px] text-muted">{connectionLabel}</p>
            </div>
            <p className="shrink-0 text-[18px] font-semibold text-white">{formatMoney(plan.price)}</p>
          </div>
          {email ? (
            <p className="mt-2 truncate text-[12px] text-muted">
              E-mail van de bestelling: <span className="text-slate">{email}</span>
            </p>
          ) : null}
        </div>

        <Link
          href={`https://wa.me/${getWhatsAppIntl()}?text=${encodeURIComponent(whatsappMessage)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 flex w-full items-center justify-center rounded-[4px] bg-[#25D366] py-3.5 text-[15px] font-semibold text-white transition hover:bg-[#20BD5A]"
        >
          Betalen via WhatsApp
        </Link>

        <div className="mt-4 rounded-[8px] border border-line px-4 py-3 text-[13px] leading-[1.5] text-slate">
          <p className="font-medium text-white">Geen WhatsApp?</p>
          <p className="mt-1">
            Geen probleem — we nemen contact met je op via e-mail
            {email ? (
              <>
                {" "}
                op <span className="text-white">{email}</span>
              </>
            ) : (
              " op het adres dat je bij het afrekenen hebt ingevuld"
            )}
            , met de betaallink en de activatie. Je kunt ook mailen naar{" "}
            <a href={`mailto:${site.email}`} className="text-white underline-offset-2 hover:underline">
              {site.email}
            </a>
            .
          </p>
        </div>

        <p className="mt-6 text-center text-[12px] text-muted">
          <Link href="/" className="underline-offset-2 hover:text-white hover:underline">
            Terug naar home
          </Link>
        </p>
      </div>
    </div>
  );
}

export default function ThankYouPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center bg-black text-slate">Laden…</div>
      }
    >
      <ThankYouContent />
    </Suspense>
  );
}
