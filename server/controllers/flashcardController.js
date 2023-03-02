const db = require("../models/flashcardModel");

const flashcardController = {};

flashcardController.getUsers = (req, res, next) => {
  console.log("fcc.getUsers making DB query to get all users");

  // query: select all data from users table
  const querySelector = `
  SELECT * 
  FROM users;
  `;

  // make a request to DB
  db.query(querySelector, (err, result) => {
    // error handler
    if (err) {
      return next({
        log: "flashcardController.getUsers caught unknown error",
        status: 500,
        message: { err },
      });
    }

    console.log("db query result: ", result.rows);
    res.locals.users = result.rows;
    return next();
  });
};

flashcardController.getCards = (req, res, next) => {
  console.log("fcc.getCards making DB query to get all users");
  console.log("cardset_id from req.params: ", req.params.cardset_id);
  // query: select all cards from cardset_id
  const querySelector = `
  SELECT * 
  FROM cards 
  WHERE cardset_id='${req.params.cardset_id}'
  `;

  // make a request to DB
  db.query(querySelector, (err, result) => {
    // error handler
    if (err) {
      return next({
        log: "flashcardController.getCards caught unknown error",
        status: 500,
        message: { err },
      });
    }

    console.log("db query result: ", result.rows);
    res.locals.cards = result.rows;
    return next();
  });
};

flashcardController.updateCard = (req, res, next) => {
  console.log(
    `fcc.updateCard making DB query to update card_id ${req.params.card_id}`
  );

  // grab data from req.body to update card in query
  const { sidea, sideb, cardset_id } = req.body;

  // query: update card WHERE card_id === req.params.card_id
  const querySelector = `
  UPDATE cards 
  SET sidea = '${sidea}', sideb = '${sideb}'
  WHERE card_id='${req.params.card_id}'
  `;

  // make a request to DB
  db.query(querySelector, (err, result) => {
    // error handler
    if (err) {
      return next({
        log: "flashcardController.updateCard caught unknown error",
        status: 500,
        message: { err },
      });
    }

    console.log("db query result: ", result.rows);
    res.locals.cards = result.rows;
    return next();
  });
};

flashcardController.createCard = (req, res, next) => {
  console.log(`fcc.createCard making DB query to create new card: ${req.body}`);

  // grab data from req.body to create card in query
  const { sidea, sideb, cardset_id } = req.body;

  // query: create new card
  const querySelector = `
  INSERT INTO cards (sidea, sideb, cardset_id)
  VALUES ('${sidea}', '${sideb}', ${cardset_id})
  `;

  // make a request to DB
  db.query(querySelector, (err, result) => {
    // error handler
    if (err) {
      return next({
        log: "flashcardController.createCard caught unknown error",
        status: 500,
        message: { err },
      });
    }

    return next();
  });
};

flashcardController.deleteCard = (req, res, next) => {
  console.log(
    `fcc.deleteCard making DB query to delete card_id: ${req.params.card_id}`
  );

  // query: delete card matching card_id
  const querySelector = `
  DELETE FROM cards
  WHERE card_id=${req.params.card_id}
  `;

  // make a request to DB
  db.query(querySelector, (err, result) => {
    // error handler
    if (err) {
      return next({
        log: "flashcardController.deleteCard caught unknown error",
        status: 500,
        message: { err },
      });
    }

    return next();
  });
};

// export flashcardController
module.exports = flashcardController;
