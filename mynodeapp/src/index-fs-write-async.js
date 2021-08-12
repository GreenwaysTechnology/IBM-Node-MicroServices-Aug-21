const fs = require('fs');

const filePath = './src/assets/infowrite.txt';
const options = {
    encoding: 'utf-8'
}
const data = 'Hello,How are you';

fs.writeFile(filePath, data, options, err => {
    if (err) throw err;
    console.log(`data has been written into ${filePath}`)
});