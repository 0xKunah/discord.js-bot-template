const { Image_Embed } = require('../utils/Embed')
const { Command } = require('../structures/Command')
const { prefix } = require('../config.json')

module.exports = new Command("avatar", {command : `\`\`${prefix}avatar <@user> (optional)\`\``, desc : "Displays the mentioned user's avatar, or the message author's avatar"}, null,  (msg, args) => {
    let target = msg.mentions.members.first() || msg.member
    let avatar_url = `https://cdn.discordapp.com/avatars/${target.user.id}/${target.user.avatar}.png?size=256`
    msg.channel.send({ embeds : [
        new Image_Embed(msg.author, `${target.user.username}'s avatar`, avatar_url, "#01acfb")
    ] })
})