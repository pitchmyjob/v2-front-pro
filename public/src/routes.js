import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './pages/App'
import Dashboard from './pages/Dashboard'
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import RegisterCompany from './pages/auth/RegisterCompany';

import RequireAuth from '././containers/auth/AuthRequired.js';



export default (
   <Route path="/" component={App}>
      <IndexRoute component={RequireAuth(Dashboard)} />
      <Route path="login" component={Login} name="login" />
      <Route path="register" component={Register} name="register" />
      <Route path="register/company" component={RequireAuth(RegisterCompany)} name="register-step-2" />
  </Route>
)