//sticker jangan di ubah nanti eror

let handler = async (m, { conn, text, usedPrefix, command }) => {

conn.sendImageAsSticker(m.chat, 'https://telegra.ph/file/8427053ee47e607a3819b.jpg', m, { packname: "Ngen", author: "Masal" })
}

handler.customPrefix = /^(Bot|p)$/i
handler.command = new RegExp

module.exports = handler
