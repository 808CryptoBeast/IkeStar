/* ═══════════════════════════════════════════════════════════
   LEARN MODULES — all lesson content for the Learn panel.
   Each module defines:
     id, culture, title, meta, status
     lessons[] — steps with title, kicker, body, check,
                 reflect, task, action
   
   To add a lesson: add a step object to a module's lessons[].
   To add a module: add a new object to the array below.
   Set culture:'kemet' for Egyptian modules, 'hawaiian' for Hawaiian.
   Loaded before main.js.
═══════════════════════════════════════════════════════════ */
const LEARN_MODULES = [
  {
    id:'intro-sky',
    culture:'hawaiian',
    title:'Begin With The Sky',
    meta:'2 lessons · foundation',
    status:'verified',
    desc:'Start with IkeStar as a learning doorway: sky, observation, story, navigation, and science working together.',
    lessons:[
      {
        title:'The sky is a living library',
        objectives:['See the night sky as a multi-layered knowledge system','Recognize IkeStar as a learning doorway, not a final word'],
        body:'IkeStar treats the night sky as a living knowledge system. Stars can be scientific objects, navigational markers, seasonal calendars, story-carriers, and reminders of relationship — all at once. None of those uses cancels the others.',
        callout:'The first skill is attention: look up, return, compare, remember.',
        culture:'In Hawaiian tradition the sky is not a backdrop — it is part of the world the way the ocean and land are. The word wā carries both time and space. Looking at the sky is a way of being in relationship with wā, not just measuring it. This project holds that view humbly; learning it takes time.',
        modern:'Most astronomy apps sort stars by magnitude, type, or distance. IkeStar layers cultural knowledge alongside that data because both kinds of knowing are real and useful. Notice where they agree and where they differ.',
        check:{
          question:'What does IkeStar treat the night sky as?',
          choices:['A scientific catalog only','A living knowledge system with many layers','A decorative background','A navigation tool only'],
          answer:1,
          correct:'Exactly. Science, navigation, story, and season all belong in the same sky.',
          explain:'Think broader. IkeStar holds science, navigation, culture, and story together — not just one of those.'
        },
        reflect:'When was the last time you looked at the sky long enough for your eyes to fully adjust? What did you notice that surprised you?',
        task:'Use Tour once to see named stars in motion, then return and tap one bright star to open its panel.',
        action:{ label:'Open Tour', icon:'fa-route', type:'tour' }
      },
      {
        title:'From star to formation',
        objectives:['Connect a single star to its surrounding pattern','Use Formation Focus to navigate and study one shape'],
        body:'A single star becomes more meaningful when you see the pattern around it. Formation Focus lets you move from one anchor star into the larger shape, its moolelo (story), and its practical navigation use — without losing the thread back to the full sky.',
        callout:'Tap individual stars to build recognition. Then zoom out to see the formation as a shape.',
        culture:'Hawaiian formation names often encode what they teach. The name is not just a label — it may carry the season, the use, the story, or a relationship to another formation. This project is still working to represent those layers with care; what you see here is a starting point.',
        modern:'Western star atlases give boundaries and coordinates. Hawaiian formation knowledge gives meaning and navigational relationship. A navigator learns both — one tells you where you are; the other tells you why that place matters.',
        check:{
          question:'What does Formation Focus help you do?',
          choices:['Download star data','Move from a single anchor star into the full pattern and its story','Change the sky to a different date','Translate star names into English'],
          answer:1,
          correct:'Right. Formation Focus is the bridge from one star into its full cultural and navigational context.',
          explain:'Look for the Formation Focus button after tapping a star. It opens the pattern, moolelo, and navigation notes together.'
        },
        reflect:'Find the brightest star visible to you tonight. Can you identify at least one other star near it that seems to belong to the same group?',
        task:'Open Ka Moi in Formation Focus, switch label density to Clean, then tap each anchor star in the strip once.',
        action:{ label:'Focus Ka Moi', icon:'fa-diagram-project', type:'formation', star:'Alderamin' }
      }
    ]
  },
  {
    id:'hawaiian-map',
    culture:'hawaiian',
    title:'Hawaiian Monthly Sky Map',
    meta:'2 lessons · formations',
    status:'encoded',
    desc:'Learn how the monthly overlay shows Hawaiian formations, visible status, edge markers, and sky-map honesty.',
    lessons:[
      {
        title:'Read the monthly formation layer',
        objectives:['Use the monthly overlay to see which formations are present','Understand why the map separates visible, low, and edge formations'],
        body:'The Hawaiian sky map shows the formations encoded for a selected month. The checklist separates fully visible formations from low-horizon and edge-marked formations so the map does not pretend everything is high overhead. Honesty about the horizon is part of the design.',
        callout:'A good sky map keeps low things low instead of making the picture easier but less true.',
        culture:'Hawaiian sky knowledge was deeply seasonal. Formations marked when to fish, when to plant, when to travel, and when to hold ceremony. The monthly map is a first step toward that seasonal awareness — but the full calendar is layered and still being learned here.',
        modern:'Many astronomy apps show all objects as equally available on any night. The Hawaiian overlay marks low-horizon formations as low because that is how the sky actually looks from Hawai\'i. Latitude and honesty both shape what you can see.',
        check:{
          question:'What does the "Low horizon" label on a formation mean?',
          choices:['The formation is fictional','The formation appears in this month but sits close to the horizon','The formation is not Hawaiian','The formation should be ignored'],
          answer:1,
          correct:'Correct. The formation is real and part of the month — it just sits close to the horizon, not high overhead.',
          explain:'Low horizon means present but close to the edge. The map keeps it there rather than moving it up.'
        },
        reflect:'Why do you think a sky learning tool would choose to show low-horizon stars as low, even if it makes the map less tidy?',
        task:'Open the June map, switch between All and Visible filters, and notice which formations sit near the edge ring.',
        action:{ label:'Open June Map', icon:'fa-map-location-dot', type:'map' }
      },
      {
        title:'Highlight one formation',
        objectives:['Navigate from the formation list to a single pattern highlight','Connect the map view to Formation Focus for deeper study'],
        body:'Clicking a formation row in the checklist highlights that pattern on the overlay. This lets you move between the full monthly picture and a single shape without losing your place. The map gives context; Formation Focus gives depth.',
        callout:'Use the map to see the month as a whole. Use Formation Focus to learn one pattern deeply.',
        culture:'Traditional navigation knowledge was often taught one reference point at a time — one star, one formation, one season. Isolating one pattern on the map mirrors that focused approach. Nā Hiku — The Seven — is the Big Dipper (Ursa Major). Its seven stars were memorized as a numbered sequence, and the outer bowl stars always point north toward Hōkūpaʻa. (Source: archive.hokulea.com / Polynesian Voyaging Society)',
        modern:'Modern planetarium software can highlight any constellation at a click. Formation Focus adds what a star atlas cannot: the moolelo, navigation use, and cultural context encoded over generations of sky practice.',
        check:{
          question:'After highlighting a formation on the map, what tool goes deeper into its story and navigation use?',
          choices:['The compass overlay','Formation Focus','The tour mode','The moon panel'],
          answer:1,
          correct:'Yes. Formation Focus opens the moolelo, anchor stars, and navigation notes for that pattern.',
          explain:'Look for the Formation Focus button — it opens after you tap an anchor star or from the map highlight.'
        },
        reflect:'Nā Hiku means "The Seven." Go outside on a clear night and find the Big Dipper. Which two stars in the bowl point toward Hōkūpaʻa (Polaris)? Can you hold that north bearing with your body?',
        task:'Highlight Nā Hiku on the map, then open Formation Focus to see its north-pointing use.',
        action:{ label:'Show Nā Hiku', icon:'fa-star', type:'highlight', formation:'nahiku' }
      }
    ]
  },
  {
    id:'moon-wayfinding',
    culture:'hawaiian',
    title:'Moon And Wayfinding',
    meta:'2 lessons · practice',
    status:'review',
    desc:'Connect the moon, compass, and directional sky practice into a basic observing routine.',
    lessons:[
      {
        title:'Moon nights as timekeeping',
        objectives:['Understand the Hawaiian moon night calendar as more than lunar phases','Connect moon phase to ocean, land, and sky practice'],
        body:'Hawaiian moon nights are not only phases — they are a 30-night calendar where each night has character. The nights organize fishing, planting, ceremony, and ocean travel. The moon panel is a doorway into that calendar, though the full depth of moon-night knowledge belongs to practitioners, not apps.',
        callout:'The moon helps organize practice by night, not only by date.',
        culture:'The Hawaiian moon calendar names nights like Hilo, Hoaka, Kū-kahi, and on through 30 or so nights, each carrying associated activities and observations. This project presents moon-night data as a learning aid; the living practice belongs with kumu and practitioners. Treat what you see here as an invitation to learn more, not a final reference.',
        modern:'The Gregorian calendar tracks weeks and months by solar cycle. Hawaiian moon nights track ocean conditions, growth cycles, and sky events in finer detail — roughly 12.4 moon cycles per solar year, each night distinct. Both systems are tools; the question is what each one reveals.',
        check:{
          question:'Hawaiian moon nights organize which areas of life?',
          choices:['Only lunar phases for astronomy','Ocean, planting, ceremony, and fishing activity across 30 named nights','Solar events only','Ship navigation using GPS'],
          answer:1,
          correct:'Right. The moon calendar is ecological and cultural — it connects the sky to ocean, land, and community practice.',
          explain:'Think beyond astronomy. The moon calendar organizes fishing, planting, ceremony, and ocean conditions — not just sky phases.'
        },
        reflect:'What phase is the moon tonight? What does that phase mean for ocean conditions or land activity in your family\'s tradition or region?',
        task:'Open the moon panel, read tonight\'s moon night if available, then step outside and find the moon in the sky.',
        action:{ label:'Open Moon', icon:'fa-moon', type:'moon' }
      },
      {
        title:'Compass practice',
        objectives:['Use the star compass to connect sky direction to lived orientation','Understand how the compass divides the horizon into named houses'],
        body:'The Hawaiian star compass divides the horizon into houses — sections where stars rise and set. Facing each cardinal direction and noting which stars sit there is the beginning of connecting abstract direction to lived sky knowledge. The compass panel provides a visual reference; the practice is what you do with it outside.',
        callout:'Direction becomes real through repeated observation across nights, not through a single look.',
        culture:'The Hawaiian star compass — associated with the wayfinding traditions taught at institutions like Polynesian Voyaging Society — organizes the horizon into 32 houses. Each house is named for a star that rises or sets there. This connects navigation to sky knowledge in a way that compass headings in degrees cannot fully replace. This project presents the compass as a learning tool; the full wayfinding tradition is taught by navigators.',
        modern:'GPS gives heading to a fraction of a degree in real time. The star compass builds heading through lived sky observation over time — recognizing where specific stars rise, where they set, and what that tells you about direction without instruments. Both are real skills; they train different kinds of attention.',
        check:{
          question:'The Hawaiian star compass organizes the horizon using…',
          choices:['Degrees from 0 to 360','Named houses based on where stars rise and set','Solar angle at noon','Magnetic variation zones'],
          answer:1,
          correct:'Correct. Each house is named for the star that rises or sets in that direction — connecting names to lived sky observation.',
          explain:'The star compass is organized by star rise and set positions, not by arbitrary degree divisions.'
        },
        reflect:'Face north right now. Without looking at a device, can you name one star or formation that rises near north for your location?',
        task:'Open the compass overlay and deliberately face north, east, south, and west — pausing at each to look at the sky.',
        action:{ label:'Open Compass', icon:'fa-compass', type:'compass' }
      }
    ]
  },
  {
    id:'formation-practice',
    culture:'hawaiian',
    title:'Formation Practice',
    meta:'3 lessons · guided tasks',
    status:'encoded',
    desc:'Practice moving from a monthly map into individual Hawaiian formations and back again.',
    lessons:[
      {
        title:'Trace the northern anchor',
        objectives:['Use Formation Focus to trace a formation shape','Switch label modes and use Previous/Next to build pattern recognition'],
        body:'Ka Moi sits near the northern part of the encoded June sky map. It is a good formation for practicing the relationship between a label, its anchor stars, and the surrounding map grid. Switching label modes from Clean to Stars to All changes how much information is visible at once.',
        callout:'Do not memorize only the name. Trace the shape with your eye, then return and trace it again.',
        culture:'Ka Moi\'s encoding in this project is based on available references, but the full cultural context and moolelo for this formation are still being researched with care. What you see is a starting framework. If you know more, that knowledge belongs with your kumu, not inside this app.',
        modern:'Ka Moi\'s primary anchor star in the scientific record is Alderamin, designated α Cephei — magnitude 2.5, roughly 49 light-years away. Knowing both the scientific anchor and the formation name gives you two ways to find it: by catalog or by shape.',
        check:{
          question:'Which Formation Focus label mode shows only the selected anchor star label and nothing else?',
          choices:['All','Stars','Clean','Grid'],
          answer:2,
          correct:'Right. Clean mode reduces visual clutter so you can focus on the formation shape itself.',
          explain:'Clean mode strips most labels away, leaving just the selected anchor. Try it and see what becomes clearer.'
        },
        reflect:'After tracing Ka Moi\'s shape in Formation Focus, what is one detail about it you had not noticed before?',
        task:'Open Ka Moi in Formation Focus, switch to Clean labels, then use Previous and Next to see the neighboring formations.',
        action:{ label:'Focus Ka Moi', icon:'fa-diagram-project', type:'formation', star:'Alderamin' }
      },
      {
        title:'Find the southern group',
        objectives:['Identify edge-marked formations on the June map','Understand why horizon honesty matters for sky learning'],
        body:'Kamakau Nui a Maui, Lehuakona, Kamailemua, Kamailehope, and Hanaiakamalama sit close to the southern edge in the June map. Their edge position is real — they belong to the month, but parts of them sit near or below the visible horizon from Hawai\'i. The map shows them at the edge because that is where they are.',
        callout:'Edge position is not a map error — it is the sky being honest about what you can actually see.',
        culture:'South-sky formations appear seasonally and change position across the year. Their limited visibility in June is a function of real sky geometry at Hawaiian latitudes. Some of these formations carry deep cultural significance that this project is still working to represent with appropriate care.',
        modern:'At approximately 21°N latitude (Hawai\'i), the southern sky is much richer than from most of continental North America. Formations that seem edge-visible from Hawai\'i may be invisible entirely from Seattle or New York — latitude changes your sky.',
        check:{
          question:'Why do edge-marked formations appear at the rim of the sky map?',
          choices:['They are less important','The map has a visual error','They belong to the month but sit near the actual visible horizon','They were added later than other formations'],
          answer:2,
          correct:'Exactly. Edge position reflects actual sky geometry — the formation is present in the month but low on the horizon.',
          explain:'The map keeps low formations low. Edge position means real and present, but not high overhead.'
        },
        reflect:'What would you lose if a sky map moved low-horizon formations upward to make the picture tidier?',
        task:'Open the June map, switch to All filter, and find the southern cluster near the edge ring.',
        action:{ label:'Show Southern Cluster', icon:'fa-map-location-dot', type:'highlight', formation:'hanaiakamalama' }
      },
      {
        title:'Move from map to practice',
        objectives:['Complete the overview-focus-return learning loop','Connect map view to compass orientation in the live sky'],
        body:'A learner should be able to move between the monthly overview, a focused formation, and the live sky without getting lost. That loop — overview, focus, return — is the core of what IkeStar is building toward. Pimoe gives you a chance to practice the full cycle.',
        callout:'Overview, focus, return. Each pass through that loop deepens recognition.',
        culture:'Hawaiian learning traditions are often recursive — a student returns to the same star, formation, or story across seasons and years, and each time it reveals something new. The app cannot replicate that depth, but the loop it models is shaped by that tradition.',
        modern:'Spaced repetition research shows that returning to material across time — not just repeating it immediately — is more effective for retention. The overview-focus-return loop builds a similar rhythm into sky learning.',
        check:{
          question:'The learning loop this lesson practices is…',
          choices:['Memorize, test, move on','Overview the month, focus one formation, return to the live sky','Open Tour, skip ahead, close','Record, upload, share'],
          answer:1,
          correct:'Yes. Overview, focus, return. Each pass through that cycle builds real sky recognition.',
          explain:'The three-step loop — overview, focus, return — is what connects map knowledge to live sky practice.'
        },
        reflect:'What formation or star do you want to know well enough to recognize without looking it up? What would three months of returning to it reveal?',
        task:'Highlight Pimoe on the June map, then open the compass overlay and face south to find its approximate direction.',
        action:{ label:'Show Pimoe', icon:'fa-map-location-dot', type:'highlight', formation:'pimoe' }
      }
    ]
  },
  {
    id:'knowledge-care',
    culture:'hawaiian',
    title:'Knowledge Care',
    meta:'2 lessons · review',
    status:'draft',
    desc:'Learn how IkeStar separates verified facts, moolelo, navigation notes, source uncertainty, and material still under review.',
    lessons:[
      {
        title:'Read the status badges',
        objectives:['Identify what each knowledge-status badge means','Understand why uncertainty is marked as part of accuracy'],
        body:'Status badges help separate encoded map data, verified names, navigation notes, and material that still needs review. They are not a quality ranking — a "Needs Review" badge on a moolelo does not mean the story is wrong. It means this project has not yet verified it against trusted sources and practitioners.',
        callout:'Careful wording is itself a form of accuracy — and of cultural respect.',
        culture:'Hawaiian knowledge has been misrepresented, flattened, and overclaimed often enough in history that marking uncertainty is an act of care, not weakness. A badge that says "Needs Review" says: this matters, and it deserves better sourcing than we currently have. Treat it as an invitation to learn more carefully.',
        modern:'Academic databases and citation systems rate source reliability. IkeStar uses a simpler version of the same logic: Verified means checked; Encoded means on the map but not fully sourced; Needs Review means useful but check before treating it as final; Draft means still being built.',
        check:{
          question:'A "Needs Review" badge on a story panel means…',
          choices:['The story is false and should be ignored','The content may be useful but has not been verified against trusted sources yet','The story is only for teachers','The badge was added by mistake'],
          answer:1,
          correct:'Right. Needs Review means: proceed carefully, look for other sources, and do not treat it as a final reference.',
          explain:'Needs Review is a caution flag, not a deletion notice. The content may be valuable — it just needs better sourcing.'
        },
        reflect:'Have you ever relied on a confident-sounding source that turned out to be wrong? How would a "Needs Review" badge have helped you?',
        task:'Open a star panel and read the knowledge status badges before reading the moolelo or navigation notes.',
        action:{ label:'Open Hōkūleʻa Panel', icon:'fa-circle-info', type:'formation', star:'Arcturus' }
      },
      {
        title:'Compare without flattening',
        objectives:['Compare cultural sky systems without erasing their differences','Read the cultural lens before the scientific record in a star panel'],
        body:'IkeStar can show where Hawaiian and other cultural sky knowledge overlaps with scientific records. But similarity between two systems does not mean they are the same. Each culture keeps its own language, context, worldview, and way of knowing. Comparisons should reveal relationships — not treat every tradition as a version of the same thing.',
        callout:'Similarity is meaningful. Sameness is not the goal.',
        culture:'Many Pacific and global cultures named the Pleiades cluster. That shared attention reflects something real about the stars — their brightness, their rising date, their visibility. But the meanings, ceremonies, and navigational uses tied to those stars are specific to each tradition. Noting similarity while keeping cultural specificity intact is harder than it sounds, and this project is still working toward it.',
        modern:'Cross-cultural sky databases like the Stellarium Sky Cultures project exist and are valuable. They sometimes flatten cultural specificity in favor of searchable data. IkeStar tries to hold specificity by keeping moolelo, navigation notes, and cultural context separate from the scientific star record — though that boundary is always imperfect.',
        check:{
          question:'When two cultures share attention on the same star region, the lesson is…',
          choices:['Their sky traditions are the same thing','Both traditions can be merged into one entry','Shared human attention is real; each tradition\'s meaning and use remain specific to that culture','The scientific name is the only reliable one'],
          answer:2,
          correct:'Exactly. Shared attention is meaningful. Each tradition\'s specific knowledge, story, and practice remains its own.',
          explain:'Similarity reveals shared human attention. It does not collapse different traditions into one.'
        },
        reflect:'What does your own family or community call the Milky Way? How does that name describe it differently from a scientific label?',
        task:'Open the story panel for a star and read the cultural lens section before the scientific record.',
        action:{ label:'Open Story', icon:'fa-scroll', type:'story', star:'Arcturus' }
      }
    ]
  },
  {
    id:'star-lines',
    culture:'hawaiian',
    title:'Star Lines and Navigation',
    meta:'3 lessons · verified sources',
    status:'verified',
    desc:'Learn the three stars at the core of Hawaiian celestial navigation — Hōkūpaʻa, Nā Hiku, and Hōkūleʻa — using documented Polynesian Voyaging Society sources and NASA scientific data.',
    lessons:[
      {
        title:'Hōkūpaʻa — The Fixed Star',
        objectives:['Understand why Polaris appears stationary from Hawaiʻi','Use Hōkūpaʻa to find true north and estimate latitude'],
        body:'Hōkūpaʻa means "Fixed Star" — paʻa means immovable. Polaris sits within one degree of Earth\'s North Celestial Pole, so while every other star wheels around it over 24 hours, Hōkūpaʻa traces only a tiny circle that is invisible to the naked eye. It has been used as a north reference by Hawaiian navigators for as long as the star lines have been taught. From Hawaiʻi at approximately 21°N latitude, Hōkūpaʻa sits about 21° above the northern horizon — the altitude of the North Star always equals your latitude.',
        callout:'The altitude of Hōkūpaʻa above the horizon tells you your latitude north. A navigator approaching Hawaiʻi watches it rise as they travel north.',
        culture:'Additional documented Hawaiian names for this star include Kūmau ("Standing permanently"), Kiopa\'a ("Fixed immovable projection"), and Noho-loa ("Long-dwelling / Eternal"). From Tahiti at about 17°S latitude, Hōkūpaʻa disappears below the horizon entirely — a profound navigational boundary between hemispheres. (Source: archive.hokulea.com / Polynesian Voyaging Society — Hawaiian Star Lines)',
        modern:'NASA confirms: Polaris is approximately 430 light-years away, actually a triple-star system, and more than 2,000 times as luminous as the Sun. It is also a Cepheid variable star — its brightness pulses slightly — though this is not detectable by eye. (Source: science.nasa.gov / NASA Hubble Mission)',
        check:{
          question:'What does the altitude of Hōkūpaʻa above the horizon tell a navigator?',
          choices:['The time of night','How far east or west they are','Their latitude — how far north they are from the equator','The current season'],
          answer:2,
          correct:'Correct. The altitude of the North Star above the horizon equals the observer\'s latitude. At Hawaiʻi (~21°N) it sits about 21° up.',
          explain:'The altitude of the North Star and the observer\'s latitude are always equal. This is why finding Hōkūpaʻa at the right angle confirmed a navigator was at Hawaiian latitudes.'
        },
        reflect:'Go outside on a clear night and try to find Polaris using the Big Dipper\'s two outer bowl stars as pointers. How high does it appear above your horizon? What does that tell you about your latitude?',
        task:'Open Formation Focus on Hōkūpaʻa and read its navigation notes.',
        action:{ label:'Focus Hōkūpaʻa', icon:'fa-diagram-project', type:'formation', star:'Polaris' }
      },
      {
        title:'Nā Hiku — The Seven and the North',
        objectives:['Identify the seven stars of Nā Hiku (Big Dipper) in the correct sequence','Use the pointer stars to find Hōkūpaʻa'],
        body:'Nā Hiku — "The Seven" — is the Big Dipper asterism of Ursa Major. Its seven stars were memorized as a numbered sequence: Nā Hiku-1 (Dubhe) through Nā Hiku-7 (Alkaid), running from the bowl\'s outer edge through the handle tip. The two outer bowl stars, Nā Hiku-1 and Nā Hiku-2 (Dubhe and Merak), form the famous north pointer pair: a line extended through them about five times finds Hōkūpaʻa (Polaris) every time. Nā Hiku is circumpolar from Hawaiʻi — it never sets and is available every night of the year.',
        callout:'A line through the outer bowl stars of Nā Hiku, extended five times its own length, lands on Hōkūpaʻa. This works at any hour, any season.',
        culture:'In the Iwikuamoʻo (Backbone) star line documented by the Polynesian Voyaging Society, Nā Hiku connects the northern sky to the zenith star Hōkūleʻa. The last three stars of the handle — Alioth, Mizar, Alkaid — curve toward Hōkūleʻa (Arcturus). This means the same formation that finds north also points toward the zenith star of Hawaiʻi. (Source: archive.hokulea.com / Johnson and Mahelona — Hawaiian Star Lines)',
        modern:'NASA data for the seven stars: Dubhe is 124 light-years away; Alkaid (handle tip) is 104 light-years; Alioth is the brightest at magnitude 1.76 and about 83 light-years distant. Despite appearing as a group, the stars are at very different distances — the "dipper" shape is a perspective effect from Earth. (Source: NASA Bright Star Catalog)',
        check:{
          question:'Which two stars of Nā Hiku point toward Hōkūpaʻa?',
          choices:['Alioth and Alkaid (the handle tip)','Dubhe and Merak (the outer bowl edge)','Mizar and Megrez (the middle)','Phecda and Merak (the bottom bowl)'],
          answer:1,
          correct:'Right. Dubhe (Nā Hiku-1) and Merak (Nā Hiku-2) are the pointer stars. Extended about five times their distance, they land on Polaris.',
          explain:'The pointer stars are the two stars on the outer edge of the bowl — the side away from the handle. A line through them extended northward finds Hōkūpaʻa.'
        },
        reflect:'Find the Big Dipper tonight. Trace the pointer stars toward Polaris. Can you count five "lengths" between the pointer pair and the North Star? How does it feel to have a north bearing without a compass?',
        task:'Open Nā Hiku in Formation Focus and read how the bowl stars point to Hōkūpaʻa.',
        action:{ label:'Focus Nā Hiku', icon:'fa-diagram-project', type:'formation', star:'Dubhe' }
      },
      {
        title:'Hōkūleʻa — The Star of Gladness',
        objectives:['Understand Hōkūleʻa as the zenith star of Hawaiʻi','Connect Arcturus to the Iwikuamoʻo star line'],
        body:'Hōkūleʻa — "Star of Gladness" (hōkū = star, leʻa = joy/gladness) — is Arcturus, the fourth-brightest star in the night sky and the brightest in the northern hemisphere. Its declination of approximately +19°N means it passes almost directly overhead — through the zenith — when observed from the southern tip of Hawaiʻi Island. Polynesian navigators traveling north from the South Pacific knew they had reached the latitude of Hawaiʻi when Hōkūleʻa culminated at the zenith directly above them. This is called zenith star navigation: following a star to the latitude of your destination.',
        callout:'When Hōkūleʻa is straight overhead, you are at the latitude of Hawaiʻi. Navigators used this as a position confirmation during voyages from the south.',
        culture:'Hōkūleʻa anchors the middle of the Iwikuamoʻo star line — the Backbone of the Sky — which runs from Hōkūpaʻa (Polaris) at the northern pole down through Hōkūleʻa to Hanaiakamalama (Southern Cross) near the southern pole. Together they define a complete north-south axis available every night. The name "Hōkūleʻa" is also carried by the double-hulled voyaging canoe launched in 1975 — the canoe and the star share a name deliberately. (Source: archive.hokulea.com / Polynesian Voyaging Society)',
        modern:'NASA data on Arcturus: approximately 36.7 light-years away, spectral type K1.5 III (orange giant), apparent magnitude −0.05, luminosity roughly 110 to 180 times the Sun depending on measurement. It is the nearest giant star to Earth and one of the most studied in the sky. (Source: NASA NTRS / Bright Star Catalog)',
        check:{
          question:'What does it mean that Hōkūleʻa is the "zenith star" of Hawaiʻi?',
          choices:['It rises due east at Hawaiian latitudes','It is the brightest star visible from Hawaiʻi','It passes directly overhead from Hawaiian latitudes, confirming position','It is used to find south'],
          answer:2,
          correct:'Correct. A zenith star passes through the point directly overhead. When Hōkūleʻa reaches the zenith, the navigator is at the latitude of Hawaiʻi.',
          explain:'Zenith star navigation works because a star\'s declination equals the latitude where it passes overhead. Arcturus\'s declination (~+19°N) matches South Point, Hawaiʻi.'
        },
        reflect:'Step outside and find Arcturus — look for the brightest orange-tinted star. In spring and summer it rises in the east and moves high overhead at Hawaiian latitudes. What does it feel like to look at a star that Polynesian navigators used to cross the Pacific?',
        task:'Open Hōkūleʻa in Formation Focus and read the Iwikuamoʻo backbone connection.',
        action:{ label:'Focus Hōkūleʻa', icon:'fa-diagram-project', type:'formation', star:'Arcturus' }
      }
    ]
  },
  {
    id:'seasonal-sky',
    culture:'hawaiian',
    title:'Ka Mahina and Makahiki',
    meta:'2 lessons · seasonal knowledge',
    status:'review',
    desc:'Learn how the Hawaiian lunar night calendar and the Makahiki season connect the sky to time, agriculture, fishing, and community practice. Content draws on Bishop Museum, Kamehameha Schools, National Park Service, and Polynesian Voyaging Society documented sources.',
    lessons:[
      {
        title:'Makaliʻi and the Makahiki Season',
        objectives:['Understand how the Pleiades rising signals the Hawaiian new year','Connect a celestial event to a four-month cultural season'],
        body:'The Makahiki season — a Hawaiian period of roughly four months honoring Lono, deity of agriculture, rain, and peace — begins when the Pleiades (Ka Huihui a Makaliʻi, "The Cluster of Makaliʻi") rise on the eastern horizon at sunset. This sunset rising, called an acronychal rising, occurs around mid-to-late November. The precise start date is set by kāhuna as the first visible crescent moon after the new moon that follows the Pleiades\' sunset rising. Note: "Makaliʻi" as a specific name has some documented ambiguity — some sources attach it to Aldebaran (the bright red star near the Pleiades) rather than the cluster itself. This project uses the Polynesian Voyaging Society / Nainoa Thompson usage where Makaliʻi refers to the cluster.',
        callout:'The sky is a calendar. When Makaliʻi rises at sunset, the Hawaiian year turns.',
        culture:'Makahiki governed approximately four lunar months: ʻIkuwā, Welehu, Makaliʻi, and Kaʻeloha — roughly mid-November through late February or March. During Makahiki, warfare between aliʻi (chiefs) was forbidden. Tribute was collected island-wide via the procession of the Akua Loa, the traveling image of Lono. Competitive sports — boxing (mokomoko), wrestling, racing, ʻulu maika stone-disk rolling, and kōnane — filled the season. Primary historical sources: David Malo, Hawaiian Antiquities (ca. 1835–1840); Samuel M. Kamakau (19th-century historian). (Source: kaiwakiloumoku.ksbe.edu / Kamehameha Schools; nps.gov/puho / National Park Service)',
        modern:'NASA data on the Pleiades (Messier 45): approximately 444 light-years from Earth, age roughly 100 million years, containing over 1,000 member stars. Typically six to nine stars are visible to the naked eye under good conditions. The cluster is located in Taurus. Its November sunset-rising date shifts slightly over centuries due to precession, but the basic seasonal signal has been consistent throughout Hawaiian recorded history. (Source: science.nasa.gov / NASA Hubble Messier Catalog)',
        check:{
          question:'What celestial event marks the beginning of the Makahiki season?',
          choices:['The full moon in November','The Pleiades rising at sunset on the eastern horizon','The winter solstice','Arcturus reaching the zenith'],
          answer:1,
          correct:'Correct. The acronychal (sunset) rising of the Pleiades — Ka Huihui a Makaliʻi — on the eastern horizon signals the start of Makahiki. The precise date is then set by the next crescent moon.',
          explain:'The Pleiades sunset rising is the trigger. The exact Makahiki start is the first visible crescent moon after the new moon that follows that Pleiades rising.'
        },
        reflect:'Makahiki forbade warfare and centered life on celebration, tribute, and sport for four months. What would it mean in your own life if the sky told you when a season of peace and community began?',
        task:'Open the Moon panel and note the current lunar night — it connects to the same sky-calendar system that sets the Makahiki start date.',
        action:{ label:'Open Moon', icon:'fa-moon', type:'moon' }
      },
      {
        title:'Ka Mahina — The Thirty Nights',
        objectives:['Learn the structure of the Hawaiian lunar night calendar','Connect specific moon nights to fishing and agricultural practice'],
        body:'The Hawaiian lunar month (approximately 29.5 days) is divided into thirty named nights grouped into three ten-night periods called anahulu — the first, middle, and last thirds of the month. Each night has a name and an associated character. The month begins with Hilo ("Faint thread" — the first thin crescent) and ends with Muku ("Cut off" — the new moon when the moon is absent). This is not a single unified system: seven distinct regional variations of the Hawaiian lunar calendar have been documented across different islands and districts. What IkeStar shows is a broadly accepted reference version.',
        callout:'The Hawaiian moon calendar is ecological and cultural — it connects the sky to ocean conditions, agriculture, and community practice across thirty named nights.',
        culture:'The thirty nights run: Hilo, Hoaka, then the four Kū nights (Kūkahi through Kūpau), four ʻOle Kū nights, Huna, Mōhalu, Hua, Akua (first full), Hoku (second full), Māhealani, and continuing through Kāloa and the nights of Kāne (night 27) and Lono (night 28) — two major deities — before ending with Mauli and Muku. The nights of Kāne, Lono, and the three full-moon nights (Akua, Hoku, Māhealani) were often considered favorable for fishing and farming. Primary sources: David Malo, Hawaiian Antiquities; E.S. Craighill Handy, documented in Bishop Museum records. The Bishop Museum Planetarium publishes a Hawaiian Lunar Calendar as a public educational resource. (Source: bishopmuseum.org/planetarium; archive.hokulea.com)',
        modern:'The lunar month averages 29.53 days, while the solar year is 365.25 days — about 12.37 lunar months per year. Hawaiian kāhuna calibrated the lunar calendar against the solar year using celestial observations including the Pleiades rising, keeping the Makahiki season aligned with the November–March rainy and agricultural season across decades. This is the same calendrical mathematics used by cultures worldwide to build lunisolar calendars. (Source: worldwidevoyage.hokulea.com / Polynesian Voyaging Society)',
        check:{
          question:'What are the "anahulu" of the Hawaiian lunar calendar?',
          choices:['The names of the twelve months','The three ten-night thirds of the lunar month','The seven regional variations of the calendar','The nights considered auspicious for fishing'],
          answer:1,
          correct:'Right. Anahulu are the three ten-night thirds: first, middle, and last. The full month runs about thirty nights from Hilo to Muku.',
          explain:'The lunar month is divided into three anahulu of roughly ten nights each. First anahulu begins with Hilo; the middle contains the full moon nights; the last ends with Muku.'
        },
        reflect:'Look at the moon tonight. Can you estimate which third of the month — first, middle, or last anahulu — it belongs to based on its phase? What named night might it be closest to?',
        task:'Open the Moon panel and read tonight\'s moon night entry.',
        action:{ label:'Open Moon', icon:'fa-moon', type:'moon' }
      }
    ]
  },

  // ── KEMET MODULES ─────────────────────────────────────────
  {
    id:'kemet-sky',
    culture:'kemet',
    title:'The Living Sky of Kemet',
    meta:'2 lessons · Kemet astronomy',
    status:'verified',
    desc:'The Egyptian sky was the geography of gods, time, and the afterlife. Learn how Sopdet and Sah encoded the most important knowledge of Nile civilization.',
    lessons:[
      {
        title:'Sopdet — The Star That Feeds the River',
        objectives:['Understand how Sirius governed Egyptian timekeeping and agriculture','Connect a celestial event to the survival of a civilization'],
        body:'Sopdet (Sirius) was the most important star in Egyptian civilization. After 70 days of invisibility — a period called the Duat, when Sirius disappeared below the horizon — her heliacal rising just before sunrise announced the annual Nile flood. This flood deposited rich black silt across the farmland, making Egyptian agriculture possible. The moment Sopdet\'s light appeared on the eastern horizon at dawn, the Egyptian New Year began.',
        callout:'One star\'s return fed an entire civilization for 3,000 years.',
        culture:'Sopdet was identified with the goddess Isis, whose tears of grief for the slain Osiris were said to cause the flood. The 70 days of Sopdet\'s invisibility mirrored the 70-day embalming period of the dead — Sopdet was passing through the Duat (underworld) with Osiris. Her return was both an astronomical event and a religious resurrection. The Egyptians called the heliacal rising "The Coming of Sopdet" and it was one of the most celebrated days of the year. The temple at Abu Simbel (built for Ramesses II, circa 1265 BCE) was aligned so that the sun illuminated the inner sanctuary twice a year — one alignment was tied to the Nile flood season that Sopdet announced.',
        modern:'Sirius (α Canis Majoris) is the brightest star in the night sky at magnitude −1.46. It is 8.6 light-years away — a main-sequence A-type star 1.7× the mass of the Sun with a faint white dwarf companion (Sirius B). Its heliacal rising in early July from the latitude of ancient Memphis (~30°N) coincided with the Nile flood timing — a convergence of celestial mechanics and river hydrology that made Egyptian calendar astronomy extraordinarily precise across millennia.',
        check:{
          question:'What did the heliacal rising of Sopdet (Sirius) signal in ancient Egypt?',
          choices:['The dry season','The Nile flood and the New Year','The planting of wheat','The coronation of the pharaoh'],
          answer:1,
          correct:'Right. The moment Sopdet appeared on the horizon just before sunrise announced the Nile flood — the source of Egypt\'s agricultural wealth — and began the Egyptian New Year.',
          explain:'Sopdet\'s heliacal rising was the single most important astronomical event in Egyptian life. It marked the flood that fed the civilization and began the calendar year.'
        },
        reflect:'Think about a star, planet, or seasonal sign that people in your family or community use to mark a change of season or a new beginning. What does that sign tell you that a calendar date cannot?',
        task:'Find Sopdet (Sirius) in the Kemet sky — the brightest star. Tap it to read its star panel.',
        action:{ label:'Find Sopdet', icon:'fa-star', type:'formation', star:'Sirius' }
      },
      {
        title:'Sah — Osiris in the Eternal Sky',
        objectives:['Connect Orion (Sah) to the Egyptian afterlife myth','Understand how constellation stories encoded theology and kingship'],
        body:'In Kemet, the constellation we call Orion was Sah — the celestial form of Osiris, lord of the afterlife and eternal king. The pharaoh\'s soul (ba) was believed to ascend to join Sah among the stars after death. The Pyramid Texts — the oldest religious texts in the world, carved in the pyramids of Saqqara around 2400 BCE — describe the king "flying up to the sky like a heron" to join Sah and Sopdet. Sopdet (Sirius/Isis) follows Sah across the sky, mirroring the mythological bond of Isis and Osiris.',
        callout:'The sky was not just a reference for time — it was the landscape of the afterlife.',
        culture:'The three belt stars of Sah (our Orion\'s belt) have been proposed to align with the three great pyramids of Giza — a theory by Egyptologist Robert Bauval, first published in 1989 and expanded in the 1994 book The Orion Mystery, called the Orion Correlation Theory. This remains academically debated, but the intentional astronomical alignments of pyramid shafts are documented (Neugebauer & Parker, Egyptian Astronomical Texts). The southern shaft from the King\'s Chamber of the Great Pyramid pointed toward the culmination region of Alnitak (the eastern belt star) around 2500 BCE. The Pyramid Texts (Utterance 442) state: "The sky conceives you with Orion, the dawn-light bears you with Orion." The belt stars of Sah are one of the most recognized formations across all human cultures.',
        modern:'The three belt stars — Mintaka, Alnilam, and Alnitak — lie approximately 1,200–1,340 light-years away. They are massive O- and B-type blue supergiants, each many times more luminous than the Sun. Mintaka (the western belt star) rises within 0.5° of due east at any latitude on Earth — making Orion\'s belt one of the most reliable east-west direction finders in human history, used independently across cultures on every continent.',
        check:{
          question:'What was the Egyptian name for the constellation we call Orion?',
          choices:['Sopdet','Ra','Sah','Meseket'],
          answer:2,
          correct:'Correct. Sah was the celestial form of Osiris — the eternal king moving through the sky of the afterlife, followed by Sopdet (Sirius/Isis) who walked behind him.',
          explain:'Sopdet is Sirius (Isis). Ra is the sun god. Meseket is the Bull\'s Foreleg (Big Dipper). Sah is the celestial Osiris — our Orion.'
        },
        reflect:'Many cultures place the afterlife in the sky — the stars as souls of the dead, or as a road souls travel. Does any tradition in your own background locate the dead among the stars?',
        task:'Find Sah (Orion) in the Kemet sky — look for the three belt stars in a row.',
        action:{ label:'View Sah', icon:'fa-diagram-project', type:'formation', star:'Betelgeuse' }
      }
    ]
  },
  {
    id:'kemet-stars',
    culture:'kemet',
    title:'The Imperishable Ones',
    meta:'2 lessons · circumpolar sky',
    status:'encoded',
    desc:'Stars that never set were proof of eternal life to the Egyptians. Learn the circumpolar sky of Kemet — the Akhu (Imperishable Ones), Meseket (the Bull\'s Foreleg), and the Duat sky.',
    lessons:[
      {
        title:'Stars That Never Die',
        objectives:['Understand why circumpolar stars were sacred in Egyptian belief','Connect the Foreleg of the Bull (Meseket) to the funeral rite and immortality'],
        body:'The ancient Egyptians called circumpolar stars — those that never set below the horizon — the "Akhu" or "Imperishable Ones." From Egypt\'s latitude (~25–30°N), stars within about 28° of the north pole never set. The Egyptians saw these stars circling the north celestial pole eternally, and interpreted this as immortality. The constellation we see as the Big Dipper was the Meseket — the celestial foreleg of a slaughtered bull. This iron foreleg was used in the "Opening of the Mouth" ceremony, a funeral rite that restored the senses of the deceased. The pharaoh\'s soul rose to join the Akhu and never died.',
        callout:'Stars that never set were proof of eternal life — the soul could rise to join the Akhu and circle the heavens forever.',
        culture:'In the "Opening of the Mouth" ceremony, an iron adze shaped like the Meseket constellation was touched to the mummy\'s face and body to restore its senses for the afterlife. This adze — the Pesesh-kef — was identified with the Big Dipper stars that revolve around the north pole without ever setting. The north celestial pole was called the "indestructible place" (ikhemu-sek). The Book of the Dead contains formulas for the deceased to become an Akh — an "effective spirit" — and join the imperishable stars. (Sources: R.H. Allen, Star Names: Their Lore and Meaning, 1899; J.A. Sellers, The Death of Gods in Ancient Egypt, 1992)',
        modern:'Earth\'s axial precession traces a 26,000-year circle. In ancient Egypt\'s early period (~3000 BCE), the north pole was near Thuban in Draco — not Polaris. Kochab in Ursa Minor was the visible reference for the northern pole region. The stars that were "imperishable" (never-setting) from ancient Memphis varied from those of today due to precession. The circumpolar zone from latitude 30°N encompasses everything within ~30° of the pole — more than it would from a higher latitude like Honolulu.',
        check:{
          question:'What did ancient Egyptians call stars that never set below the horizon?',
          choices:['Sopdet','The Duat','The Akhu (Imperishable Ones)','The Meseket'],
          answer:2,
          correct:'Right. The Akhu — Imperishable Ones — were souls of pharaohs elevated to eternal life among the circumpolar stars. "Imperishable" meant they never touched the horizon and never died.',
          explain:'Sopdet is Sirius. The Duat is the underworld. Meseket is the Bull\'s Foreleg (Big Dipper). The Akhu are the imperishable spirits among the circumpolar stars.'
        },
        reflect:'What makes something "eternal" in your own framework? Does your cultural background have a concept of permanence tied to the sky or nature?',
        task:'Find the Meseket (Bull\'s Foreleg / Big Dipper) in the Kemet sky — the seven circumpolar stars.',
        action:{ label:'Find Meseket', icon:'fa-diagram-project', type:'formation', star:'Dubhe' }
      },
      {
        title:'The Duat — The Sky as Underworld',
        objectives:['Understand the Egyptian concept of the Duat as both underworld and sky region','Connect stellar invisibility to the Egyptian cycle of death and rebirth'],
        body:'The Duat was the Egyptian underworld — but it was not simply underground. It was also a region of the sky. When stars "died" by setting below the western horizon, they entered the Duat. When they rose again in the east, they were reborn. The 70-day period when Sirius was invisible between her setting in the west and her heliacal rising was the time Sopdet spent in the Duat. This was the same 70 days allotted for the embalming of the dead. The sky and the afterlife occupied the same geography in Egyptian thought.',
        callout:'In Kemet, death was a horizon crossing — not an ending, but a passage through the invisible sky.',
        culture:'The Amduat — "That Which Is in the Afterworld" — is the oldest complete Egyptian Book of the Underworld, inscribed on the walls of New Kingdom pharaoh tombs in the Valley of the Kings (circa 1550–1070 BCE). It describes the solar barque of Ra traveling through 12 hours of the night — 12 divisions of the Duat — and being reborn at dawn. Each hour has star deities and guardians. The living night sky was a map of where the sun traveled beneath the earth. The Egyptians did not separate astronomy and theology — they were the same discipline. (Sources: E.A.W. Budge translations; J. Assmann, Death and Salvation in Ancient Egypt, 2005)',
        modern:'The 70-day invisibility of Sirius from Egyptian latitudes is an accurate and repeatable astronomical observation. After its heliacal setting (when the sun overtakes Sirius), Sirius remains in the solar glare for approximately 70 days before reappearing (heliacal rising). The Egyptians measured this period with documented precision across many centuries. The 70-day figure appears consistently across Egyptian calendar texts and embalming ritual records, confirming the observed astronomical connection.',
        check:{
          question:'In Egyptian belief, what happened to a star when it set below the western horizon?',
          choices:['It was permanently destroyed','It entered the Duat (underworld) and was reborn when it rose again','It became the moon','It joined the Akhu forever'],
          answer:1,
          correct:'Correct. Setting was not death — it was a passage through the Duat, the invisible sky beneath the earth. Stars that rose again were reborn, just as Osiris was resurrected through Isis.',
          explain:'The Duat was not simply underground — it was also the invisible region of the sky. Stars set (entered the Duat) and rose again (were reborn). Every sunset was Ra entering the underworld; every sunrise was Ra reborn.'
        },
        reflect:'The Egyptian sky was a geography of death and rebirth — every sunset was the sun entering the Duat, every sunrise was resurrection. Does seeing a sunrise or sunset feel different knowing that one of history\'s longest civilizations saw it this way?',
        task:'Switch to Kemet sky and trace the path of a visible star from east to west — that movement is the star\'s eternal journey through the sky and the Duat.',
        action:{ label:'Open Sky', icon:'fa-circle-half-stroke', type:'tour' }
      }
    ]
  },
  {
    id:'kemet-decans',
    culture:'kemet',
    title:'The 36 Decans — Egypt\'s Star Clock',
    meta:'2 lessons · timekeeping · decans',
    status:'verified',
    desc:'3,000 years before the mechanical clock, Egyptian priests read the night sky to tell time. The 36 decans — rising stars that marked 10-day periods — were the world\'s first systematic astronomical calendar.',
    lessons:[
      {
        title:'The World\'s First Star Calendar',
        objectives:['Understand the Egyptian decan system and how 36 star groups divided the year','Connect the night sky to the invention of the 24-hour day'],
        body:'The ancient Egyptians divided the sky into 36 decans — groups of stars that rose just before dawn in succession, each marking a 10-day period (a "decade"). Thirty-six decans × 10 days = 360 days, plus five extra feast days, equaled the Egyptian administrative year. As one decan rose heliacally (just before the sun at dawn), the calendar advanced one period. This system — documented from at least 2100 BCE in the Coffin Texts and Diagonal Star Tables — was the world\'s first attempt to build a precise, observable astronomical calendar. The Egyptians did not simply count days; they read the sky.',
        callout:'The 36 decans rising in sequence were a clock written across the entire sky.',
        culture:'The Diagonal Star Tables appear on the lids of wooden coffins from the Middle Kingdom period (~2100–1650 BCE) — the dead were buried with a star map on their coffin lid so they could navigate time in the afterlife using the same stars that organized life on Earth. Each table listed which decan was rising at each hour of each 10-day period throughout the year. Scholars (Neugebauer & Parker, Egyptian Astronomical Texts, 1964) have identified approximately 36 decan stars or star groups, including Sopdet (Sirius), Khau (the Pleiades), and stars in the Orion region. This decan system later influenced Hellenistic astrology and, through it, the modern Western zodiac.',
        modern:'The Egyptian decan system is believed to be the origin of the 24-hour day. The Egyptians divided the night into 12 hours by counting which of 12 decans were rising during the night. Adding 12 daytime hours gave 24. As the year shifted, the decan tables were recalibrated — but the 12+12 structure persisted. The Babylonians and Greeks inherited this framework, passing it through Rome and into the modern world. Every time you check a 24-hour clock, you are using a timekeeping structure invented by Egyptian astronomer-priests reading rising stars before dawn.',
        check:{
          question:'What was a "decan" in ancient Egyptian astronomy?',
          choices:['A pharaoh\'s star name','A star group that rose just before dawn, marking a 10-day period','A festival of the sun god Ra','A type of pyramid shaft alignment'],
          answer:1,
          correct:'Correct. Each of the 36 decans rose just before dawn in succession, with each decan marking a 10-day period — together dividing the 360-day administrative year. The system was the world\'s first systematic astronomical calendar.',
          explain:'Decans were practical tools. Each decan\'s heliacal rising told priests the time of year precisely. The Coffin Text tables recorded each decan\'s position for each hour of the night, creating the world\'s first star clock.'
        },
        reflect:'We still organize time in units of 10 (decades, the metric system) and 12 (hours, months). The Egyptian legacy is embedded in the structure of modern time. Does knowing that the 24-hour day came from Egyptian star-priests reading the sky before dawn change how you experience time?',
        task:'Find Khau (the Pleiades) in the Kemet sky — one of the 36 decans, a star cluster that marked a 10-day period in the Egyptian calendar.',
        action:{ label:'Find Khau', icon:'fa-diagram-project', type:'formation', star:'Alcyone' }
      },
      {
        title:'Khau and the Living Coffin Lid',
        objectives:['Understand what the Diagonal Star Tables were and why they were on coffin lids','Connect the Pleiades decan to the Egyptian system of astronomical timekeeping'],
        body:'Khau was the Egyptian decan associated with the Pleiades — the star cluster that cultures worldwide have used as a calendar marker. When Khau rose heliacally (just before sunrise), Egyptian priests updated their star tables and the calendar moved forward one 10-day period. The Pleiades\' visibility, like their significance in Hawaiian, Māori, and Aboriginal Australian traditions, was one of the most universal celestial calendars in human history. In Kemet, their role was precise: part of a 36-star mechanical clock running across the sky.',
        callout:'The stars on a coffin lid were not decoration — they were a working sky map for navigating eternity.',
        culture:'The Coffin Texts Diagonal Star Tables (Middle Kingdom, ~2100–1650 BCE) listed 36 decan stars in a grid: rows for the 10-day periods, columns for the hours of the night. Each cell contained the name of the decan rising at that hour during that period. A priest reading the table and the sky simultaneously could tell the time of night at any point in the year with remarkable precision. The tables are "diagonal" because as the year progresses, the pattern shifts diagonally across the grid. This is the same effect we see today: constellations visible in December are gone by June. The Egyptian priests had mapped this drift and encoded it into a systematic reference tool — arguably the world\'s first astronomical almanac. (Source: Neugebauer & Parker, Egyptian Astronomical Texts, 1964; Clagett, Ancient Egyptian Science Vol. II)',
        modern:'The Pleiades (Ka Makaliʻi in Hawaiian, Matariki in Māori, Khau in Kemet, Subaru in Japanese) appear in the sky knowledge of nearly every human culture on Earth. Astronomers believe this near-universal recognition reflects a common ancestral heritage — that the Pleiades were noted by humans long before any civilization existed, possibly 100,000 years ago. The Diagonal Star Tables are the earliest written record of this recognition, dating from approximately 2100 BCE. They encode in hieroglyphs what may have been observed since the first humans watched the dawn sky.',
        check:{
          question:'Why were star tables painted on the inside of Egyptian coffin lids?',
          choices:['To frighten tomb robbers','So the dead could use the stars to navigate time in the afterlife','As decoration to honor the sky gods','To prove the pharaoh\'s astronomical knowledge'],
          answer:1,
          correct:'Correct. The Diagonal Star Tables on coffin lids were practical tools for the deceased — a sky map and calendar they could use to navigate time in the afterlife, just as priests used them on Earth to track the night hours.',
          explain:'The Egyptian afterlife was not a passive state — it required navigation. The deceased needed to know the stars, the hours, and the gates of the Duat. A star table on the coffin lid gave the dead the same navigational tools that living priests used to read the night sky.'
        },
        reflect:'The Hawaiians marked the New Year by the Pleiades. The Māori named them Matariki and built a New Year celebration around them. The Egyptians called them Khau and recorded their rising in a star clock. Do you see the Pleiades as a calendar marker in your own sky observation now?',
        task:'Open the Khau formation in the Kemet sky and read its full moolelo about the decan system.',
        action:{ label:'Open Khau', icon:'fa-diagram-project', type:'formation', star:'Alcyone' }
      }
    ]
  }
];
