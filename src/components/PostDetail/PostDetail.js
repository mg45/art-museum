import React, { Component } from 'react';
import axios from 'axios';
import './PostDetail.css';


class PostDetail extends Component {
    state = {
        loadedPost: null
    }

    componentDidMount () {
        console.log(this.props)
        if ( this.props.match.params.id ) {
            if ( !this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== this.props.id) ) {
                axios.get( `https://api.harvardartmuseums.org/object/${this.props.match.params.id}?apikey=1da9b44f-392a-4d5f-8782-ff00202ed72a`)
                    .then( response => {
                        console.log(response);
                        this.setState( { loadedPost: response.data } );
                    } );
            }
        }
    }

    render () {
        let post = <p style={{ textAlign: 'center' }}>select one pic to test</p>;
        if ( this.props.id ) {
            post = <p style={{ textAlign: 'center' }}>Loading...!</p>;
        }
        if ( this.state.loadedPost ) {
            post = (
                <div>
                    <img src={this.state.loadedPost.primaryimageurl} alt=""/>
                    <p>{this.state.loadedPost.culture}</p>
                </div>
            );
        }
        return post;
    }
}
 
export default PostDetail;