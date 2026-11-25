// Make the AI Judge Laugh — one line about office life.
// The entry is a single joke, written to /output/entry.txt.
// Gate: UTF-8 text of 1 to 200 characters, not only white space.
import * as fs from "node:fs";

const LINE =
  "Our daily standup is fifteen minutes of eight people proving they did nothing yesterday in the most impressive way possible.";

if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${LINE.length}`);
}
if (LINE.trim().length === 0) {
  throw new Error("entry must not be only white space");
}

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`wrote /output/entry.txt (${LINE.length} chars)`);
