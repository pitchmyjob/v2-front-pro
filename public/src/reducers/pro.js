import {
	SIGNUP_PRO, SIGNUP_PRO_SUCCESS, SIGNUP_PRO_FAILURE, PRO, PRO_SUCCESS, PRO_FAILURE, UPDATE_PRO, UPDATE_PRO_SUCCESS, UPDATE_PRO_FAILURE
} from '../actions/pro';

const INITIAL_STATE = {pro: null,  error:null, loading: false, status:null};


export default function(state = INITIAL_STATE, action) {
  let error;
  switch(action.type) {

    case SIGNUP_PRO:// sign in user,  set loading = true and status = signin
    return { ...state, pro: null, error:null, loading: true};
    case SIGNUP_PRO_SUCCESS://return authenticated user,  make loading = false and status = authenticated
    return { ...state, pro: action.payload.data.pro, error:null, loading: false, status:"signup"}; //<-- authenticated
    case SIGNUP_PRO_FAILURE:// return error and make loading = false
    error = action.payload || {message: action.payload.message};//2nd one is network or server down errors
    return { ...state, pro: null,  error:error, loading: false};

    case PRO:// sign in user,  set loading = true and status = signin
    return { ...state, pro: null, error:null, loading: true};
    case PRO_SUCCESS://return authenticated user,  make loading = false and status = authenticated
    return { ...state, pro: action.payload.data, error:null, loading: false, status:"pro"}; //<-- authenticated
    case PRO_FAILURE:// return error and make loading = false
    error = action.payload || {message: action.payload.message};//2nd one is network or server down errors
    return { ...state, pro: null,  error:error, loading: false};

    case UPDATE_PRO:// sign in user,  set loading = true and status = signin
    return { ...state, error:null, loading: true};
    case UPDATE_PRO_SUCCESS://return authenticated user,  make loading = false and status = authenticated
    return { ...state, pro: action.payload.data, error:null, loading: false, status:"update_pro"}; //<-- authenticated
    case UPDATE_PRO_FAILURE:// return error and make loading = false
    error = action.payload || {message: action.payload.message};//2nd one is network or server down errors
    return { ...state, error:error, loading: false};


    default:
    return state;
  }
}