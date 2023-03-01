const db = require("../models/flashcardModel");

const flashcardController = {};

flashcardController.getUsers = (req, res, next) => {
  console.log("fcc.getUsers making DB query to get all users");

  // query: select all data from users table
  const querySelector = `
  SELECT * FROM users;
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

// export flashcardController
module.exports = flashcardController;
