const express = require("express");
const flashcardController = require("../controllers/flashcardController");

// create router for '/users' requests
const router = express.Router();

router.put("/:card_id", flashcardController.updateCard, (req, res) => {
  console.log(
    `cardsRouter.js completing PUT request to '/cards/:card_id'. req.params: ${req.params.card_id}`
  );
  console.log("req.body: ", req.body);
  res.sendStatus(200);
});

router.post("/", flashcardController.createCard, (req, res) => {
  console.log(
    `cardsRouter.js completing POST request to '/cards/'. newcard: ${res.locals.newCard}`
  );
  res.status(200).json(res.locals.newCard);
});

router.delete("/:card_id", flashcardController.deleteCard, (req, res) => {
  console.log(
    `cardsRouter.js received DELETE completing to '/cards/:card_id'. req.params: ${req.params.card_id}`
  );
  res.sendStatus(200);
});

module.exports = router;
