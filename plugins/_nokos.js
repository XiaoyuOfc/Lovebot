let handler = async (m, { conn, command, args }) => {
let tetekss = `───〔 *Ready* 〕───

${pickRandom(global.nokos)}`
conn.sendBut(m.chat, tetekss, wm3, 'Owner', '.owner', m) 
}
handler.help = ['nokos']
handler.tags = ['quotes']
handler.command = /^(nokos)$/i
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

global.nokos = [
"Nokos/nomor kosong\n(OTP WHATSAPP)\n*SAYA SEDIA NOKOS/OTP UNTUK WHATSAPP*\nOTP INDO : 3K\nOTP THAILAND 5K\nOTP CANADA : 5K\n\n*Otp adalah One-Time Password*\nSaat anda membeli nokos/otp di saya,\nSaya akan kasih nomor random, dan anda daftarin ke WhatsApp.\nDan saya akan kasih otp/code.\nJika minat Hubungi saja wa.me/+66615143033",
]
