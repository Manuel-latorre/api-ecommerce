const mongoose = require("mongoose")
const express = require('express')
const cors = require("cors");

require("dotenv").config();
const productsRoutes = require('./routes/products')

const app = express()
const port = process.env.PORT || 8080

//middleware
app.use(cors())
app.use(express.json())
app.use('/api', productsRoutes)


app.get('/', (req, res) => { res.send('Welcome Api')})





mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log('Connected to database'))
.catch((error) => console.error(error))

app.listen(port, () => console.log('server listening on port', port))