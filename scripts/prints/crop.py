"""Recorta pedaços de um print grande e salva cada um no repo da central.

Uso: python crop.py <png_origem> <largura_css_da_origem> '<json>'
json = [{"dest": "telegram-channel/x-1", "crop": [x, y, w, h], "pad": 16, "boxes": [[x, y, w, h], ...]}, ...]
Coordenadas em px CSS relativas ao canto da origem. Sem "crop" = imagem inteira.
"""
import json
import sys
from pathlib import Path

from PIL import Image, ImageDraw

REPO = Path(r"C:/TRABALHO/CODES/track4you-help/docs/public/img/pt-BR")
COLOR = (245, 158, 11, 255)  # #f59e0b
MAX_W = 1600

src, css_w, jobs = sys.argv[1], float(sys.argv[2]), json.loads(sys.argv[3])
base = Image.open(src).convert("RGBA")
k = base.width / css_w

for job in jobs:
    im = base.copy()
    draw = ImageDraw.Draw(im)
    for x, y, w, h in job.get("boxes", []):
        p = 6
        draw.rounded_rectangle([(x - p) * k, (y - p) * k, (x + w + p) * k, (y + h + p) * k], radius=12, outline=COLOR, width=4)
    if "crop" in job:
        x, y, w, h = job["crop"]
        p = job.get("pad", 16)
        im = im.crop((max(0, (x - p) * k), max(0, (y - p) * k), min(im.width, (x + w + p) * k), min(im.height, (y + h + p) * k)))
    if im.width > MAX_W:
        im = im.resize((MAX_W, round(im.height * MAX_W / im.width)), Image.LANCZOS)
    out = REPO / f"{job['dest']}.png"
    out.parent.mkdir(parents=True, exist_ok=True)
    im.convert("RGB").save(out, optimize=True)
    print(out.relative_to(REPO), im.size)
