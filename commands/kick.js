const { Embed, Error_Embed } = require('../utils/Embed')
const { Permissions } = require('discord.js')
const { Command } = require('../structures/Command')
const { prefix } = require('../config.json')

module.exports = new Command("kick", {command : `\`\`${prefix}kick <@user> (required)\`\``, desc : "Kicks the mentioned user"}, "KICK_MEMBERS", (msg, args) => {
    let target = msg.mentions.members.first()
    if(!target) return msg.channel.send({embeds: [Error_Embed(msg.author, "Invalid user mentioned")]})
    target.kick(args[0]).then(()=>{
        args.shift()
        msg.channel.send({embeds : [new Embed(msg.author, ":white_check_mark: Success", "The user you pinged was successfully kicked from this server", [{name : "Reason:", value: args.join(' ') || "Not given"}, {name : "Target:", value: target.user.username}], "GREEN", "")]})
    }).catch(err => {
        console.log(err)
        if(err) msg.channel.send({embeds : [new Error_Embed(msg.author, `I'm not able to kick ${target.user.username}.`)] })
    })
})