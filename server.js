var express = require('express')
var app = express()
app.get('/', (req, res) => {
    res.send("Hello world Lucas Dupere");
})

app.listen(3000);