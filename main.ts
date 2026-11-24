// Revision note: the fan sentence below stays exactly as built; only notes changed here.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "The ceiling fan still turns the same air my grandmother breathed, decades later, circling a room she never left.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n");
console.log(ENTRY);
