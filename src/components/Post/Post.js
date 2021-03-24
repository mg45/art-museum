import React from 'react';
import './Post.css';

const Post = (props) => {
    return (
        <article>
            <img src={props.url} alt="" />
            <h1>{props.title}</h1>
            <p>{props.artName}</p>
            <button>Show me</button>

        </article>
    );
}

export default Post;