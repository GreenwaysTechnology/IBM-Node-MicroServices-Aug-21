const fs = require('fs');

const filePath = './src/assets/info.txt';
const options = {
    encoding: 'UTF-8'
}

function block(message) {
    console.log(message)
}

block('start')
//blocking api
const data = fs.readFileSync(filePath, options)
console.log(data);
block('end')
