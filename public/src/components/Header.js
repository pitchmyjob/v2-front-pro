import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';


export default class Header extends Component {

   static contextTypes = {
    router: PropTypes.object
  };
    
  componentWillMount(state) {
  }
    


  render() {
    return (
      <nav className="navbar navbar-default navbar-static-top">
          <div id="navbar" className="navbar-collapse collapse">
             <ul className="nav  nav-pills navbar-right">
      			<li style={{paddingRight: '10px'}} role="presentation">
      				<Link style={{color:'#337ab7',  fontSize: '17px'}} to="/login">
      				    Login
                    </Link>
                </li>
                <li style={{paddingRight: '10px'}} role="presentation">
                  <a style={{color:'#996633',  fontSize: '17px'}}  onClick={this.props.logout} href="javascript:void(0)">
                  Log out
                  </a>
                </li>
    		</ul>
        </div>
     </nav>
    );
  }
}