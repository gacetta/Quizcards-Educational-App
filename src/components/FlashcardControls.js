import React from "react";
import { Link } from "react-router-dom";

export const FlashcardControls = (props) => {
  return (
    <section className="flex-container-col controller-container">
      <div>
        <button onClick={props.handleIncorrectGuess}>X</button>
        <button onClick={props.handleCorrectGuess}>✓</button>
      </div>
      <Link className="edit-link" to={`/cards/:${props.card_id}`}>
        Edit Card
      </Link>
    </section>
  );
};
