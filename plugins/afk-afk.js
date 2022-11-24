/*
let handler = async (m, { text }) => {
    let user = global.db.data.users[m.sender]
    user.afk = + new Date
    user.afkReason = text
    m.reply(`
  ${conn.getName(m.sender)} is now AFK${text ? ': ' + text : ''}
  `)
}
handler.help = ['afk [alasan]']
handler.tags = ['main']
handler.command = /^afk$/i

export default handler
*/

let handler = async (m, { conn, text, usedPrefix, command }) => {
    let user = global.db.data.users[m.sender]
    user.afk = + new Date
    user.afkReason = text
    let caption = `*${conn.getName(m.sender)}* @${m.sender.split("@")[0]} *Sekarang lagi AFK*\n*Dengan Alasan*${text ? ': ' + text : ''}`
    let kataafk = ['mau turu', 'mau nyolong', 'Ke rumah bias ku', 'mau ngising', 'beli surya', 'beli seblak', 'olahraga malam', 'mangan', 'push renk sampe losstrek', 'push up joni', 'senam bersama janda', 'nonton dipfek', 'ngcok', 'sewa oyo', 'di suruh emak', 'kerja']
    conn.sendButton(m.chat, caption, wm, null, [['Ikut AFK', '.afk ' + kataafk.getRandom()]], m, { mentions: conn.parseMention(caption) })
}

handler.help = ['afk [alasan]']
handler.tags = ['main']
handler.command = /^afk$/i

export default handler
