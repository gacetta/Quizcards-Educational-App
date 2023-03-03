import React from "react";

export const HomePage = (props) => {
  return (
    <div className="home main-container flex-container-col">
      <h1 className="heavyText">Home</h1>
      <section className="flex-container-col">
        <h3>Super Secure Encrypted Login Feature</h3>
        <label>
          Username:
          <input></input>
        </label>
        <label>
          Password:
          <input></input>
        </label>
        <button className="loginButton">sign in</button>
      </section>
      <section className="cardsets-container">
        <h3 className="homeHeader">
          Incredibly Amazing Cardset Selection Feature
        </h3>
        <button className="cardsetButton">Cardset</button>
        <button className="cardsetButton">Cardset</button>
        <button className="cardsetButton">Cardset</button>
        <button className="cardsetButton">Cardset</button>
        <button className="cardsetButton">Cardset</button>
        <button className="cardsetButton">Cardset</button>
        <button className="cardsetButton">Cardset</button>
        <button className="cardsetButton">Cardset</button>
      </section>
    </div>
  );
};
