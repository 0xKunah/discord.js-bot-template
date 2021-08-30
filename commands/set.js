const { Error_Embed, Embed } = require('../utils/Embed')
const { Command } = require('../structures/Command')
const { Permissions } = require('discord.js')
const fs = require('fs')
module.exports = new Command("set", (msg, args) => {
    let supportedSets = ["prefix", "status", "status_type"]
    if(!msg.member.permissions.has(Permissions.FLAGS.MANAGE_GUILD)) return msg.channel.send({ embeds : [
        new Error_Embed(msg.author, "Access denied", "You havent the ``MANAGE_GUILD`` permission flag, which is required to execute this command")
    ]})
    if(!args[0]) return msg.channel.send({ embeds : [new Error_Embed(msg.author, `Too few args given`, "Provide more args to run this command")]}) 
    if(supportedSets.includes(args[0])){
        let set = args.splice(0, 1).join(' ');
        if(set){
            fs.readFile('./config.json', (err, data) => {
                data = JSON.parse(data)
                data[set] = args.join(' ')
                fs.writeFile('./config.json', JSON.stringify(data), (err) => {
                    if(err) console.log(err)
                    else {
                        msg.channel.send({ embeds : [
                            new Embed(msg.author, ":white_check_mark: Success", `**${set}** successfully changed to **${args.join(' ')}** !`, [], "#01acfb", "")
                        ]})
                    }
                })
            })
        } else return msg.channel.send({ embeds : [new Error_Embed(msg.author, `Too few args given`, "Provide more args to run this command")]})
    } else return msg.channel.send({ embeds : [new Error_Embed(msg.author, `Invalid arg given ('${args[0]}')`, "This property doesn't exists or cannot be changed")]})
})