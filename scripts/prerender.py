"""Escribe en index.html el contenido que genera el JavaScript (carta, especialidades,
pizzas ilustradas, créditos de fotos y horario) para que la página se lea sin JavaScript y Google
encuentre los platos en el HTML.

Uso (desde la carpeta del proyecto):  python scripts/prerender.py

Vuelve a ejecutarlo cada vez que cambies la carta o los datos del JavaScript.
Necesita Microsoft Edge o Google Chrome instalado.
"""
import html
import json
import os
import re
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
PAGE = ROOT / "index.html"
TMP = ROOT / "_prerender_tmp.html"
IDS = ["formas-list", "tabs", "panels", "carta-credit", "hours", "foot-hours"]

BROWSERS = [
    r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe",
    r"C:\Program Files\Microsoft\Edge\Application\msedge.exe",
    r"C:\Program Files\Google\Chrome\Application\chrome.exe",
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    "google-chrome", "chromium",
]

EXTRACT = """<script>
setTimeout(() => {
  try { localStorage.clear(); } catch (e) {}
  const out = {};
  for (const id of %s) out[id] = document.getElementById(id).innerHTML;
  const pre = document.createElement("pre");
  pre.id = "__PRERENDER__";
  pre.textContent = JSON.stringify(out);
  document.body.appendChild(pre);
}, 1500);
</script>""" % json.dumps(IDS)


def browser():
    for b in BROWSERS:
        if os.path.isabs(b) and os.path.exists(b):
            return b
        if not os.path.isabs(b):
            from shutil import which
            if which(b):
                return which(b)
    sys.exit("No encuentro Edge ni Chrome.")


def clean(id_, markup):
    # Estado que depende del momento o del scroll: lo recalcula el JavaScript al cargar.
    markup = re.sub(r'(<div class="panel"[^>]*?)\s+hidden(="")?', r"\1", markup)
    markup = re.sub(r'\s+class="panel enter"', ' class="panel"', markup)
    markup = markup.replace(' class="is-today"', ' class=""')
    markup = re.sub(r'<span class="tag">.*?</span>', "", markup)
    return markup


def main():
    src = PAGE.read_text(encoding="utf-8")
    # Vacía los bloques ya escritos para que el JavaScript los genere desde cero.
    empty = src
    for id_ in IDS:
        empty = re.sub(rf"(<!--pre:{id_}-->).*?(<!--/pre:{id_}-->)", r"\1\2", empty, flags=re.S)
    TMP.write_text(empty.replace("</body>", EXTRACT + "</body>"), encoding="utf-8")
    try:
        dom = subprocess.run(
            # idioma fijo: la página elige el del navegador y el HTML base tiene que salir en castellano
            [browser(), "--headless=new", "--disable-gpu", "--virtual-time-budget=4000", "--lang=es-ES", "--accept-lang=es-ES",
             "--window-size=1440,900", "--dump-dom", TMP.as_uri()],
            capture_output=True, text=True, encoding="utf-8", timeout=120).stdout
    finally:
        TMP.unlink(missing_ok=True)
    m = re.search(r'<pre id="__PRERENDER__">(.*?)</pre>', dom, re.S)
    if not m:
        sys.exit("El navegador no devolvió el contenido.")
    parts = json.loads(html.unescape(m.group(1)))
    out = src
    for id_ in IDS:
        block = clean(id_, parts[id_])
        out, n = re.subn(rf"(<!--pre:{id_}-->).*?(<!--/pre:{id_}-->)",
                         lambda mm: mm.group(1) + block + mm.group(2), out, flags=re.S)
        if n != 1:
            sys.exit(f"Falta el marcador de {id_} en index.html")
    PAGE.write_text(out, encoding="utf-8")
    print("index.html actualizado:", ", ".join(f"{k} ({len(parts[k])} car.)" for k in IDS))


if __name__ == "__main__":
    main()
