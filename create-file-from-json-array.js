const fs = require('fs');
// const translationSourceFile = './data/translation.json';
// const translationArray = require(translationSourceFile);
// const translationOutputPath = './data/translation/';

// translationArray.forEach((item, index) => {
//     const iterate = index + 1;
//     const setFileName = iterate.toString().padStart(4, '0')
//     const name = `${translationOutputPath}${setFileName}.json`;
//     const data = { id: iterate, translation: item };
//     try {
//         fs.writeFileSync(name, JSON.stringify(data, null, 1))
//         console.error(`translation ${iterate} done`)
//     } catch (err) {
//         console.error(err)
//     }
// });

const indopakSourceFile = './data/indopak.json';
const indopakArray = require(indopakSourceFile);
const indopakOutputPath = './data/verses/indopak/';

indopakArray.forEach((item, index) => {
    const iterate = index + 1;
    const setFileName = iterate.toString().padStart(4, '0')
    const name = `${indopakOutputPath}${setFileName}.json`;
    const data = { id: iterate, script: item };
    try {
        fs.writeFileSync(name, JSON.stringify(data, null, 1))
        console.error(`indopak ${iterate} done`)
    } catch (err) {
        console.error(err)
    }
});

const uthmaniSourceFile = './data/uthmani.json';
const uthmaniArray = require(uthmaniSourceFile);
const uthmaniOutputPath = './data/verses/uthmani/';

uthmaniArray.forEach((item) => {
    const setFileName = item.id.toString().padStart(4, '0')
    const name = `${uthmaniOutputPath}${setFileName}.json`;
    const data = { id: item.id, script: item.text_uthmani };
    try {
        fs.writeFileSync(name, JSON.stringify(data, null, 1))
        console.error(`uthmani ${item.id} done`)
    } catch (err) {
        console.error(err)
    }
});