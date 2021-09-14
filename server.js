const express = require("express");
const app = express();
const port = 3000;

app.get('/greeting/:name', (req, res) =>{
    res.send("What's up " + req.params.name )
})

app.listen(port, ()=>{
    console.log("Listening...")
})