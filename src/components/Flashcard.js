import React from "react";

export const Flashcard = (props) => {
  return (
    <section className="flashcard__container">
      <div className="flashcard">
        <div className="sideA">SIDE A: {props.sideA}</div>
        <div className="sideB">SIDE B: {props.sideB}</div>
      </div>
    </section>
  );
};
