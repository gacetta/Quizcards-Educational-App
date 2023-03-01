import React from "react";

export const EditCardPage = (props) => {
  return (
    <div className="editCard">
      <h1>Edit Card</h1>
      <label for="sideA">Side A:</label>
      <textarea type="textarea" id="sideA" name="sideA"></textarea>
      <label for="sideB">Side B:</label>
      <textarea type="textarea" id="sideB" name="sideB"></textarea>
    </div>
  );
};
