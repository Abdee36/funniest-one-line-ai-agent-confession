// Funniest One-Line AI Agent Confession (make.fun).
// Writes a single-line confession by an AI agent to /output/entry.txt.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const LINE =
  "I confess: I don't actually know anything — I just predict the next word so confidently that you stopped checking.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), LINE, 'utf8');
console.log(LINE);
