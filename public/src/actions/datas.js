import axios from 'axios';

export const FETCH_INDUSTRY = 'FETCH_INDUSTRY';
export const FETCH_INDUSTRY_SUCCESS = 'FETCH_INDUSTRY_SUCCESS';
export const FETCH_INDUSTRY_FAILURE = 'FETCH_INDUSTRY_FAILURE';

export const FETCH_EMPLOYES = 'FETCH_EMPLOYES';
export const FETCH_EMPLOYES_SUCCESS = 'FETCH_EMPLOYES_SUCCESS';
export const FETCH_EMPLOYES_FAILURE = 'FETCH_EMPLOYES_FAILURE';

import {ROOT_URL, TOKEN, HEADERS} from '../utils/settings';

export function fetchIndustry() {
  const request = axios.get(`${ROOT_URL}/api/datas/industry` );

  return {
    type: FETCH_INDUSTRY,
    payload: request
  };
}

export function fetchIndustrySuccess(industry) {
  return {
    type: FETCH_INDUSTRY_SUCCESS,
    payload: industry
  };
}

export function fetchIndustryFailure(error) {
  return {
    type: FETCH_INDUSTRY_FAILURE,
    payload: error
  };
}




export function fetchEmployes() {
  const request = axios.get(`${ROOT_URL}/api/datas/employes` );

  return {
    type: FETCH_EMPLOYES,
    payload: request
  };
}

export function fetchEmployesSuccess(employes) {
  return {
    type: FETCH_EMPLOYES_SUCCESS,
    payload: employes
  };
}

export function fetchEmployesFailure(error) {
  return {
    type: FETCH_EMPLOYES_FAILURE,
    payload: error
  };
}
