import React from "react";
import { Link } from "react-router-dom";

export const FlashcardControls = (props) => {
  return (
    <section>
      <button>X</button>
      <button>✓</button>
      <Link to="/editcard">Edit Card</Link>
    </section>
  );
};
