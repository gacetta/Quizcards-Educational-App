const { Pool } = require('pg');

// elephantSQL URI for flashcard DB
const PG_URI = 'postgres://jbhuadhy:i-6ndhl1wn_CbHBHIQsBl9zP3_GC-wiZ@mahmud.db.elephantsql.com/jbhuadhy'

// create new pool using connection string above
const pool = new Pool({
  connectionString: PG_URI
})

// Schema for flashcards is available here: https://drawsql.app/teams/gacetta/diagrams/flashcards
// will upload image into this repo when it is solidified
 
// export an object that contains a property called query which is a function
// It returns the result of pool.query() after logging the query to the SERVER console.  
// THIS IS THE ACCESS POINT TO THE DATABASE
module.exports = {
  query: (text, params, callback) => {
    console.log('executed query: ', text);
    return pool.query(text, params, callback);
  }
};