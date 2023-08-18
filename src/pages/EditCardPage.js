import React from "react";
import { TextAreaInput } from "../components";
import { EditCardControls } from "../components";

export const EditCardPage = (props) => {
  return (
    <div className="editCard main-container flex-container-col">
      <h1 className="heavyText">
        {props.card_id ? "Edit Card" : "Create New Card"}
      </h1>
      <TextAreaInput
        labelID="sideA"
        text="Side A"
        value={props.sideA}
        onChangeHandler={props.onChangeHandlerSideA}
      />
      <TextAreaInput
        labelID="sideB"
        text="Side B"
        value={props.sideB}
        onChangeHandler={props.onChangeHandlerSideB}
      />
      <EditCardControls
        deleteCard={props.deleteCard}
        saveCard={props.saveCard}
        clearCardData={props.clearCardData}
        card_id={props.card_id}
      />
    </div>
  );
};
