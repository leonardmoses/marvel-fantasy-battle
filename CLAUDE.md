# Marvel Fantasy Draft — Claude Context

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
- **Backend:** Supabase — **auth (login/signup) is live** via server actions in `src/app/auth/actions.js` using `@supabase/ssr`. Team data save is still stubbed out. Env vars: `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`. SSR client in `src/utils/supabase/server.js`.
- **Styling:** Custom gradient variables defined in tailwind.config.js

## Current Development State

- **Home page (`/`)**: Marvel logo + "Enter" link to gameboard + Login/Signup modal buttons. Auth is wired: login redirects to `/gameboard`, signup shows success then redirects to `/`.
- **Draft UI**: Two team forms (Team A, Team B), character dropdowns, running draft value totals. The 15-point cap shows a red warning when exceeded but does **not** block submission — it is displayed only, not enforced.
- **Power Grid modal**: MUI DataGrid showing character stats from `marvelCharacters.js`. The `DraftValue` prop is passed to the component but **not rendered in the grid** — only the stats columns appear.
- **Rules modal**: Complete — game summary and 7-step How to Play written and live in `Rules.js`.
- **Calibration modal**: Wired and functional. Sidebar nav, anchor DataGrid, View Curve / View Table toggle.
- **Stages button**: Present but has **no onClick handler** — completely unwired, mechanic design in progress.
- **Supabase auth**: Live. Login/Signup forms call server actions that hit Supabase auth API.
- **Supabase team save**: Still commented out in `TeamA.js` and `TeamB.js` `handleSubmit`.
- **Build locally first, validate data and logic, then move to Supabase**

## App Architecture

**Routes:**

- `/` — Home/landing page (`src/app/page.js`)
- `/gameboard` — Draft board (`src/app/gameboard/page.js` → `client.js`)

**Key components:**

- `src/app/gameboard/client.js` — Gameboard state holder (modal open/close flags, renders TeamA/TeamB forms and all modals)
- `src/app/gameboard/components/TeamA.js` — Team A draft form
- `src/app/gameboard/components/TeamB.js` — Team B draft form. **Known bug: label text says "Team A" instead of "Team B".**
- `src/app/components/LayoutGeneral.js` — Gameboard layout wrapper (Marvel logo + dice image)
- `src/app/components/Rules.js` — Rules modal
- `src/app/components/PowerGrid.js` — Power Grid modal (MUI DataGrid, stats only — no DraftValue column). Character names are clickable links that open the CharacterModal.
- `src/app/components/SpiderChart.js` — Pure SVG 6-axis radar chart. Exports `AXIS_GROUPS` (the 6 group definitions) and `computeAxes(character)` (returns axis scores). Ceiling breakers capped at 10 for display. No external chart library.
- `src/app/components/CharacterModal.js` — Modal triggered by clicking a character name in the Power Grid. Shows the spider chart (75% width) alongside a scrollable axis breakdown panel (25% width) with per-axis scores, mini bars, and raw component stat values. Modal is 85vw × 85vh, z-50.
- `src/app/components/CalibrationGrid.js` — Calibration modal (sidebar nav + DataGrid + optional curve toggle)
- `src/app/components/CalibrationCurve.js` — Pure SVG chart (no external chart lib). VW=840, VH=580.
- `src/app/components/ModalBackdrop.js` — Shared dark backdrop for Rules/PowerGrid/Calibration modals
- `src/app/components/ButtonClose.js` — Shared close button (wired only for PowerGrid and Rules; CalibrationGrid has its own close button)
- `src/app/auth/actions.js` — Server actions: `login()` → Supabase signIn → redirect `/gameboard`; `signup()` → Supabase signUp → return success
- `src/utils/supabase/server.js` — SSR Supabase client factory

**Known issues / gotchas:**

- TeamB form label reads "Team A" (bug in `TeamB.js` line 64)
- 15-point cap shows warning but does not block submission
- `draftValue.js` has a "Rhyno" entry (typo) — `marvelCharacters.js` correctly spells it "Rhino"
- `DraftValue` values in `draftValue.js` are **strings** (e.g., `"3"`), not numbers. The forms use `parseInt()` when summing totals.
- Colossus is documented with dual scores (4 human form, 9 armored) but `marvelCharacters.js` stores only one value (9). No dual-form tracking exists in the data layer yet.
- Calibration curve (`View Curve` button) only appears for stats that have an entry in `calibrationCurveData.js` — currently only: Melee Strength, H2H Skill, Proj Power, Proj Effective Range, Armor.

---

## Data Files

- `src/app/db/draftValue.js` — 130+ characters each with a Draft Value (1–5, stored as strings)
- `src/app/db/marvelCharacters.js` — per-stat data. 18 sample characters. **Melee Strength, H2H Skill, Proj Power, Proj Effective Range, and Armor are calibrated. All other stats are still 0 placeholders.**
- `src/app/db/calibrationData.js` and `calibrationCurveData.js` are the **source of truth** for calibration values. If any value in this CLAUDE.md differs from those files, trust the files.

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
| 4 | ~30 yrs | Professional career fighter, multiple disciplines | Cyclops |
| 5 | ~50 yrs | Peak of a dedicated human lifetime | Black Widow, Beast |
| 6 | ~100 yrs | Beyond a single human lifetime | Captain America, Spider-Man* |
| 7 | ~200 yrs | Multi-generational warrior | Wolverine, Sabretooth |
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

**4. Proj Effective Range**
Combined effective range and accuracy against a moving, evading target. Answers: *does the blast get there and connect?* Not damage — that's Proj Power. Characters with Proj Power = 0 automatically receive 0 here as well.

**No ceiling breakers** — scale is strictly 0–10. (Same reasoning as H2H Skill — this is a hit-probability modifier.)

The calibration table carries two extra columns: **Effective Range** and **Accuracy vs. Moving Target** — the two dimensions that combine into the single score. The curve Y-axis is effective range in feet (formatted as miles above 5,280 ft).

**Finalized scale:**

| Score | Effective Range | Accuracy vs. Moving Target | Description |
| ----- | --------------- | -------------------------- | ----------- |
| 0 | — | — | No projectile ability |
| 1 | < 20 ft | Poor | Wild throw — might hit a large, slow target at point-blank |
| 2 | < 50 ft | Fair | Can reliably hit large or slow targets; struggles against evasion |
| 3 | ~100 ft | Moderate | Hits stationary or slow targets; unreliable against active evasion |
| 4 | ~300 ft | Good | Reliable at short range; can land shots at medium with setup |
| 5 | ~500 ft | Very Good | Consistent against moving targets at medium range |
| 6 | ~1,000 ft | High | Precision shots under pressure; can thread through obstacles |
| 7 | ~1 mile | High | Long-range specialist — trained combatant with superhuman enhancement |
| 8 | 1–3+ miles | Near-surgical | Can target body parts at distance; compensates for active evasion |
| 9 | Multi-mile / line-of-sight | Near-infallible | Hits whatever they can aim at; only teleportation reliably escapes it |
| 10 | Any visible range | Infallible | Mechanically perfect — projectile goes exactly where intended, no exceptions |

**Finalized character placements (18 sample roster):**

| Score | Characters |
| ----- | ---------- |
| 0 | Wolverine, Sabretooth, Beast, Rhino, Colossus, Juggernaut |
| 1 | Hulk |
| 3 | Spider-Man, Storm, Captain America, Black Widow |
| 4 | Nick Fury |
| 5 | Thor |
| 6 | Magneto |
| 7 | Apocalypse |
| 8 | Gladiator |
| 9 | Iron Man |
| 10 | Cyclops |

**Key calibration decisions and reasoning:**

- **Score 3 cluster** — Spider-Man (web fluid limits range to ~100 ft), Storm (electricity follows path of least resistance, not a beam — can't be surgical beyond ~100 ft), Captain America (shield throw is precise but still a thrown object, ~100 ft useful range), Black Widow (handgun for mobility — same range tier as Fury but handgun caps her further).
- **Nick Fury at 4, not higher** — in combat he carries handguns or at best assault rifles, not sniper hardware. ~300 ft effective range.
- **Thor at 5** — hammer throw and lightning are capable to ~500 ft. 1,000 ft would be pushing it.
- **Magneto at 6** — has human-level vision. Shrapnel and EM blasts top out around 1,000 ft. His Asteroid M and planetary-scale feats belong to the Magnetism stat, not here.
- **Gladiator at 8** — Shi'ar physiology assumed to include enhanced vision well beyond human level; eye beams follow suit.
- **Iron Man at 9** — targeting computers and homing systems are near-infallible, but multi-mile range is the ceiling for 90s-era suit technology.
- **Cyclops at 10** — the beam goes exactly where his eyes point. If he can see it, it hits. Only leaving his line of sight or teleporting away counters it.

*Paired sets: Melee Strength + H2H Skill / Proj Power + Proj Effective Range — raw power vs. precision.*

---

### Durability & Recovery

**5. Armor**
Inherent physical durability — the toughness of the character's body, mutation, and natural defensive powers. Removable gear does not count. Iron Man's suit counts (it IS him). Magneto's EM bubble counts (deflection is his power). Humans always score below mutants regardless of what gear they carry. Extra column: **Durability Source**. Curve is a perfect parabola (Protective Factor = score²).

**No ceiling breakers** — scale is strictly 0–10. Score 10 ceiling defined as: survives direct hits from Thor and Hulk-tier force; only non-physical bypasses (telepathy, specific magic) can stop them.

**Finalized scale:**

| Score | Durability Source | Description |
| ----- | ----------------- | ----------- |
| 0 | Unenhanced human body | No enhancement — fully vulnerable to any attack |
| 1 | Peak human conditioning | Trained body, no mutation — still fully vulnerable to superpowers |
| 2 | Mutant physiology baseline | Mutant body gives inherent toughness above human — no durability-focused power |
| 3 | Super-soldier serum / light enhancement | Notably tougher than a mutant baseline |
| 4 | Enhanced mutant physique | Enhanced body is a defining trait — takes serious superhuman hits before going down |
| 5 | Feral / specialist durability | Durability is a primary feature — built to absorb punishment |
| 6 | Extreme density / advanced natural armor | Very difficult to meaningfully hurt — concentrated superhuman force required |
| 7 | Adamantium / engineered suit / EM shielding | Near the top tier — purpose-built to be nearly unstoppable |
| 8 | Celestial / molecular enhancement | Near-indestructible — only extreme cosmic-adjacent force causes real damage |
| 9 | Divine / gamma / organic steel physiology | Near-ceiling — requires transcendent physical force to slow them |
| 10 | Mystical / cosmic physical armor | Standard ceiling — absorbs direct Thor/Hulk-tier hits; only non-physical bypasses apply |

**Finalized character placements (18 sample roster):**

| Score | Characters |
| ----- | ---------- |
| 1 | Nick Fury, Black Widow |
| 2 | Storm, Cyclops |
| 3 | Captain America |
| 4 | Beast, Spider-Man |
| 5 | Sabretooth |
| 7 | Wolverine, Rhino, Iron Man, Magneto |
| 8 | Apocalypse |
| 9 | Thor, Hulk, Colossus |
| 10 | Juggernaut, Gladiator |

**Key calibration decisions and reasoning:**

- **Humans (Fury, Widow) at 1** — gear doesn't count; peak conditioning without enhancement is the floor above 0.
- **Mutant baseline (Storm, Cyclops) at 2** — mutant physiology is inherently tougher than peak human, even without a durability-focused power.
- **Cap at 3** — super-soldier serum pushes him above a mutant baseline, but he's human-framed and gets genuinely hurt.
- **Beast and Spider-Man at 4** — enhanced physique is a defining trait for both; they take serious superhuman punishment.
- **Sabretooth at 5** — feral durability is a primary feature, not a side effect; he's built to absorb punishment.
- **Score 6 gap** — no sample character lands here cleanly.
- **Wolverine at 7** — adamantium skeleton and density make him nearly unstoppable physically; flesh takes damage but the structure beneath cannot be broken.
- **Magneto at 7** — EM bubble is a strong active defense; the user confirmed he should be very high on this list. Peers with Wolverine, Rhino, and Iron Man at the "purpose-built to be nearly unstoppable" tier.
- **Iron Man at 7** — the suit IS Iron Man; 90s Stark armor is exceptional engineered protection.
- **Rhino at 7** — bonded hide is permanent and his defining physical trait.
- **Colossus at 9** — organic steel (armored form). Bullets bounce off; requires sustained cosmic-tier force.
- **Score 10 ceiling anchored to Juggernaut** — Cyttorak's mystical armor survives direct hits from Thor and Hulk. Only telepathy or magic targeting the Cyttorak bond specifically can bypass it. Gladiator matches this ceiling via Shi'ar cosmic physiology.
- **Curve: Protective Factor = score²** — mathematically true parabola. Score 1 = 1×, Score 10 = 100×.

**6. Healing**
Self-recovery speed from damage. Three-tier base structure: humans at 1, baseline mutants at 2, enhanced humans at 3. Active healing factors kick in at 4 and above. Apocalypse breaks the ceiling via molecular reconstruction.

**Finalized scale:**

| Score | Recovery (Deep Wound) | Description |
| ----- | --------------------- | ----------- |
| 0 | — | No biological healing — ability absent or permanently suppressed |
| 1 | 2–3 weeks | Healthy human baseline — normal biological recovery |
| 2 | 10–14 days | Baseline mutant — inherent physiology gives a slight edge over humans |
| 3 | 5–7 days | Enhanced human — serum pushes healing above mutant baseline |
| 4 | 2–4 days | Enhanced mutant physique — mutation amplifies recovery noticeably |
| 5 | ~24–36 hours | Strong enhanced biology — clearly superhuman recovery rate |
| 6 | ~12 hours | Active healing factor — major wounds close within hours |
| 7 | ~5–6 hours | Strong healing factor — serious damage repaired in a few hours |
| 8 | ~2–3 hours | Rapid regeneration — severe injuries recovered in hours |
| 9 | ~1 hour | Near-peak healing factor — heals major wounds in under an hour |
| 10 | ~15–30 min | Standard ceiling — serious wounds in minutes; catastrophic wounds in days vs. months for humans |
| 15 | Seconds | Ceiling breaker — molecular reconstruction; near-instant healing of any wound |

**Finalized character placements (18 sample roster):**

| Score | Characters |
| ----- | ---------- |
| 1 | Nick Fury, Black Widow, Iron Man, Rhino, Juggernaut |
| 2 | Cyclops, Storm, Magneto, Colossus |
| 3 | Captain America |
| 4 | Beast, Spider-Man |
| 5 | Thor, Gladiator |
| 6 | *(open)* |
| 7 | *(open)* |
| 8 | Sabretooth |
| 9 | Wolverine |
| 10 | Hulk |
| 15 | Apocalypse |

**Key calibration decisions and reasoning:**

- **Humans at 1, baseline mutants at 2** — mutant physiology gives a slight inherent edge, but neither group has an active healing factor.
- **Captain America at 3** — super-soldier serum pushes him above mutant baseline; he shakes off injuries that would sideline a normal soldier.
- **Wolverine at 10 (standard ceiling)** — not instant healing. A wound that takes a human months takes Wolverine days; serious wounds heal in minutes. Top of the regular scale, not a ceiling breaker.
- **Sabretooth at 9** — healing factor closely mirrors Wolverine's but slightly inferior; heals major wounds in about an hour.
- **Apocalypse at 15 (ceiling breaker)** — molecular self-reconstruction via Celestial technology is categorically different from a biological healing factor. Near-instant healing of any wound.
- **Hulk at 8** — gamma physiology provides rapid regeneration; serious wounds recover in a few hours during combat.
- **Gladiator at 7** — Shi'ar biological engineering places his healing above Thor's; serious damage repaired in a few hours.
- **Thor at 6** — Asgardian divine regeneration closes major wounds within hours, but is not a dedicated healing power.
- **Spider-Man at 5** — mutation gives notably good healing; clearly superhuman recovery, not just a mild boost.
- **Beast at 4** — enhanced physique amplifies recovery beyond Cap but without a dedicated healing factor.
- **Juggernaut at 1** — near-invulnerability is Armor (Cyttorak's mystical protection). Once wounded, he heals at human baseline.
- **Curve: perfect parabola y = score²** — same formula as Armor. Ceiling breakers excluded from graph (X-axis capped at 10).

---

### Mobility

**7. Quickness**
Ground movement and combat speed — covers running, limb speed, and evasion in close quarters. Dual value: offensive (more strikes per second) and defensive (harder to hit). **Characters with Teleportation receive 0 in Quickness — mutually exclusive stats.** Scale is 0–10 with one ceiling breaker (Quicksilver at 50).

Measured in **physical strikes per second** (punches, kicks, claws, melee blows). Does NOT measure energy attack frequency — optic beams, repulsors, and lightning are governed by Proj Power. Scale is a gentle power curve — not linear; gaps widen at the top end.

**Finalized scale:**

| Score | Strikes / sec | Description |
| ----- | ------------- | ----------- |
| 0 | — | Teleportation characters only — mutually exclusive with Quickness |
| 1 | 0.5/sec | Base human/brute — one strike every 2 seconds; slow, telegraphed, limited agility |
| 2 | 0.7/sec | Fast human — peak-conditioned non-specialist; basic combat tempo, no superhuman enhancement |
| 3 | 1.0/sec | Base mutant — mutant physiology edges above peak human; roughly world-class human fighter territory |
| 4 | 1.5/sec | Trained/conditioned — elite human conditioning or low-level mutation with a combat speed focus |
| 5 | 2.1/sec | Enhanced human — super-serum or mutation pushes clearly past any human limit |
| 6 | 2.8/sec | Very fast mutant — feral agility with enhanced reflexes and burst strike rate as a defining trait |
| 7 | 3.6/sec | Elite superhuman — Nightcrawler-tier combat tempo (calibration anchor; Nightcrawler himself scores 0) |
| 8 | 4.5/sec | Near-ceiling physical — divine or cosmic-tier physiology; strikes land faster than most opponents can track |
| 9 | 5.5/sec | Peak superhuman — spider-sense and mutation-enhanced reflexes produce a near-blur attack rate |
| 10 | 6.6/sec | Standard ceiling — fastest non-Quicksilver combatant |
| 50 | 500+/sec | Ceiling breaker — categorically different league; effectively infinite relative to any score-10 opponent |

**Finalized character placements (18 sample roster):**

| Score | Characters |
| ----- | ---------- |
| 1 | Juggernaut, Rhino |
| 2 | Nick Fury |
| 3 | Storm, Cyclops, Magneto, Iron Man, Colossus, Hulk |
| 4 | Black Widow, Apocalypse |
| 5 | Captain America |
| 6 | Beast, Sabretooth, Thor |
| 7 | *(blank)* |
| 8 | Wolverine |
| 9 | Spider-Man |
| 10 | Gladiator |

**Key calibration decisions and reasoning:**

- **Juggernaut at 1** — his power is unstoppable momentum in one direction, not combat agility. He charges like a freight train but can't change direction, dodge, or move his limbs quickly. Slowest in the sample.
- **Nick Fury at 2** — peak-conditioned SHIELD operative. Faster than average, notably slower than Black Widow. He's a tactician and gunfighter, not an acrobat.
- **Score 3 cluster** — baseline mutant physiology across many characters. Cyclops, Storm, and Magneto are all physically unremarkable; their powers are energy/weather/magnetic, not speed. Iron Man's suit is a flight platform, not a ground-speed system. Colossus in armor form is heavier. Hulk is powerful but rage-fueled, not agile.
- **Black Widow at 4** — user-confirmed anchor. Peak human conditioning with an agility and speed focus. Apocalypse also at 4: despite Celestial enhancements, he's never shown as a fast combatant in 90s material — his power is transformation and raw force.
- **Captain America at 5** — super-soldier serum explicitly enhances speed; he's faster than any unenhanced human.
- **Rhino at 1** — pairs with Juggernaut. His charge speed is a straight-line feature, not combat agility. In a melee exchange, his limb speed is brute and slow — on par with Juggernaut, not Cap.
- **Beast at 6** — user-confirmed anchor for this tier. Feral agility and enhanced reflexes are a defining trait.
- **Sabretooth at 6** — peers with Beast. Feral speed and burst reflexes are defining.
- **Thor at 6** — divine Asgardian physiology, but his combat style is hammer-based power strikes, not rapid-fire exchanges. Groups with the feral mutant tier in raw strike rate.
- **Score 7 blank** — gap between the feral/divine tier and Wolverine. No sample character lands here cleanly.
- **Wolverine at 8** — mutation-enhanced combat instincts place him above Thor and the feral tier despite adamantium weight. Nightcrawler-tier speed (Nightcrawler himself gets 0 due to teleportation rule).
- **Spider-Man at 9** — spider-sense + mutation-enhanced reflexes place him above Thor. Peak biological speed ceiling among the sample.
- **Gladiator at 10** — Shi'ar cosmic physiology, standard ceiling. Fastest ground combatant in the sample.
- **Quicksilver at 50** — ceiling breaker. So far beyond the 1–10 scale that he's untouchable in open combat. Excluded from the curve graph (X-axis capped at 10).

**8. Flight Speed**
Airborne movement speed. 0 = cannot fly. Same dual offensive/defensive value as Quickness but amplified — 3D airspace makes targeting exponentially harder. Also confers high-ground offensive advantage. Curve: y ≈ 23 × score² (MPH). Score 10 = ~2,300 mph (Mach 3), anchored to Rogue (Carol Danvers absorption). Ceiling breakers possible (Gladiator rank TBD).

**Finalized character placements (18 sample roster):**

| Score | Characters |
| ----- | ---------- |
| 0 | Nick Fury, Black Widow, Captain America, Spider-Man, Hulk, Wolverine, Sabretooth, Beast, Rhino, Colossus, Cyclops, Juggernaut |
| 2 | Apocalypse |
| 3 | Magneto |
| 4 | Storm |
| 6 | Iron Man |
| 7 | Thor |

---

### Tactical / Support

**9. Hunting/Tracking**
Ability to locate, track, and pursue targets — or evade enemies. Covers enhanced senses (smell, sight, hearing), magnetic sensing (iron in blood), proximity threat detection, and advanced technology. Natural counter to Stealth/Deception. **Key principle: technology peaks above biological at the top of the scale — Iron Man/JARVIS (multi-spectrum AI scanning) scores 10, above Wolverine's biological peak at 8.**

**Finalized scale:**

Measured as maximum active detection range — how far a character can detect a nearby target regardless of method (smell, training, tech, magnetic sense, etc.). Technology peaks above biological at the top. Ceiling breaker: all telepaths receive score 20 automatically — mind-detection transcends physical senses.

| Score | Detection Range | Description | Sample Characters |
| ----- | --------------- | ----------- | ----------------- |
| 0 | — | No meaningful tracking — responds to direct sight/sound only | Juggernaut, Rhino |
| 1 | ~30 ft | Follows only obvious immediate evidence | Colossus |
| 2 | ~100 ft | Reads terrain and environmental signs; standard trained field operative | Nick Fury, Cyclops |
| 3 | ~300 ft | Human-level skill with slight biological enhancement | Black Widow, Captain America, Thor |
| 4 | ~1,000 ft | Unique non-biological sense — detects iron in blood and electromagnetic disruptions | Magneto, Storm |
| 5 | ~0.5 mi | Mutation provides superhuman smell or hearing | Beast, Hulk |
| 6 | ~1 mi | Near-constant threat detection via spider physiology | Spider-Man |
| 7 | ~2 mi | Elite feral senses — low end of apex predator tracking | Sabretooth |
| 8 | ~4 mi | Peak feral / Celestial enhancement — high end of biological elite | Wolverine, Apocalypse |
| 9 | ~10 mi | Superhuman biology above Earth-based evolution | Gladiator |
| 10 | ~25 mi | Standard ceiling — AI-assisted multi-spectrum scanning | Iron Man |
| 20 | ~1,000 mi+ | Ceiling breaker — telepathic mind-detection; range limited only by the telepath's power | Professor X, Jean Grey |

**Finalized character placements (18 sample roster):**

| Score | Characters |
| ----- | ---------- |
| 0 | Juggernaut, Rhino |
| 1 | Colossus |
| 2 | Nick Fury, Cyclops |
| 3 | Black Widow, Captain America, Thor |
| 4 | Magneto, Storm |
| 5 | Beast, Hulk |
| 6 | Spider-Man |
| 7 | Sabretooth |
| 8 | Wolverine, Apocalypse |
| 9 | Gladiator |
| 10 | Iron Man |

**Calibration curve:** Y-axis = detection range in feet (formatted as miles above 5,280 ft). Wolverine (score 8) = 4 miles biological ceiling. Iron Man (score 10) = 25 miles — JARVIS sensor suite. Ceiling breaker: Telepaths (score 20, ~1,000 mi+) — mind-detection transcends physical senses; excluded from graph.

**10. Leadership**
Tactical battlefield command and morale — how many fighters a character can effectively coordinate and inspire in live combat. Measures field leadership only, not administrative rank or organizational authority. Most characters score 0–3; scores above 5 are rare. No ceiling breakers — scale is 0–10.

**Finalized scale:**

| Score | Command Capacity | Description |
| ----- | ---------------- | ----------- |
| 0 | Solo only | Disruptive or uncoordinated — cannot give or take direction in combat |
| 1 | 1–2 others | Can issue a simple order to one or two allies in the moment; not sustained leadership |
| 2 | 3–5 fighters | Directs a small squad with functional orders under pressure; limited tactical range |
| 3 | 6–10 fighters | Reliable team commander — coordinates multiple roles and adapts mid-fight |
| 4 | 10–20 fighters | Strong field commander — reads the broader battle, keeps multiple units effective simultaneously |
| 5 | 20–50 fighters | Platoon-level — subordinates perform above their own ceiling under this command |
| 6 | 50–150 fighters | Company-level — multi-unit coordination in live combat; commands elite specialist forces |
| 7 | ~300 fighters | Battalion-scale — commands large engagements with tactical precision; trained specifically for this role |
| 8 | ~500 fighters | Sustains complex operations across a full battlefield; commands across multiple simultaneous engagements |
| 9 | ~750 fighters | Army-level — presence alone shifts morale across an entire force |
| 10 | 1,000+ / Any scale | Legendary — elevates any force regardless of size; the Marvel gold standard of battlefield leadership |

**Finalized character placements (18 sample roster + Professor X):**

| Score | Characters |
| ----- | ---------- |
| 0 | Hulk, Rhino, Juggernaut |
| 1 | Wolverine, Black Widow, Colossus, Spider-Man, Sabretooth |
| 2 | Beast, Iron Man, Thor |
| 3 | Apocalypse |
| 4 | Storm |
| 5 | Nick Fury |
| 6 | Gladiator |
| 7 | Cyclops, Captain America, Magneto |
| 10 | Professor X *(not in 18-character sample; documented here for reference)* |

**Key calibration decisions and reasoning:**

- **Hulk/Rhino/Juggernaut at 0** — rage-driven, dim, or freight-train forces. Actively counterproductive in a coordinated fight.
- **Score 1 cluster** — fighters who follow direction but don't give it. Wolverine and Black Widow can direct one or two allies in the moment but are not sustained leaders; Colossus is gentle and deferential; Sabretooth is a lone mercenary; Spider-Man is a solo operator.
- **Score 2 cluster** — can direct a small squad in a pinch; not their primary role. Beast has enough tactical awareness for a handful of allies; Iron Man prefers solo operation in 90s material; Thor leads by personal example, not coordinated command.
- **Apocalypse at 3** — commands the Four Horsemen as a coordinated unit of 6–10. Without distinguishing domination from inspiration, his demonstrated ability lands here.
- **Storm at 4** — Cyclops's reliable field second-in-command; directs a multi-team engagement of 10–20 effectively.
- **Nick Fury at 5** — SHIELD platoon-level field commander. Directs 20–50 fighters in live operations; makes subordinates perform above their ceiling. His organizational authority is larger but administrative, not battlefield.
- **Gladiator at 6** — Praetor of the Shi'ar Imperial Guard. Commands an elite specialist force at company scale.
- **Cyclops, Cap, Magneto at 7** — Cyclops is trained specifically as a field commander; battalion-scale is his design. Cap earns this through WWII and Avengers command. Magneto at his peak commanded Asteroid M refugees and the Brotherhood at battalion edge.
- **Professor X at 10** — the organizational architect and spiritual leader of the entire mutant resistance movement. His leadership extends beyond any single faction or force size; any group fights better under his vision. Unambiguous ceiling.

---

### Psychic

**11. Telekinesis**
Move and manipulate objects/people without physical contact. **Rare stat — very few characters receive meaningful values.** Scored on two dimensions that co-scale: force (telekinetic lifting capacity) and complexity (manipulation resolution from crude push to molecular precision). Higher scores lean more meaningfully into complexity; score 10 = molecular disassembly, score 15 = atomic manipulation.

**Key mechanics:**
- **Traction rule:** Lifting a character off the ground neutralizes their Melee Strength for escape — no ground contact = no leverage.
- **Flight Speed counter:** If a character's Flight Speed score ≥ the TK user's score, they can resist the hold (flight thrust overcomes TK force).
- **Teleportation:** The ONLY escape from a TK grab — bypasses the hold entirely.

**Finalized scale:**

| Score | TK Lifting Force | TK Resolution |
| ----- | ---------------- | ------------- |
| 0 | — | No ability |
| 1 | ~50 lbs | Crude directional push; no meaningful precision |
| 2 | ~200 lbs | Basic mechanisms — a latch, a lever |
| 3 | ~500 lbs | Can disassemble simple devices, thread a needle, pick complex locks |
| 4 | ~1.5 tons | Surgical precision — can extract a bullet or suture tissue telekinetically |
| 5 | ~5 tons | Multi-object control — redirect shrapnel clouds, intercept multiple projectiles |
| 6 | ~10 tons | Cellular precision — can stop bleeding or repair damaged tissue from inside the body |
| 7 | ~16 tons | Intracellular — can penetrate cell interiors, disrupt organelles, coil/uncoil DNA |
| 8 | ~25 tons | Macromolecular — can isolate and manipulate individual proteins and enzyme chains |
| 9 | ~35 tons | Sub-cellular — can identify and sever specific nerves, arteries, or biological structures |
| 10 | ~50 tons | Molecular — can disassemble and reassemble matter at the level of individual chemical bonds |
| 15 | ~500 tons | Ceiling breaker — atomic manipulation; matter itself is raw material |

**Finalized character placements:**

| Score | Characters |
| ----- | ---------- |
| 2 | Psylocke |
| 3 | Professor X |
| 4 | Cable *(provisional)* |
| 10 | Jean Grey, Rachel Summers |
| 15 | Phoenix *(ceiling breaker — excluded from calibration curve graph)* |

**Key calibration decisions and reasoning:**

- **Jean Grey (non-Phoenix) anchors score 10** at ~50 tons — calibrated against a loaded SR-71 Blackbird / light tank. No non-Phoenix TK user demonstrated 100 tons.
- **Phoenix at 15 (ceiling breaker)** — categorically different from any biological TK. Excluded from the curve graph (same pattern as Quicksilver in Quickness).
- **Rachel Summers at 10 alongside Jean Grey** — biologically the same (both Phoenix hosts, same genetics). Equal ceiling for non-Phoenix form.
- **Psylocke at 2** — uses TK primarily for psychic blade strike enhancement, not sustained lifting or holding. Rarely demonstrated force or precision TK in 90s material.
- **Professor X at 3** — his TK is limited and secondary to Telepathy; can lift mid-weight characters but not armored/dense ones.
- **Cable at 4 (provisional)** — Techno-Organic Virus suppresses much of his potential; demonstrated TK reflects a constrained version of what his genetics would otherwise allow.
- **Calibration curve:** Power curve (not exponential). Y-axis = TK Lift in tons. Phoenix excluded from graph; maxValue = 55 so scores 1–10 fill the chart.

**12. Telepathy**
Attack, control, or shut down an opponent's mind. Two co-scaling dimensions: effective range (Y-axis of calibration curve, in feet) and effect depth (what the telepathy can DO). Scale 0–10. No ceiling breakers — Professor X with Cerebro (global) is a variant of score 10, not a separate tier.

**Resolution mechanic (finalized):**
1. Sum each team's Telepathy scores → Team T-total
2. Psi-advantage = max(0, Team A T-total − Team B T-total)
3. Net psi-damage per opposing character = max(0, psi-advantage − character's individual Telepath Resist)
4. Total psi-damage to a team = sum of all per-character net damage → feeds into team score multiplier (TBD)

**1:1 rule:** For telepaths, Telepath Resist = Telepathy score. Their presence raises team offense AND their own personal TR simultaneously.

**Finalized character placements (outside 18 sample, for calibration reference):**
- Professor X: 10 (ceiling)
- Jean Grey: 7
- Emma Frost: 6 (provisional)
- Psylocke: 4 (psi-blade focused, not broadcast telepathy)

**13. Telepath Resist**
Defense against Telepathy. **Universal — nobody gets 0.** Scored on a single scale with a `Resistance Type` extraColumn (Natural / Willpower / Willpower+Natural / Enhanced willpower / Natural enhanced / Technological / Celestial / Technological+Mystical).

**Resolution:** Net psi-damage per character = max(0, opposing psi-advantage − this character's TR). Helmet wearers (Magneto TR=7, Juggernaut TR=10) absorb the most; low-TR characters absorb the least.

**For telepaths:** TR = Telepathy score (1:1). Stored as such in `marvelCharacters.js`.

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

## Battle Resolution

How a round is decided once both teams are drafted.

### Battle Stages
Each round is fought on a **Battle Stage** — a location with environmental conditions that buff or nerf specific stats for both teams equally. The stage is announced before each round.

Key examples of stage logic:
- **Indoor / underground** — neutralizes Sky Manip (Storm loses most of her weather control)
- **Outdoor open** — amplifies Sky Manip; Flight Speed positional advantage increases
- **Oceanic** — amplifies Water Manip
- **High-altitude** — Flight Speed confers dominant positional advantage

Stages reward roster versatility. A team hyper-specialized for one environment is fragile when the stage shifts against it. Stages button is present in the UI but not yet wired up — mechanic design in progress.

### Team Synergies

Stats interact within your own team:

- **Leadership** — a high Leadership character actively boosts overall team effectiveness
- **Telepathy (own telepath)** — raises your team's T-total (reducing opposing psi-advantage) and the telepath's own TR = their T score (1:1), contributing to both offense and defense simultaneously
- **Shield** — covers teammates against physical, projectile, and energy attacks
- **Hunting/Tracking** — counters an opponent team that relies on Stealth/Deception

### Opponent Nerfs

Certain stat pairings create direct vulnerabilities across teams:

- **High Has Metal + opponent Magnetism** — Wolverine, Colossus, and Iron Man become liabilities against Magneto
- **Telepathy vs. Telepath Resist pool** — cumulative model; a strong resistance pool softens even a high Telepathy attacker
- **Stealth/Deception vs. Hunting/Tracking** — an infiltrator is neutralized by a character with superior tracking

### Team Score & Dice Roll

After synergies, opponent interactions, and stage effects are all applied, each team receives a **Team Score** for that round. This score determines how many **dice** the team rolls:

- Higher Team Score = more dice
- Both teams roll all of their dice simultaneously
- The **single highest die** from each team is compared — highest wins the round
- Ties are re-rolled

This model creates meaningful probability advantage for stronger teams while preserving underdog variance in any single round.

### Match Format

Agreed upon before the match begins (by the players or league commissioner):

- **Best of 3** — first to 2 round wins
- **Best of 5** — first to 3 round wins
- **Best of 7** — first to 4 round wins

Rosters are locked after the draft — no substitutions mid-match.

---

## Stat Interaction Rules

| Interaction | Rule |
|---|---|
| Teleportation + Quickness | Mutually exclusive — Teleportation characters get 0 Quickness |
| Teleportation + Telekinesis | Teleportation is the ONLY escape from a TK grab |
| Telepathy resolution | Team T-total difference = psi-advantage; each defender takes max(0, psi-advantage − own TR) as net damage. Telepaths' TR = their T score (1:1). |
| Shield vs. Telepathy | Shield does NOT block Telepathy |
| Shield vs. Magic | Shield only blocks magic that manifests as a physical projectile |
| Has Metal vs. Magnetism | High Has Metal = vulnerability against Magneto |
| Absorption vs. Armor | Absorption converts energy to resource; Armor passively tanks it |
| Stealth vs. Hunting/Tracking | Hunting/Tracking is the natural counter to Stealth/Deception |
| Sky Manip | Context-dependent — outdoor battles only |
| Flight Speed | High-ground advantage for projectiles; 3D evasion harder to counter than ground Quickness |

---

## Roster Decisions

### Pending removal from roster

- **Ant-Man, Wasp, Yellowjacket** — Size manipulation (atomic-level infiltration) has no adequate counter in current stat system. Decision: remove until elegant counter mechanic is designed. **They are still present in `draftValue.js`** and will appear in the draft dropdown until explicitly deleted from that file.

### No stat column added for

- **Power Copying (Rogue)** — Her permanent absorption of Carol Danvers' powers (super strength, high-speed flight) maps onto existing stats. Draft Value 4 reflects this.
- **Probability Manipulation (Domino, Scarlet Witch)** — Too abstract. Scarlet Witch handled under Magic Cast.
- **Duplication (Multiple Man)** — Too character-specific for a whole column.
- **Sonic/Sound (Banshee, Siryn)** — Screams function as projectiles; Proj Power/Accuracy covers this.
- **Size Manipulation** — Deferred with Pym particle characters.

---

## Spider Chart

Each character in the Power Grid has a clickable name that opens a modal with a 6-axis radar (spider) chart summarising their power profile.

### 6 Axes and component stats

| Axis | Component stats |
| ---- | --------------- |
| **Melee** | Melee Strength, H2H Skill |
| **Ranged** | Proj Power, Proj Effective Range |
| **Mobility** | Quickness, Flight Spd, Teleportation |
| **Durability** | Armor, Healing, Absorption |
| **Elem/Psi/Forces** | Telekinesis, Telepathy, Magnetism, Magic Cast, Sky Manip, Water Manip, Cold Manip, Heat Manip |
| **Tactical** | Hunting/Tracking, Leadership, Stealth/Deception, Shield, Telepath Resist, Magic Resist |

**Has Metal** is excluded — it is a vulnerability stat, not a capability.

### Axis score formula — PLACEHOLDER

Axis scores are currently computed as a **plain average of component stats**, with each stat capped at 10 before averaging (ceiling breakers like Hulk's Melee Strength 20 are capped at 10 for display purposes).

**This is intentionally a placeholder.** The real formulas involve stat weighting and interaction logic. Example: Melee axis = Melee Strength + (H2H Skill as a multiplier), not a simple average. Weighting formulas will be designed once all 25 stats are fully calibrated and all sample characters have scores. The function to update is `computeAxes()` in `src/app/components/SpiderChart.js`.

### Chart implementation notes

- Pure SVG, no external chart library. ViewBox 420×388.
- 6 axes at 60° intervals starting from top (Melee at 12 o'clock, clockwise).
- 5 grid rings at scores 2/4/6/8/10. Score labels rendered on the bottom-right spoke.
- Data polygon: red fill (15% opacity), 1px red stroke, no dots.
- Ceiling breakers are capped at 10 for chart rendering; raw values are shown in the breakdown panel with a `*` marker.

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
- **Proj Effective Range** — scale and placements done. All 18 sample characters assigned.
- **Armor** — scale and placements done. All 18 sample characters assigned.
- **Healing** — scale and placements done. All 18 sample characters assigned.
- **Quickness** — scale and placements done. All 18 sample characters assigned. Quicksilver is ceiling breaker at 50.
- **Flight Speed** — scale and placements done. Curve: y ≈ 23 × score² (MPH). Score 10 = Rogue (Carol Danvers, Mach 3). Fliers in the 18 sample: Apocalypse (2), Magneto (3), Storm (4), Iron Man (6), Thor (7). Gladiator is a ceiling breaker — rank TBD.
- **Hunting/Tracking** — scale and placements done. All 18 sample characters assigned. Technology (Iron Man = 10) peaks above biological elite (Wolverine = 8). Calibration curve uses detection range in feet (score 10 = 25 mi). Ceiling breaker: Telepaths (score 20, ~1,000 mi+) — excluded from graph.
- **Leadership** — scale and placements done. All 18 sample characters assigned. Measured in command capacity (number of fighters effectively led). Cap = 10 (Professor X, "any scale", mapped to 100,000 for display). No ceiling breakers. Calibration curve: exponential, Y-axis = fighters commanded.
- **Telekinesis** — scale and placements done. Rare stat. Two co-scaling dimensions: TK Lifting Force and TK Resolution. Ceiling breaker: Phoenix (15, ~500 tons). Placed characters: Psylocke (2), Professor X (3), Cable (4, provisional), Jean Grey + Rachel Summers (10).
- **Telepathy** — scale and placements done. Two co-scaling dimensions: Effective Range (curve Y-axis, in feet) and Effect Depth. Scale 0–10. Only Apocalypse gets a non-zero value in the 18 sample (3). Anchors outside the 18: Professor X (10), Jean Grey (7), Emma Frost (6 provisional), Psylocke (4). Calibration curve: Y-axis = range in feet (score 10 = ~5,000 mi). 1:1 rule: telepaths' TR = their T score.
- **Telepath Resist** — scale and placements done. Universal (nobody gets 0). **Natural willpower caps at 2** — telepathy is intentionally OP against unshielded characters. Resistance Type extraColumn. Finalized 18-sample placements: Rhino (1, base human), everyone else without special shielding (2, natural cap), Magneto (7, helmet), Apocalypse (8, Celestial), Juggernaut (10, Cyttorak). Tiers 3–6 reserved for partial/technological shielding. No calibration curve (ordinal threshold scale).
- **All other stats** — scale structure exists in `calibrationData.js` but character placements not yet done.

Next up: **Magnetism** or **Has Metal** — calibrate scale anchors and place sample characters.

Calibration pattern (repeat for each stat):

1. Define scale anchors with descriptions and examples in `calibrationData.js`
2. Place sample characters, discuss and push back where needed
3. Verify `calibrationCurveData.js` entry is consistent (values match displays, effectiveMax correct)
4. Write finalized ratings into `marvelCharacters.js`
