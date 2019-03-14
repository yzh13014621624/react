import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Paymoney from '@/pages/Paymoney';
class App extends Component {
  render () {
    return (
      <div className = "box">
        {/* <header className = "header">头部</header> */}
        {/* Switch每次只能选中一个, component表示跳转到某个页面 */}
        <Switch>
          <Route path = '/paymoney' component = { Paymoney } />
          <Redirect path="/" to="/home" />
        </Switch>
      </div>
    )
  }
}

export default App
