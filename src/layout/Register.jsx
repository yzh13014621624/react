import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Register from '@/pages/Register'
class App extends Component {
  render () {
    return (
      <div className = "box">
        {/* <header className = "header">头部</header> */}
        {/* Switch每次只能选中一个, component表示跳转到某个页面 */}
        <Switch>
          <Route path="/register" component = { Register } />
        </Switch>
        
      </div>
    )
  }
}

export default App
