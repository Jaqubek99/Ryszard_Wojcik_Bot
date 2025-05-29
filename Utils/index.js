// This help load utils and import them from one place
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const files = await fs.readdir(__dirname);
const allFunctions = {};

for (const file of files) {
  if (file === "index.js" || !file.endsWith(".js")) continue;

  const modulePath = path.join(__dirname, file);
  const module = await import(`file://${modulePath}`);

  if (module) {
    console.log(
      "\x1b[32m%s\x1b[0m",
      `    ✅ Module ${file} loaded sucessfully!`
    );
  } else {
    console.log("\x1b[31m%s\x1b[0m", `    ❌ Module ${file} loaded failed!`);
  }

  for (const [name, func] of Object.entries(module)) {
    allFunctions[name] = func;
  }
}

export default allFunctions;
