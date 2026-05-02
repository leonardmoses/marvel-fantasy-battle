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
- `src/app/db/marvelCharacters.js` — per-stat data. **The 7 characters currently here are unfinished test dummies — NOT finalized. Do not use as reference.**

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
| 5 | ~2–5 tons | Notably superhuman | *(unassigned)* |
| 6 | ~10 tons | Strong superhuman | Beast, Sabretooth |
| 7 | ~25–30 tons | Powerful superhuman | *(unassigned)* |
| 8 | ~50 tons | Elite superhuman | Spider-Man, Venom |
| 9 | ~75–80 tons | Near ceiling | Iron Man (with suit) |
| 10 | 100+ tons | Standard ceiling | Thor, Colossus (armored), Thing |
| 15 | ~500+ tons | Ceiling breaker | Apocalypse |
| 20 | Unlimited | Rage-scaled | Hulk, Gladiator (Shi'ar) |

Scoring notes: Age does not meaningfully reduce raw strength (Magneto = 3, same as Cyclops). Iron Man rated with suit active. Colossus has two scores: 4 (human form) and 10 (armored). Scores 5 and 7 still need characters placed.

**2. H2H Skill**
Hand-to-hand combat proficiency = technical training + accumulated experience. A 100+ year-old character trained in multiple disciplines (Wolverine) scores higher than a peak-trained but younger fighter. Covers barehands and melee weapons.

**3. Proj Power**
Raw destructive output of ranged/projectile attacks. How hard does the blast hit — not accuracy. Cyclops and Iron Man are high. Spider-Man's webbing is low (utility, not destructive).

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
- `CalibrationCurve.js` — generic pure-SVG linear chart, no external library. VH = 580 (viewBox height). To add a curve to a new category: add an entry to `calibrationCurveData.js` — the toggle appears automatically.

---

## What's Next

Stat calibration is in progress. Current state:
- **Melee Strength** — scale and placements done. Scores 5 and 7 still need characters assigned.
- **All other stats** — scale structure exists in `calibrationData.js` but character placements not yet done.

Next steps:
1. Fill scores 5 and 7 for Melee Strength
2. Calibrate remaining stats the same way: define scale anchors, place characters, add `calibrationCurveData` entry
3. Once calibration baselines are set, populate `marvelCharacters.js` with real stat data in batches of 20–30
