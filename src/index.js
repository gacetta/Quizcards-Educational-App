import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./components/App";
import "./styles.css";

console.log("serving /src/index.js - entry file for webpack");

const domNode = document.querySelector("#root");
const root = createRoot(domNode);

root.render(<App />);
