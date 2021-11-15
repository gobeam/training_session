require("dotenv").config();
require("./config/database");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const apiRoute = require("./routes/api");
const webRoute = require("./routes/web");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const flash = require("connect-flash");
// const logMiddleware = require("./middleware/logger");

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

app.set("view engine", "ejs");

app.use(cookieParser());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    name: "session",
    resave: true,
    saveUninitialized: true,
    // cookie: { secure: true },
  })
);
app.use(flash());

app.use((req, res, next) => {
  res.locals.alert = req.flash("alert")[0];
  res.locals.errors = req.flash("errors")[0] || {};
  res.locals.oldInput = req.flash("oldInput")[0] || {};
  res.locals.flash = req.flash();
  next();
});

//middleware
// app.use(logMiddleware);

app.use("/", webRoute);
app.use("/api", apiRoute);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
