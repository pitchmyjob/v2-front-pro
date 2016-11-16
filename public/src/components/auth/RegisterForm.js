import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { Field } from 'redux-form'

const renderField = (field) => (

    <div className={"form-group fg-float " + (field.meta.touched && field.meta.error ? 'has-error ' : '')}>

      <div className="fg-line ">
        <input {...field.input} type={field.type} className="form-control fg-input"  />
      </div>
      <label className="fg-label">{field.placeholder}</label>

      {field.meta.touched && field.meta.error &&
         <small className="help-block">{field.meta.error}</small> }

    </div>
)

const renderCheckBox = (field) => (

    <div className={"checkbox  " + (field.meta.touched && field.meta.error ? 'has-error' : '')}>
        <label>
            <input type="checkbox" {...field.input} />
            <i className="input-helper"></i> Accepter les conditions générales d'utilisation
        </label>

    </div>
)


class RegisterForm extends Component {
   static contextTypes = {
    router: PropTypes.object
  };

  componentWillReceiveProps(nextProps) {
        if(nextProps.auth.authenticated) {
            document.body.classList.remove('login-content');
            document.getElementById("body").className = "";
            this.context.router.push('/register/company');
        }
  }

  componentWillMount(){
    document.body.classList.add('login-content');

  }

  componentDidMount (){
       document.getElementById("body").className = "lc-block toggled card";
  }


  render() {
    const { handleSubmit, submitting, user } = this.props;

    return (
      <div id="l-register">
            <div className="card-header">
                <h2>Inscription</h2>
            </div>

           <form onSubmit={handleSubmit(this.props.signUpPro.bind(this))}>

              <Field
                name="company"
                component={renderField}
                type="text"
                placeholder="Entreprise"  />

               <Field
                name="email"
                component={renderField}
                type="text"
                placeholder="Email"  />

               <Field
                name="last_name"
                component={renderField}
                type="text"
                placeholder="Nom"  />

              <Field
                name="first_name"
                component={renderField}
                type="text"
                placeholder="Prénom"  />

              <Field
                name="phone"
                component={renderField}
                type="text"
                placeholder="Téléphone"  />

              <Field
                name="password"
                component={renderField}
                type="password"
                placeholder="Mot de passe"  />

              <Field
                name="confirme_password"
                component={renderField}
                type="password"
                placeholder="Confirmer mot de passe"  />

              <Field
                name="cgu"
                component={renderCheckBox} />

            <button type="submit" className="btn btn-login btn-danger btn-float" disabled={submitting}><i className="md md-arrow-forward"></i></button>

          </form>

            <ul className="login-navigation">
                <li data-block="#l-login" className="bgm-red"> <Link to="/login" className="a-white" > S'inscrire </Link> </li>
                <li className="bgm-blue">Forgot Password?</li>
            </ul>

      </div>

    );
  }
}


export default RegisterForm;