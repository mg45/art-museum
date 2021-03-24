import React, { Component } from 'react';
import axios from 'axios';
import Post from '../Post/Post';
import PostDetail from '../PostDetail/PostDetail';
import './PostList.css';

class PostList extends Component {
    state = {
        posts: [],
        selectedPostId: null
    }

    //classification= Paintings
    componentDidMount() {
        axios.get('https://api.harvardartmuseums.org/object?classification=Paintings&apikey=1da9b44f-392a-4d5f-8782-ff00202ed72a&page=3&size=10')
            .then(response => {
                this.setState({ posts: response.data.records });
                console.log(response.data.records);
            })
    }

    postSelectedHandler = (id) => {
        this.setState({ selectedPostId: id });
    }

    render() {
        const posts = this.state.posts.map(post => {
            //console.log(post);
            //return [post.classification, post.id]
            return <Post
                key={post.id}
                title={post.title}
                url={post.primaryimageurl}
                artName={post.period}
                clicked={() => this.postSelectedHandler(post.id)}

            />;

        })

        return (
            <section className='post-list-container'>
                {posts}
                <PostDetail id={this.state.selectedPostId} />
            </section>

        );
    }
}

export default PostList;