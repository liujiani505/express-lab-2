const express = require("express");
const app = express();
const port = 3000;

app.get('/greeting/:name', (req, res) =>{
    res.send("What's up " + req.params.name);
});

// Tip Calculator
app.get('/tip/:total/:tipPercentage', (req, res) =>{
    const tip = req.params.total * req.params.tipPercentage/100
    res.send( `${tip}`);
});


app.listen(port, ()=>{
    console.log("Listening...");
})

