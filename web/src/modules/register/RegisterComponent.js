import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as RegisterActions from './RegisterAction'
import SpinnerComponent from '../spinner/SpinnerComponent';
import {Router,Route,Link,hashHistory} from "react-router";
import loginScss from "../login/Login.scss";

import { Input,Button} from 'antd';


class RegisterComponent extends React.Component {
    constructor(props){
        super(props);
    }
    registerHandler(){
        this.props.register(`user_account=${this.refs.account.refs.input.value}&user_name=${this.refs.username.refs.input.value}&user_password=${this.refs.password.refs.input.value}&user_gender=${this.refs.gender.refs.input.value}&user_phone=${this.refs.phone.refs.input.value}&user_identify=管理员`)
    }
    render(){
        if(this.props.data=="ok"){
            alert("注册成功");
            hashHistory.push('/');
        }else if(this.props.data=="fail"){
            // alert("注册失败");
        }
        return(
            <div className="register">
                <h1>用户注册</h1>
                <ul>
                    <li>
                        <label htmlFor="account">帐号：</label>
                        <Input placeholder="请输入您的帐号" ref="account" id="account"/>
                    </li>
                    <li>
                        <label htmlFor="password">密码：</label>
                        <Input type="password" placeholder="请输入您的密码" ref="password" id="password"/>
                    </li>
                    <li>
                        <label htmlFor="username">昵称：</label>
                        <Input type="username" placeholder="请输入您的昵称" ref="username" id="username"/>
                    </li>
                    <li>
                        <label htmlFor="gender">性别：</label>
                        <Input type="text" placeholder="请输入您的性别" ref="gender" id="gender"/>
                    </li>
                    <li>
                        <label htmlFor="phone">电话：</label>
                        <Input type="phone" placeholder="请输入您的电话" ref="phone" id="phone"/>
                    </li>
                    <SpinnerComponent show={this.props.loading}/>
                    <li>
                        <Button type="primary" onClick={this.registerHandler.bind(this)}>注册</Button>
                        <Link to="/">  已经有帐号啦~</Link>
                    </li>
                </ul>
            </div>
            
        )
    }
}



const mapStateToProps = state => ({
    loading: state.register.loading,
    data:state.register.data
})
export default connect(mapStateToProps, RegisterActions)(RegisterComponent)
