const express = require("express");
const app = express();
const port = 3000;

app.get('/greeting/:name', (req, res) =>{
    res.send("What's up " + req.params.name);
});

// Create a tip Calculator
app.get('/tip/:total/:tipPercentage', (req, res) =>{
    const tip = req.params.total * req.params.tipPercentage/100
    res.send( `${tip}`);
});

// Magic 8 Ball
app.get('/magic/:question', (req, res) =>{
    const responses = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"];  
    res.send(`
        <h1>${responses[Math.floor(Math.random() * responses.length)]}</h1>
    `)
})



app.listen(port, ()=>{
    console.log("Listening...");
})

