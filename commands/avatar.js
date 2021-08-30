const { Image_Embed } = require('../utils/Embed')
const { Command } = require('../structures/Command')

module.exports = new Command("avatar", (msg, args) => {
    let target = msg.mentions.members.first() || msg.member
    let avatar_url = `https://cdn.discordapp.com/avatars/${target.user.id}/${target.user.avatar}.png?size=256`
    msg.channel.send({ embeds : [
        new Image_Embed(msg.author, `${target.user.username}'s avatar`, avatar_url, "#01acfb")
    ] })
})