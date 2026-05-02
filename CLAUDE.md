# Marvel Fantasy Battle — Claude Context

This file is auto-loaded by Claude Code at the start of every session. It contains everything needed to continue work on this project without re-explanation.

---

## Canon Era — Source of Truth

All character stat ratings are based on **1990s-era Marvel** — comics, animated series (X-Men TAS, Spider-Man TAS, etc.), and trading cards from that period. MCU film/TV portrayals are **explicitly excluded** as a reference point. Where a character's power level was inflated or changed significantly in later media, default to how they were depicted in the 90s.

---

## What This App Is

A fantasy sports-style Marvel character team drafting and battle game. Two players (Team A and Team B) each draft a roster of Marvel characters under a **15-point draft cap**, then their teams face off in a simulated battle. Think fantasy football but with Marvel heroes and villains.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **UI:** Tailwind CSS with custom theme colors (ThemeB5, MarvelBlack, ThemeWhite, MarvelRed, etc.)
- **Component Library:** MUI (Material UI) + MUI X DataGrid for the Power Grid table
- **Backend:** Supabase (installed, not yet active — intentionally deferred)
- **Styling:** Custom gradient variables defined in tailwind.config.js

## Current Development State

- Draft UI is functional: two team forms (Team A, Team B), character dropdowns, running draft value totals, 15-point cap enforced
- Power Grid modal: MUI DataGrid showing character stats
- Rules modal: placeholder Lorem Ipsum — real rules not written yet
- Stages button: present but not wired up
- Supabase save is stubbed out (commented out in handleSubmit)
- **Build locally first, validate data and logic, then move to Supabase**

## Data Files

- `src/app/db/draftValue.js` — 130+ characters each with a Draft Value (1–5)
- `src/app/db/marvelCharacters.js` — per-stat data. 18 sample characters. **Melee Strength, H2H Skill, and Proj Power are calibrated. All other stats are still 0 placeholders.**

---

## Stat System — All 25 Categories

### Scale Rules
- **0** = ability completely absent. Not low — does not exist for this character.
- **1–10** = standard range. Average superhero/mutant baseline = **3**
- **Above 10** = ceiling-breaker. Reserved for characters who genuinely transcend the normal scale (e.g., Hulk Melee Strength = 20)
- Scale is **non-linear** — gaps between numbers reflect real power differences, not equal increments. Character #2 in a category can be many whole numbers below #1.

---

### Physical Combat

**1. Melee Strength**
Raw lifting/striking power only. No speed, no technique — purely how hard they hit or how much they lift.

**Finalized scale with character placements:**

| Score | Force | Tier | Characters |
|-------|-------|------|------------|
| 0 | 0 lbs | Ability absent | — |
| 1 | 0–500 lbs | Peak human | Punisher, Nick Fury |
| 2 | 500–1,000 lbs | Peak athletic human | Black Widow, Storm |
| 3 | 1,000–2,000 lbs | Average mutant baseline | Cyclops, Nightcrawler, Magneto |
| 4 | ~1–2 tons | Enhanced human / strong mutant | Cap, Wolverine, Colossus (human form) |
| 5 | ~2–5 tons | Notably superhuman | Sabretooth |
| 6 | ~10 tons | Strong superhuman | Beast |
| 7 | ~25 tons | Powerful superhuman | Spider-Man |
| 8 | ~50 tons | Elite superhuman | Rhino |
| 9 | ~75 tons | Near ceiling | Iron Man (with suit), Colossus (armored) |
| 10 | 100+ tons | Standard ceiling | Thor |
| 15 | ~500+ tons | Ceiling breaker | Apocalypse |
| 20 | Unlimited | Rage-scaled | Hulk |
| 30 | Beyond unlimited | Cosmic power level | Gladiator (Shi'ar) |

Scoring notes: Age does not meaningfully reduce raw strength (Magneto = 3, same as Cyclops). Iron Man rated with suit active. Colossus has two scores: 4 (human form) and 9 (armored).

**2. H2H Skill**
Hand-to-hand combat proficiency measured in **years-of-training equivalent**. Strictly technique and combat knowledge — does NOT factor in strength, speed, agility, or powers. Some characters are naturally gifted and represent a higher equivalent without literally having trained that long (Spider-Man's spider-sense counts here — no separate category exists for it).

**No ceiling breakers for H2H Skill** — it is a multiplier category and ceiling breakers would make the math unmanageable. Scale is strictly 0–10.

**Finalized scale:**

| Score | Years Equiv. | Tier | Sample Characters |
|-------|-------------|------|-------------------|
| 0 | 0 | No training — instinctive brawling | — |
| 1 | ~2 yrs | Street-level basics | Rhino, Juggernaut, Hulk |
| 2 | ~5 yrs | Formal martial arts | Magneto, Iron Man |
| 3 | ~10 yrs | Military combat / dedicated martial artist | Nick Fury, Storm, Colossus |
| 4 | ~20 yrs | Professional career fighter, multiple disciplines | Cyclops |
| 5 | ~30–40 yrs | Peak of a dedicated human lifetime | Black Widow, Beast |
| 6 | ~50–75 yrs | Beyond a single human lifetime | Captain America, Spider-Man* |
| 7 | ~100–200 yrs | Multi-generational warrior | Wolverine, Sabretooth |
| 8 | ~400 yrs | Centuries of real warfare | *(open)* |
| 9 | ~700 yrs | Near-millennium mastery | Thor |
| 10 | ~1,000 yrs | Ancient warriors with millennia of combat | Apocalypse, Gladiator** |

*Spider-Man rated 6 because spider-sense and mutation instinct function as combat instinct — no other stat captures this.
**Gladiator rated 10 because Shi'ar Imperial Guard combat doctrine is assumed to transcend anything Earth-based.

**3. Proj Power**
Raw destructive output of ranged/projectile attacks at **point of impact**. Measured in TNT equivalent (RE Factor). How hard the blast hits — not accuracy, not area coverage. Beam vs. area distinction deferred; all attacks measured as point-of-impact force.

**No ceiling breakers** — scale is strictly 0–10.

**Finalized scale:**

| Score | TNT Equiv | Anchor |
|-------|-----------|--------|
| 0 | — | No projectile ability |
| 1 | ~250 kg | Single large explosive charge — localized structural damage |
| 2 | ~1 ton | Large vehicle bomb — destroys a city block face |
| 3 | ~5 tons | Multiple JDAM strikes — levels a large structure |
| 4 | ~22 tons | MOAB (GBU-43) — destroys a large compound or full city block |
| 5 | ~90 tons | Multiple MOABs — levels a city district |
| 6 | ~350 tons | Massive conventional bombardment — levels a small town |
| 7 | ~1.2 kt | Small tactical nuclear weapon |
| 8 | ~3.5 kt | Mid-range tactical nuclear weapon |
| 9 | ~8 kt | Large tactical nuclear weapon — destroys a major city district |
| 10 | ~15 kt | Hiroshima (Little Boy) — destroys an entire city |

**Finalized character placements (18 sample roster):**

| Score | Characters |
| ----- | ---------- |
| 0 | Wolverine, Sabretooth, Beast, Rhino, Colossus, Juggernaut |
| 1 | Nick Fury, Black Widow, Captain America, Spider-Man, Hulk |
| 4 | Storm |
| 6 | Iron Man, Thor |
| 7 | Magneto |
| 8 | Cyclops |
| 9 | Gladiator |
| 10 | Apocalypse |

**Key calibration decisions and reasoning:**

- **Lightning is lightning** — Storm and Thor both use atmospheric/divine lightning. The element doesn't arbitrarily scale because of who's throwing it. Thor's lightning is one step above Storm's (6 vs. 4) to acknowledge his amplified divine output and Mjolnir throws, but the same ceiling logic applies.
- **Mjolnir is a melee weapon** — Thor's primary power is captured in Melee Strength. The Godblast is a one-shot desperation move, not repeatable combat output, so it does not set his Proj Power ceiling.
- **Magneto's Asteroid M and planetary magnetic field feats belong to Magnetism**, not Proj Power. His Proj Power (7) reflects electromagnetic blasts and hypersonic metal projectiles in combat — powerful but one step below Cyclops's focused optic beam.
- **Cyclops rated on demonstrated peak** (8), not theoretical max. His visor restricts output by choice; full-open would push toward 10 but that is not his combat-typical behavior.
- **Characters with no innate ranged attack get 0** — pure melee fighters (Wolverine, Colossus, Juggernaut, etc.) do not get token values for throwing objects.

**4. Proj Dist/Accuracy**
How reliably a character lands their projectile on target. Cyclops scores high (beam goes exactly where eyes point). Iron Man scores high (targeting systems). Untrained or imprecise characters score low regardless of raw power.

*Paired sets: Melee Strength + H2H Skill / Proj Power + Proj Dist/Accuracy — raw power vs. precision.*

---

### Durability & Recovery

**5. Armor**
Total damage absorption — naturally tough bodies, actual armor, or both. How much punishment they can take.

**6. Healing**
Self-recovery speed from damage. **Base = 3 for ALL characters** (humans and mutants alike — Marvel canon does not show mutants healing faster than humans consistently). Wolverine breaks the ceiling.

---

### Mobility

**7. Quickness**
Ground movement speed in combat. Dual value: offensive (more strikes per second) and defensive (evasion). **Characters with Teleportation receive 0 in Quickness — mutually exclusive stats.**

**8. Flight Speed**
Airborne movement speed, rated 1–10. 0 = cannot fly. Same dual offensive/defensive value as Quickness but amplified — 3D airspace makes targeting exponentially harder. Also confers high-ground offensive advantage. Future game logic will formalize this.

---

### Tactical / Support

**9. Hunting/Tracking**
Ability to locate, track, and pursue targets — or evade enemies. Covers enhanced senses (smell, sight, hearing), telepathic detection, magnetic sensing (iron in blood), and learned skills. Natural counter to Stealth/Deception.

**10. Leadership**
Ability to lead and coordinate a team, boosting overall effectiveness. No negative values — lone wolves operate independently rather than dragging the team down.

---

### Psychic

**11. Telekinesis**
Move and manipulate objects/people without physical contact. Combines melee intimacy with ranged safety. Can lift opponents off the ground, hold them, throw them, or at extreme levels dismember. **Rare stat — very few characters get meaningful values.** Magneto has some TK but modeled under Magnetism instead.
*Unique rule: Teleportation is the ONLY counter to a TK grab.*

**12. Telepathy**
Attack, control, or shut down an opponent's mind. Near-instant win condition at any range if it lands. Can cause mind control, unconsciousness, aneurysm, or permanent incapacitation. Professor X near or at ceiling. Jean Grey is high but below Professor X.

**13. Telepath Resist**
Defense against Telepathy. **Universal — everyone has at least some value based on willpower. Nobody gets 0.**
- Resolution: **cumulative model** — sum of defending team's Telepath Resist scores vs. attacker's Telepathy stat
- Team's own telepath adds to the team resistance pool (telepaths shield teammates)
- Helmets (Magneto, Juggernaut) = hard shielding. Accepted as canon "it just works."
- Unresolved: whether team telepath adds full Telepathy stat or fraction to resistance pool (risk of making Professor X both offensively and defensively dominant)

---

### Magnetic

**14. Magnetism**
Control and manipulation of metal. Primarily Magneto. Polaris and a few others have values.

**15. Has Metal**
How much metal is on/in the character. **Everyone baseline = 1** (blood iron). Higher for metallic weapons/armor. Highest for characters where metal is structural (Wolverine's adamantium, Colossus's steel body, Iron Man's suit). **Functions as a vulnerability stat — high Has Metal is a liability against Magneto.**

---

### Magic

**16. Magic Cast**
Raw power level of spellcasting. Dr. Strange near top. Ranked subjectively — Marvel magic canon is too vague and inconsistent to be prescriptive.
*Working rule: Magic amplifies applicable existing stats (magic projectile = Proj Power × magic multiplier). Full mechanic TBD.*

**17. Magic Resist**
Universal resistance to magic. Everyone has some value. Exact determination TBD — owner will devise an elegant solution.
*Shield does NOT fully protect against Magic — only against magic manifesting as a physical projectile.*

---

### Energy

**18. Absorption**
Absorb incoming energy attacks and store them (capacitor mechanic). Absorbed energy can be redirected offensively. Bishop and Sebastian Shaw are prime examples. Distinct from Armor — Armor tanks damage, Absorption converts it into a resource.

---

### Elemental Manipulation

**19. Water Manip** — Control and manipulate water.

**20. Cold Manip** — Control and manipulate cold/ice. Iceman = specialist. Storm has some but less precise.

**21. Heat Manip** — Control and manipulate heat/fire. Pyro = specialist.

**22. Sky Manip** — Weather and atmospheric control. Storm is primary. **Context-dependent: powerful outdoors (especially near water), largely neutralized indoors.** Future mechanic will account for battle environment.

---

### Special / Advanced

**23. Stealth/Deception**
Conceal presence, deceive opponents, operate undetected. Covers shapeshifting (Mystique, Morph), literal invisibility (Invisible Woman), and trained infiltration skills (Black Widow). Natural counter: Hunting/Tracking.

**24. Teleportation**
Instantly move from one location to another without traversing space. Distinct from Quickness — skips space entirely.
- Offensive: surprise attacks, repositioning, removing opponents from battlefield (e.g., Azazel teleporting enemies high in the air and dropping them)
- Defensive: evasion, escape
- **Characters with Teleportation receive 0 in Quickness** (mutually exclusive)
- **Only escape from a Telekinesis grab**
- Key characters: Nightcrawler, Magik, Spot

**25. Shield**
Project protective barriers covering teammates — not just oneself. Distinct from Armor (personal durability).
- **Protects against:** Physical attacks, projectile/energy attacks, magic projectiles
- **Does NOT protect against:** Telepathy (physical barriers are irrelevant to psychic attacks), general Magic
- Invisible Woman is the prime candidate.

---

## Draft Value Framework (1–5)

| Value | Meaning |
|---|---|
| 1 | Weak — barely above normal human |
| 2 | Below average superhero/mutant |
| 3 | Average superhero/mutant baseline |
| 4 | Above average |
| 5 | Elite / Omega level |

**Key nuances:**
- Most characters fall 2–4 because strengths offset weaknesses
- Draft Value is NOT a stat sum — it reflects how threatening a character is in an actual fight
- **Ceiling-breaker rule:** One stat so absurdly high it becomes a solo win condition = Draft Value 5 (Hulk's Melee Strength, Professor X's Telepathy)
- Characters strong across MORE than the average number of categories also push toward 5

---

## Stat Interaction Rules

| Interaction | Rule |
|---|---|
| Teleportation + Quickness | Mutually exclusive — Teleportation characters get 0 Quickness |
| Teleportation + Telekinesis | Teleportation is the ONLY escape from a TK grab |
| Telepathy resolution | Cumulative — attacker's Telepathy vs. sum of all defenders' Telepath Resist |
| Shield vs. Telepathy | Shield does NOT block Telepathy |
| Shield vs. Magic | Shield only blocks magic that manifests as a physical projectile |
| Has Metal vs. Magnetism | High Has Metal = vulnerability against Magneto |
| Absorption vs. Armor | Absorption converts energy to resource; Armor passively tanks it |
| Stealth vs. Hunting/Tracking | Hunting/Tracking is the natural counter to Stealth/Deception |
| Sky Manip | Context-dependent — outdoor battles only |
| Flight Speed | High-ground advantage for projectiles; 3D evasion harder to counter than ground Quickness |

---

## Roster Decisions

### Removed from roster:
- **Ant-Man, Wasp, Yellowjacket** — Size manipulation (atomic-level infiltration) has no adequate counter in current stat system. Removed until elegant counter mechanic is designed.

### No stat column added for:
- **Power Copying (Rogue)** — Her permanent absorption of Carol Danvers' powers (super strength, high-speed flight) maps onto existing stats. Draft Value 4 reflects this.
- **Probability Manipulation (Domino, Scarlet Witch)** — Too abstract. Scarlet Witch handled under Magic Cast.
- **Duplication (Multiple Man)** — Too character-specific for a whole column.
- **Sonic/Sound (Banshee, Siryn)** — Screams function as projectiles; Proj Power/Accuracy covers this.
- **Size Manipulation** — Deferred with Pym particle characters.

---

## Calibration System

Each stat is calibrated via the Calibration Guide modal in the app (accessible from the gameboard).

### Data files
- `src/app/db/calibrationData.js` — anchor table per stat. Supports `extraColumns` (e.g., "Force (In Weight)" for Melee Strength) and matching fields on each anchor row.
- `src/app/db/calibrationCurveData.js` — curve config per stat. Each entry has: `yLabel`, `maxValue`, `formatGridLabel(val)` (formats the 10 auto-generated Y-axis ticks), `note`, and `points[]` with `{ score, value, display, char }`. `char: null` = unassigned gap (renders gray dot).

### UI components
- `CalibrationGrid.js` — modal with sidebar nav + DataGrid table + "View Curve / View Table" toggle.
- `CalibrationCurve.js` — generic pure-SVG linear chart, no external library. VH = 580 (viewBox height). Features: Y-axis zoom slider (scales from 0.1% of effectiveMax to effectiveMax — intentionally low to allow visibility into sub-conventional ranges like Proj Power scores 1–6), SVG clipPath clips dots/line/area to chart bounds, X-axis capped at score 10 (ceiling breakers excluded from graph), Y-axis ceiling derived from the score-10 point value (not `config.maxValue`). To add a curve to a new category: add an entry to `calibrationCurveData.js` — the toggle appears automatically.

---

## What's Next

Stat calibration is in progress. Current state:

- **Melee Strength** — scale and placements done. All 18 sample characters assigned.
- **H2H Skill** — scale and placements done. All 18 sample characters assigned.
- **Proj Power** — scale and placements done. All 18 sample characters assigned.
- **All other stats** — scale structure exists in `calibrationData.js` but character placements not yet done.

Next up: **Proj Dist/Accuracy** — calibrate scale anchors, place sample characters, verify `calibrationCurveData` entry.

Calibration pattern (repeat for each stat):

1. Define scale anchors with descriptions and examples in `calibrationData.js`
2. Place sample characters, discuss and push back where needed
3. Verify `calibrationCurveData.js` entry is consistent (values match displays, effectiveMax correct)
4. Write finalized ratings into `marvelCharacters.js`
