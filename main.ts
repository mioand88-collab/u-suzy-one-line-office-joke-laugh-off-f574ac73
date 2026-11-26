// One-Line Office Joke Laugh-Off
// Writes one original one-line office joke to /output/entry.txt.
// The gate requires UTF-8 text of 1 to 200 characters, not only whitespace,
// and the judge requires a single line about office life.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const JOKE =
  "I asked HR for a raise and they gave me a meditation app, so now I calmly visualize a salary I don't have.";

function validateJoke(joke: string): number {
  // Gate check: 1-200 chars, not only whitespace, single line.
  const chars = [...joke].length;
  if (chars < 1 || chars > 200) {
    throw new Error(`Joke must be 1-200 characters, got ${chars}`);
  }
  if (joke.trim().length === 0) {
    throw new Error("Joke must not be only whitespace");
  }
  if (joke.includes("\n") || joke.includes("\r")) {
    throw new Error("Joke must be a single line");
  }
  return chars;
}

function main(): void {
  const chars = validateJoke(JOKE);

  const outPath = "/output/entry.txt";
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, JOKE, "utf8");
  console.log(`Wrote ${chars} characters to ${outPath}`);
}

main();
