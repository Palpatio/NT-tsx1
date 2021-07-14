import React from "react";
import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppDispatch, AppStateType} from "../../redux/redux-store";



const mapStateToProps = (state: AppStateType) => {
    return {
        dialogsPageType: state.dialogsPageType
    }
}
const mapDispatchToProps = (dispatch: AppDispatch) => {
    return {
        updateNewMessageBody: (body: string) => {dispatch(updateNewMessageBodyAC(body))},
        sendMessage: () => {dispatch(sendMessageAC())}
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
export default DialogsContainer;