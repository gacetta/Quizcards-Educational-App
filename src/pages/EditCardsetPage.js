import React from "react";
import { TextAreaInput } from "../components";

export const EditCardsetPage = (props) => {
  return (
    <div className="editCardset">
      <h1>Edit Cardset</h1>
      <TextAreaInput labelID={"cardsetName"} text={"Cardset Name:"} />
      <TextAreaInput
        labelID={"cardsetDescription"}
        text={"Cardset Description:"}
      />
    </div>
  );
};
