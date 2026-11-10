"""Monta las páginas de la web a partir de src/ y escribe en ellas el contenido que genera el
JavaScript (carta, especialidades, horario, créditos de fotos), para que se lean sin JavaScript
y Google encuentre los platos en el HTML.

    src/layout.html          cabecera, menú, pie, carrito y barra inferior (comunes)
    src/pages/*.html         el contenido de cada página
    src/partials/jsonld.html datos estructurados del restaurante y su carta
    css/nano.css, js/nano.js estilos y código compartidos (se editan directamente)

Uso (desde la carpeta del proyecto):  python scripts/build.py

Vuelve a ejecutarlo cada vez que cambies algo en src/, la carta o los textos del JavaScript.
Necesita Microsoft Edge o Google Chrome instalado.
"""
import html
import json
import os
import re
import subprocess
import sys
from pathlib import Path
from shutil import which

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / "src"

# Direcciones de la antigua web de una sola página (?carta, ?mesa, #carta, #reservar) -> su página nueva
REDIRECT = """<script>(function(){var q=new URLSearchParams(location.search),h=location.hash,to="";
if(q.has("mesa")){var c=q.get("mesa");q.delete("mesa");if(c)q.set("carta",c);to="mesa.html"}
else if(q.has("carta")||q.has("ver")||h==="#carta"){to="carta.html";if(h==="#carta")h=""}
else if(h==="#reservar"){to="reservar.html";h=""}
if(to){var s=q.toString();location.replace(to+(s?"?"+s:"")+h)}})()</script>
"""
CREDIT = '    <p class="credit foot-credit" id="carta-credit"><!--pre:carta-credit--><!--/pre:carta-credit--></p>\n'

PAGES = [
    # archivo de salida, data-page, contenido, título, descripción, opciones
    ("index.html", "inicio", "inicio.html",
     "Nano Pizza | Pizzería en Reus",
     "Nano Pizza, pizzería con horno de leña en C/ Josep Carner 4, Reus. Carta, pedidos para recoger y reservas por WhatsApp.",
     {"jsonld": True, "head_extra": REDIRECT}),
    ("carta.html", "carta", "carta.html",
     "Carta | Nano Pizza, pizzería en Reus",
     "Carta de Nano Pizza: veinte pizzas de horno de leña, especialidades, pasta fresca, ensaladas y tapas, con los alérgenos de cada plato. Pide para recoger por WhatsApp.",
     {"jsonld": True, "credit": True}),
    ("reservar.html", "reservar", "reservar.html",
     "Reservar mesa | Nano Pizza, Reus",
     "Reserva mesa en Nano Pizza, C/ Josep Carner 4, Reus. Elige día y hora y te confirmamos por WhatsApp.",
     {}),
    # La carta del QR de las mesas: la misma carta sin pedido; fuera de los buscadores (repite carta.html)
    ("mesa.html", "mesa", "carta.html",
     "Carta | Nano Pizza, pizzería en Reus",
     "Carta de Nano Pizza: veinte pizzas de horno de leña, especialidades, pasta fresca, ensaladas y tapas, con los alérgenos de cada plato.",
     {"credit": True, "html_class": ' class="is-mesa"', "robots": '<meta name="robots" content="noindex">\n'}),
]

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
</script>"""

MARKER = re.compile(r"(<!--pre:([a-z-]+)-->).*?(<!--/pre:\2-->)", re.S)


def browser():
    for b in BROWSERS:
        if os.path.isabs(b) and os.path.exists(b):
            return b
        if not os.path.isabs(b) and which(b):
            return which(b)
    sys.exit("No encuentro Edge ni Chrome.")


def assemble(page, body, title, desc, opts):
    layout = (SRC / "layout.html").read_text(encoding="utf-8")
    main = (SRC / "pages" / body).read_text(encoding="utf-8").rstrip("\n")
    jsonld = (SRC / "partials" / "jsonld.html").read_text(encoding="utf-8") if opts.get("jsonld") else ""
    out = (layout.replace("{{main}}", main)
                 .replace("{{credit}}", CREDIT if opts.get("credit") else "")
                 .replace("{{jsonld}}", jsonld)
                 .replace("{{head_extra}}", opts.get("head_extra", ""))
                 .replace("{{robots}}", opts.get("robots", ""))
                 .replace("{{html_class}}", opts.get("html_class", ""))
                 .replace("{{page}}", page)
                 .replace("{{title}}", html.escape(title))
                 .replace("{{description}}", html.escape(desc)))
    # Página actual marcada en el menú (escritorio y móvil)
    out = out.replace(f'data-nav="{page}"', f'data-nav="{page}" aria-current="page"')
    left = re.findall(r"\{\{[a-z_]+\}\}", out)
    if left:
        sys.exit(f"Marcadores sin rellenar en {page}: {left}")
    return out


def clean(markup):
    # Estado que depende del momento o del scroll: lo recalcula el JavaScript al cargar.
    markup = re.sub(r'(<(?:div|section|a) class="(?:panel|tab)"[^>]*?)\s+hidden(="")?', r"\1", markup)
    markup = markup.replace(' class="is-today"', ' class=""')
    markup = re.sub(r'<span class="tag">.*?</span>', "", markup)
    return markup


def prerender(name, page_html):
    ids = [m.group(2) for m in MARKER.finditer(page_html)]
    if not ids:
        return page_html, []
    tmp = ROOT / f"_prerender_{name}"
    tmp.write_text(page_html.replace("</body>", EXTRACT % json.dumps(ids) + "</body>"), encoding="utf-8")
    try:
        dom = subprocess.run(
            # idioma fijo: la página elige el del navegador y el HTML base tiene que salir en castellano
            [browser(), "--headless=new", "--disable-gpu", "--virtual-time-budget=4000", "--lang=es-ES", "--accept-lang=es-ES",
             "--window-size=1440,900", "--dump-dom", tmp.as_uri()],
            capture_output=True, text=True, encoding="utf-8", timeout=120).stdout
    finally:
        tmp.unlink(missing_ok=True)
    m = re.search(r'<pre id="__PRERENDER__">(.*?)</pre>', dom, re.S)
    if not m:
        sys.exit(f"El navegador no devolvió el contenido de {name}.")
    parts = json.loads(html.unescape(m.group(1)))
    page_html = MARKER.sub(lambda mm: mm.group(1) + clean(parts[mm.group(2)]) + mm.group(3), page_html)
    return page_html, [f"{k} ({len(v)} car.)" for k, v in parts.items()]


def main():
    for out, page, body, title, desc, opts in PAGES:
        page_html, done = prerender(out, assemble(page, body, title, desc, opts))
        (ROOT / out).write_text(page_html, encoding="utf-8")
        print(f"{out}: " + (", ".join(done) or "sin bloques generados"))


if __name__ == "__main__":
    main()
