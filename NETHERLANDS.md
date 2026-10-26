# Netherlands site — BesteIPTVNederland

Full copy of the Spain localization of the Portugal IPTV site, retargeted to the **Netherlands**.

- Language: Dutch (`nl-NL`)
- Brand: **BesteIPTVNederland**
- Default domain: `https://www.besteiptvnederland.shop` (change with `NEXT_PUBLIC_SITE_URL`)
- Do not edit `stream_website` (Portugal) or `stream_website_spain`

## Channel list

Dutch channel tiles are placeholders in `src/assets/channels/` and `src/data/media.ts` (`channelLogos`). Replace names, files, and alt text when the owner sends the real lineup. Current placeholders: NPO 1, NPO 2, NPO 3, RTL 4, RTL 7, RTL 8, SBS6, Net5, Veronica, ESPN, NOS, Eredivisie.

## Reviews

`src/data/client-reviews.json` starts empty. Do not invent Dutch testimonials. The form on `/beoordelingen` emails submissions with the same SMTP env vars as checkout.

## Run

```powershell
cd C:\Users\ADMIN\Desktop\MyProjects\stream_website_netherlands
npm install
npm run dev
```

Copy `.env.local` from the Portugal project if checkout email must work locally.
