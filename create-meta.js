const fs = require('fs');
const path = require( 'path' );
const surahMeta = require('./data/meta/surah-meta.json');
const verseMeta = require('./data/meta/verse-meta.json');

try {
    fs.writeFileSync('./output/surah-meta.json', JSON.stringify(surahMeta))
    console.log('surah-meta file written successfully')
} catch (err) {
    console.error(err)
}
try {
    fs.writeFileSync('./output/verse-meta.json', JSON.stringify(verseMeta))
    console.log('verse-meta file written successfully')
} catch (err) {
    console.error(err)
}