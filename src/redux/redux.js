let rerenderEntairTree = () => {

};

let state = {
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
      
     
};

export const updatePostText = (newPostText) => {
    state.profilePage.newPostText = newPostText;
    rerenderEntairTree(state);
};

export const subscribe = (observer) => {
    rerenderEntairTree = observer;
};

export const addPost = () => {
    
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText, 
    }
    state.profilePage.postData.push(newPost);
    state.profilePage.newPostText='';
    rerenderEntairTree(state);
};
export default state;