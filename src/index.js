import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import reportWebVitals from "./reportWebVitals";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducer";

import "./index.css";
import App from "./App";
import { GoogleOAuthProvider } from "@react-oauth/google";

//store
const store = createStore(rootReducer, composeWithDevTools());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <GoogleOAuthProvider clientId="1002940388163-pkanavuso0jmp062h3eek4ul4oa0iqpc.apps.googleusercontent.com">
        <App />
      </GoogleOAuthProvider>
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();