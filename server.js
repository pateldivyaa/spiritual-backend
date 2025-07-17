const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
dotenv.config()

const app = express()
const port = process.env.PORT || 3000

require('./db') // connects to MongoDB

// CORS
app.use(cors({
  origin: [
    'https://v0-spiritual-multi-deity-blog.vercel.app',
    'https://v0-spiritual-admin-panel.vercel.app'
  ],
  credentials: true
}));

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const router = require('./Routes/router')
app.use('/', router)

app.get('/', (req, res) => res.send('Backend Working 🔥'))

app.listen(port, () => console.log(`Server running on port ${port}`))
