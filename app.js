require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const mongoose = require('mongoose')
const apiRoutes = require('./routes')

const app = express()

const PORT = 5000

mongoose.connect('mongodb://localhost:27017/Notes')
    .then(() => console.log('Connected to Database!'))
    .catch((err) => console.error('Error', err))

app.use(cors())
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use('/api', apiRoutes)

app.use((err, req, res, next) => {
    console.log(err)
    return res.status(err.statusCode).json({ message: err.message })
})

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
