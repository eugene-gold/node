import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
const app = express()

app.use(morgan('tiny'))

app.use(express.json())

app.use(express.urlencoded({ extended: true }))
//enable all cors requests
app.use(cors())

app.use((req, res) => {
    const persData = {
        name: 'Name',
        isExist: true,
    }
    console.log(req.body)
    return res.json(persData)
})

app.listen(5000, () => console.log('server starts at 5000'))
