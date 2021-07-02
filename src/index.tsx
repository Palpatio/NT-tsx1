import React from 'react';
import state, {subscribe} from "./redax/state";
import ReactDOM from "react-dom";
import App from './App'
import {BrowserRouter} from "react-router-dom";
import {addPost, changeNewText, RootStateType} from "./redax/state";

const rerenderTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state}
                 addPost={addPost}
                 changeNewText={changeNewText}

            />,
        </BrowserRouter>, document.getElementById('root'))
}


subscribe(rerenderTree);

rerenderTree();