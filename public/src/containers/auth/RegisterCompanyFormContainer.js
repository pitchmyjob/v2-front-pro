import { fetchPro, fetchProSuccess, fetchProFailure, updatePro, updateProSuccess, updateProFailure } from '../../actions/pro';
import { fetchIndustry, fetchIndustrySuccess, fetchIndustryFailure, fetchEmployes, fetchEmployesSuccess, fetchEmployesFailure } from '../../actions/datas';
import { reduxForm, connectReduxForm, change  } from 'redux-form';
import {connect} from 'react-redux';
import notify from '../../utils/notify'


import RegisterCompanyForm from '../../components/auth/RegisterCompanyForm.js';

//Client side validation
function validate(values) {
  var errors = {};
  var hasErrors = true;

  if (!values.industry || values.industry == '0') {
    errors.industry = 'Enter industry';
    hasErrors = true;
  }
    
  return hasErrors && errors;
}

const validateAndSave= (values, dispatch) => {

  return new Promise((resolve, reject) => {

   dispatch(updatePro(values))
    .then((response) => {
        let data = response.payload.data;

        if(response.payload.status != 200) {
           dispatch(updateProFailure(response.payload));
           reject(data);
         } else {
          dispatch(updateProSuccess(response.payload));
          resolve();
        }
      });
  });

};



const mapDispatchToProps = (dispatch) => {
  return {
   signupCompany: validateAndSave,
   fetchPro: () => {
      dispatch(fetchPro()).then((response) => {
            !response.error ? dispatch(fetchProSuccess(response.payload)) : dispatch(fetchProFailure(response.payload));
          });
   },
   fetchIndustry: () => {
      dispatch(fetchIndustry()).then((response) => {
            !response.error ? dispatch(fetchIndustrySuccess(response.payload)) : dispatch(fetchIndustryFailure(response.payload));
          });
   },
   fetchEmployes: () => {
      dispatch(fetchEmployes()).then((response) => {
            !response.error ? dispatch(fetchEmployesSuccess(response.payload)) : dispatch(fetchEmployesFailure(response.payload));
          });
   },
    changeFieldValue: function(field, value) {
       dispatch(change("RegisterCompanyForm", field, value))
    }
  }
}


function mapStateToProps(state, ownProps) {
  return {
    pro: state.pro,
    auth: state.auth,
    datas: state.datas,
  };
}



const config = {
    form: 'RegisterCompanyForm',
    fields: ['web_site', 'industry', 'address', 'image', 'latitude', 'longitude', 'street_number', 'route', 'cp', 'locality', 'administrative_area_level_2', 'administrative_area_level_1', 'country'],
    validate: validate,
}


const RegisterCompanyFormContainer = reduxForm(config)(connect(mapStateToProps, mapDispatchToProps)(RegisterCompanyForm))


export default RegisterCompanyFormContainer