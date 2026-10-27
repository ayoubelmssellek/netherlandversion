"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/data/content";
import TrialBanner from "@/components/TrialBanner";
import brandLogo from "@/assets/brand/beste-iptv-nederland-logo.jpg";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-deep/95 backdrop-blur-md">
      <TrialBanner />
      <div className="section-shell flex h-16 items-center justify-between gap-4 md:h-20">
        <Link href="/" className="inline-flex shrink-0" aria-label="BesteIPTVNederland — home">
          <Image
            src={brandLogo}
            alt="BesteIPTVNederland — logo IPTV Nederland"
            title="BesteIPTVNederland"
            height={56}
            width={200}
            className="h-12 w-auto md:h-14"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[16px] tracking-[-0.16px] transition ${
                  active
                    ? "font-medium text-pt-green-bright"
                    : "text-slate hover:text-pt-green-bright"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/prijzen" className="btn btn-solid hidden sm:inline-flex" aria-label="Bekijk IPTV-abonnementen">
            Nu kopen
          </Link>
          <button
            type="button"
            aria-label="Menu openen of sluiten"
            className="inline-flex h-10 w-10 items-center justify-center rounded-[4px] border border-line text-white lg:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-line bg-deep px-4 py-4 lg:hidden">
          <div className="section-shell flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-[4px] px-2 py-3 text-[16px] text-slate hover:text-pt-green-bright"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/prijzen"
              onClick={() => setOpen(false)}
              className="btn btn-solid mt-2 w-full"
              aria-label="IPTV-toegang krijgen"
            >
              Nu kopen
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
