import React, { Component } from 'react'
import { NavBar, Icon, Toast } from 'antd-mobile';
import '@/api/cart/cart.scss'
import 'antd-mobile/dist/antd-mobile.css';

class Com extends Component {
  state = {
    visible: true,
    selected: '',
    dataArr: [],
    xuanze: null,
    allcheckboxbutton: false,
    value: [],
    totalprice:0.00,
    shanchu: []
  }
  onSelect = (opt) => {
    Toast.offline('功能暂未开放 !!!');
    // console.log(opt.props.value);
    this.setState({
      visible: false,
      selected: opt.props.value
    });
  };

  componentDidMount () {
    var storage = window.localStorage;
    let arr = JSON.parse(storage.getItem('data'));
    console.log(arr)
    this.setState({
      dataArr: arr
    })
  }

  quanxuan (event) {
    if (this.state.allcheckboxbutton === false) {
      this.setState({
        xuanze: true,
        allcheckboxbutton: true
      })
    } else {
      this.setState({
        xuanze: null,
        allcheckboxbutton: false
      })
    }
    let money = 0;
    if (event.target.checked) {
      for (let i=0;i<this.state.dataArr.length;i++) {
        money += (this.state.dataArr[i].num * this.state.dataArr[i].price);
        this.setState({
          totalprice: (money + this.state.totalprice)
        })
      }
    } else {
      for (let i=0;i<this.state.dataArr.length;i++) {
        money += (this.state.dataArr[i].num * this.state.dataArr[i].price);
        this.setState({
          totalprice: (this.state.totalprice - money)
        })
      }
    }
  }
  
  jiesuan (arr) {
    var storage = window.localStorage;
    for (let i=0;i<this.state.shanchu.length;i++) {
      for (let j=0;j<arr.length;j++) {
        if (this.state.shanchu[i] === arr[j].id) {
          Toast.success('结算成功');
          let pay = {
            id: arr[j].id,
            name: arr[j].name,
            title: arr[j].title,
            price: arr[j].price,
            img: arr[j].images,
          }
          let a = JSON.parse(storage.getItem('paymoney'))
          console.log(a)
          if (a === null) {
            a = [pay];
          } else {
            a.push(pay);
          }
          storage.setItem('paymoney', JSON.stringify(a))
          arr.splice(j,1);
          storage.setItem('data', JSON.stringify(arr));
          this.setState({
            totalprice:0,
            dataArr: arr
          })
        }
      }
    }
  }

  total (id,event) {
    var price = 0;
    let arr = this.state.shanchu;
    if (event.target.checked) {
      for (let i=0;i<this.state.dataArr.length;i++) {
        if (this.state.dataArr[i].id === id) {
          price += (this.state.dataArr[i].num * this.state.dataArr[i].price);
          this.setState({
            totalprice: (price + this.state.totalprice)
          })
        }
      }
      if (arr.length === 0) {
        arr[arr.length] = id
        this.setState({
          shanchu: arr
        })
      } else {
        for (let i=0;i<arr.length;i++) {
          if (arr[i] === id) {
            console.log('有了');
          } else {
            arr[arr.length] = id
            this.setState({
              shanchu: arr
            })
            return
          }
        }
      }
    } else {
      for (let i=0;i<this.state.dataArr.length;i++) {
        if (this.state.dataArr[i].id === id) {
          price += (this.state.dataArr[i].num * this.state.dataArr[i].price);
          this.setState({
            totalprice: (this.state.totalprice - price)
          })
        }

      }
      for (let i=0;i<arr.length;i++) {
        if (arr[i] === id) {
          arr.splice(i,1);
          this.setState({
            shanchu: arr
          })
        }
      }
    }
  }
  // aaaaaaaaaa (items, event) {
  //   console.log(items)
  //   let a = this.state.totalprice
  //   if(event.target.checked) {
  //     console.log(1)
  //     a += items.num * items.price
  //   } else {
  //     a -= items.num * items.price
  //   }
  //   this.setState({
  //     totalprice: a
  //   })
  // }

  render () {
    return (
      <div className='box'>
      <header className = "header">
          <NavBar
            mode="light"
            icon={<Icon type="left" />}
            onLeftClick={() => this.props.history.goBack()}
            rightContent={[
              <span key={1} onClick={() => this.props.history.push('/cartapp/cart1')}>编辑</span>
            ]}
          >购物车</NavBar>
        </header>
        <div className = "content">
        <ul className='cartdata'>
          {
            (this.state.dataArr && this.state.dataArr).map((items,index) => {
              return (
                <li key={index}>
                {/* <input type="checkbox"  onClick={this.aaaaaaaaaa.bind(this,items)} className='input' /> */}
                  <input type="checkbox" checked={this.state.xuanze} onChange={this.total.bind(this,items.id)} className='input' />
                  <img src={items.images} alt="items.images"/>
                  <div className='right'>
                    <p className='cartname'>{items.name}</p>
                    <p className='carttitke'>{items.title}</p>
                    <p className='cartprice'><i>￥{items.price}</i></p>
                    <span>x {items.num}</span>
                  </div>
                </li>
              )
            })
          }
        </ul>
        </div>
        <div className='foot'>
        <ul className='cartfoot'>
          <li><input type='checkbox' onChange={this.quanxuan.bind(this)} checked={this.state.allcheckboxbutton}/>全选</li>
          <li>总计：<b>￥{this.state.totalprice}</b></li>
          <li onClick={this.jiesuan.bind(this,this.state.dataArr)}><i>结算</i></li>
        </ul>
      </div>
      </div>
    )
  }
}

export default Com