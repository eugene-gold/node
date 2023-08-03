// const http = require('http')
const express = require('express')

const app = express()

app.get('/', (req, resp) => {
    resp.send('Response from express')
})

const PORT = 5000

// const server = http.createServer(app)

// server.listen(PORT, () => {
//     console.log('server started on ' + PORT)
// })

app.listen(PORT, () => {
    console.log('server started on ' + PORT)
})
