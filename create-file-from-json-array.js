const fs = require('fs');
const sourceFile = './data/translation.json';
const array = require(sourceFile);
const outputPath = './data/translation/';

array.forEach((item, index) => {
    const iterate = index + 1;
    const setFileName = iterate.toString().padStart(4, '0')
    const name = `${outputPath}${setFileName}.json`;
    const data = { id: iterate, translation: item };
    try {
        fs.writeFileSync(name, JSON.stringify(data, null, 1))
        console.error(`${iterate} done`)
    } catch (err) {
        console.error(err)
    }
});