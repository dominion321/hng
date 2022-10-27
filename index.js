const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3000;

app.use(cors());
app.get('/', (req,res) => {
    res.status(200);
    res.send({ "slackUsername": "Dominion", 
    "backend": true, 
    "age": 21, 
    "bio": "I am an Associate Google Cloud Engineering in the making and an aspiring software engineer. " 
    });
    
})


app.listen(port,() => {
    console.log(`Listening at port ${port}`)
})

module.exports = app;