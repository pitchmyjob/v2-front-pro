import React, { Component } from 'react';
import { Link } from 'react-router';

class PostDetails extends Component {
  componentWillMount() {
    this.props.fetchPost(this.props.postId);
  }




  render() {

    const { post, loading, error } = this.props.activePost;

    if (loading) {
      return <div className="container">Loading...</div>;
    } else if(error) {
      return  <div className="alert alert-danger">{error.message}</div>
    } else if(!post) {
      return <span />
    }

    return (
      <div className="container">
        <h1>Posts</h1>
        <ul className="list-group">
          {post.title}
        </ul>
        <div>
        </div>
      </div>
    );
  }
}


export default PostDetails;