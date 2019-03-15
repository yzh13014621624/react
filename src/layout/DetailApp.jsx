import React, {Component} from 'react';
import {  Switch, Route } from 'react-router-dom';
import Detail from '@/pages/Detail';
import { NavBar, Icon, Popover, Toast } from 'antd-mobile';
import '@/api/kind/products.scss'

const Item = Popover.Item;
const myImg = src => <img src={`https://gw.alipayobjects.com/zos/rmsportal/${src}.svg`} className="am-icon am-icon-xs" alt="" />;
class Com extends Component {

  state = {
    visible: false,
    selected: ''
  }
  onSelect = (opt) => {
    Toast.offline('功能暂未开放 !!!');
    // console.log(opt.props.value);
    this.setState({
      visible: true,
      selected: opt.props.value
    });
  };
 render() {
  return (
    <div className = "box">
      <header className = "header">
      <NavBar
      mode="light"
      icon={<Icon type="left" />}
      onLeftClick={() => this.props.history.goBack()}
      rightContent={[
        <Popover mask
        overlayClassName="fortest"
        overlayStyle={{ color: 'currentColor' }}
        visible={this.state.visible}
        overlay={[
          (<Item key="4" value="scan" icon={myImg('tOtXhkIWzwotgGSeptou')} data-seed="logId">扫一扫</Item>),
          (<Item key="5" value="special" icon={myImg('PKAgAqZWJVNwKsAJSmXd')} style={{ whiteSpace: 'nowrap' }}>分享</Item>),
          (<Item key="6" value="button ct" icon={myImg('uQIYTFeRrjPELImDRrPt')}>
            <span style={{ marginRight: 5 }}>帮助</span>
          </Item>),
        ]}
        align={{
          overflow: { adjustY: 0, adjustX: 0 },
          offset: [-10, 0],
        }}
        onSelect={this.onSelect}
      >
       <div style={{
              height: '100%',
              padding: '0 15px',
              marginRight: '-15px',
              display: 'flex',
              alignItems: 'center',
            }}
            >
              <Icon type="ellipsis" />
            </div>
          </Popover>
      ]}
    >商品详情</NavBar>
      </header>
      <Switch>
        <Route path = '/detail/:id' component = { Detail } ></Route>   
        {/* /detail/detailtelphone/:id' */}
      </Switch>
   </div>
  )
 }
}
export default Com