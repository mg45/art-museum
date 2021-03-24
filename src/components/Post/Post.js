import React from 'react';
import './Post.css';

const Post = (props) => (
    <article>
        <h1>{props.author}</h1>
        <img src={props.url} alt=""/>
        <button onClick={props.clicked}>show more</button>
    </article>
);
 
export default Post;