import React from "react";
import { Link } from "react-router-dom";
import { TextAreaInput } from "../components";

/** 
 * <TextAreaInput
        labelID="sideA"
        text="Side A"
        value={props.sideA}
        onChangeHandler={props.onChangeHandlerSideA}
      />
*/

export const EditCardsetPage = (props) => {
  return (
    <div className="editCardset flex-container-col">
      <h1 className="heavyText">Edit Cardset</h1>
      <TextAreaInput
        labelID={"cardsetName"}
        text={"Cardset Name:"}
        value={props.cardsetName}
        onChangeHandler={props.onChangeHandlerCardsetName}
      />
      <h3>Card list:</h3>
      <ul>
        <li>
          Side A / Side B <Link to="/cards/">edit - </Link>
          <Link to="/cards/">delete</Link>
        </li>
        <li>
          Side A / Side B <Link to="/cards/">edit - </Link>
          <Link to="/cards/">delete</Link>
        </li>
        <li>
          Side A / Side B <Link to="/cards/">edit - </Link>
          <Link to="/cards/">delete</Link>
        </li>
        <li>
          Side A / Side B <Link to="/cards/">edit - </Link>
          <Link to="/cards/">delete</Link>
        </li>
      </ul>
    </div>
  );
};
