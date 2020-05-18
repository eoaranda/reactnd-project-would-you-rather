import React from "react";
import ReactDOM from "react-dom";
//styles
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
//redux stuff
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";
import middleware from "./middleware";
// routing 
import { BrowserRouter } from "react-router-dom";
//custom components
import App from "./components/App";


const store = createStore(reducer, middleware);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
