import { findRecursive } from "./findRecursive.js";
import ytdlp from "yt-dlp-exec";

export const ytDownloader = async (input, url) => {
  const filename = `downloaded-video${Date.now()}.mp4`;
  const downloadFolderPath = "../yt_movies_downloads";
  const filePath = `${downloadFolderPath}/${filename}`;
  input.reply("Downloading video wait....");

  try {
    await ytdlp(url, {
      output: filePath,
      format: "bestvideo[height<=720]+bestaudio/best[height<=720]",
      mergeOutputFormat: "mp4",
      cookies: "A:/projekty_JS/Ryszard_Wojcik/cookies.txt",
    });
    console.log("\x1b[34m%s\x1b[0m", `✅ Video downloaded sucessfully!`);
  } catch (error) {
    console.log(
      "\x1b[31m%s\x1b[0m",
      `❌Error downloading video | \n ${error} ::: ${error.stack}`
    );
  }
};
