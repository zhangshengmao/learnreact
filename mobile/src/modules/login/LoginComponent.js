import React from 'react';
import {Router, Route, Link, hashHistory, IndexRoute} from 'react-router';
import {connect} from 'react-redux';

import login from "./login.scss";
import Goback from "../buycar/HistorybackComponent";
import {Icon,Button, notification } from 'antd';
import SpinnerComponent from "../spinner/SpinnerComponent";
import * as loginActions from "./LoginAction";
import MaskComponent from "./Mask";


class loginComponent extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            maskshow:false
        }
        this.masknoshow = this.masknoshow.bind(this);
    }

    loginMsg(){
        
        const username = this.refs.username.value;
        const password = this.refs.password.value;
        this.props.login(username, password).then(response => {
            const res =JSON.parse(response)
            if(res.start==true){
                sessionStorage.setItem('user', response);
                hashHistory.push('/home')
            }else if(res.start=="用户不存在"){
               this.setState({maskshow:'用户不存在'});
            }else if(res.start=="密码错误"){
               this.setState({maskshow:'密码错误'});
            }   
            
        });
    }
    masknoshow(){
        this.setState({maskshow:false})
    }
    componentWillReceiveProps(){
        
    }
    render(){

        return (
            <div>
                <div className="loginHead">
                    <img src="./src/asset/login.jpg"/>
                    <div className="headtool">
                        <span><Goback/></span><Link to="/register"><span>注册</span></Link>
                        <h4><i>大宝家具</i></h4>
                    </div>
                </div>
                <h2 className="chooseMode">
                    欢迎登录
                </h2>
                <div className="loginCase">
                    <div><Icon type="user" /><input type="text" placeholder="请输入用户名\手机号码\邮箱" ref="username"/></div>
                    <div className="password"><Icon type="lock" /><input type="password" placeholder="请输入密码" ref="password"/></div>
                    <div className="loginButton" onClick={this.loginMsg.bind(this)}>登录</div>
                    <div ><span><Link to="/ ">忘记密码?</Link></span></div>
                </div>
                <SpinnerComponent show={this.props.loading}/>
                <MaskComponent maskshow={this.state.maskshow} masknoshow={this.masknoshow} />
            </div>

        )
    }
    
}

const mapStateToProps = state => ({
    loading : state.login.loading,
    token : state.login.data?JSON.parse(state.login.data):false
})
export default connect(mapStateToProps, loginActions)(loginComponent);