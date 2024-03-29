const path = require("path");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
const routes = require("./controllers");
const helpers = require('./utils/helpers');

const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const app = express();
const PORT = process.env.PORT || 3123;

// if you run behind a proxy
// app.set('trust proxy', 1)

// configure session middleware
const hbs = exphbs.create({ helpers });
const sess = {
  secret: process.env.SESSION_SECRET,
  cookie: {
    maxAge: 1000 * 60 * 30, // session maxAge in milliseconds
    httpOnly: true, // if true: prevents client side JS from reading the cookie
    secure: false, // if true: only transmit cookie over https
    sameSite: "strict",
  },
  resave: false, // if session is not updated, don't override
  saveUninitialized: true, //
  store: new SequelizeStore({
    db: sequelize,
  }),
};

// use session middleware
app.use(session(sess));

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () =>
    console.log(`Patient Portal Listening on port http://localhost:${PORT}`)
  );
});
