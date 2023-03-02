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
  WHERE cardset_id='${1}'
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

// export flashcardController
module.exports = flashcardController;
