const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv').config()
const morgan = require('morgan')
const connectDB = require('./config/db')
const blog=require('./routes/blog')

connectDB()
const app = express()
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use('/',blog)

const port = process.env.PORT || 5000
app.listen(port, () => {
    try {
        console.log(`Database is listening to ${port}`)

    } catch (error) {
        console.log(error);
    }

})