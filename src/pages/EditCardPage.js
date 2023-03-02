import React from "react";
import { TextAreaInput } from "../components";

export const EditCardPage = (props) => {
  return (
    <div className="editCard">
      <h1>Edit Card</h1>
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
      <button onClick={props.onClickHandlerSaveCard}>
        {!props.card_id ? "update card" : "create card"}
      </button>
      {props.card_id ? (
        <button onClick={props.onClickHandlerDeleteCard}>delete card</button>
      ) : null}
    </div>
  );
};
