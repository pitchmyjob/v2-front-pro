import {
	FETCH_INDUSTRY, FETCH_INDUSTRY_SUCCESS, FETCH_INDUSTRY_FAILURE, FETCH_EMPLOYES, FETCH_EMPLOYES_SUCCESS, FETCH_EMPLOYES_FAILURE
} from '../actions/datas';

const INITIAL_STATE = {industry: null,  error:null, loading: false, employes: null};


export default function(state = INITIAL_STATE, action) {
  let error;
  switch(action.type) {

    case FETCH_INDUSTRY:// sign in user,  set loading = true and status = signin
    return { ...state, industry: null, error:null, loading: true};
    case FETCH_INDUSTRY_SUCCESS://return authenticated user,  make loading = false and status = authenticated
    return { ...state, industry: action.payload.data, error:null, loading: false}; //<-- authenticated
    case FETCH_INDUSTRY_FAILURE:// return error and make loading = false
    error = action.payload || {message: action.payload.message};//2nd one is network or server down errors
    return { ...state, industry: null,  error:error, loading: false};

    case FETCH_EMPLOYES:// sign in user,  set loading = true and status = signin
    return { ...state, employes: null, error:null, loading: true};
    case FETCH_EMPLOYES_SUCCESS://return authenticated user,  make loading = false and status = authenticated
    return { ...state, employes: action.payload.data, error:null, loading: false}; //<-- authenticated
    case FETCH_EMPLOYES_FAILURE:// return error and make loading = false
    error = action.payload || {message: action.payload.message};//2nd one is network or server down errors
    return { ...state, employes: null,  error:error, loading: false};


    default:
    return state;
  }
}