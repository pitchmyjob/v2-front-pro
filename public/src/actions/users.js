import axios from 'axios';

//Sign In User
export const SIGNIN_USER = 'SIGNIN_USER';
export const SIGNIN_USER_SUCCESS = 'SIGNIN_USER_SUCCESS';
export const SIGNIN_USER_FAILURE = 'SIGNIN_USER_FAILURE';

export const RESET_USER = 'RESET_USER';

import ROOT_URL from '../utils/settings';


export function signInUser(formValues) {
  const request = axios.post(`${ROOT_URL}/token-auth/`, formValues);

  return {
    type: SIGNIN_USER,
    payload: request
  };
}

export function signInUserSuccess(user) {
  return {
    type: SIGNIN_USER_SUCCESS,
    payload: user
  };
}

export function signInUserFailure(error) {
  return {
    type: SIGNIN_USER_FAILURE,
    payload: error
  };
}


export function resetUser() {
  return {
    type: RESET_USER,
  };
}