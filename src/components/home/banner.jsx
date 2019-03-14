import React from 'react';
import { Carousel } from 'antd-mobile';
import './hom'

const Banner = ({ banner }) => {
  // console.log(banner)
  let arr = []
  if (banner.length > 0) {
    banner.map((item, index) => (
      arr.push(<a
        key={ index }
        href = 'http://www.wocao.com'
        style={{ display: 'inline-block', width: '100%', height: 'auto' }}
      >
        <img
          src={ item.img }
          alt = ''
          style={{ width: '100%', verticalAlign: 'top' }}
          onLoad={() => {
            // fire window resize event to change height
            window.dispatchEvent(new Event('resize'));
          }}
          />
        </a>)
      ))
  }
  return (
    <div className = 'banner'>
      {
        <Carousel
        autoplay = { true }
        infinite
        // beforeChange = {(from, to) => console.log(`slide from ${from} to ${to}`)}
        // afterChange = {index => console.log('slide to', index)}
        dots = { true }
      >
        {arr}
        </Carousel>
      }
      <ul className = 'server'>
        <li>
          <span className = "iconfont">&#xe82f;</span>
          魅族官方提供
        </li>
        <li>
          <span className = "iconfont">&#xe602;</span>
          满80免运费
        </li>
        <li>
          <span className = "iconfont">&#xe637;</span>
          7天无理由退货
        </li>
      </ul>
    </div>
  )
}

export default Banner