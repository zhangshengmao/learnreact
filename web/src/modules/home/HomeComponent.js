import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as HomeAction from './HomeAction'
import SpinnerComponent from '../spinner/SpinnerComponent';
import {Router,Route,Link,hashHistory} from "react-router";

import { Layout, Menu, Icon, Avatar, Badge, Dropdown, message } from 'antd';
import homescss from "./home.scss";
const { Header, Sider, Content,Footer} = Layout;
const onClick = function ({ key }) {
  message.success(`Click on item ${key}`);
};

const menu = (
  <Menu onClick={onClick}>
    <Menu.Item key="1">
      <Badge count={1}>我的消息
        <Icon type="notification" />
      </Badge>
    </Menu.Item>
  </Menu>
);
var HomeComponent =  React.createClass({
    getInitialState:function(){
        return{
            collapsed:false,
            user:sessionStorage.getItem('user')
        }
    },
    toggle(){
        this.setState({
            collapsed:!this.state.collapsed,
        })
    },
    exit(){
      sessionStorage.removeItem("user");
      hashHistory.push("/");
    },
    render(){
        return(
            <Layout>
                <Sider
                  breakpoint="lg"
                  collapsedWidth="0"
                  onCollapse={(collapsed, type) => {  }}
                >
                  <div className="logo">
                    <h1>BIGBABY</h1>
                    <p>后台管理系统</p>
                  </div>
                  <Menu theme="dark" mode="inline" defaultSelectedKeys={['5']}>
                    <Menu.Item key="1">
                      <Icon type="appstore-o" />
                      <span className="nav-text"><Link to="product">商品管理</Link></span>
                    </Menu.Item>
                    <Menu.Item key="2">
                      <Icon type="schedule" />
                      <span className="nav-text"><Link to="order">订单详情</Link></span>
                    </Menu.Item>
                    <Menu.Item key="3">
                      <Icon type="user" />
                      <span className="nav-text"><Link to="user">管理员管理</Link></span>
                    </Menu.Item>
                    <Menu.Item key="4">
                      <Icon type="shop" />
                      <span className="nav-text"><Link to="buycar">购物车管理</Link></span>
                    </Menu.Item>
                    <Menu.Item key="5">
                      <Icon type="team" />
                      <span className="nav-text"><Link to="users">用户管理</Link></span>
                    </Menu.Item>
                  </Menu>
                </Sider>
                <Layout>
                  <Header style={{ background: '#fff', padding: 0 }}>
                      <ul>
                          <li>欢迎登录！<span className="account">{this.state.user}</span></li>
                          <li>
                            <Dropdown overlay={menu}>
                                <span style={{ marginRight: 24 }}>
                                  <Badge dot ><Avatar icon="user" /></Badge>
                                </span>
                              </Dropdown>
                            
                          </li>
                          <li onClick={this.exit}>退出</li>
                      </ul>
                  </Header>
                  <Content style={{ margin: '24px 16px 0' }}>
                    <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                    {this.props.children}
                    </div>
                  </Content>
                  <Footer style={{ textAlign: 'center' }}>
                    BigBaby ©2017 Created by bigbaby group
                  </Footer>
                </Layout>
            </Layout>
        )
    }
})

const mapStateToProps = state => ({
    loading: state.home.loading,
})
export default connect(mapStateToProps, HomeAction)(HomeComponent)
 