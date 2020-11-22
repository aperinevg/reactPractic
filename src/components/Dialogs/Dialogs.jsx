import React from 'react';
import { NavLink } from 'react-router-dom';
import { addMessageActionCreater, updateMessageActionCreater } from '../../redux/dialogPageReducer';
import DialogItem from './DialogItem/DialogItem';
import classes from './Dialogs.module.css';
import Message from './Message/Message';





const Dialogs = (props) => {
    
    
    let dialogs = props.state.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
    let messages = props.state.messageData.map(elem =>  <Message message={elem.message} />);

    let newMessageElem = React.createRef();


    const addMessage = () => {
        let action = addMessageActionCreater();
        props.dispatch(action);
    };

    const onMessageChange = () => {
        let text = newMessageElem.current.value;
        let action = updateMessageActionCreater(text);
        props.dispatch(action);
    };

     return (
        <div className={classes.dialogs}>
            <div className={classes.members}>
                {dialogs}                              
            </div>
            <div className={classes.dialog}>
               {messages}
                <div className={classes.addMessage}>
                    <textarea ref={newMessageElem} onChange={onMessageChange} value={props.state.newMessageText} />
                    <button onClick ={ addMessage } className={classes.addMessageButton}>send</button>
                </div>
            </div>
            
        </div>

     )
}
export default Dialogs;