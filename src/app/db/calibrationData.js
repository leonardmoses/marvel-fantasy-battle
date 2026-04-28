export const calibrationData = [
    {
        category: "Melee Strength",
        group: "Physical Combat",
        description: "Raw lifting/striking power. Does not account for speed or technique — purely how hard they hit or how much they lift.",
        anchors: [
            { id: 0, rating: 0, description: "Below human level", examples: "" },
            { id: 1, rating: 1, description: "Human level strength", examples: "" },
            { id: 2, rating: 2, description: "500 lbs", examples: "" },
            { id: 3, rating: 3, description: "1,000 lbs", examples: "" },
            { id: 4, rating: 4, description: "2 Tons", examples: "" },
            { id: 5, rating: 5, description: "5 Tons", examples: "" },
            { id: 6, rating: 6, description: "10 Tons", examples: "" },
            { id: 7, rating: 7, description: "30 Tons", examples: "" },
            { id: 8, rating: 8, description: "50 Tons", examples: "" },
            { id: 9, rating: 9, description: "80 Tons", examples: "" },
            { id: 10, rating: 10, description: "100+ Tons", examples: "Juggernaut" },
            { id: 11, rating: 15, description: "Apocolypse Level", examples: "Apocalypse" },
            { id: 12, rating: 20, description: "Hulk Level", examples: "Hulk, Gladiator (Shi'ar)" },
        ]
    },
    {
        category: "H2H Skill",
        group: "Physical Combat",
        description: "Technical combat proficiency combining training and accumulated experience. Multi-discipline and long-lived fighters score higher. Some superhuman abilities can push characters above the normal ceiling.",
        anchors: [
            { id: 0, rating: 0, description: "No training", examples: "" },
            { id: 1, rating: 1, description: "Basic martial arts training", examples: "" },
            { id: 2, rating: 2, description: "Black Belt martial arts level", examples: "" },
            { id: 3, rating: 3, description: "Military combat training", examples: "" },
            { id: 4, rating: 4, description: "30 years training (X-Men level)", examples: "" },
            { id: 5, rating: 5, description: "50 years training level", examples: "Captain America" },
            { id: 6, rating: 6, description: "75 years training level", examples: "" },
            { id: 7, rating: 7, description: "100 years training level", examples: "" },
            { id: 8, rating: 8, description: "500 years training level", examples: "" },
            { id: 9, rating: 9, description: "1,000 years training level", examples: "" },
            { id: 10, rating: 10, description: "4,000 years training level", examples: "Apocalypse" },
            { id: 11, rating: 15, description: "Nightcrawler Level", examples: "Nightcrawler" },
            { id: 12, rating: 20, description: "Quicksilver Level", examples: "Quicksilver" },
        ]
    },
    {
        category: "Proj Power",
        group: "Physical Combat",
        description: "Raw destructive output of ranged/projectile attacks measured in RE (Relative Effectiveness — explosive power relative to TNT). How hard the blast hits — not accuracy.",
        anchors: [
            { id: 0, rating: 0, description: "No projectile ability", examples: "" },
            { id: 1, rating: 1, description: "Some projectile force — enough to knock someone back a few feet", examples: "" },
            { id: 2, rating: 2, description: "RE 0.22 — 1 frag grenade", examples: "" },
            { id: 3, rating: 3, description: "RE 1 — 44 frag grenades", examples: "" },
            { id: 4, rating: 4, description: "RE 10", examples: "" },
            { id: 5, rating: 5, description: "RE 100", examples: "" },
            { id: 6, rating: 6, description: "RE 1,000", examples: "" },
            { id: 7, rating: 7, description: "Iron Man weapons level", examples: "Iron Man" },
            { id: 8, rating: 8, description: "Gladiator max eye blast level", examples: "Gladiator (Shi'ar)" },
            { id: 9, rating: 9, description: "Cyclops max optic blast level", examples: "Cyclops" },
            { id: 10, rating: 10, description: "RE 5,000 — Hiroshima bomb equivalent", examples: "" },
        ]
    },
    {
        category: "Proj Dist/Accuracy",
        group: "Physical Combat",
        description: "How far the reach of their projectiles are and how accurately they can hit a moving target. Raw power means little if it cannot reach or land on the target.",
        anchors: [
            { id: 0, rating: 0, description: "No projectile ability", examples: "" },
            { id: 1, rating: 1, description: "Adept human throwing accuracy", examples: "" },
            { id: 2, rating: 2, description: "Advanced/enhanced human throwing accuracy", examples: "Captain America" },
            { id: 3, rating: 3, description: "Superhuman throwing accuracy", examples: "Spider-Man" },
            { id: 4, rating: 4, description: "Beyond throwing — range and accuracy up to 100 feet", examples: "" },
            { id: 5, rating: 5, description: "Range and accuracy up to a few hundred feet", examples: "" },
            { id: 6, rating: 6, description: "Range and accuracy up to a few thousand feet", examples: "" },
            { id: 7, rating: 7, description: "Very long range — can hit a target up to a mile away", examples: "Storm (lightning)" },
            { id: 8, rating: 8, description: "Long range, wide coverage, extremely accurate — can home in on targets", examples: "Iron Man (targeting system)" },
            { id: 9, rating: 9, description: "Can hit whatever they can see", examples: "Cyclops" },
            { id: 10, rating: 10, description: "Near 100% guaranteed hit", examples: "" },
        ]
    },
    {
        category: "Armor",
        group: "Durability & Recovery",
        description: "How much punishment a character can absorb before being incapacitated. Includes tough bodies, physical armor, or both.",
        anchors: [
            { id: 0, rating: 0, description: "", examples: "" },
            { id: 1, rating: 3, description: "Average baseline", examples: "" },
            { id: 2, rating: 10, description: "Peak", examples: "" },
        ]
    },
    {
        category: "Healing",
        group: "Durability & Recovery",
        description: "Speed and completeness of self-recovery from damage. Base = 3 for all characters — humans and mutants alike.",
        anchors: [
            { id: 0, rating: 0, description: "", examples: "" },
            { id: 1, rating: 3, description: "Human / mutant baseline", examples: "" },
            { id: 2, rating: 10, description: "Peak", examples: "" },
        ]
    },
    {
        category: "Quickness",
        group: "Mobility",
        description: "Ground movement speed in combat. Dual value: offensive (strikes per second) and defensive (evasion). Characters with Teleportation receive 0.",
        anchors: [
            { id: 0, rating: 0, description: "Teleportation characters only", examples: "Nightcrawler, Magik, Spot" },
            { id: 1, rating: 3, description: "Average baseline", examples: "" },
            { id: 2, rating: 10, description: "Peak ground speed", examples: "Quicksilver" },
        ]
    },
    {
        category: "Flight Speed",
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
