const express = require('express');
const { findAll } = require('./services/todo.service')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const fs = require('fs')
const path =require('path');



const app = express();


// create a write stream (in append mode)
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })

// setup the logger
app.use(morgan('combined', { stream: accessLogStream }))
//Register Middleware: bodyParser
//Register middlewares
app.use(bodyParser.json())


///
app.get('/', (req, res) => {
    res.end('Home')
})

app.post('/api/todos/create', (req, res) => {

    try {
        const payload = req.body;
        console.log(payload)
        res.status(201).location("/api/todos/create").json({ payload })
    }
    catch (error) {
        res.status(500).json({ message: error })
    }
});


//start server
app.listen(3000, () => {
    console.log('express server is running!!');
})



