const { client } = require('../bot')
module.exports.Event = class {
    constructor(type, run){
        client.on(type, run)
    }
}
