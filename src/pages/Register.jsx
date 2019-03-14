import React, { Component } from 'react';
import { Toast, InputItem, Button } from 'antd-mobile'
import { Link } from 'react-router-dom';
import api from '@/api/user/register'
import '../components/register.scss'

class Com extends Component {
  constructor (props) {
    super(props);
    this.state = {
      value: '',
      passwordValue: '',
      hasError: false,
      hasPasswordError: false,
      myCode: 0
    }
  }
  
  onErrorClick = () => {
    if (this.state.hasError) {
      Toast.info('手机格式不正确');
    }
  }

  onPasswordErrorClick = () => {
    if (this.state.hasPasswordError) {
      Toast.info('密码格式不正确');
    }
  }

  onChange = (value) => {
    if (value.replace(/\s/g, '').length < 11) {
      this.setState({
        hasError: true,
      });
    } else {
      this.setState({
        hasError: false,
      });
    }
    this.setState({
      value,
    });
  }

  onPasswordChange = (passwordValue) => {
    if (passwordValue.replace(/\s/g, '').length < 6) {
      this.setState({
        hasPasswordError: true,
      });
    } else {
      this.setState({
        hasPasswordError: false,
      });
    }
    this.setState({
      passwordValue,
    });
  }

  registerFn (username, password) {
    // console.log(username, password)
    api.requestUserData({username, password})
      .then(data => {
        console.log(data)
        console.log(data)
        if (data.data=== 0) {
          Toast.fail('该用户名已被注册')
        } else if (data.data === 1) {
          Toast.success('注册成功')
          this.props.history.push('/userapp/login');
        } else {
          Toast.info('注册失败')
        }
      })
  }

  // getCode (phone) {
  //   // console.log(phone)
  //   api.requestCode(phone).then(data => {
  //     if (data.data === 1) {
  //       Toast.info('该手机号已被注册')
  //       // this.massge = '获取验证码'
  //       // clearInterval(timer)
  //     } else {
  //       if (data.data === 0) {
  //         Toast.fail('获取验证码失败')
  //         // this.message = '获取验证码'
  //         // clearInterval(timer)
  //       } else {
  //         Toast.success('获取验证码成功')
  //         this.setState({
  //           myCode: data.data.code
  //         })
  //       }
  //     }

  //   })
  // }
  render() {
    let type = ''
    let disabled = true
    if (this.state.hasError === false && this.state.hasPasswordError === false && this.state.value.length > 0 && this.state.passwordValue.length > 0) {
      type = 'primary';
      disabled = false
    }
    return (
      <div className = 'content3'>
        <div className = 'top'>
          注册
        </div>
        <InputItem
          type="phone"
          placeholder="请输入手机号"
          error={this.state.hasError}
          onErrorClick={this.onErrorClick}
          onChange={this.onChange}
          value={this.state.value}
          className = "input1"
        ></InputItem>
        {/* <InputItem
          type="digit"
          placeholder="请输入验证码"
          // error={this.state.hasError}
          // onErrorClick={this.onErrorClick}
          // onChange={this.onChange}
          // value={this.state.value}
          className = "input1"
        >
          <Button onClick = { this.getCode.bind(this, this.state.value) } className = 'getCode'>获取</Button>
        </InputItem> */}
         <InputItem
            type="password"
            clear
            placeholder="请输入密码"
            error={this.state.hasPasswordError}
            onErrorClick={this.onPasswordErrorClick.bind(this)}
            onChange={this.onPasswordChange.bind(this)}
            value={this.state.passwordValue}
            className = "input1"
          ></InputItem>
          <Button type = { type } disabled = { disabled } onClick = { this.registerFn.bind(this, this.state.value, this.state.passwordValue) }>立即注册</Button>
          <span>
            <br/>
            <Link to = '/userapp/login' className = "btn1">去登陆</Link>
          </span>
      </div>
    );
  }
}

export default Com
