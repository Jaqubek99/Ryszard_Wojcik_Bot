export default async (client) => {
  try {
    const activeGuildList = client.guilds.cache;

    // logging all server that bot works in
    activeGuildList.forEach((guild) => {
      console.log(
        "\x1b[32m%s\x1b[0m",
        `🤖 ${client.user.tag} bot started  on ${guild.name} server`
      );
    });

    client.user.setPresence({
      activies: [
        {
          name: "5 telefonów w ciagu minuty",
          type: 2,
        },
      ],
      status: "dnd,",
    });
  } catch (error) {
    console.log(`Bot napotkał problem przy startowaniu | ${error}`);
  }
};
