import profilePageReducer from "./profilePageReducer";
import dialogPageReducer from "./dialogPageReducer";
import sidebarReducer from "./sidebarReducer";

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
    dispatch(action) {
        this._state.profilePage = profilePageReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogPageReducer(this._state.dialogsPage, action);
        
        this._callSubscriber(this._state);

    },

}






export default store;