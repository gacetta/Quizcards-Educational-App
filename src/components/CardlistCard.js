import React from "react";
import { Link } from "react-router-dom";

export const CardlistCard = (props) => {
  const onClickEdit = () => {
    props.loadSpecificCard(props.card_id);
  };

  const onClickHandlerDeleteCard = () => {
    props.loadSpecificCard(props.card_id);
    props.deleteCard(props.card_id);
  };

  return (
    <li className="cardlist-card flex-container-row">
      <div className="cardlistSideA cardlistSide-container">{props.sideA}</div>{" "}
      <div className="cardlistSideB cardlistSide-container">{props.sideB}</div>
      <div className="cardlistLink-container flex-container-col">
        <Link
          className="cardlistLink edit-link"
          onClick={onClickEdit}
          to={`/cards/${props.card_id}`}
        >
          Edit
        </Link>
        <Link
          className="cardlistLink delete-link"
          onClick={onClickHandlerDeleteCard}
          to={`/cardsets/${props.cardset_id}`}
        >
          Delete
        </Link>
      </div>
    </li>
  );
};
