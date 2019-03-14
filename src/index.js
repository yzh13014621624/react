import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import App from './layout/App';
import UserApp from '@/layout/UserApp';
import Register from '@/layout/Register';
import DetailApp from '@/layout/DetailApp';
import CartApp from '@/layout/CartApp';
import ShoucangApp from '@/layout/ShoucangApp';
import PaymoneyApp from '@/layout/PaymoneyApp';
import * as serviceWorker from './serviceWorker';
import './main.scss';
import 'antd-mobile/lib/date-picker/style/css';        // 加载 CSS
import store from './store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store = { store }>
    <Router>
      <Switch>
        <Route path="/detail" component = { DetailApp } />
        <Route path="/userapp" component = { UserApp } />
        <Route path="/cartapp" component = { CartApp } />
        <Route path="/shoucang" component = { ShoucangApp } />   
        <Route path="/paymoney" component = { PaymoneyApp } /> 
        <Route path="/register" component = { Register } />
        <Route path="/" component = { App } />
      </Switch>
    </Router>
  </Provider>,

  document.getElementById('root'));


// 可以手动订阅更新，也可以事件绑定到视图层。

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
