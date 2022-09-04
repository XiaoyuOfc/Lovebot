let handler = async (m, { conn, command, args }) => {
let tetekss = `───〔 *Minat?* 〕───

${pickRandom(global.jasrun)}`
conn.sendBut(m.chat, tetekss, wm3, 'Owner', '.owner', m) 
}
handler.help = ['jasrun']
handler.tags = ['quotes']
handler.command = /^(jasrun)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

global.jasrun = [
"Open Jasa Run Heroku\nHARGA\n10K SEBULAN\n15 PERMANEN\nSYARATNYA: Pakai Sc Yang Saya Gunakan, Karena Sc Yang Saya Gunakan Work heroku (ON 24 JAM DI HEROKU)\nJika Minat Hubungi Saja http://wa.me/+66615143033",
]
