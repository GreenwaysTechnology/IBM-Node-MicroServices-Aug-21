
const fs = require('fs');
const path = require('path');

const inputfileName = path.join(__dirname, 'assets/big.file');
//write
const outputFileName = path.join(__dirname, 'assets/bigcopy.file');

const config = {
      encoding: 'UTF-8'
}

//Back pressure handling
const readerStream = fs.createReadStream(inputfileName, config);
const writeStr = fs.createWriteStream(outputFileName, config);

//backPressure streams
//pipe method is simplest method which wraps resume,pasuse,drain 
readerStream.pipe(writeStr);