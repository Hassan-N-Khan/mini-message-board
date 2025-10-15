const { Router } = require("express");
const { messages } = require("./indexRouter");
const newMessageRouter = Router();

newMessageRouter.get("/", (req, res) => {
  res.render("form");
});

newMessageRouter.post("/", (req, res) => {
    const { text, user } = req.body;
    messages.push({ text: text, user: user, added: new Date() });
    res.redirect("/");
});

module.exports = newMessageRouter;