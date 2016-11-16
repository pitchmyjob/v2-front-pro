import React from 'react';
import { Component } from 'react';
import { initialize } from 'redux-form';
import LoginFormContainer from '../../containers/auth/LoginFormContainer';

export default class App extends Component {

  render() {
    return (
        <div>
            <LoginFormContainer />
        </div>
    );
  }
}