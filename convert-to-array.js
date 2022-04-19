const fs = require('fs');
const name = './data/quran';
const text = fs.readFileSync(`${name}.txt`, 'utf-8');

let data = [];
data = text.split(new RegExp('\r?\n', 'g'));
try {
    fs.writeFileSync(`${name}.json`, JSON.stringify(data, null, 1))
    console.error('file written successfully')
} catch (err) {
    console.error(err)
}