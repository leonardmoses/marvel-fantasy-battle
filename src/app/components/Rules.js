'use client'
import ButtonClose from "./ButtonClose";

const Rules = ({ setShowRules }) => {
    return (
        <main className="fixed rounded-md w-11/12 bg-white left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 px-10 pb-10 pt-3 overflow-y-auto max-h-[85vh]">
            <div className='flex w-full pb-2 sticky top-0 bg-white pt-2 z-10'>
                <ButtonClose setShowRules={setShowRules} />
            </div>
            <h1 className="bg-ThemeB2 text-white text-lg font-medium rounded-sm text-center mb-5">Rules</h1>

            {/* Overview */}
            <h2 className="text-base font-bold text-ThemeB2 uppercase tracking-wide mb-2">What Is Marvel Fantasy Battle?</h2>
            <p className="text-sm text-gray-700 mb-3">
                Marvel Fantasy Battle is a head-to-head team strategy game inspired by fantasy sports. Two players each assemble a roster of Marvel characters — heroes, villains, and everyone in between — and pit their teams against each other in a simulated battle. The goal is simple: build the most powerful, synergistic team you can within the rules, then outlast your opponent round by round to claim victory.
            </p>
            <p className="text-sm text-gray-700 mb-6">
                Every character is rated across 25 distinct stat categories covering physical combat, ranged attacks, durability, mobility, psychic ability, elemental power, and more. Your job as a manager is to know your roster, understand how your characters complement each other, and exploit the weaknesses of whoever your opponent puts on the field.
            </p>

            <hr className="border-gray-200 mb-6" />

            {/* The Draft */}
            <h2 className="text-base font-bold text-ThemeB2 uppercase tracking-wide mb-2">Step 1 — The Draft</h2>
            <p className="text-sm text-gray-700 mb-3">
                Before any battle begins, each player drafts a team. Every character in the game has a <strong>Draft Value</strong> between 1 and 5, reflecting their overall threat level and usefulness in combat:
            </p>
            <ul className="text-sm text-gray-700 list-disc list-inside mb-3 space-y-1">
                <li><strong>1</strong> — Weak. Barely above a normal human.</li>
                <li><strong>2</strong> — Below average for a superhero or mutant.</li>
                <li><strong>3</strong> — Average superhero or mutant baseline.</li>
                <li><strong>4</strong> — Above average. Strong across multiple categories.</li>
                <li><strong>5</strong> — Elite. Omega-level threat or possesses a solo win-condition stat.</li>
            </ul>
            <p className="text-sm text-gray-700 mb-6">
                Each player has a <strong>15-point draft cap</strong>. You may pick as many characters as you like as long as the sum of their Draft Values does not exceed 15. A team could be three elite fighters (5+5+5) or a deeper roster of complementary mid-tier characters. Strategic diversity is just as valid as stacking stars — and often more resilient.
            </p>

            <hr className="border-gray-200 mb-6" />

            {/* Stats */}
            <h2 className="text-base font-bold text-ThemeB2 uppercase tracking-wide mb-2">Step 2 — Character Stats</h2>
            <p className="text-sm text-gray-700 mb-3">
                Each character has ratings across <strong>25 stat categories</strong>, organized into the following groups:
            </p>
            <ul className="text-sm text-gray-700 list-disc list-inside mb-3 space-y-1">
                <li><strong>Physical Combat:</strong> Melee Strength, H2H Skill, Projectile Power, Projectile Distance &amp; Accuracy</li>
                <li><strong>Durability &amp; Recovery:</strong> Armor, Healing</li>
                <li><strong>Mobility:</strong> Quickness, Flight Speed</li>
                <li><strong>Tactical / Support:</strong> Hunting/Tracking, Leadership</li>
                <li><strong>Psychic:</strong> Telekinesis, Telepathy, Telepath Resistance</li>
                <li><strong>Magnetic:</strong> Magnetism, Has Metal</li>
                <li><strong>Magic:</strong> Magic Cast, Magic Resistance</li>
                <li><strong>Energy:</strong> Absorption</li>
                <li><strong>Elemental:</strong> Water, Cold, Heat, and Sky Manipulation</li>
                <li><strong>Special / Advanced:</strong> Stealth/Deception, Teleportation, Shield</li>
            </ul>
            <p className="text-sm text-gray-700 mb-3">
                Stats are rated on a <strong>0–10 scale</strong>, where 0 means the ability does not exist for that character at all, and 3 represents the average superhero or mutant baseline. A select few characters break the ceiling — Hulk&apos;s raw strength, for instance, is rated 20, reflecting that he operates on a fundamentally different physical tier than anyone else on the roster.
            </p>
            <p className="text-sm text-gray-700 mb-6">
                The scale is non-linear. The difference between a 7 and a 10 is not the same as the difference between a 1 and a 4. Use the Power Grid to study each character&apos;s full stat breakdown before you draft.
            </p>

            <hr className="border-gray-200 mb-6" />

            {/* Synergies */}
            <h2 className="text-base font-bold text-ThemeB2 uppercase tracking-wide mb-2">Step 3 — Team Synergies</h2>
            <p className="text-sm text-gray-700 mb-3">
                Your characters don&apos;t just fight in isolation — they interact with each other. Synergies can multiply your team&apos;s effectiveness beyond what any single character could achieve alone.
            </p>
            <p className="text-sm text-gray-700 mb-3">
                The primary synergy mechanic is <strong>Leadership</strong>. A character with a high Leadership stat actively coordinates their teammates, boosting the team&apos;s overall performance. A well-led team of mid-tier characters can outperform a disorganized collection of stars.
            </p>
            <p className="text-sm text-gray-700 mb-3">
                Other synergies emerge naturally from stat pairings. A telepath on your team doesn&apos;t just attack opponents — they shield your own roster from enemy telepathic attacks, adding their power to the team&apos;s collective Telepath Resistance pool. A character with a Shield ability covers their teammates against physical and energy attacks, making your whole team tougher to kill. A strong Hunting/Tracking character can neutralize an opponent who relies on Stealth or Deception.
            </p>
            <p className="text-sm text-gray-700 mb-6">
                Think of your team as a system, not a collection of individuals. The strongest rosters cover each other&apos;s weaknesses.
            </p>

            <hr className="border-gray-200 mb-6" />

            {/* Nerfs & Counters */}
            <h2 className="text-base font-bold text-ThemeB2 uppercase tracking-wide mb-2">Step 4 — Opponent Interactions &amp; Nerfs</h2>
            <p className="text-sm text-gray-700 mb-3">
                Just as teammates can amplify each other, some opponent matchups actively nerf your characters. Certain stats are designed as vulnerability mechanics — and if your opponent has the right counter, your powerhouse can become a liability.
            </p>
            <p className="text-sm text-gray-700 mb-3">
                The clearest example in the game is <strong>Magnetism vs. Has Metal</strong>. Every character has at least a small amount of metal — it&apos;s in the blood. But characters like Wolverine (adamantium skeleton), Colossus (steel body), and Iron Man (full suit) carry enormous amounts of metal. Against Magneto, that metal becomes a weapon turned against them. A high <strong>Has Metal</strong> rating is a major vulnerability when facing a magnetic opponent.
            </p>
            <p className="text-sm text-gray-700 mb-3">
                Other counter relationships include: Telepathy vs. Telepath Resistance (a psychic attacker is softened by a mentally fortified opposing team), Stealth/Deception vs. Hunting/Tracking (an infiltrator can be neutralized by a character with enhanced senses), and Telekinesis vs. Teleportation (the only reliable escape from a TK grab is to teleport out).
            </p>
            <p className="text-sm text-gray-700 mb-6">
                Know your opponent&apos;s roster before the battle. A team with a heavy metal lineup facing Magneto is not just losing one fight — that vulnerability can cascade across every round.
            </p>

            <hr className="border-gray-200 mb-6" />

            {/* Battle Stages */}
            <h2 className="text-base font-bold text-ThemeB2 uppercase tracking-wide mb-2">Step 5 — Battle Stages</h2>
            <p className="text-sm text-gray-700 mb-3">
                Each round is fought in a specific <strong>Battle Stage</strong> — a location with unique environmental conditions that can buff or nerf certain stats for both teams. The stage is set before each round begins and applies equally to all characters on both sides.
            </p>
            <p className="text-sm text-gray-700 mb-3">
                A battle fought inside a sealed underground facility, for example, would largely neutralize a character whose primary power is weather manipulation — Storm loses most of her Sky Manipulation advantage indoors. That same stage, however, might favor close-quarters combat specialists, amplifying H2H Skill contributions. A rooftop stage high above a city benefits flying characters, giving them positional dominance and making their attacks harder to counter. An oceanic stage could dramatically boost Water Manipulation stats.
            </p>
            <p className="text-sm text-gray-700 mb-6">
                Stages add an important layer of variance and strategy. In a best-of-five series, stages can shift the momentum of the entire match. Teams built for versatility across multiple environments have a structural advantage over hyper-specialized rosters that collapse outside of ideal conditions.
            </p>

            <hr className="border-gray-200 mb-6" />

            {/* Scoring & Dice */}
            <h2 className="text-base font-bold text-ThemeB2 uppercase tracking-wide mb-2">Step 6 — Team Score &amp; The Dice Roll</h2>
            <p className="text-sm text-gray-700 mb-3">
                Once synergies, opponent interactions, and stage effects are all applied, each team receives a final <strong>Team Score</strong> for that round. This score represents the combined, adjusted combat power of your entire roster in the current conditions.
            </p>
            <p className="text-sm text-gray-700 mb-3">
                Your Team Score determines how many <strong>dice</strong> you roll. The higher your score, the more dice you get. More dice means more chances to roll high — and in a battle, high wins.
            </p>
            <p className="text-sm text-gray-700 mb-3">
                Both teams roll all of their dice simultaneously. The single highest die result from each team is compared. Whichever team rolls the highest number wins that round. Ties are re-rolled.
            </p>
            <p className="text-sm text-gray-700 mb-6">
                This system means that a stronger team wins more often — but never with certainty. An underdog with fewer dice can still land a critical roll and steal a round. That tension between probability and variance is the heart of the game.
            </p>

            <hr className="border-gray-200 mb-6" />

            {/* Winning */}
            <h2 className="text-base font-bold text-ThemeB2 uppercase tracking-wide mb-2">Step 7 — Winning the Match</h2>
            <p className="text-sm text-gray-700 mb-3">
                Before the match begins, both players (or the league commissioner) agree on a series format:
            </p>
            <ul className="text-sm text-gray-700 list-disc list-inside mb-3 space-y-1">
                <li><strong>Best of 3</strong> — First to 2 round wins takes the match.</li>
                <li><strong>Best of 5</strong> — First to 3 round wins takes the match.</li>
                <li><strong>Best of 7</strong> — First to 4 round wins takes the match.</li>
            </ul>
            <p className="text-sm text-gray-700 mb-3">
                Each round is played in a potentially different stage, with new environmental modifiers applied. Rosters are fixed for the entire match — no substitutions after the draft is locked. A team that looks dominant in round one may find itself in a very different fight by round three if the stage shifts the battlefield against them.
            </p>
            <p className="text-sm text-gray-700">
                The team that wins the majority of rounds wins the match. Build smart, draft strategically, and may the best roster win.
            </p>
        </main>
    );
}

export default Rules;