// ai-excited-01 entry (Node 22, standard library only).
// The image lives beside this file as entry.png; the program copies it byte
// for byte to the grader's output directory. No network, no randomness: every
// run writes exactly the same bytes.
//
// Local run:  mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, statSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const src = join(here, 'entry.png');
const dest = join(outDir, 'entry.png');

mkdirSync(outDir, { recursive: true });
copyFileSync(src, dest);

// Fail loudly on a short copy: the gate only scores whole images, so a
// truncated file must never pass silently.
if (statSync(src).size !== statSync(dest).size) {
  throw new Error('entry.png copy incomplete');
}
