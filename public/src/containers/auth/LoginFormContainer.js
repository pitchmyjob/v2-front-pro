import { loginUser, loginUserSuccess, loginUserFailure } from '../../actions/auth';
import { reduxForm, connectReduxForm } from 'redux-form';
import {connect} from 'react-redux';
import notify from '../../utils/notify'

import LoginForm from '../../components/auth/LoginForm.js';

//Client side validation
function validate(values) {
  var errors = {};
  var hasErrors = false;
  if (!values.email || values.email.trim() === '') {
    errors.email = 'Enter username';
    hasErrors = true;
  }
  if(!values.password || values.password.trim() === '') {
    errors.password = 'Enter password';
    hasErrors = true;
  }
   return hasErrors && errors;
}

const validateAndSignInUser = (values, dispatch) => {
  return new Promise((resolve, reject) => {

   dispatch(loginUser(values))
    .then((response) => {
        let data = response.payload.data;
        //if any one of these exist, then there is a field error
        if(response.payload.status != 200) {
          //let other components know of error by updating the redux` state
           notify("danger", "Connexion impossible : ", "L'email et le mot de passe ne correspondent pas.");
           dispatch(loginUserFailure(response.payload));
           reject(data); //this is for redux-form itself
         } else {
          //store JWT Token to browser session storage
          //If you use localStorage instead of sessionStorage, then this w/ persisted across tabs and new windows.
          //sessionStorage = persisted only in current tab

          localStorage.setItem('token', response.payload.data.token);
          sessionStorage.setItem('token_session', response.payload.data.token);
            
          //let other components know that we got user and things are fine by updating the redux` state
          dispatch(loginUserSuccess());
          resolve();//this is for redux-form itself
        }
      });
  });
};


const mapDispatchToProps = (dispatch) => {
  return {
   signInUser: validateAndSignInUser,
   resetMe: () =>{
    //sign up is not reused, so we dont need to resetUserFields
    //in our case, it will remove authenticated users
        dispatch(resetUser());
    }
  }
}


function mapStateToProps(state, ownProps) {
  return {
    auth: state.auth
  };
}



const config = {
    form: 'LoginForm',
    fields: ['email', 'password'],
    validate: validate
}


const LoginFormContainer = reduxForm(config)(connect(mapStateToProps, mapDispatchToProps)(LoginForm))


export default LoginFormContainer