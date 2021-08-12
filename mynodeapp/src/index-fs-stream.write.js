const fs = require('fs');
const path = require('path');

const fileName = path.join(__dirname, 'assets/grains.txt');

const config = {
    encoding: 'utf8',
    flag: 'w'
};
const outputStream = fs.createWriteStream(fileName, config);


const grains = ['wheat', 'rice', 'oats'];

grains.forEach(grain => {
    outputStream.write(grain + " ");
    console.log("Wrote: %s", grain);
});

outputStream.close();

outputStream.on('close', function () {
    console.log('file has been closed ')
})