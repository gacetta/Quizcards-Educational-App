const express = require("express");
const flashcardController = require("../controllers/flashcardController");

// create router for '/users' requests
const router = express.Router();

router.get("/:cardset_id", flashcardController.getCards, (req, res, next) => {
  console.log(
    `cardsetRouter.js completing GET request to '/cards/:cardset_id'. req.params: ${req.params.cardset_id}`
  );
  res.status(200).json(res.locals.cards);
});

// router.put("/:cardset_id", flashcardController.updateCardset, (req, res) => {
//   console.log(
//     `cardsetRouter.js completing PUT request to '/cards/:card_id'. req.params: ${req.params.cardset_id}`
//   );
//   res.sendStatus(200);
// });

// router.post("/", flashcardController.createCardset, (req, res) => {
//   console.log(
//     `cardsetRouter.js completing POST request to '/cards/'. req.body: ${req.body}`
//   );
//   res.sendStatus(200);
// });

// router.delete("/:card_id", flashcardController.deleteCardset, (req, res) => {
//   console.log(
//     `cardsetRouter.js received DELETE completing to '/cards/:card_id'. req.params: ${req.params.cardset_id}`
//   );
//   res.sendStatus(200);
// });

module.exports = router;
