import { REST, Routes } from "discord.js";

const commands = [];
const commandsPath = path.join(__dirname, "commands");
const commandFiles = fs.readdirSync(commandsPath).filter((file) => file.endsWith(".ts"));

for (const file of commandFiles) {
    const command = require(path.join(commandsPath, file));
    if (command.data) {
        commands.push(command.data.toJSON());
    }
}

const rest = new REST({ version: "10" }).setToken("SEU_TOKEN_AQUI");

(async () => {
    try {
        console.log("Iniciando o registro de comandos de barra (Slash Commands)...");

        await rest.put(
            Routes.applicationCommands("SEU_CLIENT_ID"),
            { body: commands }
        );

        console.log("Comandos registrados com sucesso!");
    } catch (error) {
        console.error(error);
    }
})();
