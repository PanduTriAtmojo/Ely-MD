import axios from 'axios'
import cheerio from 'cheerio'
import fetch from 'node-fetch'


let handler = async (m, { conn, text, usedPrefix, command }) => {
  try {

    if(!text) throw `Contoh: *${usedPrefix}${command} Mimyugon*`
  
    axios.get(`https://coryn.club/monster.php?name=${text}#`)
   .then((response) => {
      if(response.status === 200) {
          const html = response.data;
          const $ = cheerio.load(html)
          array = []
           $(".card-container > div").each(function(i, elem) {
              array[i] = {
                  boss: $(this).find("div > .card-title-inverse").text().trim(),
                  diff: $(this).find(".monster-no-pic > div > .item-prop > div:nth-child(2) > p:nth-child(2)").text().trim(),
                  lv: $(this).find(".monster-no-pic > div > .item-prop > div:nth-child(1) > p:nth-child(2)").text().trim(),
                  hp: $(this).find(".monster-no-pic > div > .item-prop > div:nth-child(3) > p:nth-child(2)").text().trim(),
                  exp: $(this).find(".monster-no-pic > div > .item-prop > div:nth-child(5) > p:nth-child(2)").text().trim(),
                  element: $(this).find(".monster-no-pic > div > .item-prop > div:nth-child(4) > p:nth-child(2)").text().trim(),
                  tamable: $(this).find(".monster-no-pic > div > .item-prop > div:nth-child(6) > p:nth-child(2)").text().trim(),
                  map: $(this).find(".item-prop > div:nth-child(2) > a").text().trim(),
                  drop: $(this).find(`.monster-drop > div > a`).text().trim()
              }
          })
              db = `*detail ${command + text}:*\n\n`
              for (let i = 0; i < array.length; i++) {
                db += `-----------------------------------\nBoss: ${array[i].boss}\nDiff: ${array[i].diff}\nLevel: ${array[i].lv}\nHP: ${array[i].hp}\nEXP: ${array[i].exp}\nElement: ${array[i].element}\nTamable: ${array[i].tamable}\nLocation: ${array[i].map}\nDrop: ${array[i].drop}\n`
              }
              client.sendText(from, db, mek)
          }
      
   })
    } catch (err) {
      m.reply('Server Down')
    }  
}

handler.help = ['mons <text>']
handler.tags = ['toram']
handler.command = /^(mons)$/i

handler.premium = true
handler.limit = true

export default handler