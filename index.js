const express = require('express')
const expressHandlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const path = require('path')
const PORT = process.env.port || 5000

const app = express()
const db = require('./config/database')

// Handlebars setup
app.engine('handlebars', expressHandlebars({ defaultLayout: 'main' })) 
app.set('view engine', 'handlebars')

// Body parser
app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.static(path.join(__dirname, 'public')))

// Test DB
db.authenticate()
  .then(() => console.log('database connected!!!'))
  .catch(err => console.log('ERROR: ' + err))

// Routes
app.get('/', (req, res) => res.render('index', { layout: 'landing' }))

app.use('/gigs', require('./routes/gigs'))

app.listen(PORT, () => console.log(`server started on PORT ${PORT}`))