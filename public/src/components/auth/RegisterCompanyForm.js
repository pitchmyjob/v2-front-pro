import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { Field, initialize } from 'redux-form';
import getBase64 from '../../utils/fileToBase64.js'
import Geosuggest from 'react-geosuggest';



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

const textAreaField = (field) => (

    <div className={"form-group fg-float " + (field.meta.touched && field.meta.error ? 'has-error ' : '')}>

      <div className="fg-line ">
        <textarea className="form-control auto-size" {...field.input}  ></textarea>
      </div>

      <label className="fg-label">{field.placeholder}</label>

      {field.meta.touched && field.meta.error &&
         <small className="help-block">{field.meta.error}</small> }

    </div>
)

const selectField = (field) => (

    <div className={"form-group " + (field.meta.touched && field.meta.error ? 'has-error ' : '')}>

      <select className="form-control" id={"select_"+(field.id)} data-live-search="true" {...field.input} >
            <option value="0" >{field.placeholder}</option>
            { field.datas ?
                  field.datas.map(data =>
                     <option value={data.id} key={data.id}>{data.name}</option>)
                : '' }
      </select>

        {field.meta.touched && field.meta.error &&
             <small className="help-block">{field.meta.error}</small> }
    </div>
)

const imageField = (field) => (

      <div >

            {field.input.value &&
            <div className="max-size-logo"> <img src={field.input.value} /> </div> }

      </div>
)


class RegisterCompanyForm extends Component {
   static contextTypes = {
    router: PropTypes.object
  };

  componentWillMount(){
    this.props.fetchPro();
    this.props.fetchIndustry();
    this.props.fetchEmployes();
    document.body.classList.add('login-content');
  }

  componentDidMount (){
      document.getElementById("body").className = "lc-block toggled card";

  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.pro.pro && !nextProps.pro.error && nextProps.pro.status == "update_pro" ) {
      document.body.classList.remove('login-content');
      document.getElementById("body").className = "";
      this.context.router.push('/');
    }
  }

  handleFile(fieldName, event) {

       event.preventDefault();

       var reader = new FileReader();
       reader['change'] = this.props;
       reader.readAsDataURL(event.target.files[0]);
       reader.onload = function () {
           this.change.changeFieldValue('image', reader.result);
       };
       reader.onerror = function (error) {
         return false;
       };
  }

  onSuggestSelect(suggest) {



      for (var i = 0, len = suggest.gmaps.address_components.length; i < len; i++) {
          var gmap = suggest.gmaps.address_components[i];

          if(gmap.types[0]=="postal_code")
              gmap.types[0]="cp";

          this.props.changeFieldValue(gmap.types[0], gmap.long_name);
      }

  }

  render() {
    const { handleSubmit, submitting, user, datas, fields: { image } } = this.props;

    return (
      <div id="l-register">
            <div className="card-header">
                <h2>Information de votre société</h2>
            </div>

           <form onSubmit={handleSubmit(this.props.signupCompany.bind(this))}>

              <Field
                name="webs_site"
                component={renderField}
                type="text"
                placeholder="Site web"  />

              <Field
                name="industry"
                component={selectField}
                datas={datas.industry}
                placeholder="Secteur d'activité"
                id="1"   />

              <Geosuggest
                  className="form-group"
                  inputClassName="form-control fg-input"
                  placeholder="Siege social"
                  onSuggestSelect={this.onSuggestSelect.bind(this)} />

              <Field
                name="employes"
                component={selectField}
                datas={datas.employes}
                placeholder="Nombres d'employés"
                id="2"    />

              <Field
                name="ca"
                component={renderField}
                placeholder="Chiffre d'affaire"  />

              <Field
                name="video_url"
                component={renderField}
                placeholder="Video de présentation"  />

              <Field
                name="description"
                component={textAreaField}
                placeholder="Description"  />

              <p className="f-500 c-black m-b-5">Logo</p>

              <Field
                name="image"
                component={imageField}
                placeholder="Video de présentation"   />

              <input type="file" id="file" onChange={this.handleFile.bind(this, "image")} className="input_hide"/>

              <span className="btn btn-info btn-file">
                    <label htmlFor="file" > <span className="fileinput-new">Choisir un logo</span> </label>
                </span>

            <button type="submit" className="btn btn-login btn-danger btn-float" disabled={submitting}><i className="md md-arrow-forward"></i></button>

          </form>


      </div>

    );
  }
}


export default RegisterCompanyForm;