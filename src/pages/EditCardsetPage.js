import React from "react";
import { Link } from "react-router-dom";
import { TextAreaInput } from "../components";

export const EditCardsetPage = (props) => {
  return (
    <div className="editCardset">
      <h1>Edit Cardset</h1>
      <TextAreaInput labelID={"cardsetName"} text={"Cardset Name:"} />
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
