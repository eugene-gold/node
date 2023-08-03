const express = require('express')
const router = require('./routes')

const app = express()
const PORT = 5000

app.use(router)

app.listen(PORT, () => {
    console.log('server started on ' + PORT)
})
