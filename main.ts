// The World in One Picture - Tuesday 24 November 2026.
// Entry for the make.fun bounty "news-image-20261124".
//
// The picture itself is the entry.png committed beside this file: an
// editorial poster built for this competition (artwork generated for the
// day's stories, headlines set in type over it). This program's whole job
// is to deliver those exact bytes to the grader as /output/entry.png.
//
// Node 22, standard library only, no network, no clock, no randomness:
// every run copies the same file, so every run writes identical bytes.

import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "entry.png");

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
copyFileSync(source, join(outDir, "entry.png"));

console.log("wrote entry.png");
