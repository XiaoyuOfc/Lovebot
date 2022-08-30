// beta list menu ujicoba doang 

let handler = async (m, { conn, text, usedPrefix, command }) => {
let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)
    let time = require('moment-timezone').tz('Asia/Jakarta').format('HH:mm:ss')
   let ar = ['list', 'menu']
   let ras = `Hai Kak  @${m.sender.split('@')[0]} 👋`
    let sel = `*© Alyn Botz*\nReady Nokos WhatsApp\nIndo +62 5k\nUSA +1 5K\nRusia +7 5k\nDan Lain-lain, Jika minat Hubungi Owner`
    let rs = `Klik Disini`
const sections = [ {
	title: `Alyn Botz |☁️ Aktif Selama ${uptime}`,
	rows: [
	    {title: `[あ] SEMUA PERINTAH`, rowId: `.a `},//, description: ``},
            {title: `[あ] All CMD Payment`, rowId: `.pay `},//, description: ``},
	    {title: `[あ] OWNER`, rowId: `#owner `},//, description: ``},
        {title: `[あ] DONASI`, rowId: `#donasi `},//, description: ``},
        {title: `[あ] SCRIPT BOT`, rowId: `#sc `},//, description: ``},
        {title: `[あ] GROUP OFC`, rowId: `#gcbot `},//, description: ``},
        {title: `[あ] SPEED`, rowId: `#speed `},//, description: ``},
        {title: `[あ] LIST TEXT PRO`, rowId: `#textpro `},//, description: ``},
        ]
 } ]

const listMessage = {
  text: sel,
  mentions: [m.sender],
  footer: 'Jika menemukan bug,error atau kesulitan dalam penggunaan silahkan laporkan/tanyakan kepada owner.',
  title: ras,
  buttonText: rs,
  sections
}

  if(!text) return conn.sendMessage(m.chat, listMessage, { quoted: m })
  if (!ar.includes(text)) throw conn.sendMessage(m.chat, listMessage, { quoted: m })
  if (!res.ok) throw `${res.status} ${res.statusText}`
  let json = await res.json()
  if (!json.image) throw json
}

handler.help = ['Menu'].map((v) => v + ' <List>')
handler.tags = ['main']
handler.command = /^(menu|help|\?)$/i

module.exports = handler
function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
