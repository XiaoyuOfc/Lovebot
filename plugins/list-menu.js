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
	title: `${htki} PEMILIK BOT ${htka}`,
	rows: [
	    {title: `💌 OWNER BOT`, rowId: ".owner", description: "Menampilkan Owner/Pembuat bot ini"},    
	]
    },{
	title: `${htki} MENUNYA ${htka}`,
	rows: [
	    {title: `🔖 LIST MENU`, rowId: ".menul", description: "Menampilkan All menu"},
	    {title: `🌟 LIST MENU VERSI PAYMENT`, rowId: ".pay", description: "Menampilkan All Menu Versi Payment"},
	    {title: `💹 MENU INFO`, rowId: ".info", description: 'Menampilkan Menu Info Bot'},
	]
	},{
	title: `${htki} MY BUSINESS ${htka}`,
	rows: [
	    {title: `🍂 SEWA BOT`, rowId: ".sewa", description: "10k Permanen + Free Premium"},
	    {title: `🌺 NOKOS UNTUK WHATSAPP`, rowId: ".nokos", description: "Nokos adalah Nomor kosong sekali verify"},
	    {title: `🌸 JASA RUN BOT`, rowId: ".jasrun", description: 'Jasa Run Di heroku, bot on 24 jam'},
	]
	},{
	title: `${htki} GABUT🗿 ${htka}`,
	rows: [
	    {title: `🌷 AKU SAYANG DIA`, rowId: ".galau", description: "Tapi Dia Gak Sayang Aku🗿"},
	    {title: `🌺 ISO NEMBANG, RA ISO NYULING`, rowId: ".galau", description: "Iso Nyawang, Ra Iso Nyanding:)"},
	    {title: `☕ DUA TIGA TUTUP BOTOL`, rowId: ".ngawur", description: 'Yang Spam Kek Kont*l 🔪'},
	]
 } ]

const listMessage = {
  text: sel,
  mentions: [m.sender],
  footer: '_*Note:* Bot ini akan terus dan terus update, Jika menemukan fitur error/mau req fitur, hubungi saja owner_',
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

handler.help = ['menu'].map((v) => v + ' <List>')
handler.tags = ['main']
handler.command = /^(menu)$/i

module.exports = handler
function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
