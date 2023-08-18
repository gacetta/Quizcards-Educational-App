const express = require("express");
const flashcardController = require("../controllers/flashcardController");

// create router for '/users' requests
const router = express.Router();

router.get("/", flashcardController.getUsers, (req, res) => {
  return res.status(200).json(res.locals.users);
});

module.exports = router;
