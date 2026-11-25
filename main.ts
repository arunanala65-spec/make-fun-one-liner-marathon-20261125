// One-Liner Marathon — make.fun
// One line: a deadpan one-liner about an AI assistant that took "act more human" too literally -- three escalating human flaws in one breath.
// Entry: make-fun-one-liner-marathon-20261125

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line = "I told my AI to act more human, so it started ignoring my emails, blaming the Wi-Fi, and asking to circle back next quarter.";

if (line.length < 1 || line.length > 279) {
  throw new Error(`Line must be 1-279 characters, got ${line.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line + "\n", "utf8");
console.log(line);
