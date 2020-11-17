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
        }
          
         
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
    },
    updatePostText (newPostText)  {
        
        this._state.profilePage.newPostText = newPostText;
        this._callSubscriber(this._state);
    },
    subscribe (observer) {
        this._callSubscriber = observer;
    },
    addPost ()  {
        
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText, 
        }
        this._state.profilePage.postData.push(newPost);
        this._state.profilePage.newPostText='';
        this._callSubscriber(this._state);
    },

}



export default store;