import React, { Component } from 'react';
import { NavLink, Switch, Route, Redirect } from 'react-router-dom';
import Home from '@/pages/Home'
import Search from '@/pages/Search';
import Kind from '@/pages/Kind'
import User from '@/pages/User'
class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      color: '#000'
    }
  }
  gocart (event) {
    event.preventDefault();
    var storage = window.localStorage;
    let arr = JSON.parse(storage.getItem('data'))
    if (arr === null) {
      this.props.history.push('/cartapp/cart2')
    } else {
      this.props.history.push('/cartapp/cart')
    }
  }

  render () {
    return (
      <div className = "box">
        {/* <header className = "header">头部</header> */}
        {/* Switch每次只能选中一个, component表示跳转到某个页面 */}
        <Switch>
          <Route path="/home" component = { Home } />
          <Route path="/search" component = { Search } />
          <Route path="/kind" component = { Kind } />
          <Route path="/user" component = { User } />
          <Redirect path="/" to="/home" />
        </Switch>
        <footer className = "footer">
          <ul>
            <NavLink to = "/home" replace><i className = 'iconfont icon-home'></i><span>首页</span></NavLink>
            <NavLink to = "/kind" replace><i className = 'iconfont icon-hebingxingzhuang'></i><span>分类</span></NavLink>
            <NavLink to='/cart' replace onClick={this.gocart.bind(this)} ><i className = 'iconfont icon-gouwuche'></i><span>购物车</span></NavLink>
            <NavLink to = "/user" replace ><i className = 'iconfont icon-yonghu'></i><span>我的</span></NavLink>
          </ul>
        </footer>
      </div>
    )
  }
}

export default App
