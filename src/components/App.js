import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomePage, EditCardPage, EditCardsetPage, QuizPage } from "../pages";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const App = () => {
  //------------------//
  // STATE            //
  //------------------//
  // cardset info
  const [cardset_id, setCardset_id] = useState(1);
  const [cardsetName, setCardsetName] = useState("national capitals");

  // array of cards
  const [cardArr, setCardArr] = useState([]);

  /**[
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
  ] */

  // flip cards state
  const [flipAllCards, setFlipAllCards] = useState(false);
  const [flipped, setFlipped] = useState(false);

  // individual card state
  const [sideA, setSideA] = useState("");
  const [sideB, setSideB] = useState("");
  const [card_id, setCard_id] = useState("");

  useEffect(() => {
    fetch(`http://localhost:3000/cardsets/${cardset_id}`)
      .then((res) => res.json())
      .then((data) => {
        // load cards into state
        setCardArr(data);

        // initialize card state with random card
        const {
          sidea,
          sideb,
          card_id: cardID,
        } = data[Math.floor(Math.random() * data.length)];

        console.log("card_id: ", cardID);

        setSideA(sidea);
        setSideB(sideb);
        setCard_id(cardID);
      })
      .catch((err) => {
        console.log("fetch error: ", err);
      });
  }, []);

  //------------------//
  // HANDLERS         //
  //------------------//
  function getNewCard() {
    // edge case for 1 or less cards
    if (cardArr.length <= 1) return;

    // revert card to show preferred side
    setFlipped(flipAllCards);

    // get new random card from cardArr (new card)
    let newCard;
    let newCard_id = card_id;
    while (newCard_id === card_id) {
      const randomCardIndex = Math.floor(Math.random() * cardArr.length);
      newCard = cardArr[randomCardIndex];
      newCard_id = newCard.card_id;
    }

    // update state with new card
    setSideA(newCard.sidea);
    setSideB(newCard.sideb);
    setCard_id(newCard.card_id);
  }

  function handleCorrectGuess() {
    // edge case for array of 1 or less cards
    if (cardArr.length <= 1) return;

    // remove currentCard from cardArr and update state
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
  }
  function onChangeHandlerSideB(e) {
    setSideB(e.target.value);
  }

  function toggleFlip() {
    setFlipped(!flipped);
    console.log("toggleFlip: ", !flipped);
  }

  function toggleFlipAllCards() {
    setFlipAllCards(!flipAllCards);
    toggleFlip();
    setFlipped(!flipAllCards);
    console.log("toggleFlipAllCards: ", !flipAllCards);
  }

  function onClickHandlerSaveCard() {
    // create card object with sideA, sideB and cardID
    const newCard = { sideA, sideB, card_id, cardset_id };

    // if cardID exists
    if (card_id) {
      console.log("updating card: ", newCard);
      // DB Update record
      // remove matching cardID from cardARR
    }
    // else   ******HOW DO WE DO THIS?*****
    else {
      // DB CREATE record
      console.log("creating card: ", newCard);
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
              toggleFlip={toggleFlip}
              flipped={flipped}
              flipAllCards={flipAllCards}
              handleIncorrectGuess={handleIncorrectGuess}
              handleCorrectGuess={handleCorrectGuess}
              toggleFlipAllCards={toggleFlipAllCards}
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
