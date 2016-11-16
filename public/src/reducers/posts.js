import {
	FETCH_POSTS, FETCH_POSTS_SUCCESS, FETCH_POSTS_FAILURE, RESET_POSTS, FETCH_POST, FETCH_POST_SUCCESS, FETCH_POST_FAILURE, RESET_ACTIVE_POST
} from '../actions/posts';

const INITIAL_STATE = { postsList: {posts: [], error:null, loading: false},
							newPost:{post:null, error: null, loading: false},
							activePost:{post:null, error:null, loading: false},
							deletedPost: {post: null, error:null, loading: false},
						};


export default function(state = INITIAL_STATE, action) {
  let error;
  switch(action.type) {

  case FETCH_POSTS:// start fetching posts and set loading = true
  	return { ...state, postsList: {posts:[], error: null, loading: true} };
  case FETCH_POSTS_SUCCESS:// return list of posts and make loading = false
    return { ...state, postsList: {posts: action.payload.data, error:null, loading: false} };
  case FETCH_POSTS_FAILURE:// return error and make loading = false
    error = action.payload.data || {message: action.payload.message};//2nd one is network or server down errors
    return { ...state, postsList: {posts: [], error: error, loading: false} };
  case RESET_POSTS:// reset postList to initial state
    return { ...state, postsList: {posts: [], error:null, loading: false} };
  case FETCH_POST:
    return { ...state, activePost:{...state.activePost, loading: true}};
  case FETCH_POST_SUCCESS:
    return { ...state, activePost: {post: action.payload.data, error:null, loading: false}};
  case FETCH_POST_FAILURE:
    error = action.payload.data || {message: action.payload.message};//2nd one is network or server down errors
    return { ...state, activePost: {post: null, error:error, loading:false}};
  case RESET_ACTIVE_POST:
    return { ...state, activePost: {post: null, error:null, loading: false}};

  default:
    return state;
  }
}