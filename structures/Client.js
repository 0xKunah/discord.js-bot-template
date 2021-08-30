const { Client, Collection } = require('discord.js')
const { cyan } = require('colors')

module.exports.Bot = class extends Client {
    constructor(props){
        super({ intents : props.intents })
        this.commands = new Collection()
    }

    setActivity(status){
        this.on("ready", () => {
            this.user.setPresence({ 
                activities: [
                    status
                ]
            })
        })
    }

    whenReady(message = "The bot is ready"){
        console.log(cyan(`✔ ${message}`))
    }

}