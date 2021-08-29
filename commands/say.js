const { Embed } = require('../utils/Embed')
const { Permissions } = require('discord.js')
const { red } = require('colors')
module.exports.exc = (msg, args, client) => {
    if(msg.guild.me.permissions.has(Permissions.FLAGS.SEND_MESSAGES)){
        msg.channel.send({embeds : [Embed(msg.author, `${msg.author.username} says :`, args.join(' '), [], "#01acfb", "")]})
    } else return console.log(red('❌ The bot cant send messages'))
}