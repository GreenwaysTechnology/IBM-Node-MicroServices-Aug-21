const express = require('express');
//console.log(express)

//create Application Object
const app = express();

//Routing : request Handling

app.get('/', (req, res) => {
    res.end('Home')
})

//start server
app.listen(3000, () => {
    console.log('express server is running!!');
})



