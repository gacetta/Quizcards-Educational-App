import React from "react";

export const Flashcard = (props) => {
  return (
    <section className="flashcard__container">
      <div className="flashcard">
        <div className="sideA">{props.sideA}</div>
        <div className="sideB">{props.sideB}</div>
      </div>
    </section>
  );
};
