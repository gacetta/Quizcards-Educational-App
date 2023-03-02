import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomePage, EditCardPage, EditCardsetPage, QuizPage } from "../pages";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const App = () => {
  //------------------//
  // STATE            //
  //------------------//
  const [cardset_id, setCardset_id] = useState(1);
  const [cardsetName, setCardsetName] = useState("national capitals");

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
      sideA: "spain",
      sideB: "madrid",
    },
  ]);

  // initialize card with random card
  const {
    sideA: newSideA,
    sideB: newSideB,
    card_id: newCard_id,
  } = cardArr[Math.floor(Math.random() * cardArr.length)];

  const [sideA, setSideA] = useState(newSideA);
  const [sideB, setSideB] = useState(newSideB);
  const [card_id, setCard_id] = useState(newCard_id);

  //------------------//
  // HANDLERS         //
  //------------------//
  function getNewCard() {
    if (cardArr.length <= 1) return;
    let newCard;
    let newCard_id = card_id;
    // get new random card from cardArr (new card)
    while (newCard_id === card_id) {
      const randomCardIndex = Math.floor(Math.random() * cardArr.length);
      newCard = cardArr[randomCardIndex];
      newCard_id = newCard.card_id;
    }
    // setCurrentCard(newCard);
    setSideA(newCard.sideA);
    setSideB(newCard.sideB);
    setCard_id(newCard.card_id);
  }

  function handleCorrectGuess() {
    // remove currentCard from cardArr
    const newArr = cardArr.filter((card) => {
      return card.card_id !== card_id;
    });
    setCardArr(newArr);
    return getNewCard();
  }

  function handleIncorrectGuess() {
    return getNewCard();
  }

  function onChangeHandlerSideA(e) {
    setSideA(e.target.value);
    console.log(sideA);
  }
  function onChangeHandlerSideB(e) {
    setSideB(e.target.value);
    console.log(sideB);
  }

  function onClickHandlerSaveCard() {
    // create card object with sideA, sideB and cardID
    const newCard = { sideA, sideB, card_id };
    console.log("new card: ", newCard);

    // if cardID exists
    if (card_id) {
      // DB Update record
      // remove matching cardID from cardARR
    }
    // else   ******HOW DO WE DO THIS?*****
    else {
      // DB CREATE record
    }
  }

  return (
    <Router>
      <Header card_id={card_id} cardset_id={cardset_id} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/quiz"
          element={
            <QuizPage
              sideA={sideA}
              sideB={sideB}
              card_id={card_id}
              cardsetName={cardsetName}
              handleIncorrectGuess={handleIncorrectGuess}
              handleCorrectGuess={handleCorrectGuess}
            />
          }
        />
        <Route
          path={`/cards/:${card_id}`}
          element={
            <EditCardPage
              sideA={sideA}
              sideB={sideB}
              card_id={card_id}
              onChangeHandlerSideA={onChangeHandlerSideA}
              onChangeHandlerSideB={onChangeHandlerSideB}
              onClickHandlerSaveCard={onClickHandlerSaveCard}
            />
          }
        />
        <Route
          path={`/cardsets/:${cardset_id}`}
          element={
            <EditCardsetPage
              cardsetName={cardsetName}
              cardset_id={cardset_id}
            />
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
};
