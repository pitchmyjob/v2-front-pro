import axios from 'axios';

export const PRO = 'PRO';
export const PRO_SUCCESS = 'PRO_SUCCESS';
export const PRO_FAILURE = 'PRO_FAILURE';

export const SIGNUP_PRO = 'SIGNUP_PRO';
export const SIGNUP_PRO_SUCCESS = 'SIGNUP_PRO_SUCCESS';
export const SIGNUP_PRO_FAILURE = 'SIGNUP_PRO_FAILURE';

export const UPDATE_PRO = 'UPDATE_PRO';
export const UPDATE_PRO_SUCCESS = 'UPDATE_PRO_SUCCESS';
export const UPDATE_PRO_FAILURE = 'UPDATE_PRO_FAILURE';

import {ROOT_URL, TOKEN, HEADERS} from '../utils/settings';

export function signUpPro(formValues) {
  const request = axios.post(`${ROOT_URL}/api/pro/signup`, formValues);

  return {
    type: SIGNUP_PRO,
    payload: request
  };
}

export function signUpProSuccess(pro) {
  return {
    type: SIGNUP_PRO_SUCCESS,
    payload: pro
  };
}

export function signUpProFailure(error) {
  return {
    type: SIGNUP_PRO_FAILURE,
    payload: error
  };
}


export function fetchPro() {

  const request = axios({
    method: 'get',
    url: `${ROOT_URL}/api/pro/`,
    headers: HEADERS
  });
  console.log(HEADERS);
  return {
    type: PRO,
    payload: request
  };
}

export function fetchProSuccess(pro) {
  return {
    type: PRO_SUCCESS,
    payload: pro
  };
}

export function fetchProFailure(error) {
  return {
    type: PRO_FAILURE,
    payload: error
  };
}


export function updatePro(datas) {

  const request = axios({
    method: 'put',
    url: `${ROOT_URL}/api/pro/`,
    headers: HEADERS,
    data:datas
  });

  return {
    type: UPDATE_PRO,
    payload: request
  };
}

export function updateProSuccess(pro) {
  return {
    type: UPDATE_PRO_SUCCESS,
    payload: pro
  };
}

export function updateProFailure(error) {
  return {
    type: UPDATE_PRO_FAILURE,
    payload: error
  };
}


