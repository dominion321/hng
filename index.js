const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req,res) => {
    res.send({ "slackUsername": "Dominion", 
    "backend": true, 
    "age": 21, 
    "bio": "I am an Associate Google Cloud Engineering in the making and an aspiring software engineer. " });
})


app.listen(port,() => {
    console.log(`Listening at port ${port}`)
})