export default async (client) => {
  try {
    const activeGuildList = client.guilds.cache;

    // logging all server that bot works in
    activeGuildList.forEach((guild) => {
      console.log(
        "\x1b[32m%s\x1b[0m",
        `🤖 ${client.user.tag} bot started on ${guild.name} server`
      );
    });

    // Setting DND presence
    client.user.setPresence({
      status: "dnd",
      activities: [
        {
          name: "5 telefony w ciągu minuty",
          type: 2,
        },
      ],
    });
  } catch (error) {
    console.log(`Bot napotkał problem przy startowaniu | ${error}`);
  }
};
