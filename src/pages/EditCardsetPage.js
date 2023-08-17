import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { TextAreaInput, CardlistCard } from "../components";

/** 
 * <TextAreaInput
        labelID="sideA"
        text="Side A"
        value={props.sideA}
        onChangeHandler={props.onChangeHandlerSideA}
      />
*/

export const EditCardsetPage = (props) => {
  const navigate = useNavigate();

  const onClickHandler = () => {
    props.clearCardData();
    navigate("/cards/");
  };

  return (
    <div className="editCardset main-container flex-container-col">
      <h1 className="heavyText">Edit Cardset</h1>
      <TextAreaInput
        labelID={"cardsetName"}
        text={"Cardset Name"}
        value={props.cardsetName}
        onChangeHandler={props.onChangeHandlerCardsetName}
      />
      <section className="cardlist-container flex-container-col">
        <h3 className="heavyText">Card list:</h3>
        <ul>
          <li className="flex-container-row">
            <p className="sideA-header">Side A</p>
            <p className="sideB-header">Side B</p>
            <div className="hidden">Delete</div>
          </li>
          {props.entireArr.map((card) => {
            return (
              <CardlistCard
                key={card.card_id}
                sideA={card.sidea}
                sideB={card.sideb}
                card_id={card.card_id}
                loadSpecificCard={props.loadSpecificCard}
                cardset_id={props.cardset_id}
                onClickHandlerDeleteCard={props.onClickHandlerDeleteCard}
              />
            );
          })}
          <li className="flex-container-row">
            <button className="create-new" onClick={onClickHandler}>
              Create New Card
            </button>
            <div className="hidden">Delete</div>
          </li>
        </ul>
      </section>
    </div>
  );
};
