const fs = require('fs');
const path = require('path');

const inputfileName = path.join(__dirname, 'assets/big.file');
const outputfileName = path.join(__dirname, 'assets/bigcopy.file');

const config = {
    encoding: 'UTF-8'
}

//Back pressure handling
const readerStream = fs.createReadStream(inputfileName, config);
const writeStr = fs.createWriteStream(outputfileName, config);

readerStream.on('data', function (chunk) {
    console.log(`Received ${chunk.length} bytes of data.`);
    let buffer_good = writeStr.write(chunk);
    if (!buffer_good) {
        console.log('stream paused')
        readerStream.pause()
    }
});

writeStr.on('drain', function () {
    console.log('buffer drained!');
    readerStream.resume();
});
readerStream.on('end', function () {
    //console.log(data);
});

readerStream.on('error', function (err) {
    console.log(err.stack);
});