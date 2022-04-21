const fs = require('fs');
const surahMeta = require('./data/surah-meta.json');
const meta = require('./data/meta.json');

// const data = meta.map((item) => {
//     const surah = surahMeta.find((surah) => surah.id == (item.verse_key.split(':')[0]));
//     return {
//         id: item.id,
//         surah_number: surah.id,
//         verse_number: item.verse_number,
//         juz_number: item.juz_number,
//         page_number: item.page_number,
//         verse_count: surah.verse_count,
//         surah_name: surah.name_simple,
//         translated_name: surah.translated_name.name,
//         first_verse: item.verse_key.split(':')[1] === '1' ? true : false,
//         bismillah_pre: surah.bismillah_pre,
//         revelation_place: surah.revelation_place,
//         revelation_order: surah.revelation_order,
//         sajdah: item.sajdah_number ? true : false,
//     };
// });

const verse_meta = meta.map((item) => {
        return {
        id: item.id,
        surah_number: +item.verse_key.split(':')[0],
        verse_number: item.verse_number,
        juz_number: item.juz_number,
        page_number: item.page_number,
        first_verse: item.verse_key.split(':')[1] === '1' ? true : false,
        sajdah: item.sajdah_number ? true : false,
    };
});
try {
    fs.writeFileSync(`./data/meta/verse-meta.json`, JSON.stringify(verse_meta, null, 1))
    console.error('verse_meta written successfully')
  } catch (err) {
    console.error(err)
}

const surah_meta = surahMeta.map((item) => {
    return {
        id: item.id,
        surah_name: item.name_simple,
        name_arabic: item.name_arabic,
        translated_name: item.translated_name.name,
        verses_count: item.verses_count,
        bismillah_pre: item.bismillah_pre,
        revelation_place: item.revelation_place,
        revelation_order: item.revelation_order,
};
});
try {
fs.writeFileSync(`./data/meta/surah-meta.json`, JSON.stringify(surah_meta, null, 1))
console.error('surah_meta written successfully')
} catch (err) {
console.error(err)
}
