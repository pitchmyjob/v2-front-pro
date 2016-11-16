import React, { Component } from 'react';
import PostsList from '../containers/PostsListContainer.js';
import HeaderContainer from '../containers/HeaderContainer';

class PostsIndex extends Component {
  render() {
    return (
      <div>
        <HeaderContainer />
        <div> Page index : </div>
        <PostsList />
      </div>
    );
  }
}


export default PostsIndex;