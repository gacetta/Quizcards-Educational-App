import React from "react";

export const TextAreaInput = (props) => {
  return (
    <div className="textAreaInput">
      <label htmlFor={props.labelID}>{props.text}:</label>
      <textarea
        type="textarea"
        id={props.labelID}
        name={props.labelID}
        value={props.value}
        onChange={props.onChangeHandler}
      ></textarea>
    </div>
  );
};
