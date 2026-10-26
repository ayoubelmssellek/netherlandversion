import { buildTestWhatsAppUrl } from "@/lib/whatsapp";

export default function TrialBanner() {
  return (
    <div className="border-b border-line bg-pt-green/20 text-center">
      <div className="pt-flag-rail" aria-hidden="true" />
      <div className="section-shell flex flex-wrap items-center justify-center gap-x-3 gap-y-1 py-2.5 text-[13px] leading-snug sm:text-[14px]">
        <p className="text-slate">
          <span className="font-semibold text-white">Gratis proef van 24 uur</span>
          <span className="text-muted"> · </span>
          Check zenders en verbinding voordat je een abonnement neemt
          <span className="text-muted"> · </span>
          <a
            href={buildTestWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-pt-green-bright underline-offset-4 hover:underline"
          >
            Aanvragen via WhatsApp
          </a>
        </p>
      </div>
    </div>
  );
}
