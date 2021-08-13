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
app.post('/api/todos/create', (req, res) => {

    let todo = '';
    req.on('data', chunk => {
        todo += chunk

    })

    req.on('end', async () => {
        try {
            console.log(todo);
            //how to send status code and response
            res.status(201).location("/api/todos/create").json({ message: 'Todo Created'})

        }
        catch (error) {
            res.status(404).json({ message: error })
        }
    });

});


//start server
app.listen(3000, () => {
    console.log('express server is running!!');
})



