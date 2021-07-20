import React from 'react';
import store from "./redux/redux-store";
import ReactDOM from "react-dom";
import App from './App'
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>, document.getElementById('root'))


reportWebVitals();
