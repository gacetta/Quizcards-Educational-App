import React from "react";
import { NavLink } from "react-router-dom";

export const Header = (props) => {
  return (
    <div className="header">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/quiz">Quiz</NavLink>
      <NavLink to={`/cards/:${props.cardID}`}>Edit Card</NavLink>
      <NavLink to={`/cardsets/:${props.currentCardset.cardset_id}`}>
        Edit Cardset
      </NavLink>
    </div>
  );
};
