import React, {Component} from 'react';
import axios from 'axios';

class PostList extends Component {
    componentDidMount () {
        axios.get('https://api.harvardartmuseums.org/gallery/?apikey=1da9b44f-392a-4d5f-8782-ff00202ed72a')
        .then(response => {
            console.log(response)
        })
    }
    state = {  }
    render() { 
        return (
            <p>see console.log</p>
        );
    }
}
 
export default PostList;