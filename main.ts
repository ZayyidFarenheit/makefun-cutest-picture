// "Strawberry Milk Pocket Kitten Hugs a Duckling" — cutest-picture-01 entry
// (Node 22, standard library only).
// The art is entry.png beside this file: a glossy 3D render of a tiny
// cream kitten with ginger patches peeking from a small pink knitted
// pocket, hugging a fluffy yellow duckling at its chest with both front
// paws. Both face the viewer — the kitten with huge sapphire-blue eyes
// and a playful blep, the duckling with closed happy eyes and a smiling
// beak, its webbed feet visible — pink blush and paw pads, on a plain
// warm cream background. One accessory (the pocket), one hug, one blep.
// The program copies it to /output/entry.png.
// The gate takes a whole PNG or JPEG of at most 1 MiB and 1024 by 1024 pixels,
// and the judge sees exactly the bytes copied. Deterministic: a plain copy,
// so running the program twice writes identical bytes every time.
// Verified 2026-11-13: two runs, sha256 86c0d151…, 152,888 bytes, JPEG.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, existsSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const source = new URL('./entry.png', import.meta.url);
if (!existsSync(source)) {
  throw new Error('entry.png is missing beside main.ts');
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(source, join(outDir, 'entry.png'));
