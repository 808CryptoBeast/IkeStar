# IkeStar Module Badge — AI Image Generation Prompts

Each badge is a circular icon, 512×512 px (or 1024×1024), saved as PNG.
Replace the SVG placeholder in `assets/images/badges/<id>.svg` with the PNG (update the `src` paths in `js/main.js` module card and `_showBadgeModal` if you switch to PNG).

Design system:
- **Shape**: Circle with a subtle gradient border (cyan → gold)
- **Background**: Very dark navy/space (#030614 center → #0d1e38 edge)
- **Primary color**: Electric cyan (#00f7ff)
- **Accent color**: Warm gold (#e8c96a)
- **Style**: Celestial / Polynesian / digital-sacred — NOT cartoonish, NOT generic space art
- **Mood**: Calm, luminous, respectful — the badge represents real learning

---

## Badge 1: `intro-sky` — Begin With The Sky

**Use in**: Module 1 completion

**Prompt (Midjourney / DALL-E 3 / Adobe Firefly)**:

> Circular badge icon, 512x512, dark deep-space background (#030614), electric cyan and warm gold color palette. Center motif: a stylized eye inside a radiating starburst, 8 thin rays extending outward, symbolizing observation and awakening sky knowledge. Subtle scattered star field in the background. Bottom arc text area empty (text will be added digitally). Clean, luminous, Polynesian-celestial aesthetic, flat vector style, high contrast, no gradients in the motif itself. Badge has a faint cyan outer glow ring.

**Key elements**: Eye (observation), radiating rays (star knowledge expanding), starfield

---

## Badge 2: `hawaiian-map` — Hawaiian Monthly Sky Map

**Use in**: Module 2 completion

**Prompt**:

> Circular badge icon, 512x512, deep navy background. Center motif: a circular star map overlay — concentric dashed rings representing the horizon and zenith, thin radial lines like compass spokes, small bright dots for formation anchor stars connected by faint lines. Top of the inner circle marked with a small "N" for north. Color palette: electric cyan lines and dots, warm gold for highlighted formations. Polynesian-celestial cartography aesthetic. Clean, minimal, no text labels on the stars. Subtle outer glow.

**Key elements**: Circular horizon grid, formation dots, north marker

---

## Badge 3: `moon-wayfinding` — Moon and Wayfinding

**Use in**: Module 3 completion

**Prompt**:

> Circular badge icon, 512x512, very dark midnight-blue background. Center motif: a crescent moon (waxing, left-side shadow) in silver-white with a subtle blue glow. Below the moon, four cardinal direction marks (N, E, S, W) in electric cyan arranged as a simple compass cross, no ornate rose. A single bright star near the upper-right of the crescent (representing a navigational reference). Soft scattered starfield. Color palette: silver-white moon, cyan cardinal markers, faint gold star. Polynesian wayfinding aesthetic, clean and minimal.

**Key elements**: Crescent moon, cardinal compass cross, single bright navigational star

---

## Badge 4: `formation-practice` — Formation Practice

**Use in**: Module 4 completion

**Prompt**:

> Circular badge icon, 512x512, dark space background. Center motif: the Big Dipper / Nā Hiku constellation — seven bright cyan star-dots connected by clean lines forming the ladle shape. Two dashed golden lines extending from the outer bowl stars upward toward a bright golden star representing Hōkūpaʻa (Polaris) at upper-left. The pointer relationship is the visual story. Small scattered background stars. Color palette: cyan for Nā Hiku, gold for Hōkūpaʻa, dark navy background. Flat, clean, luminous. No extra decoration.

**Key elements**: Big Dipper (Nā Hiku) in cyan, pointer lines in gold, Hōkūpaʻa in gold top-left

---

## Badge 5: `knowledge-care` — Knowledge Care

**Use in**: Module 5 completion

**Prompt**:

> Circular badge icon, 512x512, deep dark navy background. Center motif: a simple shield shape (slightly rounded, pointed bottom) outlined in electric cyan with very low-opacity fill. Inside the shield, a clean checkmark in bright cyan. At the top of the shield, a small verified-star marker in gold. Along the left inner edge of the badge, three small colored dots stacked vertically — green, cyan, gold — representing the three knowledge status levels (Verified, Encoded, Review). Minimal text, Polynesian-digital aesthetic. No ornate decoration, clean and precise.

**Key elements**: Shield + checkmark (verification), three status dots (knowledge badges), verified star

---

## Badge 6: `star-lines` — Star Lines and Navigation

**Use in**: Module 6 completion

**Prompt**:

> Circular badge icon, 512x512, deep space background. Center motif: a vertical navigation meridian line (thin dashed) with three glowing stars aligned along it at different heights — top: warm gold (Hōkūpaʻa / Polaris), middle: bright cyan cluster (Nā Hiku / Big Dipper bowl, shown as 5 connected dots), bottom: amber-orange star (Hōkūleʻa / Arcturus). From the Nā Hiku bowl, two dashed lines point upward to Hōkūpaʻa. The composition reads as a navigation column from south to north. Scattered background stars. Clean, luminous, directional.

**Key elements**: 3 stars on vertical meridian, pointer lines, north-to-south navigation column

---

## Badge 7: `ka-mahina` — Ka Mahina and Makahiki

**Use in**: Module 7 completion

**Prompt**:

> Circular badge icon, 512x512, darkest midnight background. Two focal elements: (1) upper-right: a waxing crescent moon in silver-white with soft blue aura, and (2) lower-left: the Pleiades / Makaliʻi cluster — seven small warm-gold dots in their classic triangular arrangement, softly glowing. Along the lower inner arc of the badge, a subtle row of 7 small silver dots representing moon-night rhythm. Color palette: silver-white moon, warm gold Pleiades, electric cyan accents, very dark background. Polynesian celestial aesthetic. Clean, meditative, no hard edges.

**Key elements**: Crescent moon (upper right), Pleiades 7-dot cluster (lower left), moon-night rhythm dots (bottom arc)

---

## Output specs

- **Size**: 512×512 px or 1024×1024 px
- **Format**: PNG with transparency (badge outline only, no white square background)
- **Naming**: `intro-sky.png`, `hawaiian-map.png`, `moon-wayfinding.png`, `formation-practice.png`, `knowledge-care.png`, `star-lines.png`, `ka-mahina.png`
- **Save to**: `assets/images/badges/`
- After saving PNGs, update `src="assets/images/badges/${module.id}.svg"` to `.png` in two places in `js/main.js`:
  1. Module card template (search: `learn-card-badge`)
  2. `_showBadgeModal` function (search: `img.src`)
