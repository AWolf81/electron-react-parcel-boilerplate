// @flow
import React, { Component } from "react";
import { render } from "react-dom";
import App from "./components/app";
import "bulma/bulma.sass";

const root = document.getElementById("root");

if (root) {
  render(<App />, root);
}
