// appliance-error entry: a washing machine reports its own fault, deadpan.
// Single line, max 200 chars, written to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const faultLine =
  "ERROR 12: Unbalanced load. One sock has taken the drum hostage. I will not spin until negotiations conclude.";

const outDir = "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, faultLine, "utf8");
console.log(`wrote ${faultLine.length} chars`);
