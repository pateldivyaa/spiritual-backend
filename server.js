const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

const mongoose = require('./db') 

// CORS configuration
app.use(cors({
  origin: ['https://your-vercel-admin-url.vercel.app'],
  credentials: true
}));


app.use(express.json()) 
app.use(express.urlencoded({ extended: true }))  
const router = require('./Routes/router')
app.use('/', router)

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))