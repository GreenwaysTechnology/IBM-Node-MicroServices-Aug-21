const http = require('http');
const { findAllAsyncPromise } = require('./services/todo.service');

const server = http.createServer(async (req, res) => {
    // findAllAsyncPromise()
    //     .then(todos => {
    //         res.writeHead(200, {
    //             'Content-Type': 'application/json'
    //         })
    //         res.write(JSON.stringify(todos))
    //         res.end();
    //     })
    //     .catch(err => {
    //         res.writeHead(200, {
    //             'Content-Type': 'application/json'
    //         })
    //         res.write(JSON.stringify({ message: 'Todos not found' }))
    //         res.end();
    //     })

    try {
        const todos = await findAllAsyncPromise();
        res.writeHead(200, {
            'Content-Type': 'application/json'
        })
        res.write(JSON.stringify(todos))
        res.end();

    }
    catch (err) {
        res.writeHead(200, {
            'Content-Type': 'application/json'
        })
        res.write(JSON.stringify({ message: 'Todos not found' }))
        res.end();
    }

})

//start webserver
server.listen(3000, () => {
    console.log(`HTTP Server is Running`);
});

//server events
server.on('request', (req, res) => {
    console.log('New Request has come ' + new Date())
});
