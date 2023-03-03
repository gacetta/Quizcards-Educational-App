import React from "react";
import { Link } from "react-router-dom";

export const CardlistCard = (props) => {
  return (
    <li>
      <p className="cardlistSideA">{props.sideA}</p>
      <p className="cardlistSideB">{props.sideB}</p>
      <Link className="edit-link" to={`/cards/${props.card_id}`}>
        Edit
      </Link>
      <Link className="edit-link" to={`/cards/${props.card_id}`}>
        Delete
      </Link>
    </li>
  );
};
