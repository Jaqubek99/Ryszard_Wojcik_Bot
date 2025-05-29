import { ytDownloader } from "./ytDownloader.js";

export const commandReader = async (input) => {
  const commandsList = ["?ytmp4"];
  const [command, ...args] = message.content.split(" ");
  const hasCommandsList = command in commandsList;

  if (message.bot && hasCommandsList) {
    message.reply(
      `No chyba z chuja spadłeś! <@${message.guild.ownerId}> ty pa na Tego!`
    );
    console.log(
      "\x1b[33m%s\x1b[0m",
      `⚠ ${message.author.username} wanted to use ?command without permissions!`
    );
  } else if (hasCommandsList && !message.bot) {
    if (command === commandsList[0]) {
      const url = args[0];
      if (!url || !url.startsWith("http")) {
        input.reply("Wysłany link nie jest poprawny!");
      } else {
        await ytDownloader(input);
      }
    }
  }
};
