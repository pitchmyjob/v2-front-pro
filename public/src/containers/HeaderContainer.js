import { connect } from 'react-redux'
import { logoutUser} from '../actions/auth';

import Header from '../components/Header.js';


const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
       logout: () => {
          localStorage.removeItem('token');
          sessionStorage.removeItem('token_session');
          dispatch( logoutUser() );
      }
  }
}


const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header)

export default HeaderContainer