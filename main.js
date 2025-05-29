import { CommandKit } from "commandkit";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import { Client, GatewayIntentBits, Partials } from "discord.js";

// ESM __dirname workaround
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Logging in to Discord API
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
  partials: [Partials.Message, Partials.Channel],
});

dotenv.config();
client.login(process.env.TOKEN);

new CommandKit({
  client,
  devGuildIds: [process.env.DEV_SERVER_ID],
  eventsPath: path.resolve(__dirname, "Events"),
  commandsPath: path.resolve(__dirname, "Commands"),
  utilsPath: path.resolve(__dirname, "Utils"),
});
