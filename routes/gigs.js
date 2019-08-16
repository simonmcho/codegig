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

  const { title, technologies, budget, description, contact_email } = req.body
  const errors = []

  if (!title) {
    errors.push({ text: 'Please add a title'})
  }
  if (!technologies) {
    errors.push({ text: 'Please add technologies'})
  }
  if (!description) {
    errors.push({ text: 'Please add a description'})
  }
  if (!contact_email) {
    errors.push({ text: 'Please add a contact email'})
  }

  if (errors.length > 0) {
    res.render('add', {
      errors,
      title, 
      technologies, 
      budget, 
      description, 
      contact_email
    })
  } else {
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
  }

})

module.exports = router