import {
	AUTH, AUTH_SUCCESS, AUTH_FAILURE, UNAUTH_USER, AUTH_VERIF_EMAIL, AUTH_VERIF_EMAIL_SUCCESS, AUTH_VERIF_EMAIL_FAILURE
} from '../actions/auth';

const INITIAL_STATE = {authenticated: false, loading: false,  error:null, message:null};


export default function(state = INITIAL_STATE, action) {
  let error;
  switch(action.type) {

    case AUTH:// sign in user,  set loading = true and status = signin
    return { ...state, authenticated: false, loading: true};
    case AUTH_SUCCESS://return authenticated user,  make loading = false and status = authenticated
    return { ...state, authenticated: true, loading: false}; //<-- authenticated
    case AUTH_FAILURE:// return error and make loading = false
    error = action.payload || {message: action.payload.message};//2nd one is network or server down errors
    return { ...state, authenticated: false, error:true, loading: false, message:error};


    case AUTH_VERIF_EMAIL:// sign in user,  set loading = true and status = signin
    return { ...state, authenticated: false, loading: true};
    case AUTH_VERIF_EMAIL_SUCCESS://return authenticated user,  make loading = false and status = authenticated
    return { ...state, authenticated: false, loading: false}; //<-- authenticated
    case AUTH_VERIF_EMAIL_FAILURE:// return error and make loading = false
    error = action.payload || {message: action.payload.message};//2nd one is network or server down errors
    return { ...state, authenticated: false, error:true, loading: false, message:error};

    case UNAUTH_USER:// reset authenticated user to initial state
    return { ...state, authenticated: false, loading: false,  error:null, message:null};


    default:
    return state;
  }
}