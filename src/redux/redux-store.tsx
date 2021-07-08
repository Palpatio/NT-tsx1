import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage:dialogsReducer
});


export type AppStateType = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type StoreType = typeof store;

const store = createStore(reducers);


export default store;