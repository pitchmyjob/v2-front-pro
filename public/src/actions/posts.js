import axios from 'axios';

//Post list
export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE';
export const RESET_POSTS = 'RESET_POSTS';

//Post
export const FETCH_POST = 'FETCH_POST';
export const FETCH_POST_SUCCESS = 'FETCH_POST_SUCCESS';
export const FETCH_POST_FAILURE = 'FETCH_POST_FAILURE';
export const RESET_ACTIVE_POST = 'RESET_ACTIVE_POST';


const ROOT_URL = 'http://heyu.fr/api';


export function fetchPosts() {
  const request = axios({
    method: 'get',
    url: `${ROOT_URL}/events`,
    headers: []
  });

  return {
    type: FETCH_POSTS,
    payload: request
  };
}

export function fetchPostsSuccess(posts) {
  return {
    type: FETCH_POSTS_SUCCESS,
    payload: posts
  };
}

export function fetchPostsFailure(error) {
  return {
    type: FETCH_POSTS_FAILURE,
    payload: error
  };
}


export function fetchPost(id) {

  const request = axios({
    method: 'get',
    url: `${ROOT_URL}/event/${id}/`,
    headers: {
        'Authorization' : ' Token 811773105fcf75eb992738e4116ca9669bc17a3f'
    }
  });

  return {
    type: FETCH_POST,
    payload: request
  };
}

export function fetchPostSuccess(activePost) {
  return {
    type: FETCH_POST_SUCCESS,
    payload: activePost
  };
}

export function fetchPostFailure(error) {
  return {
    type: FETCH_POST_FAILURE,
    payload: error
  };
}

export function resetActivePost() {
  return {
    type: RESET_ACTIVE_POST
  }
};

