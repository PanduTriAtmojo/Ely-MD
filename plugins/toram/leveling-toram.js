import fetch from 'node-fetch';
import cheerio from 'cheerio';

const token = '62|Iviz9iHAU31BWGucKDV91okCVJb64KS0WEdEdZy0';

let headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: 'Bearer ' + token,
};

let handler = async (m, { conn, text, usedPrefix, command }) => {
    try {
        let [lvl, bexp] = text.split(/[^\w\s]/g)
        if (!(lvl && bexp)) throw `Contoh: ${usedPrefix + command} 190|50`
   axios.get(`https://toram-id.info/leveling?level=${lvl}&bonusexp=${bexp}&range=5`)
 .then((response) => {
   if (response.status === 200) {
     const html = response.data;
     const $ = cheerio.load(html);
     const array = []
     $('tr.text-danger').each(function(i, elem) {
       array[i] = {
         boss: $(this).find('.px-2 > div').text().trim(),
         location: $(this).find('.text-muted > a').text().trim(),
         exp: $(this).find('.text-primary').text().trim()
       }
     });
     let gb = `*Leveling lvl ${lvl} & bonus exp ${bexp}*\n`
     for(let i = 0; i < array.length; i++) {
         gb += `_______________________________\nBoss: ${array[i].boss}\nLocation: ${array[i].location}\nEXP: ${array[i].exp}\n`
     }
     client.sendText(from, gb, mek)
     console.log(array[0])
   }
 })
   } catch (err) {
     console.log(err)
     m.reply(lang.eror(err))
   }
}

handler.help = ['leveling <level>']
handler.tags = ['toram']
handler.command = /^(leveling|lvlng)$/i

handler.premium = true
handler.limit = false

export default handler;

