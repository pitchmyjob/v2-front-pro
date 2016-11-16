import {
	SIGNIN_USER, SIGNIN_USER_SUCCESS, SIGNIN_USER_FAILURE, RESET_USER
} from '../actions/users';

const INITIAL_STATE = {user: null, status:null, error:null, loading: false};


export default function(state = INITIAL_STATE, action) {
  let error;
  switch(action.type) {

    case SIGNIN_USER:// sign in user,  set loading = true and status = signin
    return { ...state, user: null, status:'signin', error:null, loading: true};
    case SIGNIN_USER_SUCCESS://return authenticated user,  make loading = false and status = authenticated
    return { ...state, user: action.payload.data.token, status:'authenticated', error:null, loading: false}; //<-- authenticated
    case SIGNIN_USER_FAILURE:// return error and make loading = false
    error = action.payload || {message: action.payload.message};//2nd one is network or server down errors
    return { ...state, user: null, status:'signin', error:error, loading: false};

    case RESET_USER:// reset authenticated user to initial state
    return { ...state, user: null, status:null, error:null, loading: false};


    default:
    return state;
  }
}