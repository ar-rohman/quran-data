const fs = require('fs');
const path = require( 'path' );
const surahMeta = require('./data/meta/surah-meta.json');
const verseMeta = require('./data/meta/verse-meta.json');

const getJuzList = () => {
    const jusNumber = Array.from({ length: 30 }, (_, i) => i + 1);
    const juzList = jusNumber.map((juz) => {
        return verseMeta.find((verse) => verse.juz_number === juz);
    });

    const juzMeta = juzList.map((juz) => ({
        ...juz,
        ...surahMeta.find((surah) => surah.id === juz.surah_number),
    }));

    const result = juzMeta.map((juz) => {
        return {
            id: juz.juz_number,
            name: `Juz ${juz.juz_number}`,
            from: `${juz.surah_name} ayat ${juz.verse_number}`,
        };
    });
    // return result;
    try {
        fs.writeFileSync('./data/meta/juz-list.json', JSON.stringify(result))
        console.log('juz-list file written successfully')
    } catch (err) {
        console.error(err)
    }
};

const getPageList = () => {
    const pageNumber = Array.from({ length: 604 }, (_, i) => i + 1);
    const pageList = pageNumber.map((page) => {
        return verseMeta.find((verse) => verse.page_number === page);
    });

    const pageMeta = pageList.map((page) => ({
        ...page,
        ...surahMeta.find((surah) => surah.id === page.surah_number),
    }));

    const result = pageMeta.map((page) => {
        return {
            id: page.page_number,
            name: `Halaman ${page.page_number}`,
            from: `${page.surah_name} ayat ${page.verse_number}`,
        };
    });
    // return result;
    try {
        fs.writeFileSync('./data/meta/page-list.json', JSON.stringify(result))
        console.log('page-list file written successfully')
    } catch (err) {
        console.error(err)
    }
};

getJuzList();
getPageList();