const express = require("express");
const flashcardController = require("../controllers/flashcardController");

// create router for '/users' requests
const router = express.Router();

router.get("/:cardset_id", flashcardController.getCards, (req, res, next) => {
  res.status(200).json(res.locals.cards);
});

module.exports = router;
