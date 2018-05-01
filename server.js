var express = require('express')
var app = express()
app.get('/', (req, res) => {
    res.send("Hello world Lucas Dupere bienvue");
})

app.listen(3000);