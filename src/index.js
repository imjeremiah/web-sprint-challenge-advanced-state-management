// Add in all necessary components and libary methods.
import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { Provider } from "react-redux";

import reducer from "./reducers";

import "./index.css";
import App from "./App";

// Create a store that includes thunk and logger middleware support.
const store = createStore(reducer, applyMiddleware(thunk, logger));

const { worker } = require('./mocks/browser');
worker.start();

const rootElement = document.getElementById("root");

ReactDOM.render(
    // Wrap the App component in a react-redux Provider element.
    <Provider store={store}>
        <App />
    </Provider>, 
    rootElement
);
