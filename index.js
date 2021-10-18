require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const route = require("./routes");

app.use(bodyParser.json());

//middleware
app.use((req, res, next) => {
  console.log("This is middleware! Body: ", req.body);
  // res.json({message: 'returned from middleware!'})
  next();
});

app.use("/", route);


//crud

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
