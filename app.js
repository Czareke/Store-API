const express= require('express')
require('dotenv').config()
const bodyParser= require('body-parser')
const notFound = require('./Middlewares/not-found')
const globalHandlingMiddleware=require('./Middlewares/errorMiddleware')
const productRouter=require('./Routes/productRoutes')

const app= express()

//middlewares
app.use(express.json())
app.use(bodyParser.json())

//routes

app.get('/', (req, res) => {
    res.send("<h1>Wiki Api</h1><<a href='/api-docs'>Documentation</a>");
    });
app.use('/api/v1/products',productRouter)

// app.all('*',notFound)

app.use(globalHandlingMiddleware)
module.exports=app