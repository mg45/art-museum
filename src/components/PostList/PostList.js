import React, { Component } from 'react';
import axios from 'axios';
import Post from '../Post/Post';

class PostList extends Component {
    state = {
        posts: []
    }

    componentDidMount() {
        axios.get('https://api.harvardartmuseums.org/object?classification=Sculpture&century=14th%20century&apikey=1da9b44f-392a-4d5f-8782-ff00202ed72a&size=100')
            .then(response => {
                this.setState({ posts: response.data.records });
                console.log(response.data.records);
            })
    }

    render() {
        const posts = this.state.posts.map(post => {
            //console.log(post);
            //return [post.classification, post.id]
            return <Post

                id={post.id}
                url={post.primaryimageurl}
                title={post.title}
                artName={post.period}

                clicked={() => this.postSelectedHandler(post.id)} />;
        })

        return (
            <section className='post-list-container'>
                {posts}
            </section>
        );
    }
}

export default PostList;