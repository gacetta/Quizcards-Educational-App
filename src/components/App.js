import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomePage, EditCardPage, EditCardsetPage, QuizPage } from "../pages";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const App = () => {
  // setup state
  const [currentCardset, setCurrentCardset] = useState({
    name: "national capitals",
    id: 1,
  });

  const [cardArr, setCardArr] = useState([
    {
      card_id: 1,
      sideA: "united republic of tanzania",
      sideB: "Dodoma",
    },
  ]);

  const [currentCard, setCurrentCard] = useState(cardArr[0]);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/quiz"
          element={
            <QuizPage
              currentCard={currentCard}
              currentCardset={currentCardset}
            />
          }
        />
        <Route path="/editcard" element={<EditCardPage />} />
        <Route path="/editcardset" element={<EditCardsetPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};
