import React, { Component } from 'react'
import { NavBar, Icon, Toast } from 'antd-mobile';
import '@/api/cart/cart.scss'

class Com extends Component {
  state = {
    visible: true,
    selected: '',
    dataArr: [],
    xuanze: null,
    allcheckboxbutton: false,
    value: [],
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
    // console.log(arr)
    this.setState({
      dataArr: arr
    })
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
  count (id, event) {
    let arr = this.state.shanchu;
    // console.log('arr', arr)
    if (event.target.checked) {
      if (arr.length === 0) {
        arr[arr.length] = id
        this.setState({
          shanchu: arr
        })
      } else {
        for (let i=0;i<arr.length;i++) {
          if (arr[i] === id) {
            // console.log('有了');
          } else {
            arr[arr.length] = id
            this.setState({
              shanchu: arr
            })
            return
          }
        }
      }
      // console.log('shanchu', this.state.shanchu)
    } else {
      for (let i=0;i<arr.length;i++) {
        if (arr[i] === id) {
          arr.splice(i,1);
        }
      }
    }

    // let arr = this.state.shanchu;
    // console.log('arr', arr)
    // if (arr.length === 0) {
    //   arr[arr.length] = id
    //   this.setState({
    //     shanchu: arr
    //   })
    // } 
    // else {
    //   for (let i=0;i<arr.length;i++) {
    //     if (arr[i] === id) {
    //       console.log('有了')
    //     }
    //     else {
    //       console.log('ninainai')
    //       arr[arr.length] = id
    //       this.setState({
    //         shanchu: arr
    //       })
    //     }
    //  }
    //}

    // arr[arr.length] = id
    // this.setState({
    //   shanchu: arr
    // })

//     if (checked) {
//       console.log('111')
//       if (arr.length === 0) {
//         arr[arr.length] = id
//         this.setState({
//         shanchu: arr
//        })
//       }
//     }
//     console.log('shanchu', this.state.shanchu)

  }

  reduce (id) {
    var storage = window.localStorage;
    for (let i=0; i<this.state.dataArr.length; i++) {
      if (this.state.dataArr[i].id === id) {
        if (this.state.dataArr[i].num > 1) {
          --this.state.dataArr[i].num;
        }
      }
    }
    var d = JSON.stringify(this.state.dataArr);
    storage.setItem('data', d)
    let arr = JSON.parse(storage.getItem('data'));
    // console.log(arr)
    this.setState({
      dataArr: arr
    })
  }

  add (id) {
    // console.log(id)
    var storage = window.localStorage;
    for (let i=0; i<this.state.dataArr.length; i++) {
      if (this.state.dataArr[i].id === id) {
        this.state.dataArr[i].num++;
      }
    }
    var d = JSON.stringify(this.state.dataArr);
    storage.setItem('data', d)
    let arr = JSON.parse(storage.getItem('data'));
    // console.log(arr)
    this.setState({
      dataArr: arr
    })
  }

del (arr) {
  // console.log(arr)
  var storage = window.localStorage;
  for (let i=0;i<this.state.shanchu.length;i++) {
    for (let j=0;j<arr.length;j++) {
      if (this.state.shanchu[i] === arr[j].id) {
        arr.splice(j,1);
        var d = JSON.stringify(arr);
        storage.setItem('data', d)
        let Arr = JSON.parse(storage.getItem('data'));
        this.setState({
          dataArr: Arr
        })
      } else {
        console.log('error');
      }
    }
  }
}

goHome () {
  // console.log(this)
  this.props.history.push('/kind')
}
  render () {
    let arr = [];
    if (this.state.dataArr.length>0) {
      arr.push(this.state.dataArr.map((items,index) => {
        return (
          <li key={index}>
            <input type="checkbox" checked={this.state.xuanze} onClick={this.count.bind(this, items.id)} className='input' />
            <img src={items.images} alt="items.images"/>
            <div className='right'>
              <p className='cartname'>{items.name}</p>
              <p className='carttitke'>{items.title}</p>
              <p className='cartprice'><i>￥{items.price}</i></p>
              <p style={{marginRight:'.2rem'}}><button style={{width:'.2rem', height:'.2rem', float:'right'}} onClick={this.reduce.bind(this,items.id)}>-</button><input type="text" style={{width:'.3rem', height:'.2rem', float:'right', textAlign:'center', border: '.01rem solid #ccc'}} value={items.num} /><button style={{width:'.2rem', height:'.2rem', float:'right'}} onClick={this.add.bind(this,items.id)}>+</button></p>
              {/* <Button onClick={() => prompt(
'Password',
'You can custom buttons',
[
  { text: '取消' },
  { text: '提交', onPress: password => console.log(`密码为:${password}`) },
],
'secure-text',
)}
>custom buttons</Button> */}
            </div>
          </li>
        )
      }))
    }
    return (
      <div className='main'>
      <header className = "header">
          <NavBar
            mode="light"
            icon={<Icon type="left" />}
            onLeftClick={this.goHome.bind(this)}
            rightContent={[
              <span key={1} onClick={() => {this.props.history.push('cart')}}>完成</span>
            ]}
          >购物车</NavBar>
        </header>
        <div className = "content">
        <ul className='cartdata'>
          {
            arr
          }
        </ul>
        </div>
        <div className='foot'>
        <ul className='cartfoot'>
          <li><input type='checkbox' id='checkbox' onChange={this.quanxuan.bind(this,this.state.dataArr)} checked={this.state.allcheckboxbutton}/><label for='checkbox'>全选</label></li>
          <li></li>
          <li onClick={this.del.bind(this, this.state.dataArr)}><i>删除</i></li>
        </ul>
      </div>
      </div>
    )
  }
}

export default Com