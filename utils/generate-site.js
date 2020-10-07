const fs = require('fs');

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        // added this next line
        fs.writeFile('./dist/index.html', fileContent, err => {
            // if theres an error, reject the Promise and send the error to the Promise'ss .catch method
            if (err) {
                reject(err);
                return;
            }
            // if everything went well, resolve the Promise into the .then method
            resolve({
                ok: true,
                message: 'File created!'
            });
            // added next brackets
        });
    });
};

const copyFile = () => {
    return new Promise((resolve, reject) => {
        fs.copyFile('./src/style.css', './dist/style.css', err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'File copied!'
            });
        });
    });
};

module.exports = { writeFile, copyFile };
