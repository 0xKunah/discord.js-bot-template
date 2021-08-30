const { MessageEmbed } = require("discord.js")

class Embed {
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
module.exports.Embed = Embed

module.exports.Error_Embed = class {
    constructor(author, title, desc='')  {
        return new Embed(author, `:x: ${title}`, desc, [], "RED", "")
    }
}

module.exports.Image_Embed = class {
    constructor(author, title, image, color) {
        return new MessageEmbed().setAuthor(author.username, author.avatarURL()).setTitle(title).setImage(image).setColor(color).setTimestamp()
    }
}