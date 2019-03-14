import React, { Component } from 'react';
import '../components/user/style.css'
import { NavLink } from 'react-router-dom'
import { Toast } from 'antd-mobile';
import { blockParams } from 'handlebars';
class Com extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dataArr: '点击登录',
      count1: '',
      count2: '',
      flag1: 'none',
      flag2: 'none',
      img: '//mall.res.meizu.com/member/img/login.png'
    }
  }

  goPageFn (type) {
    console.log(this)
    this.props.history.push('/userapp/' + type)
  }

  Islogin () {
    var storage = window.localStorage;
    let arr = JSON.parse(storage.getItem('isLogin'))
    let arr1 = JSON.parse(storage.getItem('shoucang'))
    if (arr === 'ok') {
      if (arr1 !== null) {
        this.props.history.push('/shoucang');
      } else {
        Toast.fail('暂无收藏');
      }
    } else {
      this.props.history.push('/userapp/login');
    }
  }
  Isfahuo () {
    var storage = window.localStorage;
    let arr = JSON.parse(storage.getItem('isLogin'))
    let arr2 = JSON.parse(storage.getItem('paymoney'))
    if (arr === 'ok') {
      if (arr2 !== null) {
        this.props.history.push('/paymoney');
      } else {
        Toast.fail('暂无付款订单');
      }
    } else {
      this.props.history.push('/userapp/login');
    }
  }
  componentDidMount (){
    var storage = window.localStorage;
    let Arr = JSON.parse(storage.getItem('isnb'));
    let arr1 = JSON.parse(storage.getItem('shoucang'))
    let arr2 = JSON.parse(storage.getItem('paymoney'))
    if (arr1 !== null) {
      this.setState({
        count1: arr1.length,
        flag1: 'block',
      })
    }
    if (arr2 !== null) {
      this.setState({
        count2: arr2.length,
        flag2: 'block',
      })
    }

    if(Arr == null) {
      this.setState({
        dataArr: '点击登录'
      })
    } else {
      this.setState({
        dataArr: Arr,
        img: 'http://img1.2345.com/duoteimg/zixunImg/local/2016/11/14/14790915322585.jpg'
      })
    }
  }

  removeIslogin (event) {
    Toast.success('退出登录成功');
    event.preventDefault();
    localStorage.removeItem('isLogin');
    this.setState({
      dataArr: '点击登录',
      flag1: 'none',
      flag2: 'none',
      img: '//mall.res.meizu.com/member/img/login.png'
    })
  }

  render () {
    return (
      <div class='box'>
        <div className='content'>
          <div className = "content1">
            <div className="content-t">
                <a href="/home" className="back-btn"><i className="iconfont icon-fanhui"></i>
                </a>
                <div className="top">
                  <div><img src={this.state.img} alt="1" /></div>
                  <NavLink to='userapp/login'>
                    <span className="name">{this.state.dataArr}</span>
                  </NavLink>
                </div>
                </div>
                <div className="myapp">
                <div className="topr">
                  <span>我的订单</span>
                  <NavLink to='' onClick={this.Islogin.bind(this,'dingdan')} className="dingdan">查看全部订单</NavLink>
                </div>
                <div className="icon">
                  <span><i className="iconfont icon-daifukuan"></i><p>待付款</p></span>
                  <span onClick={this.Isfahuo.bind(this,'daifahuo')} style={{position:'relative'}}><i className="iconfont icon-daifahuo"></i><p>待发货</p><s className='biaozhi' style={{display:this.state.flag2}}>{this.state.count2}</s></span>
                  <span><i className="iconfont icon-daishouhuo"></i><p>待收货</p></span>
                  <span><i className="iconfont icon-tuikuan"></i><p>退款/售后</p></span>
                </div>
                <div className="item">
                  <span onClick={this.Islogin.bind(this,'shoucang')} style={{position:'relative'}}><i className="iconfont icon-shoucang"></i><p>我的收藏</p><s className='biaozhi' style={{display:this.state.flag1}}>{this.state.count1}</s></span>
                  <span><i className="iconfont icon-wodedizhi"></i><p>我的地址</p></span>
                  <span><i className="iconfont icon-wodehongbao"></i><p>我的红包</p></span>
                  <span><i className="iconfont icon-wodeyouhuijuan"></i><p>我的优惠券</p></span>
              </div>
              <div className="other-item">
                <a href="javascript::"><span>M码通道</span></a>
                <a href="javascript::"><span>手机号查询订单</span><i className="iconfont icon-arrow-right"></i></a>
                <a href="javascript::"><span>以旧换新</span><i className="iconfont icon-arrow-right"></i></a>
                <a href="javascript::"><span>百城速达</span><i className="iconfont icon-arrow-right"></i></a>
                <a href="javascript::"><span>联系客服</span><i className="iconfont icon-arrow-right"></i></a>
                <a className="active"><span onClick={this.removeIslogin.bind(this)}>退出登录</span><i className="iconfont icon-arrow-right"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default Com
