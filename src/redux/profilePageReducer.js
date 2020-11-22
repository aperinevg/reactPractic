const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';

const profilePageReducer = (state, action) => {
    switch (action.type){
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText, 
            }
            state.postData.push(newPost);
            state.newPostText='';
            return state;
        case UPDATE_POST_TEXT:
            state.newPostText = action.newPostText;
            return state
        default: return state;
    }

   

}

export const addPostActionCreater = () => ({type: ADD_POST});
export const updatePostTextActionCreater = (text) => ({
    type: UPDATE_POST_TEXT,
    newPostText: text,
});

export default profilePageReducer;
