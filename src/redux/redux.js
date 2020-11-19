const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';
const ADD_MESSAGE  = 'ADD-MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';

let store = {
    _state: {
        profilePage: {
            postData: [
                {id:'1', message: 'This is my first post'},
                {id:'2', message: 'Hello, how are you?'}
              ],
            newPostText: '',
        },
        dialogsPage: {
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
        }
          
         
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
    },
    
    subscribe (observer) {
        this._callSubscriber = observer;
    },
    _addPost ()  {
        
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText, 
        }
        this._state.profilePage.postData.push(newPost);
        this._state.profilePage.newPostText='';
        this._callSubscriber(this._state);
    },
    _updatePostText (newPostText)  {
        
        this._state.profilePage.newPostText = newPostText;
        this._callSubscriber(this._state);
    },
    _addMessage () {
        let newMessage = {
            id: 4,
            message: this._state.dialogsPage.newMessageText, 
        }
        this._state.dialogsPage.messageData.push(newMessage);      
        this._state.dialogsPage.newMessageText = '';
        this._callSubscriber(this._state);
        
    },
    _updateMessage (newMessageText)  {
        
        this._state.dialogsPage.newMessageText = newMessageText;
        this._callSubscriber(this._state);
    },
    dispatch(action) {
        if (action.type === ADD_POST){
            this._addPost();
        } else if (action.type === UPDATE_POST_TEXT) {
            this._updatePostText(action.newPostText);
        } else if (action.type === ADD_MESSAGE) {
            this._addMessage();
        } else if (action.type === UPDATE_MESSAGE_TEXT) {
            this._updateMessage(action.newMessageText);
        }
    },

}

export const addPostActionCreater = () => ({type: ADD_POST});
export const updatePostTextActionCreater = (text) => ({
    type: UPDATE_POST_TEXT,
    newPostText: text,
});
export const addMessageActionCreater = () => ({type: ADD_MESSAGE});
export const updateMessageActionCreater = (text) => ({
    type: UPDATE_MESSAGE_TEXT,
    newMessageText: text,
});



export default store;