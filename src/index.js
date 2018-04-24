import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";

import "normalize.css";
import { injectGlobal } from "styled-components";

import DialogContext from "react-contextual-dialog";

import App from "./app";
import colors from "./utils/colors";

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=IBM+Plex+Sans');
  @import url('http://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css');

  html, body, div#root {
    font-family: 'IBM Plex Sans', sans-serif;
    color: ${colors.black.normal};
    height: 100vh;
    width: 100vw;
  }
`;

ReactDOM.render(
  <DialogContext.DialogContainer>
    <App />
  </DialogContext.DialogContainer>,
  document.getElementById("root")
);
registerServiceWorker();
