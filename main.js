import { CommandKit } from "commandkit";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import { Client, GatewayIntentBits, Partials } from "discord.js";

// ESM __dirname workaround
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Logging in to Discord API
dotenv.config({
  path: path.resolve(__dirname, `.env`),
});

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
  partials: [Partials.Message, Partials.Channel],
});
client.login(process.env.TOKEN);

new CommandKit({
  client,
  devGuildIds: [process.env.DEV_SERVER_ID],
  //devRoleIds: IDs,
  eventsPath: path.resolve(__dirname, "events"),
  commandsPath: path.resolve(__dirname, "commands"),
  utilsPath: path.resolve(__dirname, "utils"),
});
