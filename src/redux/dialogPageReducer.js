const ADD_MESSAGE  = 'ADD-MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';


const initialState ={
    dialogsData: [
        {id: '1', name: 'Alex'},
        {id: '2', name: 'Misha'},
        {id: '3', name: 'Alena'},
        {id: '4', name: 'Natasha'},
        {id: '5', name: 'Valera'},
        {id: '6', name: 'Sasha'},        
    ],
    messageData: [
        {id: '1', message: 'Hi'},
        {id: '2', message: 'Yo'},
        {id: '3', message: 'How are you?'}     
    ],
    newMessageText: '',
};

const profilePageReducer = (state = initialState, action) => {
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