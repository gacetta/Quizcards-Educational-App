import React from "react";
import { NavLink } from "react-router-dom";

export const Header = (props) => {
  return (
    <div className="header">
      <h1>Header.js</h1>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/quiz">Quiz</NavLink>
      <NavLink to={`/editcard/:${props.currentCard.card_id}`}>
        Edit Card
      </NavLink>
      <NavLink to={`/editcardset/:${props.currentCardset.cardset_id}`}>
        Edit Cardset
      </NavLink>
    </div>
  );
};
