const { Embed } = require('../utils/Embed')
const { Command } = require('../structures/Command')
module.exports = new Command("say", (msg, args) => {
    msg.channel.send({embeds : [new Embed(msg.author, `${msg.author.username} says :`, args.join(' '), [], "#01acfb", "")]})
})