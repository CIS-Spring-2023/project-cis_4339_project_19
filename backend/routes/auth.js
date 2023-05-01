const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt') // for hashing passwords

const org = process.env.ORG

// importing data model schemas
const { auth } = require('../models/models')

// Routes for the auth collection
// GET auth
router.post('/userlogin', (req, res) => {
    auth.findOne({ passPhrase: req.body.passPhrase }, (error, auth) => {
        if (req.body.passPhrase) {
            return res.status(200).json({
                success: true
            })
        } else {
            return res.status(404).json({
                success: false
            })
        }
    })
})        
module.exports = router