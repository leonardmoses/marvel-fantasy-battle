export const calibrationCurveData = {

    'Melee Strength': {
        yLabel: 'Weight',
        maxValue: 100,
        formatGridLabel: (val) => `${val}t`,
        note: 'Ceiling breakers: Apocalypse (score ~13–15, ~300–400t) · Hulk (score 20, unlimited)',
        points: [
            { score: 1,  value: 0.25, display: '500 lbs',   char: 'Punisher'   },
            { score: 2,  value: 0.5,  display: '1,000 lbs',   char: 'Blk Widow'  },
            { score: 3,  value: 1,  display: '1 ton', char: 'Cyclops'    },
            { score: 4,  value: 2,    display: '2 tons',     char: 'Cap'        },
            { score: 5,  value: 5,    display: '5 tons',    char: null         },
            { score: 6,  value: 10,   display: '10 tons',   char: 'Beast'      },
            { score: 7,  value: 25,   display: '25 tons',   char: null         },
            { score: 8,  value: 50,   display: '50 tons',   char: 'Spider-Man' },
            { score: 9,  value: 75,   display: '75 tons',   char: 'Iron Man'   },
            { score: 10, value: 100,  display: '100+ tons', char: 'Thor'       },
        ],
    },

    'H2H Skill': {
        yLabel: 'Training Years (Equiv.)',
        maxValue: 4000,
        formatGridLabel: (val) => val >= 1000 ? `${(val / 1000).toFixed(1).replace('.0', '')}k` : `${val}`,
        note: 'Ceiling breakers: Nightcrawler (score 15) · Quicksilver (score 20) — superhuman ability transcends training years',
        points: [
            { score: 1,  value: 2,    display: '~2 yrs',    char: null         },
            { score: 2,  value: 5,    display: '~5 yrs',    char: null         },
            { score: 3,  value: 15,   display: '~15 yrs',   char: null         },
            { score: 4,  value: 30,   display: '30 yrs',    char: null         },
            { score: 5,  value: 50,   display: '50 yrs',    char: 'Cap'        },
            { score: 6,  value: 75,   display: '75 yrs',    char: null         },
            { score: 7,  value: 100,  display: '100 yrs',   char: null         },
            { score: 8,  value: 500,  display: '500 yrs',   char: null         },
            { score: 9,  value: 1000, display: '1,000 yrs', char: null         },
            { score: 10, value: 4000, display: '4,000 yrs', char: 'Apocalypse' },
        ],
    },

    'Proj Power': {
        yLabel: 'Relative Effectiveness (RE)',
        maxValue: 5000,
        formatGridLabel: (val) => val >= 1000 ? `${(val / 1000).toFixed(1).replace('.0', '')}k` : `${val}`,
        note: '1 RE ≈ 44 frag grenades · RE 5,000 ≈ Hiroshima bomb equivalent',
        points: [
            { score: 1,  value: 0.05, display: 'RE 0.05',  char: null          },
            { score: 2,  value: 0.22, display: 'RE 0.22',  char: null          },
            { score: 3,  value: 1,    display: 'RE 1',     char: null          },
            { score: 4,  value: 10,   display: 'RE 10',    char: null          },
            { score: 5,  value: 100,  display: 'RE 100',   char: null          },
            { score: 6,  value: 1000, display: 'RE 1,000', char: null          },
            { score: 7,  value: 2000, display: 'RE 2,000', char: 'Iron Man'    },
            { score: 8,  value: 3000, display: 'RE 3,000', char: 'Gladiator'   },
            { score: 9,  value: 4000, display: 'RE 4,000', char: 'Cyclops'     },
            { score: 10, value: 5000, display: 'RE 5,000', char: 'Hiroshima~'  },
        ],
    },

    'Proj Dist/Accuracy': {
        yLabel: 'Combat Range Score (CRS)',
        maxValue: 1000,
        formatGridLabel: (val) => val === 1000 ? '1k' : `${val}`,
        note: 'CRS is a composite index combining effective range and hit probability on a 0–1,000 scale',
        points: [
            { score: 1,  value: 10,   display: 'CRS 10',   char: null       },
            { score: 2,  value: 25,   display: 'CRS 25',   char: 'Cap'      },
            { score: 3,  value: 50,   display: 'CRS 50',   char: 'Spidey'   },
            { score: 4,  value: 100,  display: 'CRS 100',  char: null       },
            { score: 5,  value: 200,  display: 'CRS 200',  char: null       },
            { score: 6,  value: 350,  display: 'CRS 350',  char: null       },
            { score: 7,  value: 550,  display: 'CRS 550',  char: 'Storm'    },
            { score: 8,  value: 750,  display: 'CRS 750',  char: 'Iron Man' },
            { score: 9,  value: 900,  display: 'CRS 900',  char: 'Cyclops'  },
            { score: 10, value: 1000, display: 'CRS 1,000', char: null      },
        ],
    },

}
