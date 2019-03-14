import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Banner from '@/components/home/banner';
import Nav from '@/components/home/nav';
import Add from '@/components/home/add';
import Phone from '@/components/home/phone';
import Sound from '@/components/home/sound';
import Parts from '@/components/home/parts';
import Life from '@/components/home/life';
import store from '@/store/index';
import action from '@/store/home/action'
import '../components/home/style/home'
class Com extends Component {
  componentDidMount () {
    store.dispatch(action.requestBannerData())
    store.dispatch(action.requestPhoneData())
    store.dispatch(action.requestSoundData())
    store.dispatch(action.requestLiftData())
    store.dispatch(action.requestPartsData())
  }

  render () {
    return (
      <div className='box'>
      <div className = "home_search">
          <ul className = "h_tit">
            <li className = "h_search">
              <NavLink to = "/Search" ><i className = "iconfont icon-huaban"></i></NavLink>
            </li>
            <li>MEIZU</li>
            <li className = "h_li">
            <NavLink to = "/cartapp/cart" ><i className = "iconfont icon-gouwuche"></i></NavLink>
            </li>
            <li className = "h_li2"><NavLink to = "/cartapp/cart1" ><i className = "iconfont icon-gengduo"></i></NavLink></li>
          </ul>
        </div>
      <div className = 'content'>
        {/* 状态管理器中通过  store.getState()方法将所需要的数据取出来 */}
        <Banner banner = { store.getState().homeStore.bannerList } />
        <Nav nav = { store.getState().homeStore.navList } />
        <Add add = { store.getState().homeStore.addList } />
        
        <div className = 'phone'>
          <h1>
            智能手机
            <div className = 'down'></div>
          </h1>
          <Phone phone = { store.getState().homeStore.phoneList } />
        </div>
        
        <div className = 'sound'>
          <h1>
            魅族声学
            <div className = 'down'></div>
          </h1>
          <Sound sound = { store.getState().homeStore.soundList } />
        </div>
        
        <div className = 'parts'>
          <h1>
            智能配件
            <div className = 'down'></div>
          </h1>
          <Parts parts = { store.getState().homeStore.partsList } />
        </div>

        <div className = 'life'>
          <h1>
            生活周边
            <div className = 'down'></div>
          </h1>
          <Life life = { store.getState().homeStore.lifeList } />
        </div>

        <div className = 'toHead'>
          <a href="#">返回顶部</a>
        </div>

        <ul className = 'promise'>
          <li>
            <img src="https://fms.res.meizu.com/dms/2018/12/26/237d883a-d669-4231-b645-d0363ac3f1df.jpg" alt=""/>
          </li>
          <li>
            <img src="https://fms.res.meizu.com/dms/2018/12/26/44d9807b-1240-4637-aaef-43e1f6742f81.jpg" alt=""/>
          </li>
          <li>
            <img src="https://fms.res.meizu.com/dms/2018/12/26/518fc8a2-c14d-488c-9ada-b757bbd71c08.jpg" alt=""/>
          </li>
          <li>
            <img src="https://fms.res.meizu.com/dms/2018/12/26/61250d46-6eb9-4846-99ce-6d65778a84a2.jpg" alt=""/>
          </li>
        </ul>

        <div className = 'connectUs'>
          <a className = 'tel' href = 'javascript::'>
            <span className = "iconfont">&#xe7b5;</span>
            400-788-3333
          </a>
          <a className = 'custom' href = 'javascript::'> 
            <span className = "iconfont">&#xe62d;</span>
            在线客服
          </a>
        </div>

        <div className = 'finish'>
          <p>
            <a href="http://www.miitbeian.gov.cn/">粤ICP备13003602号-2</a>
            <a href="https://www3.res.meizu.com/static/cn/_partial/footer/images/icp2_fb8db74.jpg">合字B2-20170010</a>
            <a href="http://www2.res.meizu.com/zh_cn/images/common/com_licence.jpg">营业执照</a>
            ©2018 Meizu
            <a href="http://www2.res.meizu.com/zh_cn/images/common/com_licence.jpg">All rights reserved</a>
          </p>
          <div className = 'lg'>
            <span className = "iconfont">&#xe636;</span>
            简体中文
          </div>
        </div>
      </div>
      </div>
    )
  }
}

export default Com