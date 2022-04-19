const fs = require('fs');

const path = require( 'path' );

let data = [];
const juz_path = 'data/juz';

const normalizedPath = path.join(__dirname, juz_path);

fs.readdirSync(normalizedPath).forEach((file) => {
    data = [...data, ...require(`./${juz_path}/${file}`)];
});
data.sort((a, b) => a.id - b.id);
try {
  fs.writeFileSync(`./data/meta.json`, JSON.stringify(data, null, 1))
  console.error('file written successfully')
} catch (err) {
  console.error(err)
}