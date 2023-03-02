import React from "react";
import { useNavigate } from "react-router-dom";

import { TextAreaInput } from "../components";

export const EditCardPage = (props) => {
  const navigate = useNavigate();
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
        {props.card_id ? "update card" : "create card"}
      </button>
      {props.card_id ? (
        <button
          onClick={() => {
            props.onClickHandlerDeleteCard();
            navigate(`/cards`);
          }}
        >
          delete card
        </button>
      ) : null}
      <input
        type="checkbox"
        id="createNew"
        name="createNew"
        checked={props.card_id === null}
        onChange={() => {
          props.clearCardData();
          navigate(`/cards`);
        }}
      ></input>
      <label htmlFor="createNew">New Card</label>
    </div>
  );
};
