# IkeStar Night Sky Observatory

IkeStar is an interactive night-sky web app centered on Hawaiʻi 21°N and built as the sky-focused observatory layer of the larger Pikoverse / Ikeverse ecosystem. It combines a Three.js star field, Hawaiian star compass overlays, moon-night knowledge, moʻolelo panels, and formation focus tools for exploring the sky through cultural and navigational context.

The current verified build is focused on the Kānaka Maoli / Hawaiian sky layer. Other cultural layers are present in the interface but marked as under construction while the Hawaiian layer is being checked and refined.

## Current Features

- Interactive 3D night sky with stars, planets, Moon, Sun, horizon, Milky Way, and compass controls.
- Kānaka Maoli / Hawaiian star formation layer with labels and formation lines.
- Monthly Hawaiian sky map overlay for encoded 2026 months.
- Formation checklist that shows all formations for the selected month and whether each is visible, low on the horizon, or edge-marked.
- Formation Focus mode for zooming into a selected star pattern.
- Moʻolelo, navigation notes, and science facts in star and planet panels.
- Hawaiian lunar nights data and moon knowledge.
- Optional Supabase configuration for data sync/admin workflows.

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

To open directly into the Hawaiian monthly sky map overlay:

```text
http://127.0.0.1:4173/index.html?bishopMap=2026-06#bishop-map
```

Note: the query parameter name is still an internal legacy name. The visible app language uses Hawaiian sky map wording.

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

- `PROJECT_VISION.md`: the larger Pikoverse / Ikeverse / IkeStar purpose and cultural learning vision.
- `IKESTAR_UI_UX_ROADMAP.md`: the practical UI/UX, learning-module, dashboard, profile, review, accessibility, and performance roadmap.

## Accuracy Status

The Hawaiian monthly sky map overlay currently has encoded formation inventories for January through June 2026. The June view includes the major formations shown for that month, including Ka Mōʻī, Hōkūpaʻa, Nāhiku, Piraʻetea, Keoe, Humu, Hōkūʻiwa, Kaua Mea, ʻIkiki, Meʻe, Kamakau Nui a Māui, Pīmoe, Hānaiakamalama, Kamailemua / Kamailehope, Nānāmua / Nānāhope, Hōkūleʻa, Hikianalia, and Lehuakona.

The app distinguishes between:

- `Visible`: formation members are above the overlay horizon threshold.
- `Low horizon`: formation is part of the month but sits close to the horizon.
- `Below horizon`: formation belongs to the month but is not realistically visible in the current projection.

The goal is to keep the map honest: formations should not be moved into the sky circle in a way that makes low or below-horizon stars appear higher than they are.

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

- Click a checklist row to highlight that formation on the overlay.
- Add filters for visible, low horizon, and below horizon formations.
- Add a month scrubber for moving smoothly between encoded monthly maps.
- Add a small source-review/admin workflow for marking each formation as verified, needs review, or draft.
- Continue replacing internal legacy naming with neutral `hawaiianSkyMap` names when touching related code.

## Cultural Care

This project includes cultural knowledge, names, and moʻolelo. Treat those parts with care: verify changes against authoritative references and, whenever possible, with knowledgeable practitioners or community reviewers. The app should support learning without flattening or overclaiming cultural meaning.
