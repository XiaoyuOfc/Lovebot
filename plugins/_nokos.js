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
"Ready nokos WhatsApp\nHarga:\nIndo +62 4k\nRussia+7 3k\nThailand +66 6k\n*Seperti saya +66*\nChina +86 7k\n*Dan lain lain*\nMinat? Hubungi http://wa.me/+62896-5296-3317\n\nApa itu nokos?\n*Nokos adalah Nomor kosong yang dijual untuk di verifikasi ke WhatsApp*\nJika anda membeli nokos di saya,\nSaya akan kasih nomor, dan anda harus mendaftarkan nomornya ke WhatsApp,\n*Nanti saya kasih codenya*\n\nPromo ,USA\n*Contoh Nomor: +1 (825) 888-0882*\nCuman 5k, *Stok Terbatas!!*\n_Via pulsa dana & Qris all payment._",
]
