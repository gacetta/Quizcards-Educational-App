import React, { useState, useEffect } from "react";
import { Flashcard, FlashcardControls } from "../components";

export const QuizPage = (props) => {
  return (
    <main id="app" className="main-container flex-container-col">
      <h1 className="testClass1">{props.currentCardset.name}</h1>
      <Flashcard
        sideA={props.currentCard.sideA}
        sideB={props.currentCard.sideB}
      />
      <FlashcardControls />
    </main>
  );
};
