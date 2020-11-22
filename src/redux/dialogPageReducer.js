const ADD_MESSAGE  = 'ADD-MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';

const profilePageReducer = (state, action) => {
    switch (action.type){
        case ADD_MESSAGE:
            let newMessage = {
                id: 4,
                message: state.newMessageText, 
            }
            state.messageData.push(newMessage);      
            state.newMessageText = '';
            return state;
        case UPDATE_MESSAGE_TEXT:
            state.newMessageText = action.newMessageText;
            return state;
        default: return state;
    }
    

   

}


export const addMessageActionCreater = () => ({type: ADD_MESSAGE});
export const updateMessageActionCreater = (text) => ({
    type: UPDATE_MESSAGE_TEXT,
    newMessageText: text,
});

export default profilePageReducer;