import React, { useState, useEffect } from "react";
import { Flashcard, FlashcardControls } from "../components";

export const QuizPage = (props) => {
  return (
    <main id="app" className="main-container flex-container-col">
      <h1 className="testClass1">{props.cardsetName}</h1>
      <Flashcard
        sideA={props.sideA}
        sideB={props.sideB}
        flipped={props.flipped}
        toggleFlip={props.toggleFlip}
      />
      <FlashcardControls
        handleIncorrectGuess={props.handleIncorrectGuess}
        handleCorrectGuess={props.handleCorrectGuess}
        cardID={props.card_id}
      />
    </main>
  );
};
