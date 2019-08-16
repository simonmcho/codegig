const express = require('express')
const router = express.Router()
const db = require('../config/database')
const Gig = require('../models/Gig')

// Get gig list
router.get('/', (req, res) => 
  Gig.findAll()
    .then(gigs => {
      res.render('gigs', {
        gigs
      })
    })
    .catch(err => console.log(`ERROR AT /gig: ${err}`))
)

// Display add gig form
router.get('/add', (req, res) => res.render('add'))

// Add gig
router.post('/add', (req, res) => {
  const data = {
    title: 'Simple wordpress site',
    technologies: 'wordpress',
    budget: '$500',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,',
    contact_email: 'wordpressdesigner123@gmail.com'
  }

  const { title, technologies, budget, description, contact_email } = data

  // Insert into table
  Gig.create({
    title, 
    technologies, 
    budget, 
    description, 
    contact_email
  })
    .then(gig => {
      res.redirect('/gigs')
    })
    .catch(err => console.log(err))

})

module.exports = router