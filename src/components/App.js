import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
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
  const [entireArr, setEntireArr] = useState([]);
  const [cardArr, setCardArr] = useState([]);

  // flip cards state
  const [flipAllCards, setFlipAllCards] = useState(false);
  const [flipped, setFlipped] = useState(false);

  // individual card state
  const [sideA, setSideA] = useState("");
  const [sideB, setSideB] = useState("");
  const [card_id, setCard_id] = useState("");
  const [creatingNewCard, setCreatingNewCard] = useState(false);

  //------------------//
  // INITIALIZE CARDS //
  //------------------//
  useEffect(() => {
    fetch(`/cardsets/${cardset_id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(".then useEffect");
        // load cards into state
        setCardArr(data);
        setEntireArr(data);

        // initialize card state with random card
        const {
          sidea,
          sideb,
          card_id: cardID,
        } = data[Math.floor(Math.random() * data.length)];

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
    if ((cardArr.length <= 1) & card_id) return;

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

    return {
      sideA: newCard.sidea,
      sideB: newCard.sideb,
      card_id: newCard.card_id,
      cardset_id,
    };
  }

  function loadSpecificCard(card_id) {
    const specificCard = entireArr.find((card) => card.card_id === card_id);
    setSideA(specificCard.sidea);
    setSideB(specificCard.sideb);
    setCard_id(specificCard.card_id);
  }

  function handleCorrectGuess() {
    // edge case for array of 1 or less cards
    if (cardArr.length <= 1) return;

    // remove currentCard from cardArr and update state
    const newArr = cardArr.filter((card) => {
      return card.card_id !== card_id;
    });
    setCardArr(newArr);

    // revert card to show preferred side
    // setTimeout to wait until card is flipped to get new card
    if (flipped !== flipAllCards) setTimeout(getNewCard, 250);
    else getNewCard();
    setFlipped(flipAllCards);
  }

  function handleIncorrectGuess() {
    // revert card to show preferred side
    // setTimeout to wait until card is flipped to get new card
    if (flipped !== flipAllCards) setTimeout(getNewCard, 250);
    else getNewCard();
    setFlipped(flipAllCards);
  }

  function onChangeHandlerSideA(e) {
    setSideA(e.target.value);
  }

  function onChangeHandlerSideB(e) {
    setSideB(e.target.value);
  }

  function onChangeHandlerCardsetName(e) {
    setCardsetName(e.target.value);
  }

  function toggleCreatingNewCard() {
    setCreatingNewCard(!creatingNewCard);
  }

  function toggleFlip() {
    setFlipped(!flipped);
  }

  function toggleFlipAllCards() {
    setFlipAllCards(!flipAllCards);
    toggleFlip();
    setFlipped(!flipAllCards);
  }

  function saveCard() {
    // create card object with sideA, sideB and cardID
    const updating = card_id ? true : false;
    const newCard = { sidea: sideA, sideb: sideB, cardset_id };
    const alertMsg = `Card ${updating ? "updated" : "created"} successfully`;

    if (updating) {
      newCard.card_id = card_id;
      updateCard(newCard);
    } else {
      createCard(newCard);
    }

    alert(alertMsg);
    getNewCard();
  }

  function updateCard(newCard) {
    // DB Update record with PUT request to 'cards/card_id'
    fetch(`/cards/${card_id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newCard),
    })
      .then(() => {
        // update currentCardArr - for quiz
        const filteredCardArr = cardArr.filter(
          (card) => newCard.card_id !== card.card_id
        );
        setCardArr([...filteredCardArr, newCard]);

        // update entireArr - for edit cardset
        const filteredEntireArr = entireArr.filter(
          (card) => newCard.card_id !== card.card_id
        );
        setEntireArr([...filteredEntireArr, newCard]);
      })
      .catch((err) => {
        console.log("err: ", err);
      });
  }

  function createCard(newCard) {
    // DB CREATE record with POST request to '/cards'
    fetch(`/cards/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newCard),
    })
      .then((response) => response.json())
      .then((newCardResponse) => {
        setCardArr([...cardArr, newCardResponse]);
        setEntireArr([...entireArr, newCardResponse]);
      })
      .catch((err) => {
        console.log("err: ", err);
      });
  }

  function deleteCard(card_id) {
    if (!card_id) return;

    // DB Update record with PUT request to 'cards/card_id'
    fetch(`/cards/${card_id}`, {
      method: "DELETE",
    }).catch((err) => {
      console.log("err: ", err);
    });

    alert("Card deleted successfully");

    const newCardArr = cardArr.filter((card) => card.card_id !== card_id);
    const newEntireArr = entireArr.filter((card) => card.card_id !== card_id);
    setCardArr(newCardArr);
    setEntireArr(newEntireArr);

    clearCardData();
    getNewCard();
  }

  function clearCardData() {
    setSideA("");
    setSideB("");
    setCard_id(null);
  }

  return (
    <Router>
      <Header cardsetName={cardsetName} cardset_id={cardset_id} />
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
              getNewCard={getNewCard}
            />
          }
        />
        <Route
          path={`/cards/${card_id}`}
          element={
            <EditCardPage
              sideA={sideA}
              sideB={sideB}
              card_id={card_id}
              creatingNewCard={creatingNewCard}
              onChangeHandlerSideA={onChangeHandlerSideA}
              onChangeHandlerSideB={onChangeHandlerSideB}
              saveCard={saveCard}
              deleteCard={deleteCard}
              clearCardData={clearCardData}
              toggleCreatingNewCard={toggleCreatingNewCard}
            />
          }
        />
        <Route
          path={`/cards`}
          element={
            <EditCardPage
              sideA={sideA}
              sideB={sideB}
              card_id={card_id}
              onChangeHandlerSideA={onChangeHandlerSideA}
              onChangeHandlerSideB={onChangeHandlerSideB}
              saveCard={saveCard}
              deleteCard={deleteCard}
              clearCardData={clearCardData}
            />
          }
        />
        <Route
          path={`/cardsets/${cardset_id}`}
          element={
            <EditCardsetPage
              cardsetName={cardsetName}
              cardset_id={cardset_id}
              entireArr={entireArr}
              sideA={sideA}
              sideB={sideB}
              card_id={card_id}
              onChangeHandlerCardsetName={onChangeHandlerCardsetName}
              loadSpecificCard={loadSpecificCard}
              deleteCard={deleteCard}
              clearCardData={clearCardData}
            />
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
};
