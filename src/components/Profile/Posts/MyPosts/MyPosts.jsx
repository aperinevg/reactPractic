import React from 'react';
import Post from '../Post/Post';
import classes from './MyPosts.module.css';



const MyPosts = (props) => {
    
    let posts = props.postData.map(post => <Post message={post.message} /> );



    let newPostElem = React.createRef();

    const addPost = () => {
        
        let text = newPostElem.current.value;
        props.addPost(text);
        newPostElem.current.value= '';
    }

     return (<div>
                
                <div className={classes.addPost}>
                <textarea ref={newPostElem} ></textarea>
                <button onClick ={ addPost } className={classes.addPostButton}>send</button>
                </div>
                My posts
                <div>
                    New post
                </div>
                <div className={classes.posts}>
                    {posts}
                    
                </div>  
            </div>             
        );
 
}

export default MyPosts;