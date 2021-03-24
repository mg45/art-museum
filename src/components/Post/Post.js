import React from 'react';
import './Post.css';

const Post = (props) => {
    return (
        <article>
        <p>{props.id}</p>
        <h1>{props.title}</h1>
        <h1>{props.url}</h1>
        <h1>{props.contact}</h1>
    </article>
    );
}
 
export default Post;