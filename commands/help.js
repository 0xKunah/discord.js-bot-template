const { Command } = require('../structures/Command')
const { prefix } = require('../config.json')
const { Embed } = require('../utils/Embed')

module.exports = new Command("help", {command: `\`\`${prefix}help\`\``, desc : "Displays the help embed"}, null, (msg, args, client) => {
    let arr = [];
    client.commands.forEach(cmd => {
        arr.push({name : `${cmd.usage.command} (Required permissions : ${cmd.permissions})`, value : cmd.usage.desc})
    });
    msg.channel.send({ embeds : [new Embed(msg.author, "Help Embed", "Here is my commands list", arr, "#01acfb", "")]})
})