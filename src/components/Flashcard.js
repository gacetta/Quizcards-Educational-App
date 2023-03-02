import React from "react";

export const Flashcard = (props) => {
  return (
    <section
      className={
        props.flipped ? "flashcard__container flip" : "flashcard__container"
      }
      onClick={props.toggleFlip}
    >
      <div className="flashcard">
        <div className="sideA">{props.sideA}</div>
        <div className="sideB">{props.sideB}</div>
      </div>
    </section>
  );
};
