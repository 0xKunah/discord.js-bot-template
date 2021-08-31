const { Embed } = require('../utils/Embed')
const { Command } = require('../structures/Command')
const { prefix } = require('../config.json')

module.exports = new Command("say", {command : `\`\`${prefix}say <text> (optional)\`\``, desc : "Say the text you typed"}, null, (msg, args) => {
    msg.channel.send({embeds : [new Embed(msg.author, `${msg.author.username} says :`, args.join(' '), [], "#01acfb", "")]})
})