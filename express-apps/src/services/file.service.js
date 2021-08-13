const fs = require('fs');


class FileService {
    constructor() {

    }
    readFile(filePath, options) {

        return new Promise((resolve, reject) => {
            fs.readFile(filePath, options, (err, data) => {
                if (err) {
                    reject(err)
                }
                resolve(data);
            })
        })

    }
}

module.exports = new FileService();