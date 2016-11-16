import { connect } from 'react-redux'
import { fetchPost, fetchPostSuccess, fetchPostFailure } from '../actions/posts';

import PostDetails from '../components/PostDetails';


const mapStateToProps = (state, ownProps) => {
  return { activePost: state.posts.activePost, postId: ownProps.id };
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPost: (id) => {
      dispatch(fetchPost(id)).then((response) => {
            !response.error ? dispatch(fetchPostSuccess(response.payload)) : dispatch(fetchPostFailure(response.payload));
          });
    }
  }
}


const PostDetailsContainer = connect(mapStateToProps, mapDispatchToProps)(PostDetails)

export default PostDetailsContainer