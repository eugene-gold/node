const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send('Hello World 1300')
})

app.listen(3000)
