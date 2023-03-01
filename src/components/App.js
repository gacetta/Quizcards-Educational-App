import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomePage, EditCardPage, EditCardsetPage, QuizPage } from "../pages";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const App = () => {
  // STATE
  const [currentCardset, setCurrentCardset] = useState({
    name: "national capitals",
    cardset_id: 1,
  });

  const [cardArr, setCardArr] = useState([
    {
      card_id: 1,
      sideA: "united republic of tanzania",
      sideB: "dodoma",
    },
    {
      card_id: 2,
      sideA: "france",
      sideB: "paris",
    },
    {
      card_id: 3,
      sideA: "greenland",
      sideB: "nuuk",
    },
    {
      card_id: 4,
      sideA: "greenland",
      sideB: "nuuk",
    },
  ]);

  const [currentCard, setCurrentCard] = useState(cardArr[0]);

  function getNewCard() {
    if (cardArr.length === 1) return;
    let newCard = currentCard;
    // get new random card from cardArr (new card)
    while (newCard === currentCard) {
      const randomCardIndex = Math.floor(Math.random() * cardArr.length);
      newCard = cardArr[randomCardIndex];
    }
    // set currentCard to that random card
    setCurrentCard(newCard);
  }

  function handleCorrectGuess() {
    // remove currentCard from cardArr
    // newArr = cardArr.filter by card_id
    const newArr = cardArr.filter((card) => {
      return card.card_id !== currentCard.card_id;
    });
    // update cardArr
    setCardArr(newArr);
    return getNewCard();
  }

  function handleIncorrectGuess() {
    return getNewCard();
  }

  return (
    <Router>
      <Header currentCard={currentCard} currentCardset={currentCardset} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/quiz"
          element={
            <QuizPage
              currentCard={currentCard}
              currentCardset={currentCardset}
              handleIncorrectGuess={handleIncorrectGuess}
              handleCorrectGuess={handleCorrectGuess}
            />
          }
        />
        <Route
          path={`/editcard/:${currentCard.card_id}`}
          element={
            <EditCardPage
              currentCard={currentCard}
              currentCardset={currentCardset}
            />
          }
        />
        <Route
          path={`/editcardset/:${currentCardset.cardset_id}`}
          element={<EditCardsetPage currentCardset={currentCardset} />}
        />
      </Routes>
      <Footer />
    </Router>
  );
};
