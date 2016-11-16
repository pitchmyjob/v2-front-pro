import React, { Component } from 'react';
import PostDetailsContainer from '../containers/PostDetailsContainer.js';
import HeaderContainer from '../containers/HeaderContainer';


class PostsShow  extends Component {
  render() {
    return (
      <div>
        <HeaderContainer />
        <div> Blabla poste : </div>
        <PostDetailsContainer id={this.props.params.id}/>
      </div>
    );
  }
}


export default PostsShow ;