import React, { Component } from 'react';
import { connect } from 'react-redux';
import { router } from 'react-router';

export default function(ComposedComponent) {
  class Authentication extends Component {
    static contextTypes = {
      router: React.PropTypes.object
    }

    checkAuth() {
        if (!this.props.auth.authenticated) {
            let redirectAfterLogin = this.props.location.pathname;
            this.context.router.push('/login');
        }
        
    }

    componentWillMount() {
       this.checkAuth();
    }

    componentWillUpdate(nextProps) {
       this.checkAuth();
    }

    render() {
      return (
              <div>
                  {this.props.auth.authenticated
                      ? <ComposedComponent {...this.props}/>
                      : null
                  }
              </div>
            )
    }
  }

  function mapStateToProps(state) {
    return { auth: state.auth };
  }

  return connect(mapStateToProps)(Authentication);
}