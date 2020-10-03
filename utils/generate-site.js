const fs = require('fs');

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
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
    });
};

const copyFile = () => {
    return new Promise((resolve, reject) => {
        if (err) {
            reject(err);
            return;
        }
        resolve({
            ok: true,
            message: 'File copied!'
        });
    });
};

module.exports = { writeFile, copyFile };