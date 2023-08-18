import React from "react";
import { useNavigate } from "react-router-dom";

export const EditCardControls = (props) => {
  const navigate = useNavigate();

  const onClickHandleNewCard = () => {
    props.clearCardData();
    navigate("/cards");
  };

  const onClickHandleSaveCard = () => {
    props.saveCard();
    navigate("/quiz");
  };

  const onClickHandleDeleteCard = () => {
    props.deleteCard(props.card_id);
    navigate(`/quiz`);
  };

  return (
    <div className="flex-container-col editCardControls-container">
      <div className="flex-container-row editCardControls-subControls">
        <button className="saveButton" onClick={onClickHandleSaveCard}>
          {props.card_id ? "update card" : "create card"}
        </button>
        {props.card_id ? (
          <button className="deleteButton" onClick={onClickHandleDeleteCard}>
            delete card
          </button>
        ) : null}
      </div>
      {props.card_id && (
        <button className="create-new-card" onClick={onClickHandleNewCard}>
          create new card
        </button>
      )}
    </div>
  );
};
