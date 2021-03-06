const basePresets = [
  "$$$ Royal - Mashup (197)",
  "$$$ Royal - Mashup (220)",
  "$$$ Royal - Mashup (431)",
  "_Aderrasi - Wanderer in Curved Space - mash0000 - faclempt kibitzing meshuggana schmaltz (Geiss color mix)",
  "_Geiss - Artifact 01",
  "_Geiss - Desert Rose 2",
  "_Geiss - untitled",
  "_Mig_049",
  "_Mig_085",
  "_Rovastar + Geiss - Hurricane Nightmare (Posterize Mix)",
  "Aderrasi + Geiss - Airhandler (Kali Mix) - Canvas Mix",
  "Aderrasi - Potion of Spirits",
  "Aderrasi - Songflower (Moss Posy)",
  "Aderrasi - Storm of the Eye (Thunder) - mash0000 - quasi pseudo meta concentrics",
  "An AdamFX n Martin Infusion 2 flexi - Why The Sky Looks Diffrent Today - AdamFx n Martin Infusion - Tack Tile Disfunction B",
  "cope + martin - mother-of-pearl",
  "Cope - The Neverending Explosion of Red Liquid Fire",
  "Eo.S. + Phat - cubetrace - v2",
  "Eo.S. + Zylot - skylight (Stained Glass Majesty mix)",
  "Eo.S. - glowsticks v2 05 and proton lights (+Krash′s beat code) _Phat_remix02b",
  "fiShbRaiN + Flexi - witchcraft 2.0",
  "flexi + amandio c - organic [random mashup]",
  "flexi + amandio c - organic12-3d-2.milk",
  "Flexi + amandio c - piercing 05 - Kopie (2) - Kopie",
  "flexi + fishbrain - neon mindblob grafitti",
  "flexi + geiss - pogo cubes vs. tokamak vs. game of life [stahls jelly 4.5 finish]",
  "Flexi + Martin - astral projection",
  "Flexi + Martin - cascading decay swing",
  "Flexi + stahlregen - jelly showoff parade",
  "Flexi - alien fish pond",
  "Flexi - area 51",
  "flexi - bouncing balls [double mindblob neon mix]",
  "Flexi - infused with the spiral",
  "Flexi - mindblob [shiny mix]",
  "Flexi - mindblob mix",
  "flexi - mom, why the sky looks different today",
  "flexi - patternton, district of media, capitol of the united abstractions of fractopia",
  "Flexi - predator-prey-spirals",
  "Flexi - smashing fractals [acid etching mix]",
  "flexi - swing out on the spiral",
  "Flexi - truly soft piece of software - this is generic texturing (Jelly) ",
  "flexi - what is the matrix",
  "Flexi, fishbrain, Geiss + Martin - tokamak witchery",
  "Flexi, martin + geiss - dedicated to the sherwin maxawow",
  "Fumbling_Foo & Flexi, Martin, Orb, Unchained - Star Nova v7b",
  "Geiss + Flexi + Martin - disconnected",
  "Geiss - Cauldron - painterly 2 (saturation remix)",
  "Geiss - Reaction Diffusion 2",
  "Geiss - Spiral Artifact",
  "Geiss - Thumb Drum",
  "Geiss, Flexi + Stahlregen - Thumbdrum Tokamak [crossfiring aftermath jelly mashup]",
  "Goody - The Wild Vort",
  "high-altitude basket unraveling - singh grooves nitrogen argon nz+",
  "Idiot - Star Of Annon",
  "Krash + Illusion - Spiral Movement",
  "martin + flexi - diamond cutter [prismaticvortex.com] - camille - i wish i wish i wish i was constrained",
  "Martin - acid wiring",
  "martin - angel flight",
  "martin - another kind of groove",
  "martin - bombyx mori",
  "martin - castle in the air",
  "martin - chain breaker",
  "Martin - charisma",
  "martin - disco mix 4",
  "martin - extreme heat",
  "martin - frosty caves 2",
  "martin - fruit machine",
  "martin - ghost city",
  "martin - glass corridor",
  "martin - infinity (2010 update)",
  "Martin - liquid arrows",
  "martin - mandelbox explorer - high speed demo version",
  "martin - mucus cervix",
  "Martin - QBikal - Surface Turbulence IIb",
  "martin - reflections on black tiles",
  "martin - stormy sea (2010 update)",
  "martin - The Bridge of Khazad-Dum",
  "martin - witchcraft reloaded",
  "martin [shadow harlequins shape code] - fata morgana",
  "martin, flexi, fishbrain + sto - enterstate [random mashup]",
  "Milk Artist At our Best - FED - SlowFast Ft AdamFX n Martin - HD CosmoFX",
  "ORB - Waaa",
  "Phat+fiShbRaiN+Eo.S_Mandala_Chasers_remix",
  "Rovastar + Loadus + Geiss - FractalDrop (Triple Mix)",
  "Rovastar - Oozing Resistance",
  "sawtooth grin roam",
  "shifter - dark tides bdrv mix 2",
  "suksma - heretical crosscut playpen",
  "suksma - Rovastar - Sunflower Passion (Enlightment Mix)_Phat_edit + flexi und martin shaders - circumflex in character classes in regular expression",
  "suksma - uninitialized variabowl (hydroponic chronic)",
  "suksma - vector exp 1 - couldn′t not",
  "TonyMilkdrop - Leonardo Da Vinci's Balloon [Flexi - merry-go-round + techstyle]",
  "TonyMilkdrop - Magellan's Nebula [Flexi - you enter first + multiverse]",
  "Unchained & Rovastar - Wormhole Pillars (Hall of Shadows mix)",
  "Unchained - Rewop",
  "Unchained - Unified Drag 2",
  "yin - 191 - Temporal singularities",
  "Zylot - Paint Spill (Music Reactive Paint Mix)",
  "Zylot - Star Ornament",
  "Zylot - True Visionary (Final Mix)",
];

const extraPresets = [
  "$$$ Royal - Mashup (177)",
  "$$$ Royal - Mashup (273)",
  "$$$ Royal - Mashup (307)",
  "$$$ Royal - Mashup (326)",
  "$$$ Royal - Mashup (441)",
  "_Eo.S. - glowsticks v2 02 - Geiss HPF",
  "_Flexi, martin + geiss - painterly rogue wave strike (color emboss mix)",
  "_Geiss - Artifact 03",
  "_geiss_experimental__wavefronts",
  "_Krash + Eo.S. - Photographic Sentinel",
  "_Mig_004_version2",
  "_Mig_028",
  "_Mig_079",
  "_Mig_COLORFUL9",
  "_Mig_Oscilloscope008",
  "AdamFX Mashup 2 Martin - reflections on black tile + Raron N Flexi ",
  "Aderrasi + Geiss - Airhandler (Kali Mix) - Painterly Tendrils Colorfast",
  "Aderrasi - Airhandler (Last Breath - Calm)",
  "Aderrasi - Mother Of Pearl - mash0000 - how to piss off your eyes",
  "Aderrasi - Veil of Steel (Steel Storm) - mash0000 - bob ross finally loses it",
  "bdrv - ultramix2 #43",
  "beta106i - Burning Form (Seething Mass) - mash0000 - fire paint easter egg internals",
  "cope + geiss + stahlregen - cartune (bending gelatine mix)",
  "Cope - Passage (mandala mix)",
  "cope - strange attractor [flexis let it grow mix] (Jelly 5.56 [volume noise zoom-in])",
  "cope - the drain to heaven",
  "cope, martin + flexi - the slickery of alternative varnish",
  "DemonLD_-_Toxic_water_diffusion threx angela vs debi brown (nice)",
  "Eo.S. + flexi - glowsticks v2 05 and proton lights (+Krash′s beat code) _Phat_remix02b + illumination (Stahl′s Mix)",
  "Eo.S. - glowsticks v2 03 music",
  "EVET + Flexi - Rainbox Splash Poolz",
  "EVET - RGB Singularity",
  "fishbrain + flexi - stitchcraft",
  "fiShbRaiN + geiss - witchcraft (Grow Mix 3)",
  "fiShbRaiN - toffee cream and icing sugar",
  "flexi + amandio c - organic",
  "flexi + bdrv - acid etching (jelly v5.5)",
  "Flexi + fiShbRaiN - operation fatcap II",
  "flexi + fishbrain - witchcraft [complex terraforming - fiddling twists in the fabric of space]",
  "Flexi + Geiss - pogo-cubes on tokamak matter (Jelly 5.55)",
  "Flexi + Geiss - Tokamak mindblob 2.0",
  "flexi - alien canvas [learning]",
  "Flexi - alien fader",
  "Flexi - alien web bouncer [26]",
  "flexi - bouncing balls [double mindblob gastrointestinal mix]",
  "Flexi - crush ice 72",
  "Flexi - dimensions, projection and abstraction",
  "flexi - hyperspaceflight (bn cn Jelly 4)",
  "flexi - infused with the spiral (jelly 4.x cn)",
  "flexi - inter state",
  "flexi - jelly fish mandala",
  "flexi - Mindblob",
  "Flexi - piercing",
  "Flexi - predator-prey-spirals [stahlregens gelatine finish]",
  "Flexi - psychenapping",
  "Flexi - smashing fractals 2.0",
  "flexi - splatter effects 17 the wave, a google love story written in decay roam3-2 ",
  "Flexi, fishbrain + Martin - witchery",
  "Flexi, Geiss and Rovastar - chaos layered tokamak",
  "Flexi, martin + geiss - painterly rogue wave strike",
  "flexi, stahlregen, geiss + tobias wolfboi - space gelatine burst - mash0000 - chromatidal pool mirror blasphemy",
  "Geiss - 3 layers (Tunnel Mix)",
  "Geiss - Bipolar 2 Enhanced",
  "Geiss - Brain Zoom 4",
  "Geiss - Cauldron - painterly (saturation remix)",
  "Geiss - Color Pox (Acid Impression Mix) (color saturation remix)",
  "Geiss - Desert Rose 4",
  "Geiss - Game of Life 3",
  "Geiss - Myriad Mosaics",
  "Geiss - Planet 1",
  "Geiss - Reaction Diffusion 3 (Lichen Mix)",
  "Geiss - Reaction Diffusion 3",
  "Geiss - Skin Dots Multi-layer 3",
  "Geiss - Tokamak Plus 2",
  "Geiss - Two-Pointed Pulsagon - mash0000 - bubonic super-fluid centrifuge",
  "goody + martin - crystal palace - schizotoxin - the wild iris bloom - 16 iterations",
  "Goody - Ego Decontructor",
  "GreatWho - Lasershow",
  "Illusion & Rovastar - Dotty Mad Space (Jelly)",
  "martin + stahlregen - martin in da mash 12",
  "martin + stahlregen - martin in da mash 12a",
  "martin + stahlregen - martin in da mash 14",
  "martin + stahlregen - martin in da mash 3",
  "martin - baby one more time",
  "martin - bombyx mori [flexi′s logarithmic edit]",
  "Martin - bombyx mori mix2",
  "martin - bring up the big guns",
  "martin - cherry brain wall mod",
  "martin - city of shadows",
  "martin - cope - laser dome",
  "martin - crystal palace",
  "Martin - Diabolo",
  "Martin - disco mix 3 -fast",
  "Martin - disco mix 6",
  "martin - elusive impressions mix2 - flacc mess proph nz+2",
  "martin - Flexis swarm in Martins pond [not yet a boid implementation] ",
  "martin - gate to moria",
  "martin - glassball dance",
  "martin - ice flames",
  "martin - infinity (2010 update)",
  "martin - into the fireworks",
  "Martin - journey into space",
  "martin - ludicrous speed",
  "martin - move this body",
  "martin - resonant twister - steel spring",
  "martin - satellite view",
  "martin - tunnel race",
  "martin, fishbrain + flexi - mandelbox explorer v1 Eo.S. optimize [bipolar witchcraft mix]",
  "ORB - Magma Pool",
  "ORB - Pastel Primer",
  "orb - toxic goo",
  "PieturP - triptrap_(ultimate-trip-mix)",
  "raron - a grayish blob - mash0000 - pungent gastric automata cloud fumes",
  "rce-ordinary + flexi - far away distance (custom beat detection + bipolar colour ghost mix)",
  "Redi Jedi - i dont think those were portabello mushrooms",
  "Rocke - Answer.42 (New Mix 1) - mash0000 - slash and char p. jungle",
  "Rovastar + Che - Asylum Animations",
  "Rovastar + Flexi - Hurricane Nightmare (Moebius Mix)",
  "Rovastar + Geiss - Hurricane Nightmare (Relief Mix)",
  "Rovastar + Geiss - Hurricane Nightmare",
  "Rovastar + Geiss - Hyperkaleidoscope Glow 2 motion blur (Jelly)",
  "Rovastar + Geiss - Snapshot Of Space (LSB mix)",
  "Rovastar + Loadus + Geiss - Tone-mapped FractalDrop 7c",
  "Rovastar + Telek - Altars of Madness (Rolling Oceans Mix)",
  "Rovastar - A Million Miles From Earth (Wormhole Mix)",
  "Rovastar - Explosive Minds",
  "Rovastar - Trippy Sperm (Jelly)",
  "Rovastar-altarsofmadness(forgottenrea",
  "shifter - dark tides bdrv mix",
  "shifter - escape the worm - Eo.S. + Phat - Before_It_Eats_Your_Brain_Mix_v2",
  "shifter - feathers (angel wings)_phat_remix relief 2",
  "Stahlregen & Boz + Eo.S + Geiss + Phat + Rovastar + Zylot - Machine Code [Jelly]",
  "stahlregen & geiss + rovastar - fields of flowers (mashup 9 - space flower rmx) - mash0001 - pack em in, we got a long haul + flashlight",
  "stahlregen + geiss + shifter - babylon",
  "Stahlregen + martin + others - Psychedelic Metal Flower",
  "suksma - feign shoulder concern when i should be executed - everything is eternally shrinking",
  "suksma - gaeomaentaec - log smell 2 - steaming wienies2",
  "suksma - nip tuck",
  "suksma - water cooled red uranium vs dotes - freeenergynow.net",
  "TonyMilkdrop - Magellan's Nebula [Flexi - fancy + $this shall not retain]",
  "Unchained - Making a Science of It 4",
  "yin - 190 - Temporal fluctuations",
  "yin - 250 - Artificial poles of the continuum_Phat′s_Orbit_mix",
  "yin - 253 - Artificial poles of the continuum (remix #3)",
  "yin - 315 - Ocean of Light (yo im peakin yo Eo.S.-Phat)",
  "Zylot - In death there is life (Geiss Layered Mix)",
];

const imagePresets = [
  "$$$ Royal - Mashup (160)",
  "$$$ Royal - Mashup (253)",
  "$$$ Royal - Mashup (337)",
  "11",
  "158",
  "444",
  "_Geiss - Brain Zoom 3 (Color Emboss Mix)",
  "_Geiss - Explosion Mod 2b",
  "_Mig_009",
  "_Mig_014_version2",
  "_Mig_039",
  "_Mig_056",
  "_Vovan + Geiss - Bass With Flover (Feedback Mix) 2",
  "A Tribute to Martin - bombyx mori - Ft Flexi - AdamFX - StahlRegen - Krash - Rovastar -  Hd in Milk T",
  "adam eatit fx 2 martin - disco mix, lodus, geiss, ludicrous speed,flexi, aderrasi n hexcollie",
  "Adam Eatit Mashup FX 2 martin - disco mix + Lodus + Geiss + Ludicrous speed + Aderrasi 2_1",
  "Adam Eatit Mashup FX 2 martin - disco mix + Lodus + Geiss + Ludicrous speed + Baked Ft another AdamFX Mashup 7_1",
  "Adam Eatit Mashup FX 2 martin - disco mix + Lodus + Geiss + Ludicrous speed + Eos Ft Flexi n Hexocollie + Baked + Santa Fucking Claus",
  "AdamFx 2 Aderrasi - Airhandler (Last Breath - Calm)Ilusional Discontent2",
  "AdamFx 2 Geiss -Somewhat Distort Me 3_1",
  "AdamFx 2 Geiss, Zylot and Flexi - Reaction Diffusion 3 (Overload Mix 2) EATIT4 (BCCNJ4)",
  "Aderrasi + Geiss - Airhandler (Square Mix)",
  "Aderrasi - Agitator",
  "Aderrasi - Airhandler (Principle of Sharing)",
  "Aderrasi - Contortion (Escher′s Tunnel Mix)",
  "Aderrasi - Curse of the Mirror Emu",
  "baked - River of Illusion Dillusion [Bubble]",
  "beta106at shape - mash0000 - hulk spirit cum",
  "beta106i - Brilliance (Space-Time Breaking) - mash0000 - it′s 2009 and you haven′t replaced your analog tv with digital",
  "beta106i - Inhuman Emotion (Regret) - mash0000 - genetic mutant incubators in the hands of toddlers",
  "beta106i - Potion of Ink",
  "cope + flexi - mother-of-whirl [no fnords were hurt]",
  "cope - alternative energy (antimatter mod_1)4z",
  "cope - digital sea",
  "cope - soar (v2.0)",
  "ech0 - liquid firesticks I",
  "Eo.S. + Geiss - glowsticks v2 02 (Relief Mix)",
  "Eo.S. + Phat - Emergent factors",
  "Eo.S. + Phat cubetrace (cybercity madness remix) - mash0000 - evaporating crystal pharma",
  "Eo.S. - spark C_Phat_Jester_Mix_v2",
  "fed - slowfast 1.1",
  "fiShbRaiN + flexi - witchcraft 2.0 - mash0000 - no one cares about mi, the note (major third)",
  "fiShbRaiN - breakfast cruiser",
  "fiShbRaiN - the adventures of prismo jenkins",
  "fiShbRaiN - witchcraft (necromancer remix)_phat_edit_v3",
  "flexi + fishbrain - warpcraft [random mashup]",
  "flexi + fishbrain - witchcraft [complex terraforming]",
  "Flexi + Geiss + Demon Lord - unholy tokamak clot-plot",
  "flexi + geiss - infused with the spiral (Heavy Oil Mix) nz+ rapery",
  "flexi + geiss - pogo-cubes on tokamak matter (bccn Jelly V4)",
  "flexi + geiss - pogo-cubes on tokamak matter [mind over matter remix]2",
  "Flexi + Martin - dive",
  "Flexi + Martin - tunnel of supraschismatika",
  "flexi + nitorami - beat explorer (cn bc jelly 4)",
  "Flexi + Rovastar - Fractopia [lovecraft]",
  "flexi + stahlregen - jelly strike",
  "Flexi - blame hexcollie twice",
  "flexi - borderline imagery",
  "flexi - bouncing balls [illumination mix]",
  "flexi - color strike",
  "flexi - meta4free",
  "Flexi - mindblob 2.0",
  "Flexi - reality tunnel",
  "Flexi - the distant point between derivative",
  "Flexi - wild at range",
  "flexi, geiss and rovastar - chaos layered sinewsed tokamak 2",
  "Flexi, Martin, Phat, Zylot + Eo.S - one way trip trap proof of concept [epileptic zoom tunnel edit]",
  "Flexi, Rovastar + Geiss - Fractopia vs bas relief",
  "Geiss - Feedback 2",
  "Geiss - Reaction Diffusion (Relief Mix)",
  "Geiss - Skin Dots 9",
  "Hexcollie - Cell division",
  "Hexcollie - Nautalisk - mash0000 - but officer, my fingerprint always changes",
  "Ishan - Anuera",
  "Krash & Rovastar - A Million Miles from Earth (Ripple Mix)",
  "Krash + Illusion + Geiss - Spiral Movement (Reaction Diffusion mix)",
  "Krash - War Machine (Shifting Complexity Mix)",
  "LuxXx - Fuck Your Code ii",
  "LuxXx - GrindFace  225 mg dose  ",
  "LuxXx - iWhat Happened Right After I Ate That Toxic Waste beta ii",
  "LuxXx - Subtle HipHopFlake",
  "martin - amandio c - a different view of the green machine",
  "martin - attack of the beast",
  "martin - basal ganglion",
  "Martin - cool morning",
  "martin - crystal alley",
  "martin - dark galaxy",
  "martin - shifter - armorial bearings of robotopia",
  "martin - skywards",
  "martin - soma in pink",
  "martin - sparky caleidoscope",
  "martin - starfield sectors",
  "martin - sunset over the river",
  "martin - the forge of Isengard",
  "martin - unholy amulet 2",
  "martin - violet flash",
  "Martin N AdamFX Infusion = Phat+Yin+Eo.S_Mandala Chaser Ft AdamFX n Martin - The Beast Mandala Chaser FX H",
  "ORB - Blue Emotion",
  "ORB - Depth Charge 2",
  "ORB - Fire and Fumes 2",
  "ORB - Planetary Alignment Acid Burn",
  "ORB - Sandblade",
  "ORB - Solar Radiation",
  "Phat + Zylot + Eo.S. - work with lines",
  "Phat_Zylot_Eo.S. spiral_Movements_Beatle",
  "Rovastar + Fvese - Mosaic Waves",
  "Rovastar + Geiss - Hurricane Nightmare (Gold Chrome Mix)",
  "Rovastar + Geiss - Hyperspace - kaleidoscope",
  "Rovastar - Harlequin′s Fractal Encounter - cancer of saints",
  "Rovastar - Torrid Tales",
  "Rozzor & Shreyas - Deeper Aesthetics",
  "Stahlregen & flexi + Geiss + Rovastar + Shifter - Fractal Feedback (for Hexcollie)",
  "Stahlregen - Dots (Pixels - Blocky) (Jelly V2)",
  "stahlregen - old school, baby (spiral ornament)",
  "Telek - City Helix Lattice",
  "Telek - Sine Wave",
  "Unchained - All You Can Eat",
  "Unchained - Fuzzy Sciences",
  "various artists - 1200774354134 - mash0000 - what the writer′s guild is doing with the extra money",
  "Zylot - Crossing Over (Paint Spatter mix)",
  "Zylot - In death there is life (Geiss Layered Mix) (Jelly)",
  "Zylot - True Visionary",
];

const minimalPresets = [
  "$$$ Royal - Mashup (197)",
  "$$$ Royal - Mashup (431)",
  "_Mig_085",
  "An AdamFX n Martin Infusion 2 flexi - Why The Sky Looks Diffrent Today - AdamFx n Martin Infusion - Tack Tile Disfunction B",
  "Eo.S. + Phat - cubetrace - v2",
  "Flexi - alien fish pond",
  "flexi - bouncing balls [double mindblob neon mix]",
  "Flexi - mindblob [shiny mix]",
  "Flexi, fishbrain, Geiss + Martin - tokamak witchery",
  "Flexi, martin + geiss - dedicated to the sherwin maxawow",
  "Geiss - Cauldron - painterly 2 (saturation remix)",
  "Geiss - Reaction Diffusion 2",
  "Geiss - Thumb Drum",
  "Idiot - Star Of Annon",
  "Krash + Illusion - Spiral Movement",
  "Martin - acid wiring",
  "martin - chain breaker",
  "martin - extreme heat",
  "martin - mandelbox explorer - high speed demo version",
  "Martin - QBikal - Surface Turbulence IIb",
  "martin - reflections on black tiles",
  "martin - witchcraft reloaded",
  "martin [shadow harlequins shape code] - fata morgana",
  "Milk Artist At our Best - FED - SlowFast Ft AdamFX n Martin - HD CosmoFX",
  "suksma - uninitialized variabowl (hydroponic chronic)",
  "Unchained & Rovastar - Wormhole Pillars (Hall of Shadows mix)",
  "Unchained - Rewop",
  "yin - 191 - Temporal singularities",
  "Zylot - Paint Spill (Music Reactive Paint Mix)",
];

const nonMinimalPresets = [
  "$$$ Royal - Mashup (220)",
  "_Aderrasi - Wanderer in Curved Space - mash0000 - faclempt kibitzing meshuggana schmaltz (Geiss color mix)",
  "_Geiss - Artifact 01",
  "_Geiss - Desert Rose 2",
  "_Geiss - untitled",
  "_Mig_049",
  "_Rovastar + Geiss - Hurricane Nightmare (Posterize Mix)",
  "Aderrasi + Geiss - Airhandler (Kali Mix) - Canvas Mix",
  "Aderrasi - Potion of Spirits",
  "Aderrasi - Songflower (Moss Posy)",
  "Aderrasi - Storm of the Eye (Thunder) - mash0000 - quasi pseudo meta concentrics",
  "cope + martin - mother-of-pearl",
  "Cope - The Neverending Explosion of Red Liquid Fire",
  "Eo.S. + Zylot - skylight (Stained Glass Majesty mix)",
  "Eo.S. - glowsticks v2 05 and proton lights (+Krash′s beat code) _Phat_remix02b",
  "fiShbRaiN + Flexi - witchcraft 2.0",
  "flexi + amandio c - organic [random mashup]",
  "flexi + amandio c - organic12-3d-2.milk",
  "Flexi + amandio c - piercing 05 - Kopie (2) - Kopie",
  "flexi + fishbrain - neon mindblob grafitti",
  "flexi + geiss - pogo cubes vs. tokamak vs. game of life [stahls jelly 4.5 finish]",
  "Flexi + Martin - astral projection",
  "Flexi + Martin - cascading decay swing",
  "Flexi + stahlregen - jelly showoff parade",
  "Flexi - area 51",
  "Flexi - infused with the spiral",
  "Flexi - mindblob mix",
  "flexi - mom, why the sky looks different today",
  "flexi - patternton, district of media, capitol of the united abstractions of fractopia",
  "Flexi - predator-prey-spirals",
  "Flexi - smashing fractals [acid etching mix]",
  "flexi - swing out on the spiral",
  "Flexi - truly soft piece of software - this is generic texturing (Jelly) ",
  "flexi - what is the matrix",
  "Fumbling_Foo & Flexi, Martin, Orb, Unchained - Star Nova v7b",
  "Geiss + Flexi + Martin - disconnected",
  "Geiss - Spiral Artifact",
  "Geiss, Flexi + Stahlregen - Thumbdrum Tokamak [crossfiring aftermath jelly mashup]",
  "Goody - The Wild Vort",
  "high-altitude basket unraveling - singh grooves nitrogen argon nz+",
  "martin + flexi - diamond cutter [prismaticvortex.com] - camille - i wish i wish i wish i was constrained",
  "martin - angel flight",
  "martin - another kind of groove",
  "martin - bombyx mori",
  "martin - castle in the air",
  "Martin - charisma",
  "martin - disco mix 4",
  "martin - frosty caves 2",
  "martin - fruit machine",
  "martin - ghost city",
  "martin - glass corridor",
  "martin - infinity (2010 update)",
  "Martin - liquid arrows",
  "martin - mucus cervix",
  "martin - stormy sea (2010 update)",
  "martin - The Bridge of Khazad-Dum",
  "martin, flexi, fishbrain + sto - enterstate [random mashup]",
  "ORB - Waaa",
  "Phat+fiShbRaiN+Eo.S_Mandala_Chasers_remix",
  "Rovastar + Loadus + Geiss - FractalDrop (Triple Mix)",
  "Rovastar - Oozing Resistance",
  "sawtooth grin roam",
  "shifter - dark tides bdrv mix 2",
  "suksma - heretical crosscut playpen",
  "suksma - Rovastar - Sunflower Passion (Enlightment Mix)_Phat_edit + flexi und martin shaders - circumflex in character classes in regular expression",
  "suksma - vector exp 1 - couldn′t not",
  "TonyMilkdrop - Leonardo Da Vinci's Balloon [Flexi - merry-go-round + techstyle]",
  "TonyMilkdrop - Magellan's Nebula [Flexi - you enter first + multiverse]",
  "Unchained - Unified Drag 2",
  "Zylot - Star Ornament",
  "Zylot - True Visionary (Final Mix)",
];

const MD1Presets = [
  "Aderrasi - Agitator",
  "Aderrasi - Airhandler (Last Breath - Calm)",
  "Aderrasi - Contortion (Escher′s Tunnel Mix)",
  "Aderrasi - Contortion (Wide Twist Mix)",
  "Aderrasi - Curse of the Mirror Emu",
  "Aderrasi - Halls Of Centrifuge",
  "Aderrasi - Potion of Spirits",
  "Aderrasi - Songflower (Moss Posy)",
  "amandio c - feeling well 3",
  "amandio c - flashy thing",
  "amandio c - salty beats - spiral",
  "baked - Chinese Fingerbang (cao ni ma =]) - PieturP colors - Bitcore speed tweak",
  "baked - mushroom rainbows[acid Storm]",
  "baked - River of Illusion Dillusion [Bubble]",
  "bdrv + al shifter - feathers (angel wings)_phat_remix4 bdrv et  AL  rmxmix bdrv et.AL5",
  "bdrv - ultramix2 #43",
  "beta106i - Potion of Ink",
  "Eo.S. + Phat - cubetrace - v2",
  "Eo.S. + Phat - Emergent factors",
  "Eo.S. + Zylot - skylight (Stained Glass Majesty mix)",
  "Eo.S. - glowsticks v2 03 music",
  "Eo.S. - glowsticks v2 05 and proton lights (+Krash′s beat code) _Phat_remix02b",
  "Eo.S. - glowsticks v2 05 and proton lights (+Krash′s beat code) _Phat_remix07 recursive demons",
  "Eo.S. - multisphere 01 B_Phat_Ra_mix",
  "Eo.S. - spark C_Phat_Jester_Mix_v2",
  "fiShbRaiN - a quiet death",
  "fiShbRaiN - breakfast cruiser",
  "fiShbRaiN - the adventures of prismo jenkins",
  "fiShbRaiN - toffee cream and icing sugar",
  "fiShbRaiN - witchcraft (necromancer remix)_phat_edit_v3",
  "Geiss + Rovastar - Notions Of Tonality 2",
  "Geiss - Eggs",
  "Geiss - El Cubismo",
  "Geiss - Feedback 2",
  "Geiss - Hurricane",
  "Geiss - Planet 1",
  "GreatWho - Lasershow",
  "Idiot - Marphets Surreal Dream (Hypnotic Spiral Mix)",
  "Idiot - Star Of Annon",
  "iMuS and  Rovastar - The Shroomery (psilobellum)",
  "Ishan - Anuera",
  "Krash & Rovastar - A Million Miles from Earth (Ripple Mix)",
  "Krash + Illusion - Spiral Movement",
  "Krash - War Machine (Shifting Complexity Mix)",
  "ORB - Blue Emotion",
  "ORB - Fire and Fumes 2",
  "ORB - Solar Radiation",
  "phat + Eo.S. - Bass_responce_Red_Movements_Disorienting nebula3",
  "Phat + Zylot + Eo.S. - work with lines",
  "Phat+fiShbRaiN+Eo.S_Mandala_Chasers_remix",
  "Phat_Zylot_Eo.S. spiral_Movements_Beatle",
  "Phat_Zylot_Eo.S. square_faces_v2_alt_colours",
  "PieturP - triptrap_(getting_concrete_visions_through_a_diafragma_version)",
  "PieturP - triptrap_(ultimate-trip-mix)",
  "Redi Jedi - i dont think those were portabello mushrooms",
  "Rovastar & Idiot24-7 - Balk Acid",
  "Rovastar & Loadus + Zylot - FractalDrop (Spark Machine v2.0)",
  "Rovastar + Che - Asylum Animations",
  "Rovastar + Fvese - Mosaic Waves",
  "Rovastar + Geiss - Hurricane Nightmare",
  "Rovastar + Telek - Altars of Madness (Rolling Oceans Mix)",
  "Rovastar - A Million Miles From Earth (Wormhole Mix)",
  "Rovastar - Explosive Minds",
  "Rovastar - Hyperspace",
  "Rovastar - Oozing Resistance",
  "Rovastar - Torrid Tales",
  "Rovastar-altarsofmadness(forgottenrea",
  "Rozzor & Shreyas - Deeper Aesthetics",
  "shifter - escape the worm - Eo.S. + Phat - Before_It_Eats_Your_Brain_Mix_v2",
  "shifter - feathers (angel wings)",
  "shifter - fractal grinder",
  "stahlregen - old school, baby (spiral ornament)",
  "Studio Music and Unchained - Rapid Alteration",
  "TEcHNO & SandStorm - Psychodelic Highway",
  "Telek - City Helix Lattice",
  "Telek - Sine Wave",
  "Unchained & Rovastar - Wormhole Pillars (Hall of Shadows mix)",
  "Unchained - All You Can Eat",
  "Unchained - Fuzzy Sciences",
  "Unchained - Making a Science of It 4",
  "Unchained - Making a Science of It 7",
  "Unchained - Rewop",
  "Unchained - Unified Drag 2",
  "yin - 190 - Temporal fluctuations",
  "yin - 191 - Temporal singularities",
  "yin - 250 - Artificial poles of the continuum_Phat′s_Orbit_mix",
  "Zylot - Star Ornament",
];

export default class ButterchurnPresetPackMeta {
  static getBasePresetKeys () {
    return {
      presets: basePresets,
      chunk: 'butterchurn-presets/lib/butterchurnPresetsBase.min',
    };
  }

  static getExtraPresetKeys () {
    return {
      presets: extraPresets,
      chunk: 'butterchurn-presets/lib/butterchurnPresetsExtra.min',
    };
  }

  static getImagePresetKeys () {
    return {
      presets: imagePresets,
      chunk: 'butterchurn-presets/lib/butterchurnPresetsImage.min',
    };
  }

  static getMinimalPresetKeys () {
    return {
      presets: minimalPresets,
      chunk: 'butterchurn-presets/lib/butterchurnPresetsMinimal.min',
    };
  }

  static getNonMinimalPresetKeys () {
    return {
      presets: nonMinimalPresets,
      chunk: 'butterchurn-presets/lib/butterchurnPresetsNonMinimal.min',
    };
  }

  static getMD1PresetKeys () {
    return {
      presets: MD1Presets,
      chunk: 'butterchurn-presets/lib/butterchurnPresetsMD1.min',
    };
  }
}
