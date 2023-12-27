import fetch from 'node-fetch';
import cheerio from 'cheerio';

const token = '62|Iviz9iHAU31BWGucKDV91okCVJb64KS0WEdEdZy0';

let headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: 'Bearer ' + token,
};

let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `Lah level lu berapa cok`
    try {
        const url = `https://toram-id.info/leveling?level=${text}&bonusexp=&range=8`;

        const response = await fetch(url, { headers });

        if (response.ok) {
            const htmlData = await response.text();
            const $ = cheerio.load(htmlData);

            const monsters = [];

            $('table.table-hover').each((index, element) => {
                const monsterInfo = $(element).find('td').map((i, td) => $(td).text().trim()).get();
                if (monsterInfo[1] && monsterInfo[1] !== 'N/A') {
                    const monster = {
                        note: monsterInfo[0],
                        spots: [],
                    };

                    for (let i = 2; i < monsterInfo.length; i++) {
                        monster.spots.push(monsterInfo[i]);
                    }

                    monsters.push(monster);
                }
            })


            const currentLevel = parseInt(text) || 0;
            const nextLevel = currentLevel + 1;


            const formattedText = `*List Leveling*\nlevel: ${currentLevel}-${nextLevel}\n\n` + monsters.map((monster, index) => {
                const formatSpot = (spots) => {
                    return spots.map(spot => {
                        const lines = spot.split('\n').map(line => line.trim());
                        const monsterDetails = lines[0] || 'N/A';
                        const mapDetails = lines[3] ? lines[3] : 'N/A';
                        const xpDetails = lines[7] ? lines[7] : 'N/A';
                        return `Monster : *${monsterDetails}*\nMap : *${mapDetails}*\nXP  : *${xpDetails}*\n __________`;
                    }).join('\n\n');
                };

                return formatSpot(monster.spots) + '\n';
            }).join('\n\n');

            await m.reply(formattedText);
        } else {
            console.error('Failed to fetch data. Status code: ' + response.status);
        }
    } catch (error) {
        console.error('Error:', error);
        throw 'Server down / Level ketinggian'
    }
}

handler.help = ['leveling <level>']
handler.tags = ['toram']
handler.command = /^(leveling|lvlng)$/i

handler.premium = true
handler.limit = false

export default handler;

