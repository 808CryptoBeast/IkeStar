# IkeStar Night Sky Observatory

IkeStar is an interactive night-sky web app centered on Hawaii and built as the sky-focused observatory layer of the larger Pikoverse / Ikeverse vision. It combines a Three.js sky, Hawaiian star formations, monthly sky-map overlays, moon-night knowledge, moolelo, and formation learning tools.

The current verified build focuses on the Kanaka Maoli / Hawaiian sky layer. Other cultural layers are visible in the interface, but they are marked as under construction while the Hawaiian layer is checked, refined, and expanded with care.

## Current Features

- Interactive 3D night sky with stars, planets, Moon, Sun, horizon, Milky Way, and compass controls.
- Kanaka Maoli / Hawaiian star-formation layer with labels, formation lines, and cultural context.
- Monthly Hawaiian sky-map overlay for encoded 2026 months.
- Formation checklist with `All`, `Visible`, and `Edge` filters.
- Clickable monthly formation rows that highlight the selected formation on the overlay.
- Formation Focus mode with previous/next navigation, anchor-star list, moolelo panel, navigation notes, and label-density controls.
- `Show on Map` action from Formation Focus back to the Hawaiian monthly overlay.
- Guided Learn section with expanded modules, practice prompts, lesson steps, local completion tracking, and sky-linked actions.
- Knowledge status badges for verified, encoded, review-needed, and in-progress material.
- Mobile-polished control trays for bottom actions, compass/map tools, and lesson navigation.
- Moolelo, navigation notes, and science facts in star and planet panels.
- Hawaiian lunar nights data and moon knowledge.
- Optional Supabase configuration for future data sync and admin workflows.

## Run Locally

This is a static web app. No build step is required.

From the project folder:

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

Note: the query parameter name is still an internal legacy name. The visible app language should use Hawaiian sky-map wording.

## Project Structure

```text
index.html                  Main app shell
admin.html                  Admin/data management interface
css/style.css               App styling and responsive UI
js/main.js                  Main sky engine, UI logic, formations, overlays
data/cultural-extensions.js Additional cultural star/formation knowledge
data/moon-knowledge.json    Moon knowledge content
data/moon-nights.csv        Hawaiian moon-night data
data/moon_nights.csv        Alternate moon-night filename used by older flows
data/supabase-config.js     Optional Supabase setup
assets/images/              Compass, logo, and visual assets
```

## Planning Docs

- `PROJECT_VISION.md`: the larger Pikoverse / Ikeverse purpose and cultural learning vision.
- `IKESTAR_UI_UX_ROADMAP.md`: the practical UI/UX, learning module, review, accessibility, and performance roadmap.

## Hawaiian Sky Map Status

The Hawaiian monthly sky-map overlay currently has encoded formation inventories for January through June 2026. The June view includes the major formations shown for that month, including Ka Moi, Hokupa'a, Nahiku, Pira'etea, Keoe, Humu, Hoku'iwa, Kaua Mea, 'Ikiki, Me'e, Kamakau Nui a Maui, Pimoe, Hanaiakamalama, Kamailemua / Kamailehope, Nanamua / Nanahope, Hokule'a, Hikianalia, and Lehuakona.

The app distinguishes between:

- `Visible`: formation members are above the overlay horizon threshold.
- `Low horizon`: formation is part of the month but sits close to the horizon.
- `Below horizon`: formation belongs to the month but is not realistically visible in the current projection.

The goal is to keep the map honest: formations should not be moved into the sky circle in a way that makes low or below-horizon stars appear higher than they are.

## Formation Focus

Formation Focus is the focused learning view for one star pattern. It currently supports:

- Previous and next formation navigation.
- A clickable anchor-star strip.
- Label modes:
  - `Clean`: selected anchor label only.
  - `Stars`: star IDs.
  - `All`: cultural labels where available.
- Moolelo and navigation-use panels.
- A `Show on Map` action for Hawaiian formations that are encoded in the monthly sky-map data.

## Learn Section

The Learn tab is the guided learning path for IkeStar. Each lesson now includes:

- **Objectives** — a short list of what the lesson builds toward.
- **Cultural lens** — a note on how Kanaka Maoli / Hawaiian tradition relates to the sky topic, written with humility and appropriate uncertainty.
- **Modern practice** — a note on how the topic connects to contemporary astronomy tools or research.
- **Mini-check** — a multiple-choice question with answer feedback to test understanding.
- **Reflection prompt** — an open question to connect the lesson to lived experience.
- **Sky-linked action** — a button that opens the relevant IkeStar tool (Tour, Formation Focus, Map, Moon, Compass) directly from the lesson.

Current modules:

- **Begin With The Sky** — reading the night sky as a living knowledge system; connecting a single star to its formation.
- **Hawaiian Monthly Sky Map** — reading the monthly overlay; understanding visible, low-horizon, and edge-marked formations; highlighting one pattern.
- **Moon And Wayfinding** — Hawaiian moon-night calendar; star compass houses and directional practice.
- **Formation Practice** — tracing formation shapes with label modes; identifying the southern edge cluster; completing the overview-focus-return loop.
- **Knowledge Care** — reading status badges (Verified, Encoded, Needs Review, Draft); comparing cultural sky systems without flattening their differences.

Lesson progress is stored locally in the browser for now. A future Supabase-backed version can support user accounts, review status, teacher/admin workflows, and expanded curriculum modules.

## Knowledge Review

IkeStar now uses lightweight status badges in learning and knowledge surfaces:

- `Verified`: checked names, moolelo, or navigation notes in the current project references.
- `Encoded Map`: formation appears in the monthly Hawaiian sky-map data.
- `Needs Review`: useful material that should be checked before being treated as final.
- `In Progress`: draft learning or cultural material still being built.

These badges are intentionally local and simple for now. Supabase can later become the source of truth for review status, reviewer notes, citations, lesson progress, and admin workflows.

## Development Notes

- Keep user-facing language centered on Hawaiian sky-map wording.
- Internal identifiers may still use older names; avoid exposing those labels in UI copy.
- Prefer small, verified changes because `js/main.js` contains most of the app logic.
- When changing star formations, update both the formation data and the map/checklist behavior.
- When changing visual behavior, test both desktop and mobile widths.

Useful checks:

```bash
node --check js/main.js
node --check data/cultural-extensions.js
git diff --check
```

## Suggested Next Improvements

- Add a month scrubber for moving smoothly between encoded monthly maps.
- Move review status, source notes, lesson progress, and admin workflow into Supabase.
- Add stronger browser-based visual regression checks for desktop and mobile.
- Expand Learn with more modules, quizzes, and guided observing routines.
- Continue replacing internal legacy naming with neutral `hawaiianSkyMap` names when touching related code.

## Cultural Care

This project includes cultural knowledge, names, and moolelo. Treat those parts with care: verify changes against trusted references and, whenever possible, with knowledgeable practitioners or community reviewers. The app should support learning without flattening, extracting, or overclaiming cultural meaning.
