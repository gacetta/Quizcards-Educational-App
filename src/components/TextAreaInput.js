import React from "react";

export const TextAreaInput = (props) => {
  const isSideA = props.labelID === "sideA";
  const isEmpty = props.value === "";

  return (
    <div className="textAreaInput">
      <label htmlFor={props.labelID}>{props.text}:</label>
      <textarea
        type="textarea"
        id={props.labelID}
        name={props.labelID}
        value={props.value}
        onChange={props.onChangeHandler}
        autoFocus={isSideA & isEmpty}
      ></textarea>
    </div>
  );
};
