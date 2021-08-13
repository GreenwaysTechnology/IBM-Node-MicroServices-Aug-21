const express = require('express');
const greeterRouter = require('./routers/greeter.router');
const todoRouter = require('./routers/todo.router')

const app = express();

//register routers with app 

app.use('/api/greeter', greeterRouter);
app.use('/api/todos', todoRouter);



app.get('/', (req, res) => {
    res.end('Home')
})

app.listen(3000, () => {
    console.log('express server is running!!');
})



