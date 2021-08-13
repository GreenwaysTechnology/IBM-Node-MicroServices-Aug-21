const http = require('http');
const TODOS = require('./mock-data/todo');

//create server and handle client request

const server = http.createServer((req, res) => {

    res.writeHead(200, {
        'Content-Type': 'application/json'
    })
    res.write(JSON.stringify(TODOS));
    res.end();
    //attach response events
    res.on('close', () => {
        console.log('response closed')
    })
    res.on('finish', () => console.log('response finish event is called'))

})

//start webserver
server.listen(3000, () => {
    console.log(`HTTP Server is Running`);
});

//server events
server.on('request', (req, res) => {
    console.log('New Request has come ' + new Date())
});