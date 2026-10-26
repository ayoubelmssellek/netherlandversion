"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";

export default function RenewForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  const field =
    "mt-2 w-full rounded-[4px] border border-line bg-transparent px-4 py-3 text-white outline-none focus:border-white/40";

  return (
    <div className="mt-12 grid gap-6 lg:grid-cols-2">
      <form onSubmit={onSubmit} className="border border-line bg-deep p-6 md:p-8">
        <label className="block text-[14px] text-slate">
          E-mail of gebruikersnaam
          <input required name="account" className={field} placeholder="jij@email.com" />
        </label>
        <label className="mt-4 block text-[14px] text-slate">
          Looptijd van je huidige abonnement
          <select name="duration" className={`${field} bg-black`}>
            <option>3 maanden</option>
            <option>6 maanden</option>
            <option>1 jaar</option>
            <option>2 jaar</option>
          </select>
        </label>
        <button type="submit" className="btn btn-solid mt-6 w-full" aria-label="IPTV-verlenging aanvragen">
          Verlenging aanvragen
        </button>
        {sent && (
          <p className="mt-4 border border-line px-4 py-3 text-[14px] text-slate">
            Aanvraag ontvangen: support bevestigt de verlenging per e-mail zodra die is verwerkt.
          </p>
        )}
      </form>

      <div className="border border-line bg-surface p-6 md:p-8">
        <h2 className="text-[20px] text-white">Liever opnieuw IPTV kopen?</h2>
        <p className="mt-3 text-[14px] text-slate">
          Begin met een volledig abonnement als je gegevens zijn verlopen of als je meer verbindingen nodig hebt.
          Vergelijk prijzen en verbindingen op Prijzen.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/prijzen" className="btn btn-ghost" aria-label="Nu IPTV kopen">
            Nu kopen
          </Link>
          <Link href="/installatiegidsen" className="btn btn-solid">
            Installatiegidsen
          </Link>
          <Link href="/veelgestelde-vragen" className="text-[14px] text-slate hover:text-white">
            Veelgestelde vragen →
          </Link>
        </div>
      </div>
    </div>
  );
}
