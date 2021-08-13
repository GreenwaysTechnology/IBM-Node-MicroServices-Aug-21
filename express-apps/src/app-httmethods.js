const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.end('Home')
})

//end points
app.get('/api/greet',(req,res)=>{
    res.end('greet')
})

app.get('/api/hello',(req,res)=>{
    res.end('hello')
})
app.get('/api/hai',(req,res)=>{
    res.end('hai')
})

app.post('/api/greet',(req,res)=>{
    res.end('greet -post')
})

app.put('/api/greet',(req,res)=>{
    res.end('greet -put')
})

app.delete('/api/greet',(req,res)=>{
    res.end('greet -delete')
})
//start server
app.listen(3000, () => {
    console.log('express server is running!!');
})



