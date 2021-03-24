import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import PostList from './components/PostList/PostList';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <PostList />
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
