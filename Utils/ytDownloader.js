import { findRecursive } from "./findRecursive.js";
import fs from "fs";
import ytdlp from "yt-dlp-exec";

export const ytDownloader = async (input) => {
  const filename = `downloaded-video${Date.now()}.mp4`;
  const filePath = `${await findRecursive(
    "yt_movies_downloads"
  )}/${filename})}`;

  input.reply("Downloading video wait....");
};
