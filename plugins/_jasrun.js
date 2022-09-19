let handler = async (m, { conn, command, args }) => {
let tetekss = `───〔 *Minat??* 〕───

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
"*Suntik Followers Instagram*\n\ninstagram follower bule\n•500 follower | Rp3.500\n•1000 follower | Rp6.500\n•2000 follower | Rp11.500\n•5000 follower | Rp30.000\nInstagram follower Indonesia Real aktif\n•500 follower |  Rp25.000\n•1000 follower | Rp50.000\n•5000 follower | Rp240.000\n\n*Ada juga Instagram like, tiktok followers, tiktok like, Dll*\nbutuh penawaran lain nya? bisa bisik bisik lewat wa\n\norder?\nlangsung chat saya\nwa.me/+6289652963317\npembayaran all payment",
] 
