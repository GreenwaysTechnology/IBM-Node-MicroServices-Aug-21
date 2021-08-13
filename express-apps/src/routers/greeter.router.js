const express = require('express');
//create Router Object
const greeterRouter = express.Router()

//Resource Greeter

greeterRouter.get('/list', (req, res) => {
    res.end('greeter-list')
})

greeterRouter.get('/create', (req, res) => {
    res.end('greeter-save')
})

module.exports = greeterRouter;