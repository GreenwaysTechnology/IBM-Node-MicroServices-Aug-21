const fs = require('fs');
const path = require('path');

//read
const inputfileName = path.join(__dirname, 'assets/big.file');
//write
const outputFileName = path.join(__dirname, 'assets/bigcopy.file');

const config = {
    encoding: 'UTF-8'
}

const inputStream = fs.createReadStream(inputfileName, config);
const outputStream = fs.createWriteStream(outputFileName, config);

//Register data event.
inputStream.on('data', function (chunk) {
    console.log(`Received ${chunk.length} bytes of data.`);
    outputStream.write(chunk);
});


//end event
inputStream.on('end', function () {
    console.log('There will be no more data to read!');
    outputStream.close();
})

//error event: for error handling
inputStream.on('error', function (err) {
    console.log(`Some thing went wrong! ${err}`)
});

outputStream.on('close', function () {
    console.log(`File write operation is completed`);
});