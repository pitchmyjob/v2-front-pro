import { signUpPro, signUpProSuccess, signUpProFailure } from '../../actions/pro';
import { loginUser, loginUserSuccess, validateEmail, validateEmailSuccess, validateEmailFailure } from '../../actions/auth';
import { reduxForm, connectReduxForm } from 'redux-form';
import {connect} from 'react-redux';
import notify from '../../utils/notify'

import RegisterForm from '../../components/auth/RegisterForm.js';

//Client side validation
function validate(values) {
  var errors = {};
  var hasErrors = false;


  if (!values.company || values.company.trim() === '') {
    errors.company = 'Required';
    hasErrors = true;
  }

  if (!values.first_name || values.first_name.trim() === '') {
    errors.first_name = 'Required';
    hasErrors = true;
  }

  if (!values.last_name || values.last_name.trim() === '') {
    errors.last_name = 'Required';
    hasErrors = true;
  }

   if (!values.confirme_password || values.confirme_password.trim() === '') {
    errors.confirme_password = 'Required';
    hasErrors = true;
  }

  if (!values.password || values.password.trim() === '') {
    errors.password = 'Required';
    hasErrors = true;
  } else if (values.password.length < 6 ) {
    errors.password = 'Must be 6 characters or more'
  }

  if (values.confirme_password && values.password ) {
       if (values.password != values.confirme_password ) {
            errors.confirme_password = 'Password must be the same';
            hasErrors = true;
          }
   }
    
  if (!values.company || values.company.trim() === '') {
    errors.company = 'Enter company';
    hasErrors = true;
  }


  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address' }

   if (!values.cgu ) {
    errors.cgu = 'Required';
    hasErrors = true;
  }

  return hasErrors && errors;
}

const validateAndSignUpPro= (values, dispatch) => {
  return new Promise((resolve, reject) => {

   dispatch(signUpPro(values))
    .then((response) => {
        let data = response.payload.data;
        //if any one of these exist, then there is a field error
        if(response.payload.status != 200) {
          //let other components know of error by updating the redux` state
           //notify("danger", "Connexion impossible : ", "L'email et le mot de passe ne correspondent pas.");
           dispatch(signUpProFailure(response.payload));
           reject(data); //this is for redux-form itself
         } else {
          //store JWT Token to browser session storage
          //If you use localStorage instead of sessionStorage, then this w/ persisted across tabs and new windows.
          //sessionStorage = persisted only in current tab
          console.log(response.payload.data.token);
          sessionStorage.setItem('token_session', response.payload.data.token);
          localStorage.setItem('token', response.payload.data.token);
          //let other components know that we got user and things are fine by updating the redux` state
          dispatch(signUpProSuccess(response.payload));
          dispatch(loginUserSuccess());
          resolve();//this is for redux-form itself
        }
      });
  });

};


//For instant async server email validation
const asyncValidate = (values, dispatch) => {

    console.log(values);

  return new Promise((resolve, reject) => {

    dispatch(validateEmail(values))
    .then((response) => {

        let data = response.payload.data;
        if(response.payload.status == 200 && data.email) {
           dispatch(validateEmailSuccess());
           resolve();
         } else {
          dispatch(validateEmailFailure(response.payload));

          reject( {'email' : "Cet adresse email n'est pas disponible" } );
        }

      });
  });
};



const mapDispatchToProps = (dispatch) => {
  return {
   signUpPro: validateAndSignUpPro,
   resetMe: () =>{
    //sign up is not reused, so we dont need to resetUserFields
    //in our case, it will remove authenticated users
        //dispatch(resetUser());
    }
  }
}


function mapStateToProps(state, ownProps) {
  return {
    pro: state.pro,
    auth: state.auth
  };
}



const config = {
    form: 'RegisterForm',
    fields: ['company', 'email', 'last_name', 'first_name', 'password', 'phone', 'confirme_password', 'cgu', 'phone'],
    validate: validate,
    asyncValidate: asyncValidate,
    asyncBlurFields: ['email'],
}


const RegisterFormContainer = reduxForm(config)(connect(mapStateToProps, mapDispatchToProps)(RegisterForm))


export default RegisterFormContainer