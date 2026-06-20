# IkeStar UI/UX and Learning Platform Roadmap

This roadmap turns the Pikoverse / Ikeverse vision into a practical build direction for IkeStar. The goal is to evolve the current interactive sky app into a polished cultural sky observatory and learning platform.

IkeStar should not feel like a generic astronomy app. It should feel like a respectful doorway into ancestral sky knowledge, Hawaiian wayfinding, moon-night practice, seasonal awareness, science, and cross-cultural learning.

## Product Position

IkeStar is the sky-focused observatory layer of the Pikoverse / Ikeverse ecosystem.

It should communicate:

- Cultural sky learning platform.
- Hawaiian star and moon knowledge explorer.
- Wayfinding and navigation education tool.
- Science and culture bridge.
- Long-term knowledge archive.
- Interactive learning environment.

The first production focus should remain the Kanaka Maoli / Hawaiian layer. Other cultural systems should stay marked as under construction until their data, sources, and review status are strong enough to present responsibly.

## Information Architecture

Recommended primary sections:

1. Sky View
   - Main interactive sky.
   - Stars, planets, Moon, horizon, formation overlays, labels, and compass tools.

2. Learn
   - Guided modules and lessons.
   - Progress tracking.
   - Related sky objects and moon nights.

3. Moon Calendar
   - Hawaiian moon nights.
   - Current moon phase.
   - Ecological, seasonal, planting, fishing, and ceremony notes.

4. Wayfinding
   - Hawaiian star compass.
   - Directional houses.
   - Rising/setting markers.
   - Ocean, wind, swell, and sky relationships.

5. Cultural Layers
   - Hawaiian layer first.
   - Future cultural systems separated by worldview, language, and source history.
   - Comparison only when context is clear.

6. Dashboard
   - Continue learning.
   - Saved stars and formations.
   - Moon night of the day.
   - Recent activity.
   - Badges and completed lessons.

7. Profile / Passport
   - User identity.
   - Learning progress.
   - Saved knowledge.
   - Achievements and optional proof-of-learning records.

8. Admin / Review
   - Add/edit knowledge.
   - Track sources.
   - Mark review status.
   - Manage cultural layer readiness.

## Desktop Layout

Desktop should feel spacious, quiet, and focused.

Recommended layout:

- Top navigation for primary sections.
- Large center Sky View or page content.
- Right contextual panel for selected star, formation, moon night, or lesson.
- Dashboard grid for learning progress and saved knowledge.
- Module grid in two or three columns.
- Filters for category, cultural layer, and review status.

Avoid:

- Stacking too many cards over the sky.
- Tiny labels or crowded controls.
- Overusing glow effects.
- Hiding primary actions in small menus.
- Text overflow inside cards, buttons, and panels.

## Mobile Layout

Mobile should be designed as its own experience, not a shrunken desktop.

Recommended mobile navigation:

- Sky
- Learn
- Moon
- Wayfinding
- Profile

Sky View mobile behavior:

- Full-screen sky.
- Compact header.
- Bottom navigation.
- Floating controls for search, layers, date/time, compass, and reset view.
- Bottom sheet for selected stars/formations.
- Expandable sections for deeper knowledge.
- Large tap targets.
- No horizontal overflow.

Learning mobile behavior:

- Stacked module cards.
- Sticky Continue Learning action.
- Short lesson previews.
- Clear Previous, Next, and Complete buttons.

## Sky View Improvements

The Sky View is the heart of IkeStar.

Core controls:

- Search for star, formation, moon night, or concept.
- Toggle Hawaiian names.
- Toggle scientific names.
- Toggle formation lines.
- Toggle moon, horizon, Milky Way, compass, and labels.
- Date/time controls.
- Location controls.
- Formation focus.
- Monthly Hawaiian sky map overlay.

Selected-object panel should show:

- Hawaiian name.
- Scientific name.
- Meaning if verified.
- Cultural context.
- Moolelo connection.
- Navigation use.
- Seasonal timing.
- Visibility notes.
- Related lessons.
- Sources.
- Review status.
- Save action.

The sky should stay readable. Use progressive disclosure: show summaries first, then let the user expand deeper knowledge.

## Learning Modules

Modules should be directly connected to sky objects.

Each module should include:

- Title.
- Cultural layer.
- Short description.
- Lesson count.
- Estimated time.
- Difficulty.
- Progress indicator.
- Completion status.
- Review/source status.
- Start or Continue button.
- Related stars, moon nights, formations, or navigation concepts.
- Badge or certificate reward when completed.

Recommended first modules:

1. Introduction to IkeStar
   - What IkeStar is.
   - Why the sky matters.
   - How observation, memory, story, navigation, and science connect.

2. Hawaiian Star Names
   - Major Hawaiian star names.
   - Seasonal visibility.
   - Cultural and navigational context.

3. Hawaiian Moon Nights
   - Moon-night names.
   - Moon phases.
   - Ocean, planting, fishing, ceremony, and ecological timing.

4. Wayfinding Foundations
   - Star compass basics.
   - Horizon houses.
   - Directional awareness.
   - Rising and setting points.

5. Stars, Seasons, and Place
   - Seasonal markers.
   - Agriculture, ceremony, weather, and environmental observation.

6. Moolelo and the Sky
   - How story carries knowledge.
   - How to avoid reducing moolelo to entertainment.

7. Comparative Sky Knowledge
   - Similarities across cultures.
   - Clear separation of each worldview.
   - Source-backed comparison only.

## Lesson Page Structure

Each lesson should be focused and readable.

Lesson layout:

- Lesson title.
- Module title.
- Position, such as Lesson 2 of 8.
- Short introduction.
- Main lesson content.
- Interactive sky object or formation.
- Cultural context.
- Scientific context.
- Navigation or seasonal use.
- Source notes.
- Review status.
- Reflection question or knowledge check.
- Previous / Next controls.
- Mark Complete button.

Avoid long walls of text. Use short sections, accordions, callouts, and visuals.

## Dashboard

The dashboard should answer: "What should I continue learning next?"

Recommended cards:

- Continue Learning.
- Tonight's Sky.
- Current Moon Night.
- Saved Stars.
- Saved Formations.
- Active Modules.
- Completed Lessons.
- Badges Earned.
- Knowledge Review Notices.

Keep cards scannable and useful. Avoid overloading the dashboard with every possible stat.

## Profile / Passport

The profile should act as a learning passport.

Include:

- User name/avatar.
- Learning level or summary.
- Completed modules.
- Completed lessons.
- Saved stars.
- Saved formations.
- Badges.
- Certificates.
- Cultural layers explored.
- Optional proof-of-learning status.
- Privacy controls.

Proof-of-learning should remain optional and respectful. Cultural knowledge should not be treated as a commodity.

## Knowledge Review System

Every knowledge item should be able to carry review metadata.

Recommended statuses:

- Verified.
- Source-backed.
- In review.
- Needs cultural review.
- Interpretive.
- Community submitted.
- Unverified.

Each knowledge item should track:

- Title.
- Cultural layer.
- Category.
- Description.
- Source.
- Source type.
- Contributor.
- Review status.
- Last updated date.
- Notes.
- Related lessons.
- Related sky objects.

This review layer is what will make IkeStar trustworthy as it grows.

## Component Direction

Reusable components to design or extract over time:

- SkyViewer.
- StarMarker.
- FormationOverlay.
- MoonPhaseWidget.
- StarCompassOverlay.
- CulturalLayerToggle.
- KnowledgePanel.
- SourceStatusBadge.
- ReviewStatusBadge.
- ModuleCard.
- LessonCard.
- ProgressBar.
- ProgressRing.
- ContinueLearningCard.
- SavedStarCard.
- MoonNightCard.
- DashboardStatCard.
- BadgeCard.
- CertificateCard.
- ProfilePassport.
- MobileBottomNav.
- DesktopSidebar.
- EmptyState.
- LoadingState.
- ErrorState.
- LockedState.
- CompletionModal.

## Data Model Suggestions

Suggested future tables:

- profiles.
- stars.
- star_names.
- formations.
- formation_stars.
- moon_nights.
- cultural_layers.
- modules.
- lessons.
- lesson_steps.
- user_progress.
- saved_items.
- badges.
- user_badges.
- sources.
- review_status.
- admin_notes.

Short-term static data can stay in local files, but new learning and review features should be modeled with migration to Supabase in mind.

## Accessibility

Requirements:

- Strong text contrast.
- Readable body font sizes.
- Large tap targets.
- Clear keyboard focus states.
- Semantic headings and controls.
- Screen-reader-friendly labels.
- Reduced-motion support.
- No text overflow.
- No cramped mobile containers.
- Clear error messages.
- Captions/transcripts for future audio or video lessons.

## Performance

Priorities:

- Keep mobile sky rendering smooth.
- Lazy-load heavy overlays and learning content.
- Optimize star labels and formation drawing.
- Make overlays toggleable.
- Reduce animation load on low-powered devices.
- Compress images.
- Cache static learning content where possible.
- Keep Supabase queries focused and paginated.

## Production-Ready Milestones

Phase 1: Stabilize the Current Observatory

- Keep Hawaiian layer as primary.
- Clean UI copy.
- Improve mobile controls.
- Add checklist interactions for monthly formations.
- Add review-status badges to panels.

Phase 2: Learning Foundation

- Add Learn section.
- Add module cards.
- Add lesson template.
- Track local progress first.
- Connect lessons to stars, moon nights, and formations.

Phase 3: Dashboard and Passport

- Add dashboard cards.
- Add saved stars/formations.
- Add profile/passport view.
- Add badges and completed lesson states.

Phase 4: Admin and Review Workflow

- Add source tracking.
- Add review statuses.
- Add admin notes.
- Add verified/in-review filters.
- Prepare Supabase schema.

Phase 5: Cross-Cultural Expansion

- Add other cultural layers only when source-backed.
- Keep each system distinct.
- Add comparison views only with clear context and review status.

## Layout Problems To Avoid

- Treating cultural material as decoration.
- Making the app look like generic sci-fi.
- Putting too much text directly over the sky.
- Mixing multiple cultural systems without context.
- Hiding review status.
- Making mobile controls too small.
- Letting panels overlap important sky interactions.
- Using glow effects where readability is needed.
- Presenting interpretive content as verified.

## North Star

IkeStar should feel like a bridge between ancestral knowledge and modern interactive technology.

It should remind users that our ancestors were not guessing. They were watching, measuring, remembering, navigating, teaching, and preserving knowledge through story, ceremony, practice, and relationship.
