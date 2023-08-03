import express from 'express'
import morgan from 'morgan'
// import qs from 'querystring'

const app = express()

app.use(morgan('tiny'))

app.use(express.json())

app.use(express.urlencoded({ extended: true }))

// app.use((req, res, next) => {
//     console.log(req.headers['content-type'])

//     if (req.headers['content-type'] === 'application/x-www-form-urlencoded') {
//         let data = ''
//         req.on('data', (chunk) => (data += chunk.toString()))
//         req.on('end', () => {
//             const parsedForm = qs.parse(data)
//             req.body = parsedForm
//             // const parsedJS = JSON.parse(data)
//             // req.body = parsedJS
//             next()
//         })
//     } else {
//         next()
//     }
//     // let data = ''
//     // req.on('data', (chunk) => (data += chunk))
//     // req.on('end', () => {
//     //     const parsedJS = JSON.parse(data)
//     //     req.body = parsedJS
//     //     next()
//     // })
// })

app.use((req, res) => {
    console.log(req.body)
    return res.send('this is express')
})

app.listen(5000, () => console.log('server starts at 5000'))
