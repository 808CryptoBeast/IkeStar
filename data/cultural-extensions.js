/* ════════════════════════════════════════════════════════════
   IKEVERSE CULTURAL EXTENSIONS
   data/cultural-extensions.js

   Add content here WITHOUT touching main.js or index.html.
   This file is loaded after main.js and patches the live data
   objects in place using window.IKE_EXTENSIONS.

   HOW TO ADD CONTENT:
   ─────────────────────────────────────────────────────────────
   1. STAR MOOLELO / CROSS-CULTURAL NAMES
      Add entries to starPatches — keyed by star ID exactly
      as it appears in STARS (Arcturus, Sirius, Vega, etc.)

   2. FORMATION MOOLELO
      Add entries to formationPatches — keyed by formation id
      exactly as set in CULTURES (ursamajor-w, sah-k, etc.)

   3. NEW FORMATIONS
      Push new formation objects into cultureFormations[cultureId]

   4. PLANET CONTENT
      Add entries to planetPatches — keyed by planet id
      (mercury, venus, mars, jupiter, saturn, uranus, neptune)

   All patches are merged at page load before the sky renders.
════════════════════════════════════════════════════════════ */


/* ════════════════════════════════════════════════════════════
   MOON KNOWLEDGE JSON LOADER
   Fetches data/moon-knowledge.json and makes it available
   as window.MAHINA_KNOWLEDGE for use in any panel
════════════════════════════════════════════════════════════ */
window.MAHINA_KNOWLEDGE = null;
fetch('data/moon-knowledge.json')
  .then(r => r.json())
  .then(data => {
    window.MAHINA_KNOWLEDGE = data;
    console.log('[IKE] Moon knowledge loaded:', data.cross_cultural_moon.length, 'cultures');
  })
  .catch(e => console.warn('[IKE] moon-knowledge.json not loaded:', e));

window.IKE_EXTENSIONS = {

  /* ── Star patches ─────────────────────────────────────────
     Keys match STARS[n].id exactly.
     Any field here is merged into the star object.
  ──────────────────────────────────────────────────────────── */
  starPatches: {

    Arcturus: {
      moolelo: `Hōkūleʻa — the Star of Gladness — is the zenith star of Hawaiʻi. When this star passes directly overhead, a navigator knows they are at the latitude of the Hawaiian Islands. The canoe Hōkūleʻa, launched in 1975, was the first traditional Polynesian voyaging canoe to sail from Hawaiʻi to Tahiti using only the stars, ocean swells, wind, and birds as navigation instruments. Its 1976 voyage covered 2,400 miles in 34 days, proving that ancient Polynesians could have settled the Pacific by skill, not accident. The star that bears its name is the brightest in the northern hemisphere and has been guiding navigators home to Hawaiʻi for over a millennium.`,
      cults: {
        arabic:     "Al-Simāk al-Rāmiḥ — the lance-bearing one; one of the brightest stars known to medieval Arabic astronomers",
        chinese:    "Dà Jiǎo — Great Horn; the most important star of the Azure Dragon constellation group",
        greek:      "Arcturus — guardian of the bear; Hesiod used its heliacal rising and setting to mark agricultural seasons in Works and Days",
        polynesian: "Hokule'a to all Polynesian navigators — the zenith star of Tahiti also; it guided migration both north and south",
        note:       "Confidence: verified Hawaiian name (Hōkūleʻa), verified navigation role"
      }
    },

    Sirius: {
      moolelo: `Hōkū-hele-wāwae — the star that runs fast to the south. Sirius is the brightest star in the night sky and a primary south bearing star for Hawaiian navigators. Its brilliant blue-white light made it unmistakable. In ancient Egypt, Sirius was Sopdet — the goddess Isis herself — whose heliacal rising after 70 days of invisibility signaled the Nile flood and the Egyptian New Year. The entire agricultural civilization of Egypt was calibrated to this single star. Hawaiian navigators used Sirius as a south compass point: when sailing south, Sirius rising behind you confirmed your course.`,
      cults: {
        kemet:      "Sopdet / Sothis — the goddess Isis; her 70-day disappearance and heliacal return marked the Nile flood and the Egyptian New Year",
        arabic:     "Al-Shiʿrā — the Syrians called it the leader because it precedes the other bright stars across the meridian",
        chinese:    "Tiān Láng — Heavenly Wolf; associated with military readiness and wolves in the sky",
        greek:      "Seirios — the scorcher; Hesiod said when Sirius rises with the sun, the days are most oppressive",
        note:       "Confidence: verified Hawaiian navigation star; exact Hawaiian name varies by tradition"
      }
    },

    Vega: {
      moolelo: `Vega is the fifth-brightest star and was the pole star 12,000 years ago — before Polaris — and will be again in 13,000 years due to Earth's axial precession. In China, Vega is Zhī Nǚ — the Weaving Maid — separated from her lover Niú Láng (Altair) by the Milky Way. They meet once a year when magpies form a bridge across the sky on the seventh day of the seventh lunar month, celebrated as Qīxī — the Star Festival. Hawaiian navigators recognized this brilliant white star as a bearing point in the summer sky.`,
      cults: {
        chinese:    "Zhī Nǚ — the Weaving Maid; forbidden from her lover Altair by the Silver River (Milky Way), they reunite once a year on Qīxī",
        arabic:     "Al-Nasr al-Wāqiʿ — the falling eagle or vulture; the Wing Falling constellation",
        greek:      "Lyra — the lyre of Orpheus, placed in the sky after his death; brightest star of the constellation",
        note:       "Confidence: astronomical facts verified; Hawaiian name not definitively recorded"
      }
    },

    Antares: {
      moolelo: `Kaʻaʻahai — the moving one of summer. Antares is the heart of Scorpius and the dominant star of the Hawaiian summer sky. Its brilliant red-orange color made it the fire-heart of the fish hook of Māui that blazes across the southern heavens from June through September. Ancient navigators named it the Rival of Mars (Antares = Anti-Ares) because its red color so closely matches the Red Planet. For Hawaiian navigators, Kaʻaʻahai rising in the southeast on spring evenings signaled the approach of summer sailing season.`,
      cults: {
        mesopotamian: "The Scorpion Star — one of the four Royal Stars of Persian astronomy; the guardian of the western sky at autumn equinox",
        arabic:       "Qalb al-ʿAqrab — heart of the scorpion; one of the most important stars in Arabic star lore",
        chinese:      "Xīn Sù — Heart Lunar Mansion; the middle star of three representing the emperor's seat",
        greek:        "Antares — rival of Mars; Ptolemy listed it as one of the six brightest stars",
        note:         "Confidence: verified Hawaiian summer navigation star; Kaʻaʻahai documented in chants"
      }
    },

    Canopus: {
      moolelo: `Canopus is the second brightest star in the sky and the great south latitude reference for Pacific navigators. As you sail south from Hawaiʻi, Canopus rises higher and higher above the southern horizon — a living altimeter for latitude. When Canopus reaches the zenith, you have sailed to latitude 37°S — the latitude of southern Australia. In Māori tradition, Canopus is Atutahi — the firstborn star, so sacred it stands alone outside the Milky Way basket. Aboriginal Australians call it Waa — the Crow — a powerful trickster and culture hero who brought fire to humanity.`,
      cults: {
        polynesian:  "Atutahi — the Firstborn Star; so tapu (sacred) it stands alone outside the Milky Way; zenith star for southern island groups",
        aboriginal:  "Waa the Crow (Boorong people, Victoria) — trickster culture hero who brought fire; seasonal ceremony marker",
        arabic:      "Suhayl — the navigator's star of the south; legendary in Arabic navigation of the Indian Ocean",
        kemet:       "Known to Egyptian navigators through trade contacts with southern peoples",
        note:        "Confidence: verified Polynesian (Atutahi) and Aboriginal (Waa) names; Hawaiian navigation role documented"
      }
    },

    Aldebaran: {
      moolelo: `Aldebaran — the red eye of the Bull — burns with an amber fire that navigators across cultures have used as a winter bearing star. One of the four Royal Stars of ancient Persian astronomy (along with Antares, Fomalhaut, and Regulus), it was a guardian of the eastern sky at spring equinox 3,000 years ago. Hawaiian navigators read the V-shaped Hyades cluster behind it as a constellation anchor. Its red-orange color tells the trained eye it is a cool giant star nearing the end of its life — 44 times the diameter of our Sun.`,
      cults: {
        persian:    "Tascheter — guardian of the eastern sky; one of the four Royal Stars marking the seasons",
        arabic:     "Al-Dabarān — the follower; it follows the Pleiades across the sky each night",
        chinese:    "Bì Sù — Net Lunar Mansion; the Hyades cluster behind it forms the net",
        note:       "Confidence: astronomical facts verified; Hawaiian navigation role probable"
      }
    },

    Polaris: {
      moolelo: `Hōkūpaʻa — the Fixed Star — is the only star in the sky that does not rise or set. All other stars wheel around it once every 24 hours as the Earth rotates, but Hōkūpaʻa hangs motionless above the north celestial pole. For Hawaiian navigators, its altitude above the northern horizon is precisely equal to their latitude — at Hawaiʻi's 21°N, it stands 21° above the horizon. This is celestial navigation's most elegant fact: the sky carries your latitude written in the altitude of a single fixed star. Hōkūpaʻa was not always the pole star — precession carries the Earth's axis in a circle over 26,000 years. Kochab was the pole star when the Egyptians built the pyramids; Thuban when the Great Pyramid's shafts were aligned.`,
      cults: {
        arabic:     "Al-Qiṭb al-Shamālī — the Northern Pivot; Arab navigators of the Indian Ocean relied on its altitude for latitude",
        chinese:    "Tiān Shu — Celestial Pivot; the center around which all the sky turns",
        greek:      "Pole Star of the Little Bear; sailors called on the Bears (Ursa Major + Minor) for navigation",
        note:       "Confidence: verified Hawaiian name (Hōkūpaʻa); verified navigation use"
      }
    },

    Spica: {
      moolelo: `Spica — spike to Spica — is one of the most used mnemonic arcs in navigation. Follow the curve of the Big Dipper's handle to Arcturus, then spike down to Spica. This arc, spanning 90° of sky, creates the most reliable spring south bearing available to northern hemisphere navigators. The Greek astronomer Hipparchus used Spica to discover the precession of the equinoxes in 127 BCE — comparing his own measurements to those of Timocharis 150 years earlier, he noticed the star had shifted. This single star revealed one of the great patterns of astronomy.`,
      cults: {
        arabic:     "Al-Simāk al-Aʿzal — the unarmed lance-bearer; paired with Arcturus as the two Simāks",
        chinese:    "Jiǎo Sù — Horn Lunar Mansion; the first of the 28 Chinese lunar mansions, beginning the eastern sky",
        greek:      "Alpha Virginis — the wheat sheaf in the hand of Virgo; used by Hipparchus to discover precession",
        note:       "Confidence: astronomical role verified; Hawaiian navigation use as south bearing confirmed"
      }
    },

    Rigel: {
      moolelo: `Rigel — the blue foot of Orion — burns with the blue-white heat of a supergiant 120,000 times more luminous than our Sun. At 860 light years, it is one of the most distant naked-eye stars. Hawaiian navigators called the bright foot Puana — the Blossom — marking the southern anchor of Ke Kā o Makaliʻi, the great winter constellation. Rigel's blue-white color tells the navigator it is a young, hot star still at the height of its power — unlike the red giant Betelgeuse at Orion's shoulder, which is old and nearing its end.`,
      cults: {
        arabic:     "Rijl Jauzāʾ al-Yusrā — the left leg of the great one; the great one being the giant Orion figure",
        chinese:    "Cān Sù participant — one of the major stars of the Net Lunar Mansion",
        note:       "Confidence: Hawaiian name Puana documented in star chants"
      }
    },

    Betelgeuse: {
      moolelo: `Ke Aliʻi — The Chief. Betelgeuse sits at the shoulder of the great winter figure, burning with the deep red-orange of an aging red supergiant. It is so large that if placed at the center of our solar system, its surface would extend past the orbit of Jupiter. Betelgeuse will eventually explode as a supernova visible in daylight. Hawaiian navigators identified the whole Orion figure as Ke Kā o Makaliʻi — the Canoe Bailer of Makaliʻi — and Betelgeuse as the chief's position at the shoulder of the form.`,
      cults: {
        arabic:     "Ibṭ al-Jauzāʾ — armpit of the great one; one of the four royal stars of Arabic astronomy",
        chinese:    "Cān Sù — one of the 28 lunar mansions; key calendrical marker",
        maya:       "Associated with the turtle-back and three hearthstones of creation",
        note:       "Confidence: Hawaiian name Ke Aliʻi documented; moolelo from traditional sources"
      }
    },

    Procyon: {
      cults: {
        arabic:     "Al-Ghūmaisa — the bleary-eyed (weeping); sister star to Sirius (Al-Shiʿrā) across the Milky Way; they are separated, and the smaller weeps",
        chinese:    "Nán Hé — the southern river; part of the Jǐng lunar mansion (the Well) in the Vermilion Bird of the South",
        kemet:      "Associated with Sopdet's companion — part of the winter sky sacred to Osiris/Sah's seasonal return",
        note:       "Hawaiian name Kaelo (The Bailer) — part of Ke Kā o Makaliʻi star line"
      }
    },

    Capella: {
      cults: {
        arabic:     "Al-ʿAyyūq — the goat; one of the most prominent winter stars in Arabic astronomy; also associated with the Pleiades grouping in some traditions",
        chinese:    "Wǔ Chē — the Five Chariots; the Auriga pentagon as military chariots; Capella is the lead charioteer",
        latin:      "Capella — the little she-goat; represents Amalthea, the goat who suckled the infant Zeus",
        note:       "Hawaiian name Hōkū-lei (Crown Star) — crowns the northwest end of Ke Kā o Makaliʻi star line"
      }
    },

    Castor: {
      cults: {
        arabic:     "Al-Rās al-Tawʾam al-Muqaddam — the head of the preceding twin; the brighter-seeming of the twin pair that Arabs named together as Al-Tawʾamān",
        chinese:    "Jǐng Sù — the Well lunar mansion; Castor and Pollux together form part of this mansion in the Vermilion Bird of the South",
        note:       "Hawaiian name Nā Pōkea-1 (First of the Twin Stars) — north side of Ke Kā o Makaliʻi star line"
      }
    },

    Pollux: {
      cults: {
        arabic:     "Al-Rās al-Tawʾam al-Muʾakhkhar — the head of the following twin; slightly brighter than Castor despite the β designation",
        chinese:    "Jǐng Sù — the Well lunar mansion; paired with Castor as river banks flanking the celestial canal",
        greek:      "Pollux — the immortal twin; son of Zeus himself; patron of sailors and boxers; has an exoplanet (Pollux b)",
        note:       "Hawaiian name Nā Pōkea-2 (Second of the Twin Stars) — south side of Ke Kā o Makaliʻi star line"
      }
    },

    Fomalhaut: {
      cults: {
        persian:    "Hastorang / Haftorang — one of the four Royal Stars of Persian astronomy (with Aldebaran, Antares, Regulus); guardian of the southern sky at winter solstice",
        arabic:     "Fam al-Ḥūt — mouth of the (southern) fish; the brightest star in a sparse southern sky, unmistakable by isolation alone",
        chinese:    "Bǎi Fèi — the north gate of the military camp; in the Black Tortoise of the North mansion grouping",
        note:       "Hawaiian name Hōkū-ā (The Autumn Star) — lone bright autumn south bearing star; exoplanet directly imaged 2008"
      }
    },
  },

  /* ── Formation patches ─────────────────────────────────────
     Keys match formation id exactly (e.g. "ursamajor-w", "sah-k")
     Any field here overwrites/extends the formation object.
  ──────────────────────────────────────────────────────────── */
  formationPatches: {

    "nahiku": {
      moolelo: `Nā Hiku — The Seven — is the most memorized star pattern in Hawaiian sky knowledge. A navigator recited the seven stars in order from bowl to handle tip: learning their sequence meant knowing north at any hour of any night. The two outer bowl stars, Dubhe and Merak, always point toward Hōkūpaʻa (Polaris). The handle arc, when extended, sweeps toward Hōkūleʻa (Arcturus) and then to Hōkū-keokeo (Spica) — a 90° arc that a navigator could trace with one hand. The Big Dipper never sets below the horizon from Hawaiʻi — it is a circumpolar compass always available.`,
      navUse: "Follow Dubhe→Merak extended 5× to find Polaris. Follow handle arc to Arcturus, then spike to Spica.",
      seasonal: "Circumpolar — visible every night of the year from Hawaiʻi"
    },

    "hokupaa": {
      moolelo: `Hōkūpaʻa is the cornerstone of all Hawaiian celestial navigation. Its altitude above the northern horizon, measured by the width of a hand at arm's length, tells the navigator their exact latitude north. At Hawaiʻi (21°N), Hōkūpaʻa sits 21° up — about two hand-widths. Sail north and it rises; sail south and it sinks. This single measurement replaced the need for any instrument. The navigator's body became the sextant.`,
      seasonal: "Visible year-round; never moves"
    },

    "sah-k": {
      moolelo: `Sah — Osiris — is the soul of the Egyptian winter sky. The three belt stars of Sah align so precisely with the three pyramids of Giza that archaeologists believe the pyramid builders deliberately aligned their monuments to this star group. The southern shaft of the King's Chamber in the Great Pyramid pointed directly at Alnitak (Zeta Orionis, the leftmost belt star) during the pyramid's construction circa 2560 BCE. When Sah rose before dawn in ancient Egypt, it signaled the approach of the Nile flood that sustained the entire civilization.`,
      navUse: "Belt stars mark due east/west — the most precise east-west bearing in the sky"
    },

    "meseket-k": {
      moolelo: `The Foreleg of the Bull — Khepesh — represents the severed foreleg of the god Set, placed in the sky as a warning. The circumpolar stars were called the Imperishable Ones (Akhu) — souls of pharaohs who never set below the horizon because they never truly die. The Book of the Dead describes the soul navigating by these northern stars on the journey through the Duat (underworld). The Egyptians oriented their temples and tombs to the northern circumpolar stars to align the deceased with the immortal realm.`,
      seasonal: "Circumpolar — never sets at Egypt's latitude (30°N)"
    },

    "maui-hook-p": {
      moolelo: `Te Matau a Māui — the Fish Hook of Māui — is one of the great stories of the Pacific. Māui, the trickster demigod, fashioned a magical hook from the jawbone of his ancestor and baited it with a piece of his own blood. He persuaded his brothers to paddle their canoe out to sea, then cast the hook into the deep ocean. He caught not a fish but land itself — dragging the North Island of New Zealand (Te Ika a Māui — The Fish of Māui) up from the ocean floor. The curved tail of Scorpius traces the path of that legendary hook across the summer sky.`,
      seasonal: "Summer evenings; rises in the southeast, arcs across the south"
    },

    "atutahi-p": {
      moolelo: `Atutahi — the Firstborn Star — was born before the Milky Way basket was woven. All other stars were woven into the great basket of the sky, but Atutahi was so tapu (sacred) and so ancient that it could not be included. It stands alone, outside the Milky Way, as the chief of all stars. Māori navigators used it as the zenith star for island groups south of the equator. Seeing Atutahi high overhead confirmed a southern latitude. As you sail south from Hawaiʻi, watch Canopus/Atutahi rise higher each night — a living depth-meter for latitude.`
    },

    "sevensisters-a": {
      moolelo: `The Seven Sisters story is told by hundreds of Aboriginal Australian language groups — with remarkable consistency across thousands of kilometers. Seven young women (the Pleiades) are pursued by a man (a hunter, often associated with Orion or Aldebaran). The story encodes critical law about kinship — some men are forbidden from pursuing certain women. Researchers believe the fundamental narrative may be 100,000 years old, making it possibly the oldest continuously-told story on Earth. The stars themselves have served as a dating mechanism: by back-calculating the Pleiades' position 100,000 years ago, astronomers can test whether the sky matches the story's astronomical details.`
    },

    "emu-a": {
      moolelo: `The Emu in the Sky is one of the most profound expressions of the uniqueness of Aboriginal Australian astronomy: the emu is not drawn in stars but in the spaces between stars — in the dark nebulae, the great clouds of dust blocking the Milky Way's light. The head is the Coal Sack, a dark nebula near the Southern Cross. The neck and body stretch along the dark river between the bright star fields. When the Emu appears in a specific position in autumn evenings, emu eggs become available on the ground — the astronomical calendar precisely matches the ecological event. This is sky knowledge as survival knowledge.`
    },

    "cosmos-weave-ike": {
      moolelo: `The Cosmic Weave holds the vision of Ikeverse: all sky knowledge traditions simultaneously true. The Great Square of Pegasus was the Egyptian Meseket (the boat of the night sun), the Greek flying horse, the Phoenician navigator's square, and an Ikeverse symbol of the loom on which all stories are woven. No tradition has exclusive claim on the sky. The stars belong to all humanity — and each tradition reveals something the others do not see. Together they form a more complete picture of the universe than any single tradition alone.`
    },
  },

  /* ── Planet patches ────────────────────────────────────────
     Keys: mercury, venus, mars, jupiter, saturn, uranus, neptune
  ──────────────────────────────────────────────────────────── */
  planetPatches: {

    mercury: {
      cults: {
        arabic:      "Utarid (عطارد) — the Arabic name inherited from the Babylonian Nabu, scribe of the gods; Arabic astronomers tracked Mercury's rapid motion through detailed tables",
        polynesian:  "No verified traditional Polynesian name — Mercury rarely escapes twilight and was not widely documented as a navigation star",
        dogon:       "No specific Dogon planet name recorded in the literature — Dogon astronomical knowledge focused primarily on Sirius and its companion star"
      }
    },

    venus: {
      moolelo: `Hōkūloa — the Long Star / Morning Star — is the brightest object in the night sky after the Moon, sometimes bright enough to cast a faint shadow. Venus was so brilliant that ancient cultures worldwide identified it as two separate stars: a morning star and an evening star. The Babylonians were the first to realize it was one object, around 1600 BCE. Hawaiian navigators distinguished Hōkūloa as a primary bearing object: its rising point on the eastern horizon could be used as a compass direction, and its phase (crescent, gibbous, or full) confirmed its position relative to the Sun.`,
      cults: {
        mesopotamian: "Ishtar / Inanna — the goddess of love and war; her 8-year cycle was precisely tracked in the Venus Tablets of Ammisaduqa (1600 BCE)",
        maya:         "Chak Ek' — the Great Star; Venus was the most important celestial body to the Maya, its 584-day cycle governing war, ceremony, and agriculture. The morning star appearance after inferior conjunction was a time to attack enemies.",
        greek:        "Phosphorus (morning star) / Hesperus (evening star) — two names before they were understood as one planet",
        chinese:      "Tài Bái — the Great White One; associated with war and the metal element; evening star = Tài Bái, morning star = Qǐ Míng",
        arabic:       "Al-Zuhara (الزهرة) — the brilliant; named for its extraordinary brightness; also called Al-Nāʾira (the bright). Arabic astronomers used Venus phases in optical theory debates.",
        polynesian:   "Kopu (morning star rising before dawn) / Meremere (evening star following the sun) — Māori navigators recognized Venus's dual role; Kopu was associated with the birth of new things",
        dogon:        "No specific Dogon name recorded — Venus was observed but Dogon astronomical focus centered on Sirius and its companions",
        note:         "Confidence: Hawaiian name Hōkūloa verified; cross-cultural data verified"
      }
    },

    mars: {
      moolelo: `Hōkū-ʻula — the Red Star — was the wanderer whose red color made it stand out from all other stars. Mars moves noticeably against the background stars over weeks, sometimes going retrograde (appearing to move backward) which confused early astronomers until the heliocentric model explained it. Its red color comes from iron oxide — rust — on its surface. For Hawaiian navigators, the Red Star was a bearing object but also a marker of time: its retrograde periods could be counted to track longer cycles.`,
      cults: {
        mesopotamian: "Nergal — god of plague, death, and the underworld; its red color evoked fire and blood; Babylonian astronomers called it SAL.BAT.A.NU or Ṣalbatānu",
        roman:        "Mars — god of war; the planet's blood-red color and erratic motion matched the chaos of battle",
        chinese:      "Yíng Huò (熒惑) — the Fiery Wanderer or the Dazzler; its retrograde motion was an omen of disaster; its disappearance was cause for state alarm",
        arabic:       "Al-Mirrikh (المريخ) — the spear-thrower; the red coloring recalled warriors and conflict, consistent with Babylonian/Roman associations",
        polynesian:   "Mata-a-Māui — the eye of Māui; recognized for its reddish hue; some Pacific traditions saw red wandering stars as omens",
        dogon:        "No specific Dogon name recorded — visible planets were recognized but not the focus of Dogon astronomical texts",
        note:         "Confidence: Hawaiian name Hōkū-ʻula documented; Arabic and Chinese names verified"
      }
    },

    jupiter: {
      moolelo: `Hōkū-nui — the Great Star / Big Star — is the largest planet in the solar system and the third brightest object in the night sky after the Moon and Venus. Its four largest moons (Io, Europa, Ganymede, Callisto) were the first moons of another planet ever seen by human eyes, discovered by Galileo in 1610. This single observation shattered the idea that all celestial bodies orbit Earth. For Hawaiian navigators, Jupiter's brightness made it a reliable bearing star that moved relatively slowly across the sky, staying in one constellation for about a year.`,
      cults: {
        mesopotamian: "Marduk — the chief deity of Babylon; the brightest wanderer matched the king of gods; Babylonian astronomers produced 400-year tables of Jupiter's positions",
        chinese:      "Suì Xīng (歲星) — Year Star; Jupiter's 12-year orbital period formed the basis of the Chinese 12-year zodiac cycle. Chinese astronomers tracked Jupiter's position to determine the year of the cycle.",
        greek:        "Zeus — king of the Olympians; the largest planet matched the most powerful god",
        arabic:       "Al-Mushtarī (المشتري) — the prosperous or lucky; Jupiter was the greater benefic in Arabic/Islamic astrology, bringing fortune and wisdom",
        polynesian:   "Hōkū-nui (Hawaiian tradition, shared across eastern Polynesia) — the great/big star; recognized as a slow-moving bright wanderer",
        kemet:        "Horus Who Limits the Two Lands — Horus in his boundary-setting aspect; the planet's steady movement through the sky marked divine order",
        note:         "Confidence: Hawaiian name Hōkū-nui documented; Arabic Al-Mushtarī verified"
      }
    },

    saturn: {
      moolelo: `Hōkū-ʻōlinolino — the Glistening / Twinkling Star — was the most distant planet known to ancient astronomers. Its rings, invisible to the naked eye, were a complete mystery until Galileo saw them as strange bumps through his telescope in 1610. He called them Saturn's "ears." Forty-five years later, Christiaan Huygens correctly identified them as a ring system. Saturn's rings are less than 100 meters thick but span 282,000 km — wider than the distance from the Earth to the Moon. Hawaiian navigators recognized Saturn as a bright slow-moving wanderer that took nearly 30 years to complete one circuit of the sky.`,
      cults: {
        mesopotamian: "Ninurta / Kaiwanu — the star of the sun (Shamash); the slowest visible planet; Babylonians called it GENNA — meaning uncertain, but associated with the element lead",
        roman:        "Saturnus — god of agriculture and time; the ringed planet's slow movement seemed ancient and wise; the day Saturday is named for Saturn",
        chinese:      "Zhèn Xīng (鎮星) — Quelling Star; associated with the earth element and stability; its slow motion was seen as a steadying force on the other planets",
        arabic:       "Zuhal (زحل) — the one who withdraws; the slowest naked-eye planet seemed to hold itself apart; the greater malefic in Arabic astrology",
        polynesian:   "Not widely documented as a distinct named object in Pacific navigation traditions — its slow motion made it less useful for real-time wayfinding",
        note:         "Confidence: Hawaiian name Hōkū-ʻōlinolino documented; Arabic Zuhal and Chinese Zhèn Xīng verified"
      }
    },

    uranus: {
      cults: {
        western:  "Uranus — discovered 1781 by William Herschel; originally proposed as 'Georgium Sidus' for King George III; eventually named for the Greek sky god",
        chinese:  "Tiānwángxīng (天王星) — Star of the Heavenly King; the Chinese name assigns it to the celestial ruler, reflecting its discovery in the telescope era",
        note:     "No traditional cultural name — telescope era discovery; below reliable naked-eye visibility for most observers"
      }
    },

    neptune: {
      cults: {
        western:  "Neptune — discovered 1846 through mathematical prediction by Adams and Le Verrier before telescopic confirmation; named for the Roman god of the sea",
        chinese:  "Hǎiwángxīng (海王星) — Star of the Sea King; the Chinese name appropriately mirrors the Roman sea-god naming",
        note:     "No traditional cultural name — requires telescope; discovered in the mathematical era of astronomy"
      }
    },
  },

  /* ── New formations to inject ──────────────────────────────
     These are pushed into the existing culture formations arrays.
     Use this to add formations that don't exist yet.
  ──────────────────────────────────────────────────────────── */
  newFormations: {

    /* ── HAWAIIAN: The Four Great Star Lines ── */
    hawaiian: [
      {
        id: "ke-ka-line",
        name: "Ke Kā o Makaliʻi — Star Line",
        westEq: "Sirius · Procyon · Pollux · Castor · Capella",
        stars: ["Sirius","Procyon","Pollux","Castor","Capella"],
        lines: [["Sirius","Procyon"],["Procyon","Pollux"],["Pollux","Castor"],["Castor","Capella"]],
        meaning: "The Canoe-Bailer of Makaliʻi — five bright stars curving around Orion like a gourd bailing out a canoe.",
        moolelo: `Ke Kā o Makaliʻi is the first of the four great Nā ʻOhana Hōkū (Star Families) that organize the entire Hawaiian sky into a navigation system. The five stars curve above and around Orion like a gourd ladle (kā) scooping stars — or bailing water from a voyaging canoe. Each star carries its own name: Kohu (Sirius) blazes at the southeast tip; Kaelo (Procyon) marks the bailer's handle above the horizon; Nā Pōkea-2 (Pollux) and Nā Pōkea-1 (Castor) are the twin crosspiece; Hōkū-lei (Capella) crowns the northwest. When this arc appears in the winter evening sky, Makaliʻi (the Pleiades) rides overhead — the god Lono's time, the Makahiki season of peace and abundance. Nainoa Thompson, the first Hawaiian navigator to sail the ancient routes in modern times, identified this as one of the most critical star patterns for winter ocean voyaging.`,
        navUse: "Winter navigation arc — Sirius rising SE to Capella overhead gives the SW-NE axis of the night sky",
        seasonal: "Winter evenings; best November through March"
      },
      {
        id: "iwikuamo-o",
        name: "Iwikuamoʻo — The Backbone",
        westEq: "Polaris → Arcturus → Spica → Southern Cross",
        stars: ["Polaris","Arcturus","Spica","Acrux","Gacrux"],
        lines: [["Polaris","Arcturus"],["Arcturus","Spica"],["Spica","Acrux"],["Acrux","Gacrux"]],
        meaning: "The Backbone of the sky — the great north-south spine connecting Hōkūpaʻa to Newe.",
        moolelo: `Iwikuamoʻo — the lizard's backbone — names the great north-south axis of the Hawaiian sky. Every vertebra is a navigation landmark: Hōkūpaʻa (Polaris) sits at the north, the fixed anchor that never moves. Moving south along the spine, Hōkūleʻa (Arcturus) is the zenith star of Hawaiʻi — the star that, when directly overhead, confirms you stand at Hawaiian latitude. Further south, Hōkū-keokeo (Spica) blazes as the white southern bearing star of spring. At the far southern end, Newe (the Southern Cross) provides the south pole indicator. This star line embodies the entire idea of Hawaiian wayfinding: a living spine of known stars connecting the north to the deep south, allowing the navigator to know their position anywhere on the ocean.`,
        navUse: "North-south axis — Polaris altitude = north latitude; Arcturus at zenith = Hawaiʻi confirmed; Spica = spring south; Cross = deep south",
        seasonal: "Year-round; sections visible in all seasons"
      },
      {
        id: "manaiakalani",
        name: "Manaiakalani — The Chief's Fishline",
        westEq: "Arcturus → Spica arc → Scorpius → Summer Triangle",
        stars: ["Arcturus","Spica","Antares","Vega","Altair"],
        lines: [["Arcturus","Spica"],["Spica","Antares"],["Antares","Altair"],["Altair","Vega"]],
        meaning: "The Fishline of the Demigod — the arc from the zenith star through summer and back to the north.",
        moolelo: `Manaiakalani — the fishline of the chief (some say of Māui himself) — traces the great seasonal arc of the summer sky. Nainoa Thompson describes the four star lines as the four sides of the Hawaiian celestial navigation system; Manaiakalani is the eastern sweep, from the zenith star Hōkūleʻa (Arcturus) through the white bearing star Hōkū-keokeo (Spica), to the blazing red heart Kaʻaʻahai (Antares), then reaching up to Hōkū-maʻa-2 (Altair) on the celestial equator — an equatorial bearing star — and finally to Humu (Vega) in the summer triangle overhead. A navigator sailing east could read this entire arc at once to know their orientation. The name "manaiakalani" also means "that which comes from the heavens" — the line that connects the world of the gods to the world of the navigator.`,
        navUse: "Spring-summer arc — traces east-to-south bearings; Altair marks the celestial equator precisely",
        seasonal: "Spring through autumn"
      },
      {
        id: "ka-lupe-kawelo",
        name: "Ka Lupe o Kawelo — The Kite of Kawelo",
        westEq: "Great Square of Pegasus + Fomalhaut",
        stars: ["Markab","Scheat","Alpheratz","Algenib","Fomalhaut"],
        lines: [["Markab","Scheat"],["Scheat","Alpheratz"],["Alpheratz","Algenib"],["Algenib","Markab"],["Algenib","Fomalhaut"]],
        meaning: "The Kite of the Chief Kawelo — the Great Square flies as a kite with Fomalhaut as its tail.",
        moolelo: `Ka Lupe o Kawelo — the kite of Kawelo — names the Great Square of Pegasus as a kite flying across the autumn sky. Kawelo was a great Kauaʻi chief and warrior whose kite (lupe) was legendary. The four stars of the Great Square form the diamond body of the kite; the bright star Hōkū-ā (Fomalhaut) below forms the tail, tailing off toward the south. When the kite rises in the east in late summer, navigators know the autumn sailing season begins. The Great Square is so empty inside — almost no bright stars fill its interior — that it becomes a window into deep space, a dark portal in the autumn sky. For Polynesian navigators, its size (roughly 15° on a side, or two hand-spans) made it a useful angle-measuring tool. The Cassiopeia W to the north was read as the kite string stretching to the stars.`,
        navUse: "Autumn sky compass — Great Square rises due east; Fomalhaut gives south bearing; square sides give N-S-E-W reference",
        seasonal: "Autumn evenings; best September through November"
      },
      {
        id: "hawwinter-triangle",
        name: "Nā Hōkū ʻEkolu — The Navigator's Triangle",
        westEq: "Winter Triangle (Procyon · Sirius · Betelgeuse)",
        stars: ["Procyon","Sirius","Betelgeuse"],
        lines: [["Procyon","Sirius"],["Sirius","Betelgeuse"],["Betelgeuse","Procyon"]],
        meaning: "The Three Stars — navigator's triangulation tool connecting the three brightest winter stars.",
        moolelo: `Nā Hōkū ʻEkolu — the Three Stars — form the winter triangulation triangle explicitly taught in Hawaiian wayfinding. Kaelo (Procyon) blazes high to the northeast; Kohu (Sirius) burns brilliant white to the south; Ke Aliʻi (Betelgeuse) glows amber-red in the northwest. A navigator who can locate all three knows their position within the entire winter sky. The triangle they form is nearly equilateral — roughly 26° on each side — and can be used to judge angular distances across the dome of the sky. In Nainoa Thompson's teachings, these three stars orient the entire winter sky the way Arcturus, Antares, and Altair orient the summer sky.`,
        navUse: "Winter triangulation — three brightest winter stars form near-equilateral triangle; any one star locates the other two",
        seasonal: "Winter evenings; best December through March"
      },
      {
        id: "canopus-haw",
        name: "Hōkū-hoʻokele-waʻa — Canopus",
        westEq: "Canopus (Alpha Carinae)",
        stars: ["Canopus"],
        lines: [],
        meaning: "The Canoe-Steering Star — the great south latitude reference that rises higher the further you sail south.",
        moolelo: `Hōkū-hoʻokele-waʻa — the Canoe-Steering Star — is the second-brightest star in the night sky, and the most critical latitude reference for voyages toward the deep south. From Hawaiʻi at 21°N, it barely clears the southern horizon. As you sail south toward the equator and beyond, it rises higher night by night — a living altimeter measuring your southern progress. When Hōkū-hoʻokele-waʻa reaches about 15° above the horizon, you have crossed the equator. At 37°S — the latitude of southern New Zealand — it passes overhead at the zenith. Māori navigators call this star Atutahi, the firstborn and most sacred star. Hawaiian and Polynesian navigators shared knowledge of its rising behavior across the entire Pacific triangle of migrations.`,
        navUse: "South latitude indicator — altitude above horizon measures southern progress; near zenith = latitude 52°S",
        seasonal: "Visible low in south all year from Hawaiʻi; rises higher going south"
      }
    ],

    /* ── KEMET: New Formations ── */
    kemet: [
      {
        id: "orion-belt-kemet",
        name: "Sah's Belt — Three Stars of Osiris",
        westEq: "Orion's Belt",
        stars: ["Alnitak","Alnilam","Mintaka"],
        lines: [["Alnitak","Alnilam"],["Alnilam","Mintaka"]],
        meaning: "The three stars that align with the three pyramids of Giza",
        moolelo: `The three belt stars of Sah align with the three pyramids of Giza — Khufu, Khafre, and Menkaure — as seen from above. Robert Bauval's 1989 Orion Correlation Theory proposed this alignment was deliberate. The southern shaft of the King's Chamber in Khufu's pyramid pointed directly at Alnitak during construction circa 2560 BCE. These three stars were the physical embodiment of Osiris on Earth, with each pyramid a stone body for a pharaoh's soul journeying to join Sah in the sky.`,
        navUse: "Rise due east — the universal east bearing shared by all navigation traditions",
        seasonal: "Winter sky; heliacal rising in spring marked approach of Nile flood"
      },
      {
        id: "taweret-k",
        name: "Taweret — The Hippo Goddess",
        westEq: "Ursa Minor + chain to Ursa Major",
        stars: ["Polaris","Kochab","Dubhe","Merak"],
        lines: [["Polaris","Kochab"],["Kochab","Dubhe"],["Dubhe","Merak"]],
        meaning: "Taweret — the great hippo goddess who guards the circumpolar north, chained so she cannot flee.",
        moolelo: `In Egyptian sky religion, the northern circumpolar stars that never set — the Imperishable Ones — were guarded by Taweret, the hippo-headed protective goddess. The Little Dipper (Ursa Minor) forms the hippo's body, with Kochab as her eye and Polaris at her snout. But a hippo untethered is dangerous: the chain linking her to the Bull's Foreleg (Ursa Major) — running from Kochab through Dubhe and Merak — keeps her fixed at the north pole, unable to cause celestial chaos. Taweret in mortuary temples is always shown holding an ankh and standing on a crocodile's back; her sky form holds the universe in similar tension. As long as she is chained, the circumpolar stars — the pharaonic souls — continue their eternal circuit. This hippo-and-chain formation appears in the ceilings of the tomb of Seti I and the Temple of Hathor at Dendera.`,
        navUse: "Circumpolar north — the chained hippopotamus never sets; Polaris at the snout = true north",
        seasonal: "Year-round; circumpolar at Egypt's latitude (30°N)"
      },
      {
        id: "khau-k",
        name: "Khau — The Pleiades Decan",
        westEq: "Pleiades",
        stars: ["Alcyone","Atlas","Electra","Maia","Merope"],
        lines: [["Atlas","Alcyone"],["Alcyone","Electra"],["Electra","Maia"],["Maia","Alcyone"],["Alcyone","Merope"]],
        meaning: "Khau — one of the 36 Egyptian decans; a 10-day time marker in the Egyptian star calendar.",
        moolelo: `The ancient Egyptians divided the sky into 36 decans — star groups that rose just before dawn in succession, each marking a 10-day period of the 360-day administrative year. Khau was the decan associated with the Pleiades, the glittering cluster that the Egyptians recognized as a distinct calendar marker. When Khau rose heliacally (just before sunrise), priests in the temples updated their star clocks. The decan system was the world's first astronomical calendar designed for precision timekeeping — carved in diagonal grids on the lids of coffins (the Coffin Texts) so the dead could use the stars to navigate time in the afterlife just as the living used them on Earth. The Pleiades appear on the astronomical ceiling of the tomb of Senmut, vizier to Queen Hatshepsut (c. 1500 BCE).`,
        navUse: "Seasonal decan — heliacal rising marked a 10-day period in the Egyptian administrative calendar",
        seasonal: "Winter sky; best November through April"
      },
      {
        id: "boat-ra-k",
        name: "Wjꜣt — The Boat of Ra",
        westEq: "Scorpius (southern sky)",
        stars: ["Antares","Sargas"],
        lines: [["Antares","Sargas"]],
        meaning: "The sacred solar barque that carries Ra through the night and the underworld.",
        moolelo: `The most important journey in Egyptian cosmology is Ra's nightly voyage across the sky in his sacred barque (wjꜣt — 'the Great One'). During the day Ra's solar boat sails the heavens; at sunset it descends into the Duat (the underworld) and must pass through twelve hours of darkness, fighting the serpent Apep before rising again at dawn. The southern summer sky — where the Milky Way rises densely above the southern horizon — was seen as the celestial Nile on which the barque sailed. The heart of Scorpius (Antares) blazes as a lantern on Ra's ship sailing south. For Egyptian priests, tracking the position of Antares through the night told them the hour — the star's transit through the south corresponded to the midpoint of Ra's underworld voyage.`,
        navUse: "Summer south bearing; Antares marks solar midnight when due south",
        seasonal: "Summer evenings; Scorpius in the southern sky"
      },
      {
        id: "bat-k",
        name: "Bat — The Celestial Cow Goddess",
        westEq: "Taurus (Hyades V · Aldebaran · Pleiades)",
        stars: ["Alcyone","Aldebaran","Elnath"],
        lines: [["Alcyone","Aldebaran"],["Aldebaran","Elnath"]],
        meaning: "Bat — ancient cow goddess of the sky; her face is the V of Taurus, Aldebaran her red eye.",
        moolelo: `Bat is one of the oldest sky deities in Egyptian religion, predating Hathor (who later absorbed her). She is depicted as a human woman with a cow's head, or as a woman with inward-curving cow horns and a disk between them — exactly the shape of the Taurus V-cluster in the sky. The brilliant red star Aldebaran is her eye, blazing at the center of the V-shaped Hyades cluster — the physical shape of a cow face in the heavens. The Pleiades above (Alcyone and the cluster) form her crown. Elnath, the northern horn of Taurus, rises from beside her eye toward the stars. Bat's emblem appears on the Narmer Palette (3100 BCE), one of the oldest surviving Egyptian royal artifacts — her celestial form looking down on the unification of Upper and Lower Egypt. Her association with the Taurus region placed her in the western sky each spring, watching the year's cattle-herding season begin.`,
        navUse: "Spring western sky; Aldebaran as the red eye is a reliable seasonal bearing star",
        seasonal: "Winter and spring; Taurus sets in the west by late May"
      },
      {
        id: "khepri-k",
        name: "Khepri / The Celestial Lion — Horus of the Horizon",
        westEq: "Leo (Regulus · Algieba · Eta Leonis · Denebola)",
        stars: ["EtaLeo","Algieba","Regulus","Denebola"],
        lines: [["EtaLeo","Algieba"],["Algieba","Regulus"],["Regulus","Denebola"]],
        meaning: "The Lion of Ra — Khepri the rising sun god in the form of a lion; Regulus marks the celestial heart.",
        moolelo: `The Sphinx at Giza faces due east toward the rising sun at the spring equinox — and in the age of its construction (around 10,500 BCE in Graham Hancock's analysis, or 2500 BCE in mainstream archaeology), the sun rose in the constellation of Leo at the spring equinox. The Great Sphinx, with the body of a lion and the face of a human, embodies this moment: Khepri the scarab beetle of the dawn, Ra the sun, and the lion of the summer sky all merged into one stone monument pointing east. Regulus — the royal star — sits precisely on the ecliptic, the path of the Sun, Moon, and planets. When the Moon passes in front of Regulus (an occultation), it was read as a portent for the pharaoh himself. Egyptian priests tracked Regulus's heliacal rising with great care as a marker of the new year before Sopdet (Sirius) became the dominant calendar star. The sickle of Leo above Regulus forms the lion's noble head; the body sweeps east toward Denebola (the tail), the whole form running west to east like the sphinx itself.`,
        navUse: "Spring south bearing; Regulus lies on ecliptic and can be occulted by Moon and planets",
        seasonal: "Spring evenings; Leo highest in south April through May"
      }
    ],

    western: [
      {
        id: "pleiades-w",
        name: "Pleiades — Seven Sisters",
        westEq: "Pleiades",
        stars: ["Alcyone","Aldebaran"],
        lines: [],
        meaning: "The Seven Sisters — lost sister, universal calendar marker, oldest named star cluster",
        moolelo: `The Pleiades are the most universally recognized star group in human history, independently named and tracked by cultures on every inhabited continent. In Greek myth, seven sisters were placed in the sky, but only six are easily visible — one (Merope or Electra, depending on the tradition) hides her face in shame. This lost-sister motif appears independently in Aboriginal Australian, Native American, Japanese, and South Asian traditions. The Pleiades' heliacal rising marked the new year in at least a dozen distinct cultures — from the Makahiki in Hawaiʻi to Matariki in Aotearoa to agricultural calendars in Mesopotamia. Some researchers believe the lost-sister story may be 100,000 years old.`,
        navUse: "Seasonal calendar marker — rising and setting tracked agricultural and sailing seasons worldwide",
        seasonal: "Visible November through April; best in winter sky"
      }
    ],
  },

};

/* ════════════════════════════════════════════════════════════
   APPLY EXTENSIONS — runs after main.js has initialized
════════════════════════════════════════════════════════════ */
(function applyExtensions() {
  const EXT = window.IKE_EXTENSIONS;
  if (!EXT) return;

  /* Wait for STARS and CULTURES to be defined */
  function waitAndApply(attempts) {
    if (typeof STARS === 'undefined' || typeof CULTURES === 'undefined') {
      if (attempts < 40) setTimeout(() => waitAndApply(attempts + 1), 100);
      return;
    }
    _applyExtensions();
  }

  function _applyExtensions() {
    /* ── Star patches ── */
    if (EXT.starPatches) {
      Object.entries(EXT.starPatches).forEach(([id, patch]) => {
        const star = STARS.find(s => s.id === id);
        if (!star) return;
        Object.assign(star, patch);
        /* Also update STAR_MAP if it exists */
        if (typeof STAR_MAP !== 'undefined' && STAR_MAP[id]) Object.assign(STAR_MAP[id], patch);
      });
      console.log(`[IKE] Applied ${Object.keys(EXT.starPatches).length} star patches`);
    }

    /* ── Formation patches ── */
    if (EXT.formationPatches) {
      let patched = 0;
      Object.entries(CULTURES).forEach(([cultId, cult]) => {
        (cult.formations || []).forEach(f => {
          const patch = EXT.formationPatches[f.id];
          if (patch) { Object.assign(f, patch); patched++; }
        });
      });
      console.log(`[IKE] Applied ${patched} formation patches`);
    }

    /* ── Planet patches ── */
    if (EXT.planetPatches && typeof PLANETS !== 'undefined') {
      Object.entries(EXT.planetPatches).forEach(([id, patch]) => {
        const planet = PLANETS.find(p => p.id === id);
        if (planet) Object.assign(planet, patch);
      });
      console.log(`[IKE] Applied ${Object.keys(EXT.planetPatches).length} planet patches`);
    }

    /* ── New formations ── */
    if (EXT.newFormations) {
      Object.entries(EXT.newFormations).forEach(([cultId, formations]) => {
        if (cultId === 'hawaiian' && window.BISHOP_JUNE_2026_SKY_MAP) return;
        const cult = CULTURES[cultId];
        if (!cult || !Array.isArray(formations)) return;
        formations.forEach(f => {
          if (!cult.formations.find(ex => ex.id === f.id)) {
            cult.formations.push(f);
          }
        });
      });
      console.log(`[IKE] Injected new formations`);
    }

    /* ── Invalidate cached constellation line groups so new formations render ── */
    if (typeof conLineGroups !== 'undefined' && typeof scene !== 'undefined') {
      Object.keys(conLineGroups).forEach(k => {
        scene.remove(conLineGroups[k]);
        delete conLineGroups[k];
      });
      if (typeof activeConGroup !== 'undefined') activeConGroup = null;
      if (typeof buildConstellationLines !== 'undefined' && typeof state !== 'undefined') {
        buildConstellationLines(state.culture);
      }
      console.log('[IKE] Constellation line cache invalidated and rebuilt');
    }

    /* ── Update formation count badges on culture buttons ── */
    if (typeof updateCultureCompleteness !== 'undefined') updateCultureCompleteness();

    console.log('[IKE] Cultural extensions applied ✓');
  }

  waitAndApply(0);
})();
