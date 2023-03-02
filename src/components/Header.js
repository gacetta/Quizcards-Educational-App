import React from "react";
import { NavLink } from "react-router-dom";

export const Header = (props) => {
  return (
    <div className="header">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/quiz">Quiz</NavLink>
      <NavLink to={`/cards/:${props.card_id}`}>Edit Card</NavLink>
      <NavLink to={`/cardsets/:${props.cardset_id}`}>Edit Cardset</NavLink>
    </div>
  );
};
