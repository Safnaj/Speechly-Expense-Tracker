import React from "react";
import ReactDOM from "react-dom";
import { SpeechProvider } from "@speechly/react-client";
import { Provider } from "./context/context";
import App from "./App";
import "./index.css";

ReactDOM.render(
  <SpeechProvider appId="f0a7c35e-45fb-46d4-9e84-1e6738206c8b" language="en-US">
    <Provider>
      <App />
    </Provider>
  </SpeechProvider>,

  document.getElementById("root")
);
