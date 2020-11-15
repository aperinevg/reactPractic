import React from 'react';
import Post from '../Post/Post';
import classes from './MyPosts.module.css';



const MyPosts = (props) => {
    
    let posts = props.postData.map(post => <Post message={post.message} /> );



    let newPostElem = React.createRef();

    const addPost = () => {
        props.addPost();
    };

    const onPostChange =() => {
        let text = newPostElem.current.value;
        props.updatePostText(text);
    };

     return (<div>
                
                <div className={classes.addPost}>
                <textarea ref={newPostElem} onChange={onPostChange} value={props.newPostText} />
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