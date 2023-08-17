import React from "react";
import { Link } from "react-router-dom";
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
            <p className="cardlistSideA cardlistSide-container cardlistHeader">
              Side A
            </p>
            <p className="cardlistSideB cardlistSide-container cardlistHeader">
              Side B
            </p>
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
        </ul>
      </section>
    </div>
  );
};
