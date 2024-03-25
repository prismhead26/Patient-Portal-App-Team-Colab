const path = require('path')
const express = require('express')
const exphbs = require('express-handlebars')
const routes = require('./controllers')

const sequelize = require('./config/connection')

const app = express()
const PORT = process.env.PORT || 1234

// TODO add helpers
const hbs = exphbs.create({})

app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))

app.use(routes)


sequelize.sync({ force: true }).then(() => {
    app.listen(PORT, () => console.log(
        `Patient Portal Listening on port ${PORT}...`
    ))
})