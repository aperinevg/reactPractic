import React from 'react';
import { addMessageActionCreater, updateMessageActionCreater } from '../../redux/dialogPageReducer';
import StoreContext from '../../StoreContext';
import Dialogs from './Dialogs';





const DialogsContainer = () => {    
   
     return (
         <StoreContext.Consumer>
            { (store) => {
                 let state = store.getState();
    
                 const addMessage = () => {
                     let action = addMessageActionCreater();
                     store.dispatch(action);
                 };
             
                 const onMessageChange = (text) => {        
                     let action = updateMessageActionCreater(text);
                     store.dispatch(action);
                 };
                return <Dialogs addMessage = {addMessage} updateMessage = {onMessageChange} state = {state.dialogsPage}/>
                }
            }
        </StoreContext.Consumer>
     )
}
export default DialogsContainer;