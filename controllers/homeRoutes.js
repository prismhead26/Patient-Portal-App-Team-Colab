const router = require('express').Router()
// const {  } = require('../models')

router.get('/', async (req, res) => {
    try {
        res.render('homepage')
    } catch (err) {
        res.status(500).json(err)
    }
})

router.get('/login', async (req,res) => {
    if (req.session.logged_in) {
        return res.redirect('/');
    }
    res.render('/login')
});



module.exports = router