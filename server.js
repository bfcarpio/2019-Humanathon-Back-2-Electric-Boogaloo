// server
const express = require("express");
const app = express();
const router = require("./routes");

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use("/", router);

const port = 8080;
app.listen(process.env.PORT || port, () => {
  console.log(`Serving on port ${port}`);
});

module.exports = app;
