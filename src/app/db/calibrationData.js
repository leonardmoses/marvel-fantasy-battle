export const calibrationData = [
    {
        category: "Melee Strength",
        fullName: "Melee Strength",
        group: "Physical Combat",
        description: "Raw lifting/striking power. Does not account for speed or technique — purely how hard they hit or how much they lift.",
        extraColumns: [
            { field: 'force', headerName: 'Force (In Weight)', width: 180 }
        ],
        anchors: [
            { id: 0,  rating: 0,  force: "0 lbs",           description: "No meaningful strength — ability absent",  examples: "None" },
            { id: 1,  rating: 1,  force: "0–500 lbs",        description: "Human level strength",                    examples: "Nick Fury" },
            { id: 2,  rating: 2,  force: "500–1,000 lbs",      description: "Peak athletic human",                     examples: "Black Widow" },
            { id: 3,  rating: 3,  force: "1000 lbs–2,000 lbs", description: "Average mutant baseline",                examples: "Cyclops" },
            { id: 4,  rating: 4,  force: "~1–2 tons",        description: "Enhanced human / strong mutant",          examples: "Captain America" },
            { id: 5,  rating: 5,  force: "~2–5 tons",        description: "Notably superhuman",                      examples: "Sabretooth" },
            { id: 6,  rating: 6,  force: "~10 tons",         description: "Strong superhuman",                       examples: "Beast" },
            { id: 7,  rating: 7,  force: "~25 tons",      description: "Powerful superhuman",                     examples: "Spider-Man" },
            { id: 8,  rating: 8,  force: "~50 tons",         description: "Elite superhuman",                        examples: "Rhino" },
            { id: 9,  rating: 9,  force: "~75 tons",      description: "Near ceiling",                            examples: "Colussus" },
            { id: 10, rating: 10, force: "100+ tons",         description: "Standard ceiling",                        examples: "Thor" },
            { id: 11, rating: 15, force: "~500+ tons",    description: "Ceiling breaker",                         examples: "Apocalypse" },
            { id: 12, rating: 20, force: "Unlimited (100k+ tons)", description: "Rage-scaled — no verified ceiling",       examples: "Hulk" },
            { id: 13, rating: 30, force: "Beyond unlimited",       description: "Transcends rage-scaling — Shi'ar cosmic power level", examples: "Gladiator (Shi'ar)" },
        ]
    },
    {
        category: "H2H Skill",
        fullName: "Hand-to-Hand Skill",
        group: "Physical Combat",
        description: "Technical combat proficiency combining training and accumulated experience. Measured in years-of-training equivalent — some characters are naturally gifted and represent a higher equivalent without literally having trained that long. Scale is 0–10 with no ceiling breakers.",
        extraColumns: [
            { field: 'years', headerName: 'Skill (Years of Training)', width: 200 }
        ],
        anchors: [
            { id: 0,  rating: 0,  years: "0",           description: "No training — purely instinctive brawling",                           examples: "" },
            { id: 1,  rating: 1,  years: "~2 yrs",    description: "Street-level basics",                                                  examples: "" },
            { id: 2,  rating: 2,  years: "~5 yrs",    description: "Formal martial arts",                                                  examples: "" },
            { id: 3,  rating: 3,  years: "~10 yrs",        description: "Military combat / dedicated martial artist",          examples: "Nick Fury" },
            { id: 4,  rating: 4,  years: "~30 yrs",        description: "Professional career fighter, multiple disciplines",   examples: "Cyclops" },
            { id: 5,  rating: 5,  years: "~50 yrs",     description: "Peak of a dedicated human lifetime",                  examples: "Black Widow" },
            { id: 6,  rating: 6,  years: "~100 yrs",     description: "Beyond a single human lifetime",                     examples: "Captain America" },
            { id: 7,  rating: 7,  years: "~200 yrs",   description: "Multi-generational warrior, multiple major conflicts", examples: "Wolverine, Sabretooth" },
            { id: 8,  rating: 8,  years: "~400 yrs",   description: "Centuries of real warfare",                           examples: "" },
            { id: 9,  rating: 9,  years: "~700 yrs",    description: "Near-millennium mastery",                              examples: "Thor" },
            { id: 10, rating: 10, years: "~1,000 yrs",  description: "Ancient warriors with millennia of accumulated combat",  examples: "Apocalypse" },
        ]
    },
    {
        category: "Proj Power",
        fullName: "Projectile Power",
        group: "Physical Combat",
        description: "Raw destructive output of ranged/projectile attacks at point of impact. Measured in TNT equivalent — how hard the blast hits, not how accurate or far it travels.",
        extraColumns: [
            { field: 'tnt', headerName: 'TNT Equivalent', width: 180 }
        ],
        anchors: [
            { id: 0,  rating: 0,  tnt: "—",           description: "No projectile ability",                                                      examples: "" },
            { id: 1,  rating: 1,  tnt: "~250 kg",     description: "Single large explosive charge — localized structural damage",              examples: "" },
            { id: 2,  rating: 2,  tnt: "~1 ton",      description: "Large vehicle bomb — destroys a city block face",                         examples: "" },
            { id: 3,  rating: 3,  tnt: "~5 tons",     description: "Multiple JDAM strikes — levels a large structure",                        examples: "" },
            { id: 4,  rating: 4,  tnt: "~20 tons",    description: "MOAB (GBU-43) — destroys a large compound or full city block",            examples: "" },
            { id: 5,  rating: 5,  tnt: "~80 tons",    description: "Multiple MOABs — levels a city district",                                 examples: "" },
            { id: 6,  rating: 6,  tnt: "~300 tons",   description: "Massive conventional bombardment — levels a small town",                  examples: "" },
            { id: 7,  rating: 7,  tnt: "~1.2 kt",     description: "Small tactical nuclear weapon",                                           examples: "" },
            { id: 8,  rating: 8,  tnt: "~5 kt",       description: "Mid-range tactical nuclear weapon",                                       examples: "" },
            { id: 9,  rating: 9,  tnt: "~8 kt",       description: "Large tactical nuclear weapon — destroys a major city district",          examples: "" },
            { id: 10, rating: 10, tnt: "~15 kt",      description: "Hiroshima (Little Boy, 15 kt) — destroys an entire city",                  examples: "" },
        ]
    },
    {
        category: "Proj Effective Range",
        fullName: "Projectile Effective Range",
        group: "Physical Combat",
        description: "Combined effective range and accuracy against a moving, evading target. Answers: does the blast get there and connect? Scale is 0–10 with no ceiling breakers — characters with no projectile ability (Proj Power = 0) receive 0 here as well.",
        extraColumns: [
            { field: 'range',    headerName: 'Effective Range',              width: 200 },
            { field: 'accuracy', headerName: 'Accuracy vs. Moving Target',   width: 220 },
        ],
        anchors: [
            { id: 0,  rating: 0,  range: "—",                       accuracy: "—",               description: "No projectile ability — does not exist for this character",                              examples: "" },
            { id: 1,  rating: 1,  range: "< 20 ft",                 accuracy: "Poor",            description: "Wild throw — might hit a large, slow target at point-blank",                             examples: "Hulk" },
            { id: 2,  rating: 2,  range: "< 50 ft",                 accuracy: "Fair",            description: "Can reliably hit large or slow targets; struggles against active evasion",                examples: "" },
            { id: 3,  rating: 3,  range: "~100 ft",                 accuracy: "Moderate",        description: "Hits stationary or slow targets; unreliable against active evasion",                      examples: "Spider-Man, Storm, Captain America, Black Widow" },
            { id: 4,  rating: 4,  range: "~300 ft",                 accuracy: "Good",            description: "Reliable at short range; can land shots at medium with setup time",                       examples: "Nick Fury" },
            { id: 5,  rating: 5,  range: "~500 ft",                 accuracy: "Very Good",       description: "Consistent against moving targets at medium range",                                       examples: "Thor" },
            { id: 6,  rating: 6,  range: "~1,000 ft",               accuracy: "High",            description: "Precision shots under pressure; can thread through obstacles",                            examples: "Magneto" },
            { id: 7,  rating: 7,  range: "~1 mile",                 accuracy: "High",            description: "Long-range specialist — trained combatant with superhuman enhancement",                   examples: "Apocalypse" },
            { id: 8,  rating: 8,  range: "1–3+ miles",              accuracy: "Near-surgical",   description: "Can target body parts at distance; compensates for active evasion",                      examples: "Gladiator" },
            { id: 9,  rating: 9,  range: "Multi-mile / line-of-sight", accuracy: "Near-infallible", description: "Hits whatever they can aim at; only teleportation reliably escapes it",              examples: "Iron Man" },
            { id: 10, rating: 10, range: "Any visible range",       accuracy: "Infallible",      description: "Mechanically perfect — projectile goes exactly where intended, no exceptions",           examples: "Cyclops" },
        ]
    },
    {
        category: "Armor",
        fullName: "Armor",
        group: "Durability & Recovery",
        description: "Inherent physical durability — the toughness of the character's body, mutation, and natural defensive powers. Removable gear does not count. Iron Man's suit counts (it IS him). Magneto's EM bubble counts (deflection is his power). Humans always score below mutants regardless of gear.",
        extraColumns: [
            { field: 'source', headerName: 'Durability Source', width: 240 }
        ],
        anchors: [
            { id: 0,  rating: 0,  source: "Unenhanced human body",                       description: "No enhancement — baseline human fragility; fully vulnerable to any attack",                                                            examples: "" },
            { id: 1,  rating: 1,  source: "Peak human conditioning",                      description: "Trained human body, no mutation — conditioned but still fully vulnerable to superpowers",                                              examples: "Nick Fury, Black Widow" },
            { id: 2,  rating: 2,  source: "Mutant physiology baseline",                   description: "Mutant body gives inherent toughness above human — no durability-focused power",                                                       examples: "Storm, Cyclops" },
            { id: 3,  rating: 3,  source: "Super-soldier serum / light enhancement",      description: "Notably tougher than a mutant baseline — serum or equivalent pushes beyond normal human limits",                                      examples: "Captain America" },
            { id: 4,  rating: 4,  source: "Enhanced mutant physique",                     description: "Enhanced body is a defining trait — can take serious superhuman hits before going down",                                               examples: "Beast, Spider-Man" },
            { id: 5,  rating: 5,  source: "Feral / specialist durability",                description: "Durability is a primary feature — built to absorb punishment; conventional force rarely incapacitates",                               examples: "Sabretooth" },
            { id: 6,  rating: 6,  source: "Extreme density / advanced natural armor",     description: "Very difficult to meaningfully hurt — concentrated superhuman force required to cause real damage",                                     examples: "" },
            { id: 7,  rating: 7,  source: "Adamantium / engineered suit / EM shielding",  description: "Near the top tier — purpose-built to be nearly unstoppable; physical force alone rarely halts them",                                  examples: "Wolverine, Rhino, Iron Man, Magneto" },
            { id: 8,  rating: 8,  source: "Celestial / molecular enhancement",            description: "Near-indestructible — only extreme cosmic-adjacent force causes real damage",                                                           examples: "Apocalypse" },
            { id: 9,  rating: 9,  source: "Divine / gamma / organic steel physiology",    description: "Near-ceiling — requires transcendent physical force; Asgardian divinity, gamma physiology, organic steel",                            examples: "Thor, Hulk, Colossus" },
            { id: 10, rating: 10, source: "Mystical / cosmic physical armor",             description: "Standard ceiling — absorbs direct hits from Thor and Hulk-tier force; only non-physical bypasses (telepathy, specific magic) can stop them", examples: "Juggernaut, Gladiator" },
        ]
    },
    {
        category: "Healing",
        fullName: "Healing",
        group: "Durability & Recovery",
        description: "Speed and completeness of self-recovery from damage. Three-tier base: humans at 1, baseline mutants at 2, enhanced humans at 3. Active healing factors kick in at 4+. Apocalypse is the only ceiling breaker via molecular reconstruction.",
        extraColumns: [
            { field: 'recoveryTime', headerName: 'Recovery (Deep Wound)', width: 220 }
        ],
        anchors: [
            { id: 0,  rating: 0,  recoveryTime: "—",             description: "No biological healing — ability absent or permanently suppressed",                              examples: "" },
            { id: 1,  rating: 1,  recoveryTime: "2–3 weeks",     description: "Healthy human baseline — normal biological recovery, no enhancement",                           examples: "Nick Fury, Black Widow, Iron Man" },
            { id: 2,  rating: 2,  recoveryTime: "10–14 days",    description: "Baseline mutant — inherent physiology gives a slight edge over humans",                          examples: "Cyclops, Storm, Colossus" },
            { id: 3,  rating: 3,  recoveryTime: "5–7 days",      description: "Enhanced human — serum or augmentation pushes healing above mutant baseline",                    examples: "Captain America" },
            { id: 4,  rating: 4,  recoveryTime: "2–4 days",      description: "Enhanced physique — enhanced human or mutant biology amplifies recovery noticeably",             examples: "Beast, Spider-Man" },
            { id: 5,  rating: 5,  recoveryTime: "~24–36 hours",  description: "Heightened healing — divine or advanced alien physiology produces clearly superhuman recovery",   examples: "Thor, Gladiator" },
            { id: 6,  rating: 6,  recoveryTime: "~12 hours",     description: "Active healing — powerful physiology closes major wounds within hours",                          examples: "" },
            { id: 7,  rating: 7,  recoveryTime: "~5–6 hours",    description: "Strong healing factor — serious damage repaired in a few hours",                                 examples: "" },
            { id: 8,  rating: 8,  recoveryTime: "~2–3 hours",    description: "Rapid regeneration — severe injuries recovered in well under a day",                             examples: "Sabretooth" },
            { id: 9,  rating: 9,  recoveryTime: "~1 hour",       description: "Near-peak healing factor — heals major wounds in under an hour",                                 examples: "Wolverine" },
            { id: 10, rating: 10, recoveryTime: "~15–30 min",    description: "Standard ceiling — serious wounds in minutes; catastrophic wounds in days (vs. months for humans)", examples: "Hulk" },
            { id: 11, rating: 15, recoveryTime: "Seconds",       description: "Ceiling breaker — molecular reconstruction; near-instant healing of any wound", examples: "Apocalypse" },
        ]
    },
    {
        category: "Quickness",
        fullName: "Quickness",
        group: "Mobility",
        description: "Physical attack rate and combat speed — measured in physical strikes (punches, kicks, claws, melee blows) per second. Does NOT measure energy attack frequency (optic beams, repulsors, lightning, etc.) — those are governed by Proj Power. Dual value: offensive (lands more hits per exchange) and defensive (harder to hit and evade). Characters with Teleportation receive 0 — mutually exclusive stats. Scale is 0–10 with one ceiling breaker (Quicksilver).",
        extraColumns: [
            { field: 'atkRate', headerName: 'Physical Attacks / Sec', width: 210 }
        ],
        anchors: [
            { id: 0,  rating: 0,  atkRate: "—",          description: "Teleportation characters only — mutually exclusive with Quickness",                                                      examples: "Nightcrawler, Magik, Spot" },
            { id: 1,  rating: 1,  atkRate: "~1/sec",    description: "Base human — one deliberate strike per second; slow, telegraphed, limited agility",                                      examples: "Juggernaut" },
            { id: 2,  rating: 2,  atkRate: "~2/sec",    description: "Fast human — peak-conditioned non-specialist; basic combat tempo, no superhuman enhancement",                            examples: "Nick Fury" },
            { id: 3,  rating: 3,  atkRate: "~3/sec",    description: "Base mutant — mutant physiology edges above peak human; roughly world-class human fighter territory",                    examples: "Cyclops, Storm, Magneto" },
            { id: 4,  rating: 4,  atkRate: "~5/sec",    description: "Trained/conditioned — elite human conditioning or low-level mutation with a combat speed focus",                         examples: "Black Widow" },
            { id: 5,  rating: 5,  atkRate: "~7/sec",    description: "Enhanced human — super-serum or mutation pushes clearly past any human limit",                                           examples: "Captain America, Rhino" },
            { id: 6,  rating: 6,  atkRate: "~9/sec",    description: "Very fast mutant — feral agility with enhanced reflexes and burst strike rate as a defining trait",                      examples: "Beast, Wolverine" },
            { id: 7,  rating: 7,  atkRate: "~12/sec",   description: "Elite superhuman — Nightcrawler-tier combat tempo (calibration anchor; Nightcrawler himself scores 0)",                 examples: "Sabretooth" },
            { id: 8,  rating: 8,  atkRate: "~15/sec",   description: "Peak superhuman — spider-sense and mutation-enhanced reflexes produce a near-blur attack rate",                          examples: "Spider-Man" },
            { id: 9,  rating: 9,  atkRate: "~18/sec",   description: "Near-ceiling — divine or cosmic-tier physiology; strikes land faster than most opponents can track",                     examples: "Thor" },
            { id: 10, rating: 10, atkRate: "~20/sec",   description: "Standard ceiling — fastest non-Quicksilver combatant; twenty physical strikes per second",                              examples: "Gladiator" },
            { id: 11, rating: 50, atkRate: "500+/sec",  description: "Ceiling breaker — categorically different league; attack rate is effectively infinite relative to any score-10 opponent", examples: "Quicksilver" },
        ]
    },
    {
        category: "Flight Speed",
        fullName: "Flight Speed",
        group: "Mobility",
        description: "Airborne movement speed. 0 = cannot fly. 3D airspace makes targeting exponentially harder than ground targets.",
        anchors: [
            { id: 0, rating: 0, description: "Cannot fly", examples: "" },
            { id: 1, rating: 3, description: "Average baseline", examples: "" },
            { id: 2, rating: 10, description: "Peak flight speed", examples: "" },
        ]
    },
    {
        category: "Hunting/Tracking",
        fullName: "Hunting/Tracking",
        group: "Tactical / Support",
        description: "Ability to locate, pursue, and close in on targets — or evade enemies. Covers enhanced senses, telepathic detection, and learned skills. Natural counter to Stealth/Deception.",
        anchors: [
            { id: 0, rating: 0, description: "", examples: "" },
            { id: 1, rating: 3, description: "Average baseline", examples: "" },
            { id: 2, rating: 10, description: "Peak", examples: "" },
        ]
    },
    {
        category: "Leadership",
        fullName: "Leadership",
        group: "Tactical / Support",
        description: "Ability to lead and coordinate a team, boosting overall team effectiveness. No negatives — lone wolves operate independently.",
        anchors: [
            { id: 0, rating: 0, description: "", examples: "" },
            { id: 1, rating: 3, description: "Average baseline", examples: "" },
            { id: 2, rating: 10, description: "Peak", examples: "Professor X, Captain America" },
        ]
    },
    {
        category: "Telekinesis",
        fullName: "Telekinesis",
        group: "Psychic",
        description: "Mental object/person manipulation without physical contact. Rare stat — very few characters receive meaningful values. Teleportation is the only counter to a TK grab.",
        anchors: [
            { id: 0, rating: 0, description: "No ability", examples: "" },
            { id: 1, rating: 3, description: "Average baseline", examples: "" },
            { id: 2, rating: 10, description: "Peak", examples: "Jean Grey, Professor X" },
        ]
    },
    {
        category: "Telepathy",
        fullName: "Telepathy",
        group: "Psychic",
        description: "Psychic attack/control of opponents' minds. Near-instant win condition at any range if it lands. One of the most powerful abilities in the system.",
        anchors: [
            { id: 0, rating: 0, description: "No ability", examples: "" },
            { id: 1, rating: 3, description: "Average baseline", examples: "" },
            { id: 2, rating: 10, description: "Peak", examples: "Professor X, Jean Grey" },
        ]
    },
    {
        category: "Telepath Resist",
        fullName: "Telepathy Resistance",
        group: "Psychic",
        description: "Defense against Telepathy. Universal — nobody gets 0. Resolved cumulatively across the whole team vs. the attacker's Telepathy stat.",
        anchors: [
            { id: 0, rating: 1, description: "Minimum — everyone has at least this", examples: "" },
            { id: 1, rating: 3, description: "Average baseline", examples: "" },
            { id: 2, rating: 10, description: "Peak — near full immunity", examples: "Magneto (helmet), Juggernaut (helmet)" },
        ]
    },
    {
        category: "Magnetism",
        fullName: "Magnetism",
        group: "Magnetic",
        description: "Control and manipulation of metal. Primarily Magneto's domain. Polaris and a few others have values.",
        anchors: [
            { id: 0, rating: 0, description: "No ability", examples: "" },
            { id: 1, rating: 3, description: "Average baseline", examples: "Polaris" },
            { id: 2, rating: 10, description: "Peak", examples: "Magneto" },
        ]
    },
    {
        category: "Has Metal",
        fullName: "Has Metal",
        group: "Magnetic",
        description: "How much metal is on/in the character. Functions as a vulnerability stat against Magneto. Everyone baseline = 1 (iron in blood).",
        anchors: [
            { id: 0, rating: 1, description: "Everyone baseline (iron in blood)", examples: "" },
            { id: 1, rating: 5, description: "Partial metal — weapons, armor, or clothing", examples: "" },
            { id: 2, rating: 10, description: "Fully structural metal", examples: "Wolverine (adamantium), Iron Man (suit), Colossus (steel body)" },
        ]
    },
    {
        category: "Magic Cast",
        fullName: "Magic Casting",
        group: "Magic",
        description: "Raw power level of spellcasting ability. Magic amplifies applicable existing stats. Full mechanic TBD.",
        anchors: [
            { id: 0, rating: 0, description: "No ability", examples: "" },
            { id: 1, rating: 3, description: "Average baseline", examples: "" },
            { id: 2, rating: 10, description: "Peak", examples: "Dr. Strange" },
        ]
    },
    {
        category: "Magic Resist",
        fullName: "Magic Resistance",
        group: "Magic",
        description: "Resistance to magic effects. Universal — everyone has some value. Shield does not protect against magic except when it manifests as a physical projectile.",
        anchors: [
            { id: 0, rating: 0, description: "", examples: "" },
            { id: 1, rating: 3, description: "Average baseline", examples: "" },
            { id: 2, rating: 10, description: "Peak", examples: "" },
        ]
    },
    {
        category: "Absorption",
        fullName: "Absorption",
        group: "Energy",
        description: "Absorb incoming energy attacks and convert them into a usable resource (capacitor mechanic). Distinct from Armor — Armor tanks, Absorption converts.",
        anchors: [
            { id: 0, rating: 0, description: "No ability", examples: "" },
            { id: 1, rating: 3, description: "Average baseline", examples: "" },
            { id: 2, rating: 10, description: "Peak", examples: "Bishop, Sebastian Shaw" },
        ]
    },
    {
        category: "Water Manip",
        fullName: "Water Manipulation",
        group: "Elemental",
        description: "Ability to control and manipulate water.",
        anchors: [
            { id: 0, rating: 0, description: "No ability", examples: "" },
            { id: 1, rating: 3, description: "Average baseline", examples: "" },
            { id: 2, rating: 10, description: "Peak", examples: "Namor, Storm" },
        ]
    },
    {
        category: "Cold Manip",
        fullName: "Cold Manipulation",
        group: "Elemental",
        description: "Ability to control and manipulate cold/ice. Specialists score higher than multi-element characters.",
        anchors: [
            { id: 0, rating: 0, description: "No ability", examples: "" },
            { id: 1, rating: 3, description: "Average baseline", examples: "" },
            { id: 2, rating: 10, description: "Peak specialist", examples: "Iceman" },
        ]
    },
    {
        category: "Heat Manip",
        fullName: "Heat Manipulation",
        group: "Elemental",
        description: "Ability to control and manipulate heat/fire. Specialists score higher than multi-element characters.",
        anchors: [
            { id: 0, rating: 0, description: "No ability", examples: "" },
            { id: 1, rating: 3, description: "Average baseline", examples: "" },
            { id: 2, rating: 10, description: "Peak specialist", examples: "Pyro, Human Torch" },
        ]
    },
    {
        category: "Sky Manip",
        fullName: "Sky Manipulation",
        group: "Elemental",
        description: "Weather and atmospheric control. Context-dependent — powerful outdoors (especially near water), largely neutralized indoors.",
        anchors: [
            { id: 0, rating: 0, description: "No ability", examples: "" },
            { id: 1, rating: 3, description: "Average baseline", examples: "" },
            { id: 2, rating: 10, description: "Peak", examples: "Storm" },
        ]
    },
    {
        category: "Stealth/Deception",
        fullName: "Stealth/Deception",
        group: "Special / Advanced",
        description: "Ability to conceal presence, deceive opponents, or operate undetected. Covers shapeshifting, invisibility, and trained infiltration. Natural counter: Hunting/Tracking.",
        anchors: [
            { id: 0, rating: 0, description: "No ability", examples: "" },
            { id: 1, rating: 3, description: "Average baseline", examples: "Black Widow" },
            { id: 2, rating: 10, description: "Peak", examples: "Mystique, Morph, Invisible Woman" },
        ]
    },
    {
        category: "Teleportation",
        fullName: "Teleportation",
        group: "Special / Advanced",
        description: "Instantly move from one location to another without traversing space. Characters with this stat receive 0 in Quickness. Only escape from a Telekinesis grab.",
        anchors: [
            { id: 0, rating: 0, description: "Cannot teleport", examples: "" },
            { id: 1, rating: 3, description: "Average baseline", examples: "" },
            { id: 2, rating: 10, description: "Peak — long range, high precision, high frequency", examples: "Nightcrawler, Magik, Spot" },
        ]
    },
    {
        category: "Shield",
        fullName: "Shield",
        group: "Special / Advanced",
        description: "Project protective barriers covering teammates. Distinct from Armor (personal durability). Does NOT protect against Telepathy or general Magic.",
        anchors: [
            { id: 0, rating: 0, description: "No ability", examples: "" },
            { id: 1, rating: 3, description: "Average baseline", examples: "" },
            { id: 2, rating: 10, description: "Peak", examples: "Invisible Woman" },
        ]
    },
]

export const calibrationGroups = [
    "Physical Combat",
    "Durability & Recovery",
    "Mobility",
    "Tactical / Support",
    "Psychic",
    "Magnetic",
    "Magic",
    "Energy",
    "Elemental",
    "Special / Advanced",
]
