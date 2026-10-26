"""Crop topic photos into blog covers and keep Dutch keywords in EXIF."""
from __future__ import annotations

import json
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
SRC = Path(
    r"C:\Users\ADMIN\.cursor\projects\c-Users-ADMIN-Desktop-MyProjects-stream-website\assets"
)
OUT = ROOT / "src" / "assets" / "blogs"
BLOG = ROOT / "src" / "data" / "blog.ts"
ASSIGN = ROOT / "seo-ops" / "image-keyword-assignments.json"

# filename, description for EXIF + alt, keywords
COVERS = [
    (
        "checklist-iptv-nederland.jpg",
        "Clipboard met checks en afstandsbediening bij een smart-tv — checklist IPTV Nederland",
        ["checklist iptv nederland", "iptv nederland", "iptv nederland kopen"],
    ),
    (
        "beste-app-iptv-nederland.jpg",
        "Telefoon, tablet en tv naast elkaar — beste IPTV-app Nederland vergelijken",
        ["beste app iptv nederland", "iptv app nederland", "iptv nederland"],
    ),
    (
        "iptv-livestream-nederland.jpg",
        "Woonkamer met live voetbal op de tv — IPTV live Nederland",
        ["iptv live nederland", "iptv livestream", "iptv nederland"],
    ),
    (
        "iptv-nederland-iphone-ipad.jpg",
        "Telefoon en tablet die tv spelen — IPTV Nederland op iPhone en iPad",
        ["iptv iphone nederland", "iptv ipad", "iptv nederland"],
    ),
    (
        "iptv-smarters-pro-nederland.jpg",
        "Tv met een Xtream-inlogscherm — IPTV Smarters Pro Nederland",
        ["iptv smarters pro nederland", "xtream iptv", "iptv nederland"],
    ),
    (
        "iptv-android-nederland.jpg",
        "Android-telefoon en tv-box — IPTV Android Nederland installeren",
        ["iptv android nederland", "iptv android installeren", "iptv nederland"],
    ),
    (
        "iptv-werkt-niet-buffering-nederland.jpg",
        "Tv met laadspinner en router — IPTV buffert in Nederland",
        ["iptv buffering nederland", "iptv werkt niet", "iptv nederland"],
    ),
    (
        "beste-iptv-nederland-2026.jpg",
        "Scherp tv-beeld in een Nederlandse woonkamer — beste IPTV Nederland 2026",
        ["beste iptv nederland", "beste iptv nederland 2026", "iptv nederland"],
    ),
    (
        "iptv-nederland-prijs-abonnementen.jpg",
        "Abonnementskaarten, euro's en een kalender — prijs IPTV Nederland",
        ["prijs iptv nederland", "iptv abonnement nederland", "iptv nederland"],
    ),
    (
        "proef-iptv-nederland.jpg",
        "Klok naast een tv die net aangaat — proef IPTV Nederland van 24 uur",
        ["proef iptv nederland", "iptv test 24 uur", "iptv nederland"],
    ),
    (
        "iptv-sport-nederland.jpg",
        "Tv met voetbal, tennis en wielrennen — IPTV sport Nederland",
        ["iptv sport nederland", "espn iptv nederland", "iptv nederland"],
    ),
    (
        "iptv-eredivisie-nederland.jpg",
        "Stadion en tv met een wedstrijd — IPTV Eredivisie Nederland",
        ["iptv eredivisie", "eredivisie iptv nederland", "iptv nederland"],
    ),
    (
        "iptv-legaal-nederland.jpg",
        "Gebroken ketting en waarschuwing naast een schild — risico van een gratis IPTV-lijst Nederland",
        ["iptv lijst nederland", "iptv legaal nederland", "iptv nederland"],
    ),
    (
        "iptv-4k-nederland.jpg",
        "Haarscherp landschap op een smart-tv — IPTV 4K Nederland",
        ["iptv 4k nederland", "iptv smart tv", "iptv nederland"],
    ),
    (
        "iptv-box-nederland.jpg",
        "Streamingstick en Android-box bij de tv — IPTV-box Nederland",
        ["iptv box nederland", "fire stick iptv", "iptv nederland"],
    ),
    (
        "iptv-vs-betaalde-tv-nederland.jpg",
        "Kabeldecoder naast een streamingstick — IPTV versus betaalde tv Nederland",
        ["iptv vs ziggo", "iptv vs betaalde tv", "iptv nederland"],
    ),
    (
        "nederlandse-tv-in-het-buitenland.jpg",
        "Hotelkamer met koffer en Nederlandse tv — tv in het buitenland",
        ["nederlandse tv in het buitenland", "iptv buitenland", "iptv nederland"],
    ),
    (
        "wk-2026-iptv-nederland.jpg",
        "Vrienden kijken een wereldbekerwedstrijd — WK 2026 IPTV Nederland",
        ["wk 2026 iptv", "wk 2026 nederland", "iptv nederland"],
    ),
    (
        "iptv-meerdere-apparaten-nederland.jpg",
        "Tv, tablet en telefoon tegelijk aan — IPTV op meerdere apparaten",
        ["iptv meerdere apparaten", "iptv verbindingen", "iptv nederland"],
    ),
    (
        "iptv-ontbrekende-zenders.jpg",
        "Zendergrid met lege tegels — ontbrekende zenders bij IPTV Nederland",
        ["iptv ontbrekende zenders", "zenders missen iptv", "iptv nederland"],
    ),
    (
        "goedkope-iptv-nederland.jpg",
        "Bescheiden woonkamer met munten en een tv — goedkope IPTV Nederland",
        ["goedkope iptv nederland", "iptv abonnement", "iptv nederland"],
    ),
    (
        "iptv-nederland-in-frankrijk.jpg",
        "Appartement in Parijs met Nederlandse tv — IPTV Nederland in Frankrijk",
        ["iptv nederland in frankrijk", "nederlandse tv frankrijk", "iptv nederland"],
    ),
    (
        "iptv-nederland-in-zwitserland.jpg",
        "Alpenwoning met Nederlandse tv — IPTV Nederland in Zwitserland",
        ["iptv nederland in zwitserland", "nederlandse tv zwitserland", "iptv nederland"],
    ),
    (
        "internet-voor-iptv.jpg",
        "Router, netwerkkabel en tv — internet voor IPTV Nederland",
        ["internet voor iptv", "wifi iptv nederland", "iptv nederland"],
    ),
    (
        "voetbal-kijken-iptv-nederland.jpg",
        "Gezin kijkt voetbal op de bank — voetbal via IPTV Nederland",
        ["voetbal kijken iptv", "eredivisie iptv", "iptv nederland"],
    ),
    (
        "iptv-voor-gezinnen-nederland.jpg",
        "Ouders en kind op aparte schermen — IPTV voor gezinnen Nederland",
        ["iptv gezin nederland", "iptv meerdere schermen", "iptv nederland"],
    ),
    (
        "tivimate-nederland.jpg",
        "Android TV met een programmagids — TiviMate Nederland",
        ["tivimate nederland", "iptv android tv", "iptv nederland"],
    ),
    (
        "tivimate-vs-iptv-smarters-pro.jpg",
        "Tv-gids naast een telefoonspeler — TiviMate versus IPTV Smarters Pro",
        ["tivimate vs smarters", "iptv smarters pro", "iptv nederland"],
    ),
    (
        "xtream-codes-nederland.jpg",
        "Inlogscherm met url, gebruiker en slot — Xtream Codes Nederland",
        ["xtream codes nederland", "xtream iptv", "iptv nederland"],
    ),
    (
        "iptv-nederland-gids.jpg",
        "Persoon kiest zenders op de tv — gids IPTV Nederland",
        ["iptv nederland gids", "wat is iptv", "iptv nederland"],
    ),
    (
        "woordenlijst-iptv-nederland.jpg",
        "Programmagids, films, playlist en sleutel — woordenlijst IPTV Nederland",
        ["woordenlijst iptv", "epg vod m3u", "iptv nederland"],
    ),
    (
        "voordelen-iptv-nederland.jpg",
        "Sport, films en nieuws op één tv — voordelen van IPTV Nederland",
        ["voordelen iptv nederland", "iptv nederland", "iptv abonnement"],
    ),
    (
        "vpn-iptv-nederland.jpg",
        "Schild en slot voor een tv — VPN voor IPTV Nederland",
        ["vpn iptv nederland", "iptv vpn", "iptv nederland"],
    ),
    (
        "wat-is-m3u.jpg",
        "Lijst van zenderplaatjes op een monitor — wat is M3U bij IPTV",
        ["wat is m3u", "m3u iptv", "iptv nederland"],
    ),
    (
        "epg-laadt-niet.jpg",
        "Lege programmagids met laadspinner — de EPG laadt niet bij IPTV",
        ["epg laadt niet", "iptv epg", "iptv nederland"],
    ),
]


def xp_keywords(words: list[str]) -> bytes:
    return (";".join(words) + "\x00").encode("utf-16le")


def cover_crop(image: Image.Image) -> Image.Image:
    image = image.convert("RGB")
    target = 1200 / 630
    width, height = image.size
    if width / height > target:
        new_width = int(height * target)
        left = (width - new_width) // 2
        image = image.crop((left, 0, left + new_width, height))
    else:
        new_height = int(width / target)
        top = (height - new_height) // 2
        image = image.crop((0, top, width, top + new_height))
    return image.resize((1200, 630), Image.Resampling.LANCZOS)


def main() -> None:
    blog = BLOG.read_text(encoding="utf-8")
    data = json.loads(ASSIGN.read_text(encoding="utf-8"))
    by_file = {row["file"]: row for row in data["results"] if str(row["file"]).startswith("blogs/")}

    for name, alt, _keywords in COVERS:
        source = SRC / f"nl-blog-{name}"
        if not source.exists():
            raise SystemExit(f"missing photo {source}")
        row = by_file.get(f"blogs/{name}")
        if row is None:
            raise SystemExit(f"assignment missing for {name}")
        keywords = list(row["keywords"])
        image = cover_crop(Image.open(source))
        exif = Image.Exif()
        exif[270] = alt
        exif[40094] = xp_keywords(keywords)
        exif[315] = "BesteIPTVNederland"
        image.save(OUT / name, "JPEG", quality=90, exif=exif.tobytes())
        row["alt"] = alt
        row["status"] = "injected-nl:jpeg"

    # Previous generic alts, in the same order as COVERS.
    previous = [
        "Omslag checklist IPTV Nederland — wat je checkt voor een abonnement",
        "Omslag beste IPTV-app Nederland — spelers vergelijken",
        "Omslag IPTV live Nederland — zenders in directe uitzending",
        "Omslag IPTV Nederland op iPhone en iPad",
        "Omslag IPTV Smarters Pro Nederland — Xtream-toegang",
        "Omslag IPTV Android Nederland installeren",
        "Omslag IPTV werkt niet of buffert in Nederland",
        "Omslag beste IPTV Nederland 2026 — Nederlandse zenders",
        "Omslag prijs IPTV Nederland — abonnementen en verbindingen",
        "Omslag proef IPTV Nederland van 24 uur",
        "Omslag ESPN kijken via IPTV in Nederland",
        "Omslag IPTV Eredivisie en clubzenders in Nederland",
        "Omslag gratis IPTV-lijst Nederland — risico's en alternatieven",
        "Omslag IPTV 4K Nederland op Smart TV",
        "Omslag IPTV-box Nederland — Fire Stick en Android",
        "Omslag IPTV versus betaalde tv in Nederland",
        "Omslag Nederlandse tv in het buitenland kijken via IPTV",
        "Omslag WK 2026 kijken via IPTV Nederland",
        "Omslag IPTV Nederland op meerdere apparaten",
        "Omslag IPTV met ontbrekende zenders in Nederland",
        "Omslag goedkope IPTV Nederland — echte kosten",
        "Omslag IPTV Nederland in Frankrijk — Nederlandse zenders",
        "Omslag IPTV Nederland in Zwitserland — Nederlandse zenders",
        "Omslag internet voor IPTV — Mbps en wifi in Nederland",
        "Omslag voetbal kijken via IPTV in Nederland",
        "Omslag IPTV voor gezinnen in Nederland",
        "Omslag TiviMate Nederland instellen op Android TV",
        "Omslag TiviMate versus IPTV Smarters Pro in Nederland",
        "Omslag Xtream Codes Nederland — URL en login",
        "Omslag IPTV Nederlands — wat het betekent en hoe je kiest",
        "Omslag woordenlijst IPTV Nederland — EPG, VOD, M3U, Xtream",
        "Omslag voordelen van IPTV in Nederland",
        "Omslag VPN voor IPTV Nederland — nodig of niet",
        "Omslag wat is M3U bij IPTV in Nederland",
        "Omslag de EPG laadt niet bij IPTV Nederland",
    ]
    if len(previous) != len(COVERS):
        raise SystemExit("alt count mismatch")
    for old, (_name, alt, _keywords) in zip(previous, COVERS):
        if old not in blog:
            raise SystemExit(f"alt not found: {old}")
        blog = blog.replace(old, alt, 1)

    BLOG.write_text(blog, encoding="utf-8", newline="\n")
    ASSIGN.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print("installed", len(COVERS))


if __name__ == "__main__":
    main()
