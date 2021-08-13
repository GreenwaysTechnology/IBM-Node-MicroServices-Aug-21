const express = require('express');
const { findAll } = require('./services/todo.service')
//create Application Object
const app = express();

//Routing : request Handling

app.get('/', (req, res) => {
    res.end('Home')
})

app.get('/api/todos', async (req, res) => {
    try {
        const todos = await findAll();
        res.json(todos);
    }
    catch (err) {
        res.json({ err: err })
    }

});


//start server
app.listen(3000, () => {
    console.log('express server is running!!');
})



