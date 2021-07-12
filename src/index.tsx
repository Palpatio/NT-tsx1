import React from 'react';
import store, {AppStateType} from "./redux/redux-store";
import ReactDOM from "react-dom";
import App from './App'
import {BrowserRouter} from "react-router-dom";
import StoreContext from "./StoreContext";



const rerenderTree = (state: AppStateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <StoreContext.Provider value={store}>
            <App />
            </StoreContext.Provider>
        </BrowserRouter>, document.getElementById('root'))
}


rerenderTree(store.getState());
store.subscribe(() => {
    let state = store.getState();
    rerenderTree(state)
})