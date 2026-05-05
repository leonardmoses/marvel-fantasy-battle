---
name: Calibration Progress
description: Tracks which stats are fully calibrated (scale + character placements + curve) and what's next
type: project
---

Calibrated stats (scale anchors + all 18 sample characters placed + calibrationCurveData entry):
- Melee Strength
- H2H Skill
- Proj Power
- Proj Effective Range
- Armor
- Healing (completed 2026-05-04)

All other stats have stub anchors in calibrationData.js but no character placements yet.

**Why:** Calibrating one stat at a time to build a coherent, internally consistent system. Each stat is finalized before moving to the next.

**How to apply:** Next stat to calibrate is Quickness. Follow the same pattern: define full scale anchors in calibrationData.js, place all 18 sample characters, add calibrationCurveData.js entry, write scores into marvelCharacters.js, update CLAUDE.md.
