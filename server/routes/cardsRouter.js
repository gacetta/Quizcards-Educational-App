const express = require("express");
const flashcardController = require("../controllers/flashcardController");

// create router for '/users' requests
const router = express.Router();

router.put("/:card_id", flashcardController.updateCard, (req, res) => {
  res.sendStatus(200);
});

router.post("/", flashcardController.createCard, (req, res) => {
  res.status(200).json(res.locals.newCard);
});

router.delete("/:card_id", flashcardController.deleteCard, (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
