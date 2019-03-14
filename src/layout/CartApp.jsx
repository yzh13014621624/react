import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Cart from '@/pages/Cart'
import Cart1 from '@/pages/Cart1'
import Cart2 from '@/pages/Cart2'
class App extends Component {
  render () {
    return (
      <div className = "box">
        {/* <header className = "header">头部</header> */}
        {/* Switch每次只能选中一个, component表示跳转到某个页面 */}
        <Switch>
          <Route path="/cartapp/cart" component = { Cart } />
          <Route path="/cartapp/cart1" component = { Cart1 } />
          <Route path="/cartapp/cart2" component = { Cart2 } />
        </Switch>
      </div>
    )
  }
}

export default App
