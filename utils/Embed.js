const { MessageEmbed } = require("discord.js")

module.exports.Embed = (author, title, desc, fields, color, footer ) => {
    return new MessageEmbed()
        .setAuthor(author.username, author.avatarURL())
        .setTitle(title)
        .setDescription(desc)
        .addFields(fields)
        .setColor(color)
        .setFooter(footer)
        .setTimestamp()
}

module.exports.Error_Embed = (author, title, desc='') => {
    return this.Embed(author, `:x: ${title}`, desc, [], "RED", "")
}