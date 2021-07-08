import React from 'react';
import store, {AppStateType} from "./redux/redux-store";
import ReactDOM from "react-dom";
import App from './App'
import {BrowserRouter} from "react-router-dom";



const rerenderTree = (state: AppStateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={store.getState()}  dispatch={store.dispatch.bind(store)}

            />,
        </BrowserRouter>, document.getElementById('root'))
}


rerenderTree(store.getState());
store.subscribe(() => {
    let state = store.getState();
    rerenderTree(state)
})