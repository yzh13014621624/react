import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { NavBar, Icon, Popover, InputItem, WhiteSpace, Button, Toast } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css'; 
import api from '@/api/login/index'
import '@/api/login/login.scss'

const Item = Popover.Item;

const myImg = src => <img src={`https://gw.alipayobjects.com/zos/rmsportal/${src}.svg`} className="am-icon am-icon-xs" alt="" />;

class Com extends Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false,
      selected: '',
      hasError: false,
      value: '18738519905',
      haspasswordError: false,
      passwordvalue: '123456'
    }
  }

  onSelect = (opt) => {
    // console.log(opt.props.value);
    this.setState({
      visible: true,
      selected: opt.props.value,
    });
  };
  handleVisibleChange = (visible) => {
    this.setState({
      visible,
    });
  };

  //用户验证的
  onErrorClick = () => {
    if (this.state.hasError) {
      Toast.info('请输入正确格式的用户名');
    }
  }
  onpasswordErrorClick () {
    if (this.state.hasPasswordError) {
      Toast.info('请输入正确格式的密码');
    }
  }
  onChange = (value) => {
    if (value.replace(/\s/g, '').length !== 11) {
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

  onpasswordChange = (passwordvalue) => {
    if (passwordvalue.replace(/\s/g, '').length < 6) {
      this.setState({
        haspasswordError: true,
      });
    } else {
      this.setState({
        haspasswordError: false,
      });
    }
    this.setState({
      passwordvalue,
    });
  }

  login(username,password) {
    api.requestuser({username,password}).then(data => {
      // console.log(data)
      if (data.data === 1) {
        var storage = window.localStorage;
        storage.setItem('isLogin', JSON.stringify('ok'))
        this.props.history.push('/home')
        storage.setItem('isnb', JSON.stringify(username))
      }
      console.log(data.data)
    })
  }
  render () {
    let type = ''
    let disabled = true
    // console.log(this.state.value,this.state.passwordvalue)
    if (this.state.hasError === false && this.state.haspasswordError === false ) {
      // console.log(11)
      type = 'primary';
      disabled = false
    }
    return (
      <div className = "content4">
      <div className = "ccc">
      <NavBar
        mode="light"
        icon={<Icon type="left" />}
        onLeftClick={() => this.props.history.goBack()}
        rightContent={
          <Popover mask
            overlayClassName="fortest"
            overlayStyle={{ color: 'currentColor' }}
            visible={this.state.visible}
            overlay={[
              (<Item key="4" value="scan" icon={myImg('tOtXhkIWzwotgGSeptou')} data-seed="logId">Scan</Item>),
              (<Item key="5" value="special" icon={myImg('PKAgAqZWJVNwKsAJSmXd')} style={{ whiteSpace: 'nowrap' }}>My Qrcode</Item>),
              (<Item key="6" value="button ct" icon={myImg('uQIYTFeRrjPELImDRrPt')}>
                <span style={{ marginRight: 5 }}>Help</span>
              </Item>),
            ]}
            align={{
              overflow: { adjustY: 0, adjustX: 0 },
              offset: [-10, 0],
            }}
            onVisibleChange={this.handleVisibleChange}
            onSelect={this.onSelect}
          >
            <div className = 'n1'>
              <Icon type="ellipsis" />
            </div>
          </Popover>
        }
      >
        登录
      </NavBar>
      </div>
      <br /><br />
      <InputItem
            type="text"
            placeholder="请在此输入你的用户名"
            error={this.state.hasError}
            onErrorClick={this.onErrorClick}
            onChange={this.onChange}
            value={this.state.value}
            className = "input1"
          >
          <div className = 'ouser'/>
      </InputItem>
      <InputItem
            type="password"
            placeholder="请在此输入你的密码"
            error={this.state.haspasswordError}
            onErrorClick={this.onpasswordErrorClick}
            onChange={this.onpasswordChange}
            value={this.state.passwordvalue}
            className = "input1"
          >
          <div className = 'mima' />
      </InputItem><WhiteSpace />
      <Button className = 'btn2' type="primary" type = { type } disabled = { disabled } onClick={this.login.bind(this,this.state.value,this.state.passwordvalue)}>登录</Button>
      <div className = 'btn1'><NavLink to = '/register' className = "zhucei">注册</NavLink></div>
      </div>
    )
  }
}

export default Com 