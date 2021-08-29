const fs = require('fs')
const { cyan } = require('colors')
const { client } = require('../bot')
module.exports.Commands = (path = "./commands/") => {
    fs.readdir(path, (err, cmds) => {
        cmds.forEach(cmd => {
            client.commands.set(require(`.${path}${cmd}`).name, require(`.${path}${cmd}`))
        })
        console.log(cyan(`✔ ${cmds.length} commands found`))
    })
}
