import React from "react";
import { Link } from "react-router-dom";

export const FlashcardControls = (props) => {
  return (
    <section className="flex-container-col controller-container">
      <div className="buttonContainer">
        <button onClick={props.handleIncorrectGuess} className="incorrectGuess">
          X
        </button>
        <button onClick={props.handleCorrectGuess} className="correctGuess">
          ✓
        </button>
      </div>
      <button
        className={props.flipAllCards ? "flip-all a-team" : "flip-all b-sides"}
        onClick={props.toggleFlipAllCards}
      >
        {!props.flipAllCards ? "show the B-Sides" : "show the A-Team"}
      </button>
      <Link className="edit-link" to={`/cards/${props.card_id}`}>
        Edit Card
      </Link>
    </section>
  );
};
