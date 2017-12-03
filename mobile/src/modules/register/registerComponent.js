import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link, hashHistory} from 'react-router';
import {Icon, Button, notification} from 'antd';
// import {Router, Route, Link, , IndexRoute} from 'react-router';

import * as registerActions from './registerActions';
import registerss from "./register.scss";
import Goback from "../buycar/HistorybackComponent";
import SpinnerComponent from '../spinner/SpinnerComponent';
import MaskComponent from "../login/Mask";

class RegisterComponent extends React.Component {
    componentDidMount(){
        
    }
    constructor(props){
        super(props);
        this.state= {
            maskshow:false
        }
        this.masknoshow = this.masknoshow.bind(this);
    }
    masknoshow(){
        this.setState({maskshow:false})
    }
    componentDidUpdate(){
        // if(this.props.logindata=='ok'){
        //     hashHistory.push('/login')
        // }else if(this.props.logindata=='false'){
        //     this.setState({maskshow:'用户已存在'});
        // }
    }
    regChange(){
        const tel = this.refs.tel.value;

        const username = this.refs.username.value;

        const password = this.refs.password.value;
        let blon=this.registerRule("true");
        if(this.refs.Consent.checked&&blon){
            const obj={
                password:password,
                username:username,
                tel:tel
            }
            this.props.register(obj).then(response=>{
                let res = response
                if(res=='ok'){
                    hashHistory.push('/login')
                }else if(response=='false'){
                    this.setState({maskshow:'用户已存在'});
                }
            })
        }
    }
    reBtnStyle(blon){
        
        if(blon&&this.refs.Consent.checked){
           this.refs.registerBtn.style.background="#eb3013";
        }else{
            this.refs.registerBtn.style.background="#ccc";
        }
    }
    registerRule(blon){
        const tel = this.refs.tel.value;

        const username = this.refs.username.value;

        const password = this.refs.password.value;
        if(!/^1[34578]\d{9}$/.test(tel)){setTimeout(()=>{
                this.refs.telMsg.innerHTML='';
            },3000)
            this.refs.telMsg.innerHTML='请输入正确手机号码';
            return false
        }
        if(!/^[a-zA-Z][\w\-]{5,19}$/.test(username)){
            setTimeout(()=>{
                this.refs.usernameMsg.innerHTML='';
            },3000)
           this.refs.usernameMsg.innerHTML="账号只能数字、字母、下划线、横杠";
           return false
        }
        if(!/^\S{6,20}$/.test(password)){
            setTimeout(()=>{
                this.refs.passwordMsg.innerHTML='';
            },3000)
            this.refs.passwordMsg.innerHTML="长度6-20、不能包含空格";
            return false
        }
        return true;
    }
    ConsentRegister(){
        this.reBtnStyle(this.registerRule())
    }
    inspectBlur(){
        this.reBtnStyle(this.registerRule())
       
    }
    render(){
        
        return(
            <div className="registerBox">
            <div className="registerHead"><Link to="/login"><span><Goback /></span></Link><h3>注册</h3></div>
                <div className="kongk"></div>
                <div className="inputText">
                    <div><Icon type="tablet" />
                        <input type="text" placeholder="请输入手机号码" ref="tel" onBlur={this.inspectBlur.bind(this)}/>
                        <div className="hintMsg" ref="telMsg"></div>
                    </div>
                    <div><Icon type="user" /><input type="text" placeholder="请输入用户名" ref="username" onBlur={this.inspectBlur.bind(this)}/>
                        <div className="hintMsg" ref="usernameMsg"></div>
                    </div>
                    <div><Icon type="lock" /><input type="password" placeholder="请设置登录密码" ref="password" onBlur={this.inspectBlur.bind(this)}/>
                        <div className="hintMsg" ref="passwordMsg"></div>
                    </div>
                    <div><input type="radio" className="radio" ref="Consent" onClick={this.ConsentRegister.bind(this)}/><Link to="/register/agreement"><span>我已看过并同意《美乐乐用户注册协议》</span></Link>

                    </div>
                </div>
                <div className="registerBtn"><span onClick={this.regChange.bind(this)} ref="registerBtn">免费注册</span></div>
                <SpinnerComponent show={this.props.loading}/>
                <MaskComponent maskshow={this.state.maskshow} masknoshow={this.masknoshow} />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    loading: state.register.loading,
    logindata:state.register.loginData
})
export default connect(mapStateToProps, registerActions)(RegisterComponent);