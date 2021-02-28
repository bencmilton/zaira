const fs = require('fs');
const path = require('path');

const FILE = 'the_work_1';

function renameFile(file) {
    const [baseName, cropInfo] = file.split('-');
    const infoParts = cropInfo.split(',');
    const [, ar] = infoParts[0].split('ar');
    const aspectRatio = ar ? `ar${ar}` : 'c_scale';

    return `${baseName}-${aspectRatio},${
        infoParts[infoParts.length - 1]
    }`;
}

function main() {
    const PATH_TO = path.resolve('..', path.join('public', FILE));
    fs.readdir(PATH_TO, (err, filenames) => {
        if (err) {
            console.log('READ ERROR', err);
            return;
        }
        filenames.forEach(filename => {
            if (filename === `${FILE}-1220w.png`) {
                console.log('EXACT MATCH ', filename);
            } else if (filename.includes(FILE)) {
                console.log('filename ', filename);
                fs.rename(
                    path.resolve(PATH_TO, filename),
                    path.resolve(PATH_TO, renameFile(filename)),
                    err => {
                        if (err) console.log('RENAME ERROR: ' + err);
                    }
                );
            }
        });
    });
}

main();
