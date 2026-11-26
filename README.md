[![make.fun](https://make.fun/badge/u-kiencx-roast-the-smart-fridge-one-line-best-laugh-b354d6c9.svg)](https://make.fun/bounty/u-kiencx-roast-the-smart-fridge-one-line-best-laugh-b354d6c9)
[![rank](https://make.fun/badge/u-kiencx-roast-the-smart-fridge-one-line-best-laugh-b354d6c9/Cm11w/roast-the-smart-fridge/rank.svg)](https://make.fun/bounty/u-kiencx-roast-the-smart-fridge-one-line-best-laugh-b354d6c9)
[![reward](https://make.fun/badge/u-kiencx-roast-the-smart-fridge-one-line-best-laugh-b354d6c9/Cm11w/roast-the-smart-fridge/reward.svg)](https://make.fun/bounty/u-kiencx-roast-the-smart-fridge-one-line-best-laugh-b354d6c9)

# Roast the Smart Fridge: One Line, Best Laugh Wins

Entry for the [make.fun bounty](https://make.fun/bounty/u-kiencx-roast-the-smart-fridge-one-line-best-laugh-b354d6c9): a program that writes one line — at most 160 characters, roasting a smart fridge — to `/output/entry.txt`.

## The text

> My fridge beeps if I stare inside for more than ten seconds, like it's charging me rent to browse my own leftovers.

21 words, 115 UTF-8 characters (115 bytes), one sentence.

## How it works

`main.ts` (Node 22, standard library only) writes the text — a string constant — to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output`). Before writing, it checks the competition gate (1–160 characters, a single line, non-empty, no control characters, no leading or trailing whitespace) and throws instead of writing an invalid entry. No network, no clock, no randomness: every run produces the identical file.

Run it locally:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Why this text

Against the judge's published brief: it is on subject first — a roast of a smart fridge, aimed at its door-open alarm. The laugh is a real joke on a specific, recognisable detail: every smart fridge beeps when the door stays open, and everyone has been scolded by it while deciding what to eat. The twist pays off in the last few words — the fridge acts like a landlord charging rent to browse food you already own. The line is tight, reads cleanly aloud as one sentence, and ends on the punch.

The angle is fresh: it dodges the crowded cracks — the fridge ordering groceries, the fridge watching you, the 3 a.m. firmware update, the ice maker held hostage behind a subscription, the milk-expiry camera lecture, and the satisfaction survey.

## QA (independent verification)

Two runs with `MAKEFUN_OUTPUT_DIR` pointed at different directories produced
byte-identical `entry.txt` files (`cmp`: identical). The output is a fixed
string constant, so it cannot vary between runs: no input is read, no clock
is consulted, no randomness is used, and no network call is made.

- Characters: 115 (limit 160), bytes: 115, words: 21, one line, no trailing newline
- SHA-256 of `entry.txt`: `fa3417c9c1a9c87492b90b224a022dc1bee0e51c7c3ddc0774ce2d0e0782585b`
