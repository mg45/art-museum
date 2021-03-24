import React from 'react';
import './Post.css';

const Post = (props) => (

    <article>
        <img src={props.url} alt="" />
        <h1>{props.title}</h1>
        <p>{props.artName}</p>
        <button onClick={props.clicked}>show more</button>
    </article>
);

export default Post;