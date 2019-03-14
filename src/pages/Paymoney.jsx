import '@/api/Myshoucang/Myshoucang.scss'
import React, { Component } from 'react'
import { NavBar, Icon } from 'antd-mobile';

class Com extends Component {

  constructor (props) {
    super(props)
    this.state = {
      dataArr: [],
      xuanze: null,
      shanchu: [],
      selected: '',
      allcheckboxbutton: false    
    }
  }

  componentDidMount () {
    var storage = window.localStorage;
    let arr = JSON.parse(storage.getItem('paymoney'));
    console.log(arr)
    this.setState({
      dataArr: arr
    })
  }

  count (id, event) {
    let arr = this.state.shanchu;
    console.log('arr', arr)
    if (event.target.checked) {
      if (arr.length === 0) {
        arr[arr.length] = id
        this.setState({
          shanchu: arr,
          xuanze: null
        })
      } else {
        for (let i=0;i<arr.length;i++) {
          if (arr[i] === id) {
            console.log('有了');
          } else {
            arr[arr.length] = id
            this.setState({
              shanchu: arr,
              xuanze: null
            })
            return
          }
        }
      }
      console.log('shanchu', this.state.shanchu)
    } else {
      for (let i=0;i<arr.length;i++) {
        if (arr[i] === id) {
          arr.splice(i,1);
        }
      }
    }
  }

  quanxuan (dataArr) {
    if (this.state.allcheckboxbutton === false) {
      this.setState({
        xuanze: true,
        allcheckboxbutton: true
      })
    } else {
      this.setState({
        xuanze: false,
        allcheckboxbutton: false
      })
    }
    for (let i=0;i<dataArr.length;i++) {
      this.state.shanchu.push(dataArr[i].id);
    }
  }

  del (arr) {
    console.log(arr)
    var storage = window.localStorage;
    for (let i=0;i<this.state.shanchu.length;i++) {
      for (let j=0;j<arr.length;j++) {
        if (this.state.shanchu[i] === arr[j].id) {
          arr.splice(j,1);
          var d = JSON.stringify(arr);
          storage.setItem('paymoney', d)
          let Arr = JSON.parse(storage.getItem('paymoney'));
          this.setState({
            dataArr: Arr
          })
        } else {
          console.log('error');
        }
      }
    }
  }

  render () {
    return (
      <div className='main'>
          <header className = "header">
          <NavBar
            mode="light"
            icon={<Icon type="left" />}
            onLeftClick={() => this.props.history.goBack()}
            // rightContent={[
            //   <span key={1} onClick={() => this.props.history.push('/cart1')}>编辑</span>
            // ]}
          >已付款</NavBar>
        </header>
        <div className='content'>
          <ul className='cartdata'>
            {
              this.state.dataArr.map((items,index) => {
                return (
                  <li key={index}>
                   <input type="checkbox" checked={this.state.xuanze} onClick={this.count.bind(this, items.id)} className='input' />
                    <img src={items.img} alt="items.img"/>
                    <div className='right'>
                      <p className='cartname'>{items.name}</p>
                      <p className='carttitke'>{items.title}</p>
                      <p className='cartprice'><i>￥{items.price}</i></p>
                    </div>
                  </li>
                )
              })
            }
          </ul>
        </div>
        <div className='foot'>
          <ul className='cartfoot'>
            <li><input type='checkbox' id='checkbox' onClick={this.quanxuan.bind(this,this.state.dataArr)} checked={this.state.allcheckboxbutton}/><label for='checkbox'>全选</label></li>
            <li></li>
            <li onClick={this.del.bind(this, this.state.dataArr)}><i>删除</i></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Com