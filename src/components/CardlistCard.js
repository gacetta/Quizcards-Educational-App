import React from "react";
import { Link } from "react-router-dom";

export const CardlistCard = (props) => {
  return (
    <li className="cardlist-card flex-container-row">
      <div className="cardlistSideA cardlistSide-container">{props.sideA}</div>{" "}
      <div className="cardlistSideB cardlistSide-container">{props.sideB}</div>
      <div className="cardlistLink-container flex-container-col">
        <Link className="cardlistLink edit-link" to={`/cards/${props.card_id}`}>
          Edit
        </Link>
        <Link className="cardlistLink edit-link" to={`/cards/${props.card_id}`}>
          Delete
        </Link>
      </div>
    </li>
  );
};
