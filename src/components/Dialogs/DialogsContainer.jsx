import React from 'react';
import { addMessageActionCreater, updateMessageActionCreater } from '../../redux/dialogPageReducer';
import Dialogs from './Dialogs';





const DialogsContainer = (props) => {
    
    let state = props.store.getState();
    

    


    const addMessage = () => {
        let action = addMessageActionCreater();
        props.store.dispatch(action);
    };

    const onMessageChange = (text) => {        
        let action = updateMessageActionCreater(text);
        props.store.dispatch(action);
    };

     return (
        <Dialogs addMessage = {addMessage} updateMessage = {onMessageChange} state = {state.dialogsPage}/>

     )
}
export default DialogsContainer;