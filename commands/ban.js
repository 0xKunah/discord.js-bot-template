const { Embed, Error_Embed } = require('../utils/Embed')
const { Permissions } = require('discord.js')
module.exports.exc = (msg, args, client) => {
    if(msg.member.permissions.has(Permissions.FLAGS.BAN_MEMBERS)){
        if(msg.guild.me.permissions.has(Permissions.FLAGS.BAN_MEMBERS)){
            let target = msg.mentions.members.first()
            if(!target) return msg.channel.send({embeds: [Error_Embed(msg.author, "Invalid user mentioned")]})
            target.ban(args[0]).then(()=>{
                args.shift()
                msg.channel.send({embeds : [Embed(msg.author, ":white_check_mark: Success", "The user you pinged was successfully banned from this server", [{name : "Reason:", value: args.join(' ') || "Not given"}, {name : "Target:", value: target.user.username}], "GREEN", "")]})
            }).catch(err => {
                console.log(err)
                if(err) msg.channel.send({embeds : [Error_Embed(msg.author, `I'm not able to ban ${target.user.username}.`)] })
            })
        } else msg.channel.send({embeds : [Error_Embed(msg.author, "I can't ban members")]})
    } else msg.channel.send({embeds : [Error_Embed(msg.author, "You can't ban members")]})
}