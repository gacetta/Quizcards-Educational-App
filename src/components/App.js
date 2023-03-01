import React, { useState, useEffect } from "react";
import { Flashcard } from "./Flashcard";
import { ButtonContainer, FlashcardControls } from "./FlashcardControls";

export const App = () => {
  // setup state
  const [currentCardset, setCurrentCardset] = useState({
    name: "national capitals",
    id: 1,
  });

  const [cardArr, setCardArr] = useState([
    {
      card_id: 1,
      sideA: "united republic of tanzania",
      sideB: "Dodoma",
    },
  ]);

  const [currentCard, setCurrentCard] = useState(cardArr[0]);

  return (
    <main id="app" className="main-container flex-container-col">
      <h1 className="testClass1">{currentCardset.name}</h1>
      <Flashcard sideA={currentCard.sideA} sideB={currentCard.sideB} />
      <FlashcardControls />
    </main>
  );
};
