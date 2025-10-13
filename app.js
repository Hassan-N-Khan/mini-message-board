const express = require("express");
const app = express();
const indexRouter = require("./routes/indexRouter");

const PORT = 3000;
app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`My first Express app - listening on port ${PORT}!`);
});


app.use("/", indexRouter);