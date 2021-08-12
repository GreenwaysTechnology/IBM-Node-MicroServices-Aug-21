const { readFile } = require('./services/file.service');
const path = require('path');


async function main() {
    const filePath = path.join(__dirname, 'assets/info.txt')
    const options = {
        encoding: 'utf-8'
    }
    // fileService.readFile(filePath, options)
    //     .then(res => console.log(res))
    //     .catch(err => console.log(err))

    try {
        const data = await readFile(filePath, options);
        console.log(data);
    }
    catch (err) {
        console.log(err)
    }
}
main();