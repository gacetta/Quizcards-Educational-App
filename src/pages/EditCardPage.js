import React from "react";
import { useNavigate } from "react-router-dom";
import { TextAreaInput } from "../components";

export const EditCardPage = (props) => {
  console.log("props:", props);
  const navigate = useNavigate();

  const handleSave = () => {
    props.onClickHandlerSaveCard();
    navigate("/quiz");
  };

  const handleDelete = () => {
    props.onClickHandlerDeleteCard();
    navigate(`/quiz`);
  };

  return (
    <div className="editCard main-container flex-container-col">
      <h1 className="heavyText">Edit Card</h1>
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
      <div className="inputContainer">
        <input
          type="checkbox"
          id="createNew"
          name="createNew"
          checked={props.card_id === null}
          disabled={props.card_id === null}
          onChange={() => {
            props.clearCardData();
            navigate(`/cards`);
          }}
        ></input>
        <label htmlFor="createNew">New Card</label>
      </div>
      <div className="flex-container-row">
        <button onClick={handleSave}>
          {props.card_id ? "update card" : "create card"}
        </button>
        {props.card_id ? (
          <button onClick={handleDelete}>delete card</button>
        ) : null}
      </div>
    </div>
  );
};
