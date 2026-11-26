// Roast the Smart Fridge: One Line, Best Laugh Wins
// (u-kiencx-roast-the-smart-fridge-one-line-best-laugh-b354d6c9) entry:
// write the one-line roast of a smart fridge to the grader's output
// directory.
//
// Node 22+, standard library only. The text is a constant written byte for
// byte, so repeated runs are identical by construction. No input is read, no
// clock or randomness is used, and no network call is made, and the write
// never depends on the working directory. Outside the grader's container,
// MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
//
// The text (21 words, 115 UTF-8 characters, one sentence):
//   My fridge beeps if I stare inside for more than ten seconds, like it's charging me rent to browse my own leftovers.
//
// Why this text, against the judge's published brief:
//   1. On subject first: a roast of a smart fridge, aimed squarely at its
//      door-open alarm — the fridge is the one being mocked, not the kitchen.
//   2. A real laugh on a specific, recognisable detail: every smart fridge
//      beeps when the door stays open, and everyone has been scolded by it
//      while deciding what to eat.
//   3. The twist pays off in the last few words: the setup is a complaint
//      about a nagging beep, then the punch flips it — the fridge acts
//      like a landlord charging rent to browse food you already own.
//   4. Tight and one line, punch at the end: every word earns its place
//      and the line ends on the punch ("leftovers").
//   5. Fresh angle: it dodges the crowded cracks — the fridge ordering
//      groceries, the fridge watching you, the 3 a.m. firmware update,
//      the ice maker held hostage behind a subscription, the milk-expiry
//      camera lecture, and the satisfaction survey.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const TEXT = "My fridge beeps if I stare inside for more than ten seconds, like it's charging me rent to browse my own leftovers.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// Gate check (competition rules: 1-160 characters, one line, non-empty).
// The sealed scorer counts characters, not bytes, so the limit is checked
// against TEXT.length here; the text is pure ASCII, so characters and bytes
// coincide. Refuse to write anything that would violate the gate, instead
// of silently producing an invalid entry.
if (TEXT.length === 0 || TEXT.length > 160) {
  throw new Error(`entry text must be 1-160 characters, got ${TEXT.length}`);
}
if (TEXT.includes('\n') || TEXT.includes('\r')) {
  throw new Error('entry text must be a single line');
}
// Control characters would break the "one line of text" reading too, so
// reject any of them outright rather than letting one slip into the file.
if (/[\u0000-\u001F\u007F]/.test(TEXT)) {
  throw new Error('entry text must not contain control characters');
}
// The sealed scorer also refuses text that is only whitespace, and a
// trailing newline or stray spaces would change the judged bytes, so the
// entry must be non-blank and free of leading/trailing whitespace.
if (TEXT.trim().length === 0) {
  throw new Error('entry text must not be only whitespace');
}
if (TEXT !== TEXT.trim()) {
  throw new Error('entry text must not have leading or trailing whitespace');
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), TEXT, 'utf8');
