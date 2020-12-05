import React from 'react';
import {addPostActionCreater, updatePostTextActionCreater } from '../../../../redux/profilePageReducer';
import StoreContext from '../../../../StoreContext';
import MyPosts from './MyPosts';


const MyPostsContainer = () => {
    

     return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state =store.getState(); 
                    const addPost = () => {
                        let action = addPostActionCreater();
                       store.dispatch(action);
                    };

                    const onPostChange =(text) => {       
                        let action = updatePostTextActionCreater(text);
                        store.dispatch(action);
                    };
                    return(
                        <MyPosts    updatePostText={onPostChange}
                        addPost={addPost} 
                        newPostText = {state.profilePage.newPostText}
                        postData = {state.profilePage.postData} 
                        />)
                }
            }
        </StoreContext.Consumer>
    )

        
 
}

export default MyPostsContainer;