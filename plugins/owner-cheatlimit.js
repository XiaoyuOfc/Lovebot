let fetch = require('node-fetch')
let handler = async (m, { text }) => {
m.reply('=> global.db.data.users[m.sender].limit = Infinity')

}
handler.help = ['cheatliimit']
handler.tags = ['owner']
handler.command = /^cheatlimit$/i

module.exports = handler
