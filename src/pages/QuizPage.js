import React, { useState, useEffect } from "react";
import { Flashcard, FlashcardControls } from "../components";

export const QuizPage = (props) => {
  // fringe case of navigating to /quiz while making new card
  if (!props.card_id) {
    console.log("no card_id");
    const { sideA, sideB, card_id, cardset_id } = props.getNewCard();
  }

  return (
    <main id="app" className="main-container flex-container-col">
      <h1 className="cardsetName heavyText">{props.cardsetName}</h1>
      <Flashcard
        sideA={props.sideA || sideA}
        sideB={props.sideB || sideB}
        flipped={props.flipped}
        toggleFlip={props.toggleFlip}
      />
      <FlashcardControls
        handleIncorrectGuess={props.handleIncorrectGuess}
        handleCorrectGuess={props.handleCorrectGuess}
        card_id={props.card_id || card_id}
        toggleFlipAllCards={props.toggleFlipAllCards}
        flipAllCards={props.flipAllCards}
      />
    </main>
  );
};
