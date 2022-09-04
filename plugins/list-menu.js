// beta list menu ujicoba doang 

let handler = async (m, { conn, text, usedPrefix, command }) => {
let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)
    let time = require('moment-timezone').tz('Asia/Jakarta').format('HH:mm:ss')
    let ar = ['list', 'menu']
   let ras = `Hai Kak  @${m.sender.split('@')[0]} 👋`
    let sel = `*I Am Ndra Botz*\n*Bot ini Aktif Selama ${uptime}*`
    let rs = `Klik Disini`
const sections = [ {
	title: `Ndra Botz | Jangan Spam`,
	rows: [
	    {title: `Semua Perintah`, rowId: `.menul `},//, description: ``},
            {title: `Nokos/Nomor Kosong`, rowId: `.nokos `},//, description: ``},
	    {title: `Pemilik Bot`, rowId: `#owner `},//, description: ``},
        {title: `Jasa Run Bot`, rowId: `#jasrun `},//, description: ``},
        {title: `Sewa bot permanen 15k untuk 2 grup`, rowId: `#owner `},//, description: ``},
        {title: `10k Permanen untuk 1 grup`, rowId: `#owner `},//, description: ``},
         {title: `Yang Sewa bot, Dapet Prem gratis`, rowId: `#owner `},//, description: ``},
           {title: `Bot On 24 Jam`, rowId: `#gcbot `},//, description: ``},
        ]
 } ]

const listMessage = {
  text: sel,
  mentions: [m.sender],
  footer: '*Note:* ```Bot ini akan terus dan terus update, Jika menemukan fitur error/mau req fitur, hubungi saja owner```',
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
handler.command = /^(menu)$/i

module.exports = handler
function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
