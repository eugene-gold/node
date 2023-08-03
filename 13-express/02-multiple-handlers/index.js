const express = require('express')

const app = express()
const PORT = 5000

const firstHandler = (req, resp, next) => {
    console.log('first handler')
    next()
}

const secondHandler = (req, resp) => {
    console.log('second handler')
    resp.send('Response from express')
}

app.get('/', firstHandler, secondHandler)

app.listen(PORT, () => {
    console.log('server started on ' + PORT)
})
