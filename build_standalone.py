"""Bundle Letter Sounds as an HTML file that opens without a server."""

import argparse
import base64
import json
import re
from pathlib import Path
from string import ascii_lowercase


ROOT = Path(__file__).resolve().parent
ASSET_TYPES = {"mp3": "audio/mpeg", "webp": "image/webp", "woff2": "font/woff2"}


def asset_url(relative_path):
    path = ROOT / relative_path
    encoded = base64.b64encode(path.read_bytes()).decode("ascii")
    return f"data:{ASSET_TYPES[path.suffix[1:]]};base64,{encoded}"


def build(output):
    template = (ROOT / "index.html").read_text(encoding="utf-8")
    styles = (ROOT / "styles.css").read_text(encoding="utf-8")
    script = (ROOT / "app.js").read_text(encoding="utf-8")

    styles = re.sub(
        r'url\("(assets/[^"]+)"\)',
        lambda match: f'url("{asset_url(match[1])}")',
        styles,
    )
    sounds = {
        letter: asset_url(f"assets/audio/{letter}.mp3")
        for letter in ascii_lowercase
    }
    font_licenses = "\n\n".join(
        path.read_text(encoding="utf-8")
        for path in sorted((ROOT / "assets/fonts").glob("*-OFL.txt"))
    )
    scripts = (
        f'<script type="application/json" id="bundled-sounds">{json.dumps(sounds)}</script>'
        f"\n<script>\n{script}</script>"
    )
    page = template.replace('<link rel="stylesheet" href="styles.css">', f"<style>\n{styles}</style>")
    page = page.replace('  <script src="app.js" defer></script>\n', "")
    page = page.replace("</body>", f"<!-- Embedded fonts\n{font_licenses}\n-->\n{scripts}\n</body>")
    output.write_text(page, encoding="utf-8")


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("output", type=Path, help="Destination HTML file")
    args = parser.parse_args()
    if args.output.resolve() == ROOT / "index.html":
        parser.error("Choose a destination other than the source index.html.")
    build(args.output)
