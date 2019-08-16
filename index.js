const express = require('express')
const expressHandlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const path = require('path')
const PORT = process.env.port || 5000

const app = express()
const db = require('./config/database')

// Test DB
db.authenticate()
  .then(() => console.log('database connected!!!'))
  .catch(err => console.log('ERROR: ' + err))

app.get('/', (req, res) => res.send('inDEX!'))

app.use('/gigs', require('./routes/gigs'))



app.listen(PORT, () => console.log(`server started on PORT ${PORT}`))