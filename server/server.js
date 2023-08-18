const path = require("path");
const express = require("express");
const userRouter = require("./routes/userRouter");
const cardsRouter = require("./routes/cardsRouter");
const cardsetsRouter = require("./routes/cardsetsRouter");
const flashcardController = require("./controllers/flashcardController");
const cors = require("cors");

// setup app and port
const app = express();
const PORT = process.env.PORT || 3000;

// handle parsing request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// enable ALL CORS requests
app.use(cors());

// handle requests for static files (bundle.js)
app.use("/build", express.static(path.resolve(__dirname, "../build")));

// define route handlers
app.use("/user", (req, res, next) => {
  userRouter(req, res, next);
});

app.use("/cards", (req, res, next) => {
  cardsRouter(req, res, next);
});

app.use("/cardsets", (req, res, next) => {
  cardsetsRouter(req, res, next);
});

app.get("/", (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, "../index.html"));
});

// define catch-all route handler for requests to an unknown route
app.use((req, res) => res.status(404).send("No page found at that location"));

// global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: "Express error handler caught unknown middleware error",
    status: 500,
    message: { err: "An error occurred" },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

// start server
app.listen(PORT, () => console.log(`Server listening on port ${PORT}...`));
