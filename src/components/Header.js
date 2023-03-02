import React from "react";
import { NavLink } from "react-router-dom";

// <NavLink to={`/cards/${props.card_id}`}>Edit Card</NavLink>

export const Header = (props) => {
  return (
    <div className="header">
      <NavLink className="navElement navHome" to="/">
        Home
      </NavLink>
      <h1 className="navElement navCardsetName">Flashcards</h1>
      <NavLink className="navElement navQuiz" to="/quiz">
        Quiz
      </NavLink>
      <NavLink
        className="navElement navEditCardset"
        to={`/cardsets/${props.cardset_id}`}
      >
        Edit Cardset
      </NavLink>
    </div>
  );
};
