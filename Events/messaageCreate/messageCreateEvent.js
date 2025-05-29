import Utils from "../../Utils";
const { commandReader } = Utils;

export default async (message, client, handler) => {
  const commandsList = ["?commands", "?setrachunekcontent"];
  const msgContent = message.content;
  const command = msgContent.split(" ")[0];
  const commandArguments = msgContent.split(" ")[1];
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
  }
};
