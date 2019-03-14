import React, { Component } from 'react';
import '../api/search/search.scss';
import creatHistory from 'history/createBrowserHistory';
import api from '@/api/search';
// import { Link } from 'react-router-dom';

class Com extends Component {
  constructor (props) {
    super(props);
    this.state = {
      data: [],
      history: creatHistory(),
      value: '',
      list: []
    }
  } 
  // 返回上一层
  goBack () {
    this.state.history.goBack();
    // console.log(this.state.history)
  }
  // 点击搜索
  search () {
    let value = this.input.value;
    // console.log(value)
    // console.log(this)
    let arr = [];
    this.state.data.map((item, index) => {
      if (item.name.indexOf(value) >= 0) {
        // console.log(item.name)
        // console.log(this.state.data[index])
        arr.push(this.state.data[index])
        return this.setState({
          list: arr
        })
      }
    })
    // console.log(this)
    console.log(arr)
    // this.props.history.push()可以跳转页面
    // console.log(this.props)
    // this.props.history.push('/userApp/keyword=' + value)
  }

  componentDidMount () {
    api.requestData().then(data => {
      // console.log(data);
      this.setState({
        data: data
      })
    })
  }

  render () {
    return (
      <div className = '_box'>
        <header className = 'top'>
          <span onClick = { this.goBack.bind(this) } >返回</span>
          <input type = 'search' ref = { input => this.input = input } />
          <span onClick = { this.search.bind(this) } >搜索</span>
        </header>
        <div className = 'hot'>
          <p>大家都在搜</p>
          <ul>
            <li>魅族16th Plus</li>
            <li>PRO 7</li>
            <li>魅蓝 E2</li>
            <li>魅蓝 S6</li>
          </ul>
        </div>
        <ul className='searchdata'>
        {
          this.state.list.map((items)  => {
            return (
              <li onClick={() => {this.props.history.push('/detail/' + items.id)}}>
                <img src={items.img} alt="error"/>
                <div className='r'>
                  <p className='into'>{items.name}{items.title}</p>
                  <p className='money'>￥：<span>{items.price}</span></p>
                  <p className='sales'>销量：<span>{ parseInt(items.price) + parseInt(2000) - 888}</span></p>
                </div>
              </li>
            )
          })
        }
        </ul>   
      </div>
    )
  }
}

export default Com