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
      sideA: "spain",
      sideB: "madrid",
    },
  ]);

  const [currentCard, setCurrentCard] = useState(
    cardArr[Math.floor(Math.random() * cardArr.length)]
  );

  const [sideA, setSideA] = useState(currentCard.sideA);
  const [sideB, setSideB] = useState(currentCard.sideB);
  const [cardID, setCardID] = useState(currentCard.card_id);

  function getNewCard() {
    if (cardArr.length <= 1) return;
    let newCard = currentCard;
    // get new random card from cardArr (new card)
    while (newCard === currentCard) {
      const randomCardIndex = Math.floor(Math.random() * cardArr.length);
      newCard = cardArr[randomCardIndex];
    }
    // set currentCard to that random card
    setCurrentCard(newCard);
    setSideA(newCard.sideA);
    setSideB(newCard.sideB);
    setCardID(newCard.cardID);
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
    const newCard = { sideA, sideB, cardID };
    console.log("new card: ", newCard);

    // if cardID exists
    if (cardID) {
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
      <Header cardID={cardID} currentCardset={currentCardset} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/quiz"
          element={
            <QuizPage
              sideA={sideA}
              sideB={sideB}
              cardID={cardID}
              currentCard={currentCard}
              currentCardset={currentCardset}
              handleIncorrectGuess={handleIncorrectGuess}
              handleCorrectGuess={handleCorrectGuess}
            />
          }
        />
        <Route
          path={`/cards/:${cardID}`}
          element={
            <EditCardPage
              sideA={sideA}
              sideB={sideB}
              cardID={cardID}
              onChangeHandlerSideA={onChangeHandlerSideA}
              onChangeHandlerSideB={onChangeHandlerSideB}
              onClickHandlerSaveCard={onClickHandlerSaveCard}
              currentCard={currentCard}
              currentCardset={currentCardset}
            />
          }
        />
        <Route
          path={`/cardsets/:${currentCardset.cardset_id}`}
          element={<EditCardsetPage currentCardset={currentCardset} />}
        />
      </Routes>
      <Footer />
    </Router>
  );
};
