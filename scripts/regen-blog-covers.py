"""Regenerate Netherlands blog covers and inject Dutch keywords into each file."""
from __future__ import annotations

import json
import textwrap
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "src" / "assets" / "blogs"
BLOG = ROOT / "src" / "data" / "blog.ts"
ASSIGN = ROOT / "seo-ops" / "image-keyword-assignments.json"
FONT = Path(r"C:\Windows\Fonts\arialbd.ttf")
FONT_REG = Path(r"C:\Windows\Fonts\arial.ttf")

# old import path (under assets/blogs) -> new jpg name, headline, alt, keywords
COVERS = [
    (
        "checklist-iptv-nederland.png",
        "checklist-iptv-nederland.jpg",
        "Checklist IPTV Nederland",
        "Omslag checklist IPTV Nederland — wat je checkt voor een abonnement",
        ["checklist iptv nederland", "iptv nederland", "iptv nederland kopen"],
    ),
    (
        "beste-app-iptv-nederland.png",
        "beste-app-iptv-nederland.jpg",
        "Beste IPTV-app Nederland",
        "Omslag beste IPTV-app Nederland — spelers vergelijken",
        ["beste app iptv nederland", "iptv app nederland", "iptv nederland"],
    ),
    (
        "iptv-livestream-nederland.png",
        "iptv-livestream-nederland.jpg",
        "IPTV live Nederland",
        "Omslag IPTV live Nederland — zenders in directe uitzending",
        ["iptv live nederland", "iptv livestream", "iptv nederland"],
    ),
    (
        "iptv-nederland-iphone-ipad.webp",
        "iptv-nederland-iphone-ipad.jpg",
        "IPTV op iPhone en iPad",
        "Omslag IPTV Nederland op iPhone en iPad",
        ["iptv iphone nederland", "iptv ipad", "iptv nederland"],
    ),
    (
        "iptv-smarters-pro-nederland.webp",
        "iptv-smarters-pro-nederland.jpg",
        "IPTV Smarters Pro Nederland",
        "Omslag IPTV Smarters Pro Nederland — Xtream-toegang",
        ["iptv smarters pro nederland", "xtream iptv", "iptv nederland"],
    ),
    (
        "iptv-android-nederland.webp",
        "iptv-android-nederland.jpg",
        "IPTV Android Nederland",
        "Omslag IPTV Android Nederland installeren",
        ["iptv android nederland", "iptv android installeren", "iptv nederland"],
    ),
    (
        "iptv-werkt-niet-buffering-nederland.webp",
        "iptv-werkt-niet-buffering-nederland.jpg",
        "IPTV buffert in Nederland",
        "Omslag IPTV werkt niet of buffert in Nederland",
        ["iptv buffering nederland", "iptv werkt niet", "iptv nederland"],
    ),
    (
        "beste-iptv-nederland-2026.webp",
        "beste-iptv-nederland-2026.jpg",
        "Beste IPTV Nederland 2026",
        "Omslag beste IPTV Nederland 2026 — Nederlandse zenders",
        ["beste iptv nederland", "beste iptv nederland 2026", "iptv nederland"],
    ),
    (
        "iptv-nederland-prijs-abonnementen.webp",
        "iptv-nederland-prijs-abonnementen.jpg",
        "Prijs IPTV Nederland",
        "Omslag prijs IPTV Nederland — abonnementen en verbindingen",
        ["prijs iptv nederland", "iptv abonnement nederland", "iptv nederland"],
    ),
    (
        "proef-iptv-nederland-24h.webp",
        "proef-iptv-nederland.jpg",
        "Proef IPTV Nederland",
        "Omslag proef IPTV Nederland van 24 uur",
        ["proef iptv nederland", "iptv test 24 uur", "iptv nederland"],
    ),
    (
        "sport-iptv-nederland.webp",
        "iptv-sport-nederland.jpg",
        "ESPN via IPTV Nederland",
        "Omslag ESPN kijken via IPTV in Nederland",
        ["iptv sport nederland", "espn iptv nederland", "iptv nederland"],
    ),
    (
        "iptv-eredivisie-nederland.webp",
        "iptv-eredivisie-nederland.jpg",
        "IPTV Eredivisie",
        "Omslag IPTV Eredivisie en clubzenders in Nederland",
        ["iptv eredivisie", "eredivisie iptv nederland", "iptv nederland"],
    ),
    (
        "iptv-lijst-nederland-legal.webp",
        "iptv-legaal-nederland.jpg",
        "IPTV-lijst Nederland",
        "Omslag gratis IPTV-lijst Nederland — risico's en alternatieven",
        ["iptv lijst nederland", "iptv legaal nederland", "iptv nederland"],
    ),
    (
        "iptv-4k-nederland-smart-tv.webp",
        "iptv-4k-nederland.jpg",
        "IPTV 4K Nederland",
        "Omslag IPTV 4K Nederland op Smart TV",
        ["iptv 4k nederland", "iptv smart tv", "iptv nederland"],
    ),
    (
        "box-iptv-nederland-fire-stick-android.webp",
        "iptv-box-nederland.jpg",
        "IPTV-box Nederland",
        "Omslag IPTV-box Nederland — Fire Stick en Android",
        ["iptv box nederland", "fire stick iptv", "iptv nederland"],
    ),
    (
        "iptv-vs-betaalde-tv-nederland-portada.jpg",
        "iptv-vs-betaalde-tv-nederland.jpg",
        "IPTV vs betaalde tv",
        "Omslag IPTV versus betaalde tv in Nederland",
        ["iptv vs ziggo", "iptv vs betaalde tv", "iptv nederland"],
    ),
    (
        "ver-tv-nederlandse-en-el-extranjero-portada.jpg",
        "nederlandse-tv-in-het-buitenland.jpg",
        "Nederlandse tv in het buitenland",
        "Omslag Nederlandse tv in het buitenland kijken via IPTV",
        ["nederlandse tv buitenland", "iptv nederland buitenland", "iptv nederland"],
    ),
    (
        "mundial-2026-iptv-nederland-portada.jpg",
        "wk-2026-iptv-nederland.jpg",
        "WK 2026 IPTV Nederland",
        "Omslag WK 2026 kijken via IPTV Nederland",
        ["wk 2026 iptv", "wk 2026 nederland", "iptv nederland"],
    ),
    (
        "iptv-meerdere-apparaten-nederland-portada.jpg",
        "iptv-meerdere-apparaten-nederland.jpg",
        "IPTV op meerdere apparaten",
        "Omslag IPTV Nederland op meerdere apparaten",
        ["iptv meerdere apparaten", "iptv verbindingen", "iptv nederland"],
    ),
    (
        "iptv-ontbrekende-zenders-portada.jpg",
        "iptv-ontbrekende-zenders.jpg",
        "Ontbrekende zenders",
        "Omslag IPTV met ontbrekende zenders in Nederland",
        ["iptv ontbrekende zenders", "iptv zenders nederland", "iptv nederland"],
    ),
    (
        "iptv-goedkoop-nederland-portada.jpg",
        "goedkope-iptv-nederland.jpg",
        "Goedkope IPTV Nederland",
        "Omslag goedkope IPTV Nederland — echte kosten",
        ["goedkope iptv nederland", "iptv nederland prijs", "iptv nederland"],
    ),
    (
        "iptv-nederland-in-frankrijk-portada.jpg",
        "iptv-nederland-in-frankrijk.jpg",
        "IPTV Nederland in Frankrijk",
        "Omslag IPTV Nederland in Frankrijk — Nederlandse zenders",
        ["iptv nederland frankrijk", "nederlandse zenders frankrijk", "iptv nederland"],
    ),
    (
        "iptv-nederland-in-zwitserland-portada.jpg",
        "iptv-nederland-in-zwitserland.jpg",
        "IPTV Nederland in Zwitserland",
        "Omslag IPTV Nederland in Zwitserland — Nederlandse zenders",
        ["iptv nederland zwitserland", "nederlandse zenders zwitserland", "iptv nederland"],
    ),
    (
        "internet-voor-iptv-portada.jpg",
        "internet-voor-iptv.jpg",
        "Internet voor IPTV",
        "Omslag internet voor IPTV — Mbps en wifi in Nederland",
        ["internet voor iptv", "wifi iptv nederland", "iptv nederland"],
    ),
    (
        "ver-voetbal-iptv-nederland-portada.jpg",
        "voetbal-kijken-iptv-nederland.jpg",
        "Voetbal via IPTV",
        "Omslag voetbal kijken via IPTV in Nederland",
        ["voetbal kijken iptv", "eredivisie iptv", "iptv nederland"],
    ),
    (
        "iptv-voor-gezinnen-nederland-portada.jpg",
        "iptv-voor-gezinnen-nederland.jpg",
        "IPTV voor gezinnen",
        "Omslag IPTV voor gezinnen in Nederland",
        ["iptv voor gezinnen", "iptv gezin nederland", "iptv nederland"],
    ),
    (
        "tivimate-nederland-portada.jpg",
        "tivimate-nederland.jpg",
        "TiviMate Nederland",
        "Omslag TiviMate Nederland instellen op Android TV",
        ["tivimate nederland", "tivimate iptv", "iptv nederland"],
    ),
    (
        "tivimate-vs-smarters-portada.jpg",
        "tivimate-vs-iptv-smarters-pro.jpg",
        "TiviMate vs Smarters Pro",
        "Omslag TiviMate versus IPTV Smarters Pro in Nederland",
        ["tivimate vs smarters", "iptv smarters pro", "iptv nederland"],
    ),
    (
        "xtream-codes-nederland-portada.jpg",
        "xtream-codes-nederland.jpg",
        "Xtream Codes Nederland",
        "Omslag Xtream Codes Nederland — URL en login",
        ["xtream codes nederland", "xtream iptv", "iptv nederland"],
    ),
    (
        "iptv-nederland-portada.jpg",
        "iptv-nederland-gids.jpg",
        "IPTV Nederland gids",
        "Omslag IPTV Nederlands — wat het betekent en hoe je kiest",
        ["iptv nederland", "iptv nederlands", "beste iptv nederland"],
    ),
    (
        "woordenlijst-iptv-nederland-portada.jpg",
        "woordenlijst-iptv-nederland.jpg",
        "Woordenlijst IPTV",
        "Omslag woordenlijst IPTV Nederland — EPG, VOD, M3U, Xtream",
        ["woordenlijst iptv", "wat is m3u", "iptv nederland"],
    ),
    (
        "voordelen-iptv-nederland-portada.jpg",
        "voordelen-iptv-nederland.jpg",
        "Voordelen van IPTV",
        "Omslag voordelen van IPTV in Nederland",
        ["voordelen iptv nederland", "iptv nederland", "iptv abonnement"],
    ),
    (
        "vpn-iptv-nederland-portada.jpg",
        "vpn-iptv-nederland.jpg",
        "VPN voor IPTV Nederland",
        "Omslag VPN voor IPTV Nederland — nodig of niet",
        ["vpn iptv nederland", "iptv vpn", "iptv nederland"],
    ),
    (
        "wat-is-m3u-portada.jpg",
        "wat-is-m3u.jpg",
        "Wat is M3U",
        "Omslag wat is M3U bij IPTV in Nederland",
        ["wat is m3u", "m3u iptv", "iptv nederland"],
    ),
    (
        "epg-laadt-niet-portada.jpg",
        "epg-laadt-niet.jpg",
        "EPG laadt niet",
        "Omslag de EPG laadt niet bij IPTV Nederland",
        ["epg laadt niet", "iptv epg", "iptv nederland"],
    ),
]


def xp_keywords(words: list[str]) -> bytes:
    return (";".join(words) + "\x00").encode("utf-16le")


def draw_cover(headline: str, keywords: list[str]) -> Image.Image:
    width, height = 1200, 630
    image = Image.new("RGB", (width, height), "#070B14")
    draw = ImageDraw.Draw(image)
    draw.rectangle((0, 0, width, 14), fill="#AE1C28")
    draw.rectangle((0, 14, width, 28), fill="#FFFFFF")
    draw.rectangle((0, 28, width, 42), fill="#21468B")
    draw.rectangle((0, 42, 18, height), fill="#AE1C28")

    eyebrow = ImageFont.truetype(str(FONT), 28)
    title_font = ImageFont.truetype(str(FONT), 68)
    small = ImageFont.truetype(str(FONT_REG), 28)
    draw.text((72, 90), "IPTV NEDERLAND", font=eyebrow, fill="#6EA2FF")

    lines = textwrap.wrap(headline, width=22)[:3]
    if len(lines) >= 3:
        title_font = ImageFont.truetype(str(FONT), 58)
    y = 170
    for line in lines:
        draw.text((72, y), line, font=title_font, fill="#FFFFFF")
        y += title_font.size + 12

    draw.rectangle((72, height - 150, 280, height - 144), fill="#AE1C28")
    draw.rectangle((280, height - 150, 488, height - 144), fill="#FFFFFF")
    draw.rectangle((488, height - 150, 696, height - 144), fill="#21468B")
    draw.text((72, height - 110), "BesteIPTVNederland", font=small, fill="#A8B3C7")
    draw.text((72, height - 70), " · ".join(keywords[:3]), font=small, fill="#D6DEEA")

    exif = Image.Exif()
    exif[270] = headline + " — IPTV Nederland"
    exif[40094] = xp_keywords(keywords)
    exif[315] = "BesteIPTVNederland"
    image.info["exif"] = exif.tobytes()
    return image


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    blog = BLOG.read_text(encoding="utf-8")
    new_names = set()
    for old, new, _headline, alt, _keywords in COVERS:
        blog = blog.replace(f"@/assets/blogs/{old}", f"@/assets/blogs/{new}")
        new_names.add(new)
    # Refresh coverAlt strings that still describe the old Spain photos.
    alts = {item[3] for item in COVERS}
    # Replace each existing coverAlt by walking posts is done via exact old strings below.
    BLOG.write_text(blog, encoding="utf-8", newline="\n")

    for old, new, headline, alt, keywords in COVERS:
        image = draw_cover(headline, keywords)
        dest = OUT / new
        exif = image.info.get("exif")
        image.save(dest, "JPEG", quality=90, exif=exif)
        print(new)

    for path in OUT.iterdir():
        if path.is_file() and path.name not in new_names:
            path.unlink()
            print("removed", path.name)

    data = json.loads(ASSIGN.read_text(encoding="utf-8"))
    by_new = {item[1]: item for item in COVERS}
    seen = set()
    kept = []
    for row in data["results"]:
        name = Path(row["file"]).name
        match = next((item for item in COVERS if item[0] == name or item[1] == name), None)
        if str(row["file"]).startswith("blogs/"):
            if match is None:
                continue
            _old, new, _headline, alt, keywords = match
            if new in seen:
                continue
            seen.add(new)
            kept.append(
                {
                    "file": f"blogs/{new}",
                    "keywords": keywords,
                    "alt": alt,
                    "status": "injected-nl:jpeg",
                }
            )
        else:
            kept.append(row)
    for new, item in by_new.items():
        if new not in seen:
            _old, new, _headline, alt, keywords = item
            kept.append(
                {
                    "file": f"blogs/{new}",
                    "keywords": keywords,
                    "alt": alt,
                    "status": "injected-nl:jpeg",
                }
            )
    data["results"] = kept
    ASSIGN.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")

    # Point coverAlt at the new Dutch description, matched by nearby cover import variable order.
    text = BLOG.read_text(encoding="utf-8")
    for _old, new, _headline, alt, _keywords in COVERS:
        needle = f'from "@/assets/blogs/{new}"'
        if needle not in text:
            raise SystemExit(f"import missing for {new}")
    # Replace coverAlt values in file order of posts is unsafe. Replace known old alts if still present.
    old_alts = {
        "Afstandsbediening en Smart TV — checklist IPTV Nederland": COVERS[0][3],
        "Raster van apps — beste IPTV-app Nederland": COVERS[1][3],
        "Voetbalveld — live IPTV Nederland": COVERS[2][3],
        "iPhone en apps — IPTV Nederland op iOS": COVERS[3][3],
        "Inloggen bij Smarters — IPTV Smarters Pro Nederland Xtream": COVERS[4][3],
        "Android-smartphone — IPTV-app Nederland op Android": COVERS[5][3],
        "Netwerkdiagnose — buffering IPTV Nederland": COVERS[6][3],
        "Stel bij de Smart TV — beste IPTV Nederland 2026 met Nederlandse zenders": COVERS[7][3],
        "Abonnementen en prijs — prijs IPTV Nederland": COVERS[8][3],
        "Laptop met gegevens — proef IPTV Nederland 24 uur": COVERS[9][3],
        "Voetbal — ESPN IPTV Nederland": COVERS[10][3],
        "Stadion bij nacht — Eredivisie IPTV": COVERS[11][3],
        "Juridische context — IPTV-lijst Nederland en risico’s": COVERS[12][3],
        "Smart TV 4K — IPTV 4K Nederland, echte kwaliteit": COVERS[13][3],
        "Fire Stick en box — IPTV-box Nederland Android": COVERS[14][3],
        "Woonkamer met Smart TV — IPTV Nederland vs betaalde tv": COVERS[15][3],
        "Hotel met tv — Nederlandse tv in het buitenland met IPTV Nederland": COVERS[16][3],
        "Wedstrijdsfeer — WK 2026 IPTV Nederland": COVERS[17][3],
        "Tv, tablet en telefoon — IPTV Nederland op meerdere apparaten": COVERS[18][3],
        "Lege Smart TV — ontbrekende zenders bij IPTV Nederland": COVERS[19][3],
        "Kosten plannen — goedkope IPTV Nederland en abonnement": COVERS[20][3],
        "Appartement — IPTV Nederland in Frankrijk met Nederlandse zenders": COVERS[21][3],
        "Woonkamer in Zwitserland — IPTV Nederland met Nederlandse zenders": COVERS[22][3],
        "Glasvezelrouter — internet voor IPTV Nederland": COVERS[23][3],
        "Woonkamer die voetbal kijkt — IPTV Nederland live sport": COVERS[24][3],
        "Gezin in de woonkamer — IPTV voor gezinnen Nederland": COVERS[25][3],
        "Android TV met EPG — TiviMate IPTV Nederland": COVERS[26][3],
        "Twee spelers — TiviMate vs IPTV Smarters Pro Nederland": COVERS[27][3],
        "Xtream-login — Xtream Codes IPTV Nederland": COVERS[28][3],
        "Nederlandse woonkamer — IPTV Nederlands en IPTV Nederland": COVERS[29][3],
        "Laptop met termen — woordenlijst IPTV Nederland": COVERS[30][3],
        "Persoon in de woonkamer — voordelen van IPTV Nederland": COVERS[31][3],
        "Laptop en netwerk — VPN voor IPTV Nederland": COVERS[32][3],
        "Monitor met playlist — wat is M3U IPTV Nederland": COVERS[33][3],
        "Lege tv-gids — de EPG laadt niet bij IPTV Nederland": COVERS[34][3],
    }
    for old, new in old_alts.items():
        if old not in text:
            print("alt not found:", old)
        else:
            text = text.replace(old, new, 1)
    _ = alts
    BLOG.write_text(text, encoding="utf-8", newline="\n")
    print("covers", len(COVERS))


if __name__ == "__main__":
    main()
