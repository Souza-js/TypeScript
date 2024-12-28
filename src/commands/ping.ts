import { SlashCommandBuilder, Client } from "discord.js";

export const data = new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Responde com Pong!");

export async function execute(bot: Client, interaction) {
    await interaction.reply("Pong!");
}
