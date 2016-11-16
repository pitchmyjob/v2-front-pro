import axios from 'axios';

export const AUTH = 'AUTH';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_FAILURE = 'AUTH_FAILURE';
export const UNAUTH_USER = 'UNAUTH_USER';

export const AUTH_VERIF_EMAIL = 'AUTH_VERIF_EMAIL';
export const AUTH_VERIF_EMAIL_SUCCESS = 'AUTH_VERIF_EMAIL_SUCCESS';
export const AUTH_VERIF_EMAIL_FAILURE = 'AUTH_VERIF_EMAIL_FAILURE';

import { ROOT_URL } from '../utils/settings';

export function loginUser(formValues) {
  const request = axios.post(`${ROOT_URL}/auth/pro/login`, formValues);

  return {
    type: AUTH,
    payload: request
  };
}

export function loginUserSuccess() {
  return {
    type: AUTH_SUCCESS
  };
}

export function loginUserFailure(error) {
  return {
    type: AUTH_FAILURE,
    payload: error
  };
}

export function logoutUser(error) {
  
  return {
    type: UNAUTH_USER
  };
}


export function validateEmail(formValues) {
  const request = axios.post(`${ROOT_URL}/auth/verification-email`, formValues);

  return {
    type: AUTH_VERIF_EMAIL,
    payload: request
  };
}

export function validateEmailSuccess() {
  return {
    type: AUTH_VERIF_EMAIL_SUCCESS,
  };
}

export function validateEmailFailure(error) {
  return {
    type: AUTH_VERIF_EMAIL_FAILURE,
    payload: error
  };
}