import React from 'react';
import store from "./redax/state";
import ReactDOM from "react-dom";
import App from './App'
import {BrowserRouter} from "react-router-dom";



const rerenderTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App store={store}
                 addPost={store.addPost.bind(store)}
                 changeNewText={store.changeNewText.bind(store)}
            />,
        </BrowserRouter>, document.getElementById('root'))
}


store.subscribe(rerenderTree);
rerenderTree();