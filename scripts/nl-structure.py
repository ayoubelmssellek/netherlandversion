"""Rename Spain routes, slugs, and asset filenames for the Netherlands fork.

Does not translate prose. Run once from the Netherlands project root.
"""
from __future__ import annotations

import os
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]

APP_DIRS = [
    ("que-es-iptv", "wat-is-iptv"),
    ("canales", "kanalen"),
    ("precios", "prijzen"),
    ("aplicaciones", "applicaties"),
    ("preguntas-frecuentes", "veelgestelde-vragen"),
    ("sobre-nosotros", "over-ons"),
    ("guias-instalacion", "installatiegidsen"),
    ("renovar", "verlengen"),
    ("pack-trimestral", "pack-kwartaal"),
    ("pack-basico", "pack-basis"),
    ("pack-familia", "pack-familie"),
    ("politica-de-privacidad", "privacybeleid"),
    ("terminos", "voorwaarden"),
    ("politica-de-reembolso", "retourbeleid"),
    ("politica-dmca", "dmca-beleid"),
    ("valoraciones", "beoordelingen"),
    ("gracias", "bedankt"),
    ("revendedores", "wederverkopers"),
    ("iptv-espana-whatsapp", "iptv-nederland-whatsapp"),
    ("conversor-m3u-xtream", "m3u-xtream-omzetter"),
    ("verificador-cuenta-iptv", "iptv-account-checker"),
    ("actualizar-lista-m3u", "m3u-lijst-bijwerken"),
    ("pago-usd", "betaling-usd"),
]

FILE_MOVES = [
    (
        ROOT / "src" / "components" / "channels" / "SpanishSports.tsx",
        ROOT / "src" / "components" / "channels" / "DutchSports.tsx",
    ),
    (
        ROOT / "src" / "components" / "channels" / "FeaturedSpanishChannels.tsx",
        ROOT / "src" / "components" / "channels" / "FeaturedDutchChannels.tsx",
    ),
    (
        ROOT / "src" / "components" / "pago-usd",
        ROOT / "src" / "components" / "betaling-usd",
    ),
    (
        ROOT / "src" / "data" / "precos-content.ts",
        ROOT / "src" / "data" / "prijzen-content.ts",
    ),
]

# Longest first.
TEXT_REPLACEMENTS = [
    ("mejoriptvespana-imagen-open-graph.jpg", "besteiptvnederland-open-graph.jpg"),
    ("mejor-iptv-espana-logo-navbar.jpeg", "beste-iptv-nederland-logo.jpg"),
    ("FeaturedSpanishChannels", "FeaturedDutchChannels"),
    ("SpanishSports", "DutchSports"),
    ("PagoUsdLanding", "BetalingUsdLanding"),
    ("components/pago-usd/", "components/betaling-usd/"),
    ("@/data/precos-content", "@/data/prijzen-content"),
    ("MejorIPTVEspaña", "BesteIPTVNederland"),
    ("mejoriptvespana", "besteiptvnederland"),
    ("https://www.mejoriptvespana.shop", "https://www.besteiptvnederland.shop"),
    ("es_ES", "nl_NL"),
    ("es-ES", "nl-NL"),
    ("countryCodeLocked=ES", "countryCodeLocked=NL"),
    ("/preguntas-frecuentes", "/veelgestelde-vragen"),
    ("/politica-de-privacidad", "/privacybeleid"),
    ("/politica-de-reembolso", "/retourbeleid"),
    ("/politica-dmca", "/dmca-beleid"),
    ("/guias-instalacion", "/installatiegidsen"),
    ("/sobre-nosotros", "/over-ons"),
    ("/iptv-espana-whatsapp", "/iptv-nederland-whatsapp"),
    ("/verificador-cuenta-iptv", "/iptv-account-checker"),
    ("/conversor-m3u-xtream", "/m3u-xtream-omzetter"),
    ("/actualizar-lista-m3u", "/m3u-lijst-bijwerken"),
    ("/pack-trimestral", "/pack-kwartaal"),
    ("/pack-basico", "/pack-basis"),
    ("/pack-familia", "/pack-familie"),
    ("/aplicaciones", "/applicaties"),
    ("/que-es-iptv", "/wat-is-iptv"),
    ("/valoraciones", "/beoordelingen"),
    ("/revendedores", "/wederverkopers"),
    ("/pago-usd", "/betaling-usd"),
    ("/canales", "/kanalen"),
    ("/precios", "/prijzen"),
    ("/terminos", "/voorwaarden"),
    ("/renovar", "/verlengen"),
    ("/gracias", "/bedankt"),
    ("checklist-iptv-espana", "checklist-iptv-nederland"),
    ("mejor-app-iptv-espana", "beste-app-iptv-nederland"),
    ("iptv-stream-en-directo-espana", "iptv-livestream-nederland"),
    ("iptv-espana-iphone-ipad", "iptv-nederland-iphone-ipad"),
    ("iptv-smarters-pro-espana", "iptv-smarters-pro-nederland"),
    ("iptv-android-espana-como-instalar", "iptv-android-nederland-installeren"),
    ("iptv-no-funciona-buffering-espana", "iptv-werkt-niet-buffering-nederland"),
    ("mejor-iptv-espana-2026", "beste-iptv-nederland-2026"),
    ("iptv-espana-precio-planes", "iptv-nederland-prijs-abonnementen"),
    ("prueba-iptv-espana", "proef-iptv-nederland"),
    ("iptv-deporte-espana", "iptv-sport-nederland"),
    ("iptv-la-liga-espana", "iptv-eredivisie-nederland"),
    ("iptv-legal-espana", "iptv-legaal-nederland"),
    ("iptv-4k-espana", "iptv-4k-nederland"),
    ("iptv-box-espana", "iptv-box-nederland"),
    ("iptv-vs-tv-de-pago-espana", "iptv-vs-betaalde-tv-nederland"),
    ("ver-tv-espanola-en-el-extranjero", "nederlandse-tv-in-het-buitenland"),
    ("mundial-2026-iptv-espana", "wk-2026-iptv-nederland"),
    ("iptv-multiples-dispositivos-espana", "iptv-meerdere-apparaten-nederland"),
    ("iptv-canales-faltantes", "iptv-ontbrekende-zenders"),
    ("iptv-barato-espana", "goedkope-iptv-nederland"),
    ("iptv-espana-en-francia", "iptv-nederland-in-frankrijk"),
    ("iptv-espana-en-suiza", "iptv-nederland-in-zwitserland"),
    ("internet-para-iptv", "internet-voor-iptv"),
    ("ver-futbol-iptv-espana", "voetbal-kijken-iptv-nederland"),
    ("iptv-para-familias-espana", "iptv-voor-gezinnen-nederland"),
    ("tivimate-espana", "tivimate-nederland"),
    ("xtream-codes-espana", "xtream-codes-nederland"),
    ("iptv-espana-guia", "iptv-nederland-gids"),
    ("glosario-iptv-espana", "woordenlijst-iptv-nederland"),
    ("ventajas-iptv-espana", "voordelen-iptv-nederland"),
    ("vpn-iptv-espana", "vpn-iptv-nederland"),
    ("que-es-m3u", "wat-is-m3u"),
    ("epg-no-carga", "epg-laadt-niet"),
    ("iptv-espana", "iptv-nederland"),
    ("iptv-en-directo-espana", "iptv-livestream-nederland"),
]

FILENAME_SWAPS = [
    ("mejor-iptv-espana", "beste-iptv-nederland"),
    ("mejor-app-iptv-espana", "beste-app-iptv-nederland"),
    ("iptv-espana", "iptv-nederland"),
    ("espanola", "nederlandse"),
    ("espana", "nederland"),
    ("la-liga", "eredivisie"),
    ("en-directo", "livestream"),
    ("deporte", "sport"),
    ("futbol", "voetbal"),
    ("precio-planes", "prijs-abonnementen"),
    ("no-funciona-buffering", "werkt-niet-buffering"),
    ("tv-de-pago", "betaalde-tv"),
    ("varios-dispositivos", "meerdere-apparaten"),
    ("para-familias", "voor-gezinnen"),
    ("canales-faltantes", "ontbrekende-zenders"),
    ("en-francia", "in-frankrijk"),
    ("en-suiza", "in-zwitserland"),
    ("glosario", "woordenlijst"),
    ("ventajas", "voordelen"),
    ("que-es-m3u", "wat-is-m3u"),
    ("epg-no-carga", "epg-laadt-niet"),
    ("lista-iptv", "iptv-lijst"),
    ("barato", "goedkoop"),
    ("prueba", "proef"),
]

TEXT_EXTS = {".ts", ".tsx", ".js", ".mjs", ".json", ".md", ".mdc", ".css", ".txt", ".example"}


def move(src: Path, dst: Path) -> None:
    if not src.exists():
        print(f"skip missing {src.relative_to(ROOT)}")
        return
    dst.parent.mkdir(parents=True, exist_ok=True)
    if dst.exists():
        print(f"skip exists {dst.relative_to(ROOT)}")
        return
    src.rename(dst)
    print(f"moved {src.relative_to(ROOT)} -> {dst.relative_to(ROOT)}")


def transform_filename(name: str) -> str:
    for old, new in FILENAME_SWAPS:
        name = name.replace(old, new)
    return name


def rename_assets() -> list[tuple[str, str]]:
    assets = ROOT / "src" / "assets"
    public = ROOT / "public"
    files: list[Path] = []
    for base in (assets, public):
        if base.exists():
            files.extend(p for p in base.rglob("*") if p.is_file())
    files.sort(key=lambda p: len(p.name), reverse=True)
    renamed: list[tuple[str, str]] = []
    for path in files:
        new_name = transform_filename(path.name)
        if new_name == path.name:
            continue
        target = path.with_name(new_name)
        if target.exists():
            print(f"asset collision {target.name}")
            continue
        path.rename(target)
        renamed.append((path.name, new_name))
        print(f"asset {path.name} -> {new_name}")
    return renamed


def replace_in_tree(extra: list[tuple[str, str]]) -> None:
    skip = {".git", "node_modules", ".next"}
    pairs = sorted(TEXT_REPLACEMENTS + extra, key=lambda pair: len(pair[0]), reverse=True)
    changed = 0
    for dirpath, dirnames, filenames in os.walk(ROOT):
        dirnames[:] = [d for d in dirnames if d not in skip]
        for filename in filenames:
            path = Path(dirpath) / filename
            if path.suffix.lower() not in TEXT_EXTS:
                continue
            if path.name == "nl-structure.py":
                continue
            text = path.read_text(encoding="utf-8")
            updated = text
            for old, new in pairs:
                updated = updated.replace(old, new)
            if updated != text:
                path.write_text(updated, encoding="utf-8", newline="\n")
                changed += 1
    print(f"updated text files: {changed}")


def main() -> None:
    app = ROOT / "src" / "app"
    for old, new in APP_DIRS:
        move(app / old, app / new)
    for src, dst in FILE_MOVES:
        move(src, dst)
    renamed = rename_assets()
    replace_in_tree(renamed)


if __name__ == "__main__":
    main()
