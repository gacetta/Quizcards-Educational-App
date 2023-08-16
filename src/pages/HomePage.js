import React from "react";
import { useNavigate } from "react-router-dom";

export const HomePage = () => {
  const navigate = useNavigate();
  const handleCardsetClick = (e) => {
    e.preventDefault();
    navigate("/quiz");
  };

  return (
    <div className="home main-container flex-container-col">
      <h1 className="heavyText">Home</h1>
      <section className="flex-container-col login-container">
        <h3>Coming Soon: Login Users</h3>
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
        <h3 className="homeHeader">Coming Soon: choose your cardset</h3>
        <button className="cardsetButton" onClick={handleCardsetClick}>
          National Capitals
        </button>
      </section>
    </div>
  );
};
