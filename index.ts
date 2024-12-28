import { Client } from "discord.js";
const bot = new Client({ intents: process.env.INTENTS || 0 });

const commands = [];
const commandsPath = path.join(__dirname, "commands");
const commandFiles = fs.readdirSync(commandsPath).filter((file) => file.endsWith(".ts"));

fs.readdirSync(commandsPath).filter((file) => file.endsWith(".ts")).forEach(comando=>{
    let command = require(path.join(commandsPath, comando)
    if("run" in command && "data" in command){
        commands.push(command)
    }
})
bot.login(process.env.TOKEN)

bot.on("ready", async()=>{
    bot.application.commands.set(commands.map(t=>t.data))
    console.log("Logou em", bot.user.tag)
})
bot.on("interactionCreate", async i =>{
    if(i.isCommand()){
        let c = commands.find(t=>t.data.name === i.commandName)
        if(c) c.run(bot, i)
    }
})
