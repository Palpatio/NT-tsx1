import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { Route} from 'react-router-dom';
import {changeNewText, RootStateType} from "./redax/state";

type PropsType={
    state:RootStateType
    addPost:(m:string)=>void
    messageForNewPost: string
    changeNewText: (n: string) => void

}

const App = (props:PropsType) => {
    return (

            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={() => <Dialogs dialogsPage={props.state.dialogsPage}/>}/>
                    <Route path='/profile' render={() => <Profile profilePage={props.state.profilePage.messageForNewPost}
                                                                  addPost={props.addPost}
                                                                  changeNewText={props.changeNewText}
                    />}/>

                </div>
            </div>

    )
}


export default App;