const { MessageEmbed } = require("discord.js")

module.exports.Embed = class {
    constructor(author, title, desc, fields, color, footer) {
        return new MessageEmbed()
            .setAuthor(author.username, author.avatarURL())
            .setTitle(title)
            .setDescription(desc)
            .addFields(fields)
            .setColor(color)
            .setFooter(footer)
            .setTimestamp()
    }
}

module.exports.Error_Embed = class {
    constructor(author, title, desc='')  {
        return this.Embed(author, `:x: ${title}`, desc, [], "RED", "")
    }
}

module.exports.Image_Embed = class {
    constructor(author, title, image, color) {
        return new MessageEmbed().setAuthor(author.username, author.avatarURL()).setTitle(title).setImage(image).setColor(color).setTimestamp()
    }
}