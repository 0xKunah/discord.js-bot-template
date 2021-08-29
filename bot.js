let { Bot } = require('./structures/Client')
let { Intents, Permissions } = require('discord.js')
let client = new Bot({intents : [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]})
let { Commands } = require('./structures/Handler')
const { token, prefix } = require('./config.json')
const { red } = require('colors')
const { Error_Embed } = require('./utils/Embed')
Commands("./commands/", client)

client.login(token)
client.whenReady('The bot is ready !')
client.setActivity("by Kunah#0763", "WATCHING")
client.on('messageCreate', msg => {
    if(msg.content.startsWith(prefix)){
        if(!msg.guild.me.permissions.has(Permissions.FLAGS.SEND_MESSAGES)) return console.log(red('❌ The bot cant send messages'))
        let command = client.commands.get(msg.content.split(' ')[0].substr(prefix.length))
        msg.delete()
        if(command){
            let args = msg.content.substr(msg.content.split(' ')[0].length+1).split(" ")
            command.exc(msg, args, client)
        } else return msg.channel.send({ embeds : [
            Error_Embed(msg.author, `Command "${msg.content.split(' ')[0].substr(prefix.length)}" not found`, "This command was not found, verify your message and retry.")
        ]})
    }
})