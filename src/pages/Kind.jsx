import React, { Component } from 'react'
import api from '@/api/kind/index'
import '@/api/kind/products.scss'
import { Tabs } from 'antd-mobile';

class Com extends Component {

  constructor (props) {
    super(props)
    this.state = {
      list: [],
      parets: [],
      sound: [],
      live: []
    }
  }

componentDidMount () {
  api.requesttelphone().then(data => {
    data.pop()
    // console.log(data)
    this.setState({
      list: data
    })
  })
  api.requestparets().then(data => {
    //console.log(data)
    this.setState({
      parets: data
    })
  })
  api.requestsound().then(data => {
    //console.log(data)
    this.setState({
      sound: data
    })
  })
  api.requestlive().then(data => {
    //console.log(data)
    this.setState({
      live: data
    })
  })
}

godetail (id) {
  // this.props.history.push({ pathname : '/detail', query: { id: id } })
  this.props.history.push('/detail/' + id)

  // console.log(id)
  // this.props.history.push('/detail/detailtelphone?id=' + id);
  // // this.props.history.push('/detail/id=' + id);
}

  render () { 
    const tabs = [
      { title: '手机' },
      { title: '声学' },
      { title: '配件' },
      { title: '生活' },
    ];
    return (
        <div className = 'content'>
        <Tabs tabs={tabs}
          initalPage={'t2'}
        >
          <div>
          <img className="logo" src="https://openfile.meizu.com/group1/M00/06/ED/Cgbj0Fwz-26AetBKAAHiKcdM7p0474.jpg" alt='1' />
          <ul className='list'>
            {
              this.state.list.map((items, index) => {
                return (
                  <li key={items.id} onClick={this.godetail.bind(this,items.id)}>
                    {/* <img className='logo' src={items.brand} alt=""/> */}
                    <img className='img' src={items.img} alt={index} />
                    <p className='name'>{items.name}</p>
                    <p className='title'>{items.title}</p>
                    <p className='price'>￥{items.price}</p>
                  </li>
                )
              })
            }
        </ul>
        <img className="logo" src="https://openfile.meizu.com/group1/M00/07/00/Cgbj0Vw-0c2AeM5PAAMKUIJwe2k826.jpg" alt='1'/>
        <h1>为你推荐</h1>
        <ul className='line'>
          {
            this.state.parets.map((items, index) => {
              return (
                <li key={items.id} onClick={this.godetail.bind(this,items.id)}>
                  <img className='img' src={items.img} alt={index} />
                  <p className='name'>{items.name}</p>
                  <p className='price'>￥{items.price}</p>
                </li>
              )
            })
          }
        </ul>
        <ul className='footnav'>
          <li><img className='picture' src=" https://fms.res.meizu.com/dms/2018/12/26/237d883a-d669-4231-b645-d0363ac3f1df.jpg " lazy-src=" https://fms.res.meizu.com/dms/2018/12/26/237d883a-d669-4231-b645-d0363ac3f1df.jpg " alt="1" /></li>
          <li><img className='picture' src=" https://fms.res.meizu.com/dms/2018/12/26/44d9807b-1240-4637-aaef-43e1f6742f81.jpg " lazy-src=" https://fms.res.meizu.com/dms/2018/12/26/44d9807b-1240-4637-aaef-43e1f6742f81.jpg " alt="2" /></li>
          <li><img className='picture' src=" https://fms.res.meizu.com/dms/2018/12/26/518fc8a2-c14d-488c-9ada-b757bbd71c08.jpg " lazy-src=" https://fms.res.meizu.com/dms/2018/12/26/518fc8a2-c14d-488c-9ada-b757bbd71c08.jpg " alt="3" /></li>
          <li><img className='picture' src=" https://fms.res.meizu.com/dms/2018/12/26/61250d46-6eb9-4846-99ce-6d65778a84a2.jpg " lazy-src=" https://fms.res.meizu.com/dms/2018/12/26/61250d46-6eb9-4846-99ce-6d65778a84a2.jpg " alt="4" /></li>
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
          <div>
          <img className="logo" src="https://openfile.meizu.com/group1/M00/06/EC/Cgbj0FwtzZ-AUHtmAAD5EmfRtSY543.jpg" alt='1'/>
          <ul className='gonggong'>
          {
            this.state.sound.map((items, index) => {
              return (
                <li key={items.id} onClick={this.godetail.bind(this,items.id)}>
                  <img className='img' src={items.img} alt={index} />
                  <p className='name'>{items.name}</p>
                  <p className='title'>{items.title}</p>
                  <p className='price'>￥{items.price}</p>
                </li>
              )
            })
          }
        </ul>
        <h1>为你推荐</h1>
        <ul className='line'>
          {
            this.state.list.map((items, index) => {
              return (
                <li key={items.id} onClick={this.godetail.bind(this,items.id)}>
                  <img className='img' src={items.img} alt={index} />
                  <p className='name'>{items.name}</p>
                  <p className='price'>￥{items.price}</p>
                </li>
              )
            })
          }
        </ul>
        <ul className='footnav'>
          <li><img className='picture' src=" https://fms.res.meizu.com/dms/2018/12/26/237d883a-d669-4231-b645-d0363ac3f1df.jpg " lazy-src=" https://fms.res.meizu.com/dms/2018/12/26/237d883a-d669-4231-b645-d0363ac3f1df.jpg " alt="1" /></li>
          <li><img className='picture' src=" https://fms.res.meizu.com/dms/2018/12/26/44d9807b-1240-4637-aaef-43e1f6742f81.jpg " lazy-src=" https://fms.res.meizu.com/dms/2018/12/26/44d9807b-1240-4637-aaef-43e1f6742f81.jpg " alt="2" /></li>
          <li><img className='picture' src=" https://fms.res.meizu.com/dms/2018/12/26/518fc8a2-c14d-488c-9ada-b757bbd71c08.jpg " lazy-src=" https://fms.res.meizu.com/dms/2018/12/26/518fc8a2-c14d-488c-9ada-b757bbd71c08.jpg " alt="3" /></li>
          <li><img className='picture' src=" https://fms.res.meizu.com/dms/2018/12/26/61250d46-6eb9-4846-99ce-6d65778a84a2.jpg " lazy-src=" https://fms.res.meizu.com/dms/2018/12/26/61250d46-6eb9-4846-99ce-6d65778a84a2.jpg " alt="4" /></li>
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
          <div>
          <img className="logo" src="https://openfile.meizu.com/group1/M00/06/FC/Cgbj0VwtzU2AEp14AAF565TOmGQ380.jpg" alt='1'/>
          <ul className='gonggong'>
          {
            this.state.parets.map((items, index) => {
              return (
                <li key={items.id} onClick={this.godetail.bind(this,items.id)}>
                  <img className='img' src={items.img} alt={index} />
                  <p className='name'>{items.name}</p>
                  <p className='title'>{items.title}</p>
                  <p className='price'>￥{items.price}</p>
                </li>
              )
            })
          }
        </ul>
        <h1>为你推荐</h1>
        <ul className='line'>
          {
            this.state.sound.map((items, index) => {
              return (
                <li key={items.id} onClick={this.godetail.bind(this,items.id)}>
                  <img className='img' src={items.img} alt={index} />
                  <p className='name'>{items.name}</p>
                  <p className='price'>￥{items.price}</p>
                </li>
              )
            })
          }
        </ul>
        <ul className='footnav'>
          <li><img className='picture' src=" https://fms.res.meizu.com/dms/2018/12/26/237d883a-d669-4231-b645-d0363ac3f1df.jpg " lazy-src=" https://fms.res.meizu.com/dms/2018/12/26/237d883a-d669-4231-b645-d0363ac3f1df.jpg " alt="" /></li>
          <li><img className='picture' src=" https://fms.res.meizu.com/dms/2018/12/26/44d9807b-1240-4637-aaef-43e1f6742f81.jpg " lazy-src=" https://fms.res.meizu.com/dms/2018/12/26/44d9807b-1240-4637-aaef-43e1f6742f81.jpg " alt="" /></li>
          <li><img className='picture' src=" https://fms.res.meizu.com/dms/2018/12/26/518fc8a2-c14d-488c-9ada-b757bbd71c08.jpg " lazy-src=" https://fms.res.meizu.com/dms/2018/12/26/518fc8a2-c14d-488c-9ada-b757bbd71c08.jpg " alt="" /></li>
          <li><img className='picture' src=" https://fms.res.meizu.com/dms/2018/12/26/61250d46-6eb9-4846-99ce-6d65778a84a2.jpg " lazy-src=" https://fms.res.meizu.com/dms/2018/12/26/61250d46-6eb9-4846-99ce-6d65778a84a2.jpg " alt="" /></li>
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
          <div>
          <img className="logo" src="https://openfile.meizu.com/group1/M00/06/EC/Cgbj0FwtzL-AfSaOAAIBqztVKzI362.jpg" alt='1'/>
          <ul className='gonggong'>
          {
            this.state.live.map((items, index) => {
              return (
                <li key={items.id} onClick={this.godetail.bind(this,items.id)}>
                  <img className='img' src={items.img} alt={index} />
                  <p className='name'>{items.name}</p>
                  <p className='title'>{items.title}</p>
                  <p className='price'>￥{items.price}</p>
                </li>
              )
            })
          }
        </ul>
        <h1>为你推荐</h1>
        <ul className='line'>
          {
            this.state.parets.map((items, index) => {
              return (
                <li key={items.id} onClick={this.godetail.bind(this,items.id)}>
                  <img className='img' src={items.img} alt={index} />
                  <p className='name'>{items.name}</p>
                  <p className='price'>￥{items.price}</p>
                </li>
              )
            })
          }
        </ul>
        <ul className='footnav'>
          <li><img className='picture' src=" https://fms.res.meizu.com/dms/2018/12/26/237d883a-d669-4231-b645-d0363ac3f1df.jpg " lazy-src=" https://fms.res.meizu.com/dms/2018/12/26/237d883a-d669-4231-b645-d0363ac3f1df.jpg " alt="" /></li>
          <li><img className='picture' src=" https://fms.res.meizu.com/dms/2018/12/26/44d9807b-1240-4637-aaef-43e1f6742f81.jpg " lazy-src=" https://fms.res.meizu.com/dms/2018/12/26/44d9807b-1240-4637-aaef-43e1f6742f81.jpg " alt="" /></li>
          <li><img className='picture' src=" https://fms.res.meizu.com/dms/2018/12/26/518fc8a2-c14d-488c-9ada-b757bbd71c08.jpg " lazy-src=" https://fms.res.meizu.com/dms/2018/12/26/518fc8a2-c14d-488c-9ada-b757bbd71c08.jpg " alt="" /></li>
          <li><img className='picture' src=" https://fms.res.meizu.com/dms/2018/12/26/61250d46-6eb9-4846-99ce-6d65778a84a2.jpg " lazy-src=" https://fms.res.meizu.com/dms/2018/12/26/61250d46-6eb9-4846-99ce-6d65778a84a2.jpg " alt="" /></li>
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
        </Tabs>
      </div>
    )
  }
}

export default Com