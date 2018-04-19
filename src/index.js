import React from "react";
import ReactDOM from "react-dom";
// import App from "./App";
import ContentHolder from "./ContentHolder";
import CommentsHolder from "./CommentsHolder";
import "./index.css";

ReactDOM.render(
  <React.Fragment>
    <ContentHolder bgcolor="#58B3FF" />
    <CommentsHolder bgcolor="white" />
  </React.Fragment>,
  document.querySelector("#container")
);
