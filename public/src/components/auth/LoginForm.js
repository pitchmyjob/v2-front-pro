import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { reduxForm, Field } from 'redux-form'


const renderField = (field) => (
    <div className={"form-group " + (field.meta.touched && field.meta.error ? 'has-error has-feedback' : '')}>

      <div className="fg-line ">
        <input {...field.input} type={field.type} className="form-control" placeholder={field.placeholder} />
      </div>

      {field.meta.touched && field.meta.error &&
         <small className="help-block">{field.meta.error}</small> }

    </div>
  )



class LoginForm extends Component {
   static contextTypes = {
    router: PropTypes.object
  };

  componentWillReceiveProps(nextProps) {
    if(nextProps.auth.authenticated) {
        document.body.classList.remove('login-content');
        document.getElementById("body").className = "";
       this.context.router.push('/');
    }
    //error
    //Throw error if it was not already thrown (check this.props.user.error to see if alert was already shown)
    //If u dont check this.props.user.error, u may throw error multiple times due to redux-form's validation errors
    //if(nextProps.user.status === 'signin' && !nextProps.user.user && nextProps.user.error && !this.props.user.error) {
      //alert('error');
    //}
  }

  componentWillMount(){
    document.body.classList.add('login-content');

  }

  componentDidMount (){
       document.getElementById("body").className = "lc-block toggled";
  }


  render() {
    const { handleSubmit, submitting, user } = this.props;

    return (
      <div id="l-login">

         <div className="login-logo">
            <img src="https://s3-eu-west-1.amazonaws.com/dev-pitchmyjob/static/img/logo.png" />
         </div>

          <form onSubmit={handleSubmit(this.props.signInUser.bind(this))}>

              <Field
                name="email"
                component={renderField}
                type="text"
                placeholder="Email"  />


              <Field
                name="password"
                component={renderField}
                type="password"
                placeholder="Mot de passe" />


            <button type="submit" className="btn btn-login btn-danger btn-float" disabled={submitting}><i className="md md-arrow-forward"></i></button>


          </form>

            <ul className="login-navigation">
                <li className="bgm-red"> <Link to="/register" className="a-white" data-block="#l-register" > S'inscrire </Link> </li>
                <li className="bgm-blue">Forgot Password?</li>
            </ul>

      </div>

    );
  }
}


export default LoginForm;