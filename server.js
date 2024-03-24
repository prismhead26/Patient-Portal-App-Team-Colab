
const express = require('express')

const sequelize = require('./config/connection')

const app = express()
const PORT = process.env.PORT || 1234


sequelize.sync({ force: true }).then(() => {
    app.listen(PORT, () => console.log(
        `Patient Portal Listening on port ${PORT}...`
    ))
})