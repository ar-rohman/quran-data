const https = require('https');
const fs = require('fs');

const getJuz = async (id) => {
    const url = `https://api.quran.com/api/v4/verses/by_juz/${id}?language=en&words=false&page=1&per_page=1000`;
    let result;
    https.get(url, (res) => {
        let data = '';
        res.on('data', chunk => {
            data += chunk;
        });
        res.on('end', () => {
            data = JSON.parse(data);
            const verses = data.verses;
            try {
                fs.writeFileSync(`./data/juz-${id}.json`, JSON.stringify(verses))
                console.log(`juz-${id} file written successfully`)
            } catch (err) {
                console.error(err)
            }
        })
    }).on('error', (e) => {
        console.error(e);
    });
}
for (let i = 1; i <= 30; i++) {
    getJuz(i);
}