import React, { Component } from 'react'
import api from '../api/detail';
import '@/api/kind/products.scss'
import { List, Modal, Button, Toast, Picker } from 'antd-mobile';

const Item = List.Item;
// const areaArray = [
//   { 
//     label: '北京市',
//     value: '北京市',
//     children: [
//       {
//         label: '北京市', 
//         value: '北京市', 
//         children: [
//         {
//           label: '朝阳区', 
//           value: '朝阳区'
//         },            
//         {
//           label: '海淀区', 
//           value: '朝阳区'
//         },            
//         {
//           label: '东城区', 
//           value: '朝阳区'
//         },            
//         {
//           label: '西城区', 
//           value: '朝阳区'
//         }
//       ]}
//   ]}
// ]
class Com extends Component {

  constructor (props) {
    super(props)
    this.state = {
      id: '',
      title: '',
      img: '',
      name: '',
      price:'',
      fenqi: '',
      kanguo: '',
      dianzan: '',
      xiaoliang: '',
      modal1: false,
      modal2: false,
      message: '',
      visible: false,
      pickerValue: [],
      location: []
    }
  }

  componentDidMount () {
    const id = this.props.match.params.id
    // console.log(id)
    // console.log(this.props.location.query.id)
    api.requestdata(id).then(data => {
      // console.log(data)
      this.setState({
        id: data[0].id,
        img: data[0].img,
        title: data[0].title,
        price: data[0].price,
        name: data[0].name,
        fenqi: Math.round(parseInt(data[0].price)/12),
        kanguo: parseInt(data[0].price)-15,
        dianzan: parseInt(data[0].price)-20,
        xiaoliang: parseInt(data[0].price)-10,
        message: data[0].message
      })
    })
    api.requestlocation().then(data => {
      // console.log(data)
      this.setState({
        location: data
      })
    })
  }
  getSel() {
    const value = this.state.pickerValue;
    if (!value) {
      return '';
    }
  }

  showModal = key => (e) => {
    e.preventDefault(); // 修复 Android 上点击穿透
    this.setState({
      [key]: true,
    });
  }
  onClose = key => () => {
    this.setState({
      [key]: false,
    });
  }
  joinCart () {
    Toast.success('加入购物车成功');
    var storage = window.localStorage;
    let data = {
      id: this.state.id,
      name: this.state.name,
      title: this.state.title,
      price: this.state.price,
      images: this.state.img,
      num: 1,
    }

    let arr = JSON.parse(storage.getItem('data'))
      if (arr == null) {
        arr = [data]
      } else {
        var newarr = false
        for (let i = 0; i < arr.length; i++) {
          if (arr[i].id === data.id) {
            arr[i].num++
            newarr = true
            break
          }
        }
        if (!newarr) {
          arr.push(data)
        }
      }
      var d = JSON.stringify(arr)
      storage.setItem('data', d)
  }

  joinbuy () {
    this.props.history.push('/cartapp/cart');
  }

gocart () {
  var storage = window.localStorage;
  let arr = JSON.parse(storage.getItem('data'))
  if (arr === null) {
    this.props.history.push('/cartapp/cart2')
  } else {
    this.props.history.push('/cartapp/cart')
  }
}

  shoucang () {
    var storage = window.localStorage;
    let shoucang = {
      id: this.state.id,
      name: this.state.name,
      title: this.state.title,
      price: this.state.price,
      images: this.state.img,
    }

    let arr = JSON.parse(storage.getItem('shoucang'))
      if (arr == null) {
        Toast.success('收藏成功');
        arr = [shoucang]
      } else {
        var newarr = false
        for (let i = 0; i < arr.length; i++) {
          if (arr[i].id === shoucang.id) {
            Toast.success('该商品已收藏');
            newarr = true
            break
          }
        }
        if (!newarr) {
          Toast.success('收藏成功');
          arr.push(shoucang)
        }
      }
      var d = JSON.stringify(arr)
      storage.setItem('shoucang', d)
  }
  render () {
    // console.log(this.state.message)
    return (
      <div className = 'box'>
        <div className='content'>
          <div className='detailimg'>
            <img src= {this.state.img} alt="1"/>
            <div className='message'>
              <h3><i className='iconfont icon-zhengpin'></i>{this.state.name}{this.state.title}</h3>
              <span>￥{this.state.price}</span>
              <p className='price'>分期价￥{this.state.fenqi} x 12期</p>
              <p className='title'></p>
              <ul className='detail-icon'>
                <li><i className='iconfont icon-dianzan1'></i>{this.state.dianzan}赞过</li>
                <li>月销<i className='iconfont icon-xiaoliang'></i>{this.state.xiaoliang}</li>
                <li><i className='iconfont icon-duoren'></i>帮我选</li>
                <li>{this.state.kanguo}<i className='iconfont icon-kanguoX'></i>看过</li>
              </ul>
            </div>
            <div>
              <ul className='iconto'>
                <li><i className='iconfont icon-qitianwuliyoutuikuan'></i>七天无理由退换货</li>
                <li><i className='iconfont icon-shunfeng'></i>顺丰包邮</li>
                <li><i className='iconfont icon-huabei'></i>支持花呗付款</li>
              </ul>
            </div>
            <List className="my-list">
              <Item extra="15天退换 运费险 公益宝贝" arrow="horizontal" onClick={() => {}}>服务</Item>
              <Item arrow="horizontal" onClick={this.showModal('modal2')}>参数</Item>
            </List>
            <Picker
            visible={this.state.visible}
            data={this.state.location}
            value={this.state.pickerValue}
            onChange={v => this.setState({ pickerValue: v })}
            onOk={() => this.setState({ visible: false })}
            onDismiss={() => this.setState({ visible: false })}
          >
            <List.Item extra={this.getSel()} onClick={() => this.setState({ visible: true })}>
              配送至
            </List.Item>
          </Picker>

          <Modal
            popup
            visible={this.state.modal2}
            onClose={this.onClose('modal2')}
            animationType="slide-up"
            afterClose={() => { }}
          >
            <List renderHeader={() => <div>产品参数</div>} className="popup-list">
              {['网络类型： '+this.state.message.a,'品牌： '+this.state.message.b,'型号： '+this.state.message.c,'指纹解锁： '+this.state.message.d,'尺寸： '+this.state.message.e,'电池容量： '+this.state.message.f,'重量： '+this.state.message.g,'屏幕尺寸： '+this.state.message.h,'对比度： '+this.state.message.u,'分辨率： '+this.state.message.o,'运行内存： '+this.state.message.p,'机身内存： '+this.state.message.q,'GPS： '+this.state.message.w,'蓝牙： '+this.state.message.z].map((i, index) => ( 
                <List.Item key={index} style={{color:'#ccc',size:'.12rem'}} className='content'>{i}</List.Item>
              ))}
              <List.Item>
                <Button type="primary" onClick={this.onClose('modal2')}>关闭</Button>
              </List.Item>
            </List>
          </Modal>
            </div>
          </div>
        <div className='foot'>
        <ul className='detailfoot'>
          <li>
            <span className='iconfont icon-kefu'></span>
            <p>客服</p>
          </li>
          <li>
            <span className='iconfont icon-shoucang'></span>
            <p onClick={this.shoucang.bind(this)}>收藏</p>
          </li>
          <li onClick={this.gocart.bind(this)}>
            <span className='iconfont icon-icon4'></span>
            <p>购物车</p>
          </li>
          <li>
            <i className='joinCart' onClick={this.joinCart.bind(this)}>加入购物车</i>
          </li>
          <li>
            <i className='buy' onClick={this.joinbuy.bind(this)}>立即购买</i>
          </li>
        </ul>
      </div>
      </div>
    )
  }
}

export default Com