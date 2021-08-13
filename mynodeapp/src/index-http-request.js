const http = require('http');

//create server and handle client request

const server = http.createServer((req, res) => {

    let data = '';
    req.on('data', chunk => {
        data += chunk
        console.log(data);
    });
    req.on('end',()=>{
        res.write(data)
        res.end();
    })
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