const { Pool } = require("pg");
const dotenv = require("dotenv");

dotenv.config();

// create new pool using connection string above
const pool = new Pool({
  connectionString: process.env.PG_URI,
});

// Schema for flashcards is available here: https://drawsql.app/teams/gacetta/diagrams/flashcards
// will upload image into this repo when it is solidified

// export an object that contains a property called query which is a function
// It returns the result of pool.query() after logging the query to the SERVER console.
// THIS IS THE ACCESS POINT TO THE DATABASE
module.exports = {
  query: (text, params, callback) => {
    console.log("executed query: ", text);
    return pool.query(text, params, callback);
  },
};
