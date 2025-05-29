import Utils from "../../Utils/index.js";
const { commandReader } = Utils;

export default async (message, client, handler) => {
  await commandReader(message);
};
