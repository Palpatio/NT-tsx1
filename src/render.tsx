import React from 'react';
import ReactDOM from "react-dom";
import App from './App'
import {BrowserRouter} from "react-router-dom";
import {addPost, changeNewText, RootStateType} from "./redax/state";

export const rerenderEntireTree = (state: RootStateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state}
                 addPost={addPost}
                 changeNewText={changeNewText}

            />,
        </BrowserRouter>, document.getElementById('root'))
}

