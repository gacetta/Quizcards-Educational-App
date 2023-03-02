import React from "react";
import { NavLink } from "react-router-dom";

// <NavLink to={`/cards/${props.card_id}`}>Edit Card</NavLink>

export const Header = (props) => {
  return (
    <div className="header">
      <NavLink className="navElement navHome" to="/">
        Home
      </NavLink>
      <h1 className="navElement navTitle">Flashcards</h1>
      <div className="navElement navLinkContainer">
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
    </div>
  );
};
