import React from 'react';
import './Post.css';

const Post = (props) => (
    <article className="Post" onClick={props.clicked}>
        <h1>{props.author}</h1>
        <img src={props.url} alt=""/>
    </article>
);
 
export default Post;