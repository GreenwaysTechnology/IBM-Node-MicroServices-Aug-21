const express = require('express');
//create Router Object
const todoRouter = express.Router()


//Resource todo
todoRouter.get('/list',(req,res)=>{
    res.end('todos list')
})
todoRouter.get('/create',(req,res)=>{
    res.end('todos save')
})
module.exports =todoRouter;