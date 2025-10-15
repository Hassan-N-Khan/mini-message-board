const express = require("express");
const app = express();
const path = require("node:path");
const indexRouter = require("./routes/indexRouter");
const newMessageRouter = require("./routes/new");

app.use(express.urlencoded({ extended: true }));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const styleSheets = path.join(__dirname, "styles");
app.use(express.static(styleSheets));


//routes
app.use("/", indexRouter);
app.use("/new", newMessageRouter);

const PORT = 3000;
app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`My first Express app - listening on port ${PORT}!`);
});
