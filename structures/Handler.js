const fs = require('fs')
const { cyan } = require('colors')
module.exports.Commands = (path = "./commands/", client) => {
    fs.readdir(path, (err, cmds) => {
        cmds.forEach(cmd => {
            client.commands.set(cmd.split('.')[0], require(`.${path}${cmd}`))
        })
        console.log(cyan(`✔ ${cmds.length} commands found`))
    })
}
