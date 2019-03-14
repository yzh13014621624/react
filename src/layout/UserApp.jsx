import React, {Component} from 'react';
import {  Switch, Route } from 'react-router-dom';
import Login from '@/pages/Login';
import Register from '@/pages/Register';

class Com extends Component {
 render() {
  return (
    <div className = "main">
      <Switch>
        <Route path = '/userapp/login' component = { Login } ></Route>
        <Route path = '/userapp/register' component = { Register } ></Route>
      </Switch>
   </div>
  )
 }
}
export default Com