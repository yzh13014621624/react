import React, { Component } from 'react'
import { NavBar, Icon } from 'antd-mobile';
import '@/api/cart/cart.scss'

class Com extends Component {
  constructor (props) {
    super(props)
    this.state = {
      title: '购物车内还没有商品呦，赶快去选购吧...'
    }
  }

  golook () {
    this.props.history.push('/');
  }

  render () {
    return (
      <div className='box'>
        <div className='header'>
          <NavBar
              mode="light"
              icon={<Icon type="left" />}
              onLeftClick={() => this.props.history.goBack()}
            >购物车</NavBar>
        </div>
        <div className='content'>
          <p className='infomessage'>{this.state.title}</p>
          <p className='btn' onClick={this.golook.bind(this)}>随便逛逛</p>
        </div>
      </div>   
    )
  }

}

export default Com