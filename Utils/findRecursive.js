import { readdir, stat } from "fs/promises";
import path from "path";

/**
 * Recursively searches for a folder/file with a given name inside a base directory.
 * @param {string} targetName - The name of the folder/file to find
 * @param {string} baseDir - The root directory to start searching in (default: current dir)
 * @returns {Promise<string|null>} - Full path to found folder/file, or null if not found
 */
export async function findRecursive(targetName, baseDir = process.cwd()) {
  const entries = await readdir(baseDir);

  for (const entry of entries) {
    const fullPath = path.join(baseDir, entry);

    if (entry === targetName) {
      console.log(`\n✅ Found: ${fullPath}`);
      return fullPath;
    }

    // RECURSIVING ONLY WHEN IT'S A DIRECTORY
    try {
      const entryStat = await stat(fullPath);
      if (entryStat.isDirectory()) {
        const result = await findRecursive(targetName, fullPath);
        if (result) return result;
      }
    } catch (err) {}
  }

  return null;
}
