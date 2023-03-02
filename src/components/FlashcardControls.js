import React from "react";
import { Link } from "react-router-dom";

export const FlashcardControls = (props) => {
  return (
    <section className="flex-container-col controller-container">
      <button
        className={props.flipAllCards ? "flip-all a-team" : "flip-all b-sides"}
        onClick={props.toggleFlipAllCards}
      >
        {!props.flipAllCards ? "B-Sides" : "The A-Team"}
      </button>
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
