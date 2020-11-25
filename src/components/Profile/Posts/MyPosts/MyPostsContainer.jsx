import React from 'react';
import {addPostActionCreater, updatePostTextActionCreater } from '../../../../redux/profilePageReducer';
import MyPosts from './MyPosts';


const MyPostsContainer = (props) => {
    let state = props.store.getState(); 
    const addPost = () => {
        let action = addPostActionCreater();
        props.store.dispatch(action);
    };

    const onPostChange =(text) => {       
        let action = updatePostTextActionCreater(text);
        props.store.dispatch(action);
        
        
    };

     return (
        <MyPosts    updatePostText={onPostChange}
                    addPost={addPost} 
                    newPostText = {state.profilePage.newPostText}
                    postData = {state.profilePage.postData} 
        />);
 
}

export default MyPostsContainer;