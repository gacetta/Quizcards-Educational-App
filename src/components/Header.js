import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

export const Header = (props) => {
  const navigate = useNavigate();

  return (
    <div className="header">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/quiz">Quiz</NavLink>
      <NavLink to={`/cards/:${props.card_id}`}>Edit Card</NavLink>
      <NavLink to={`/cardsets/:${props.cardset_id}`}>Edit Cardset</NavLink>
      <button
        onClick={() => {
          props.clearCardData();
          navigate(`/cards/:${props.card_id}`);
        }}
      >
        Create New Card
      </button>
    </div>
  );
};
