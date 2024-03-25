const router = require('express').Router()
// const {  } = require('../models')

router.get('/', async (req, res) => {
    try {
        res.render('dashboard')
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router