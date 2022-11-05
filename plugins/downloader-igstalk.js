import axios from 'axios'
import cheerio from 'cheerio'

let handler = async (m, { conn, args, usedPrefix, command }) =>
  if (!args || !args[0]) throw `Gunakan format ${usedPrefix}${co
Contoh: ${usedPrefix}${command} leomessi
`.trim()
  let res = await igstalk(args[0])
  let json = JSON.parse(JSON.stringify(res))
  let iggs = `┏┉⌣ ┈ ̥- ̶ ̯ ͡.. ̷ ̴✽ ̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *❏  I N S T A G R A M - S T A L K*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈ ̥- ̶ ̯ ͡.. ̷ ̴

⮕ 𝐔𝐬𝐞𝐫 𝐍𝐚𝗺𝐞: ${json.username}
⮕ 𝐍𝐢𝐜𝐤 𝐍𝐚𝗺𝐞: ${json.fullName}
⮕ 𝐅𝗼𝐥𝐥𝗼𝐰𝐞𝐫: ${json.followersM}
⮕ 𝐅𝗼𝐥𝐥𝗼𝐰𝐢𝐧𝐠: ${json.followingM}
⮕ 𝐏𝗼𝐬𝐭𝐢𝐧𝐠: ${json.postsCountM}
⮕ 𝐁𝐢𝗼: ${json.bio}
⮕ 𝐋𝐢𝐧𝐤 𝐔𝐬𝐞𝐫: https://instagram.com/${json.username}`.trim() // t
  conn.sendFile(m.chat, json.profilePicHD, 'error.jpg', iggs, m)
}
handler.help = ['igstalk <username>']
handler.tags = ['tools']
handler.command = /^(igstalk|igs)$/i
handler.limit = true

export default handler

async function igstalk(username) {
  try {
    const { data } = await axios.get(`https://dumpor.com/v/${use
      headers: {
        "user-agent": "text/html,application/xhtml+xml,applicati
        "cookie": "_inst_key=SFMyNTY.g3QAAAABbQAAAAtfY3NyZl90b2t
      }
    })
    const $ = cheerio.load(data)
    const results = {
      username: ($('#user-page > div.user > div.row > div > div.
      fullName: $('#user-page > div.user > div.row > div > div.u
      profilePicHD: ($('#user-page > div.user > div.row > div >
      bio: $('#user-page > div.user > div.row > div > div.user__
      followers: ($('#user-page > div.user > div.row > div > ul
      followersM: ($('#user-page > div.container > div > div > d
      following: ($('#user-page > div.user > div > div.col-md-4.
      followingM: ($('#user-page > div.container > div > div > d
      postsCount: ($('#user-page > div.user > div > div.col-md-4
      postsCountM: ($('#user-page > div.container > div > div >
    }
    return results
  } catch (e) {
    console.error(e)
    throw 'Not found ;-;'
  }
}