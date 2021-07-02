import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from 'react-router-dom';
import {RootStateType, StoreType} from "./redax/state";

type PropsType = {
    state: RootStateType
    addPost: () => void
    changeNewText: (n: string) => void

}

const App = (props: PropsType) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path='/dialogs' render={() => <Dialogs dialogsPage={props.state.dialogsPage}/>}/>
                <Route path='/profile' render={() => <Profile profilePage={props.state.profilePage}
                                                              addPost={props.addPost}
                                                              changeNewText={props.changeNewText}
                />}/>

            </div>
        </div>

    )
}


export default App;