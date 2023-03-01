import React from "react";
import { Link } from "react-router-dom";

export const FlashcardControls = (props) => {
  return (
    <section>
      <button onClick={props.handleIncorrectGuess}>X</button>
      <button onClick={props.handleCorrectGuess}>✓</button>
      <Link to={`/editcard/:${props.currentCard.card_id}`}>Edit Card</Link>
    </section>
  );
};
