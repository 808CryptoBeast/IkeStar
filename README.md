# IkeStar Night Sky Observatory

IkeStar is an interactive night-sky web app centered on Hawaii and built as the sky-focused observatory layer of the larger Pikoverse / Ikeverse vision. It combines a Three.js sky, Hawaiian star formations, monthly sky-map overlays, moon-night knowledge, moolelo, and formation learning tools.

The current verified build focuses on the Kanaka Maoli / Hawaiian sky layer. Other cultural layers are visible in the interface but marked as under construction while the Hawaiian layer is checked, refined, and expanded with care.

## Current Features

- Interactive 3D night sky with stars, planets, Moon, Sun, horizon, Milky Way, and compass controls.
- Kanaka Maoli / Hawaiian star-formation layer with labels, formation lines, and cultural context.
- Monthly Hawaiian sky-map overlay for encoded 2026 months (January–June), with a prev/next month scrubber.
- Formation checklist with `All`, `Visible`, and `Edge` filters.
- Clickable monthly formation rows that highlight the selected formation on the overlay.
- Formation Focus mode with previous/next navigation, clickable anchor-star strip, moolelo panel, navigation notes, and label-density controls (`Clean`, `Stars`, `All`).
- `Show on Map` action from Formation Focus back to the Hawaiian monthly overlay.
- **Interactive Learn section** with 5 modules and 11 lessons — see details below.
- Knowledge status badges: `Verified`, `Encoded Map`, `Needs Review`, `In Progress`.
- Overall lesson progress chip in the Learn header, updated live as lessons complete.
- Mobile-optimized layout with horizontal module scroll, auto-scroll to lesson on module select, and safe-area insets.
- Moolelo, navigation notes, and science facts in star and planet panels.
- Hawaiian lunar nights data and moon knowledge panel.
- Optional Supabase configuration for future data sync and admin workflows.

## Run Locally

This is a static web app. No build step is required.

```bash
python -m http.server 4173 --bind 127.0.0.1
```

Then open:

```text
http://127.0.0.1:4173/index.html
```

To open directly into the Hawaiian monthly sky-map overlay:

```text
http://127.0.0.1:4173/index.html?bishopMap=2026-06#bishop-map
```

Note: the query parameter uses an internal legacy name (`bishopMap`). The visible app language uses Hawaiian sky-map wording. Renaming this identifier is a tracked future task.

## Project Structure

```text
index.html                  Main app shell
admin.html                  Admin/data management interface
css/style.css               App styling and responsive UI
js/main.js                  Main sky engine, UI logic, formations, overlays
data/cultural-extensions.js Additional cultural star/formation knowledge
data/moon-knowledge.json    Moon knowledge content
data/moon-nights.csv        Hawaiian moon-night data
data/supabase-config.js     Optional Supabase setup
assets/images/              Compass, logo, and visual assets
```

## Planning Docs

- `PROJECT_VISION.md`: the larger Pikoverse / Ikeverse purpose and cultural learning vision.
- `IKESTAR_UI_UX_ROADMAP.md`: the practical UI/UX, learning module, review, accessibility, and performance roadmap.

## Hawaiian Sky Map

The monthly overlay has encoded formation inventories for January through June 2026. The June view includes Ka Moi, Hokupa'a, Nāhiku, Pira'etea, Keoe, Humu, Hoku'iwa, Kaua Mea, 'Ikiki, Me'e, Kamakau Nui a Maui, Pimoe, Hanaiakamalama, Kamailemua / Kamailehope, Nanamua / Nanahope, Hokule'a, Hikianalia, and Lehuakona.

The map distinguishes:

- `Visible` — formation members are above the overlay horizon threshold.
- `Low horizon` — formation belongs to the month but sits close to the horizon.
- `Below horizon` — formation belongs to the month but is not realistically visible in the current projection.

The goal is to keep the map honest: formations should not be repositioned to appear higher than they are in the actual sky.

A prev/next scrubber in the compass overlay toolbar lets you move between encoded months without opening a dropdown.

## Formation Focus

Focused learning view for one star pattern:

- Previous and next formation navigation.
- Clickable anchor-star strip.
- Label modes: `Clean` (selected anchor only), `Stars` (star IDs), `All` (cultural labels where available).
- Moolelo and navigation-use panels.
- `Show on Map` action for formations encoded in the monthly sky-map data.

## Learn Section

Seven modules, sixteen lessons. Each lesson includes:

- **Objectives** — two goals shown as pill tags at the top of the lesson.
- **Cultural lens** — a collapsible note on how Kanaka Maoli / Hawaiian tradition relates to the topic, written with humility and appropriate uncertainty.
- **Modern practice** — a collapsible note connecting the topic to contemporary astronomy tools or research.
- **Mini-check** — a multiple-choice question with correct/incorrect feedback.
- **Reflection prompt** — an open question connecting the lesson to lived experience.
- **Sky-linked action** — a button that opens the relevant IkeStar tool (Tour, Formation Focus, Map, Moon, Compass) without losing lesson context.

### Completion gate

Mark Complete is locked until three requirements are met:

1. **Sequential** — the previous lesson in the module must be completed first.
2. **Check answered** — if the lesson has a quiz, at least one answer must be selected.
3. **Sky action tried** — if the lesson has an action button, it must be tapped at least once.

A requirements checklist appears in the lesson showing exactly what is still needed. The sky action button turns green once triggered. Completion state is stored in `localStorage` and persists across page reloads.

### Modules

| Module | Lessons | Focus | Sources |
|--------|---------|-------|---------|
| Begin With The Sky | 2 | Sky as living knowledge system; star → formation connection | — |
| Hawaiian Monthly Sky Map | 2 | Reading the monthly overlay; horizon honesty; highlighting Nā Hiku (Big Dipper) | — |
| Moon And Wayfinding | 2 | Hawaiian moon-night calendar; star compass houses | PVS |
| Formation Practice | 3 | Tracing shapes with label modes; southern edge cluster; overview-focus-return loop | — |
| Knowledge Care | 2 | Status badges; comparing cultural systems without flattening them | — |
| Star Lines and Navigation | 3 | Hōkūpaʻa (Polaris), Nā Hiku (Big Dipper), Hōkūleʻa (Arcturus) — factual nav data | PVS, NASA |
| Ka Mahina and Makahiki | 2 | Pleiades / Makahiki season trigger; thirty named moon nights | Bishop Museum, PVS, NPS, NASA |

## Knowledge Review

Status badges used across learning and knowledge surfaces:

- `Verified` — checked against current project references.
- `Encoded Map` — formation appears in the monthly Hawaiian sky-map data.
- `Needs Review` — useful material that should be checked before treating as final.
- `In Progress` — draft learning or cultural material still being built.

## Development Notes

- Keep user-facing language centered on Hawaiian sky-map wording. Internal identifiers may still use older names (`bishop*`) — do not expose those in UI copy.
- Prefer small, verified changes. `js/main.js` contains most of the app logic.
- When changing formations, update both the formation data and the map/checklist behavior.
- Test both desktop and mobile widths after visual changes.

Useful checks:

```bash
node --check js/main.js
node --check data/cultural-extensions.js
git diff --check
```

## Suggested Next Improvements

- Rename internal `bishop*` identifiers to `hawaiianSkyMap*` throughout JS, CSS, HTML, and URL params.
- Move review status, source notes, lesson progress, and admin workflows into Supabase.
- Expand the Learn section with more modules — navigation practice, seasonal sky, moon-night deep dives.
- Add stronger browser-based visual regression checks for desktop and mobile.

## Cultural Care

This project includes cultural knowledge, names, and moolelo. Treat those parts with care: verify changes against trusted references and, whenever possible, with knowledgeable practitioners or community reviewers. The app should support learning without flattening, extracting, or overclaiming cultural meaning.
