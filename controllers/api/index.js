const router = require('express').Router()
const dashboardRoutes = require('./dashboard-routes')

router.use('/dashboard', dashboardRoutes)

module.exports = router