import React from 'react';
import { connect } from "react-redux";
import { Icon } from 'antd';
import { Link, hashHistory } from 'react-router';

import common from "../../static/styles/common.scss";
import Mycss from "./my.scss";
import OnLineState from './loggingStatus';
import * as MyActions from "./MyActions";
import FooterComponent from "../common/footer/footerComponent.js";
import fcss from "../common/footer/footer.scss";
import QuitLogin from "./quitLogin";
import loginToken from "../login/logintoken";


class MyComponent extends React.Component {
    componentDidMount() {

    }
    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
    }
    componentWillMount() {
        this.props.MyActions().then(response=>{
            if(response){
                const res =JSON.parse(response)
                if(res.start==true){
                    sessionStorage.setItem('user', response);
                    this.setState({show:response});
                    console.log(response)
                }else{
                    sessionStorage.removeItem('user');
                }
            }
        })

        var token = sessionStorage.getItem('user');
        if (token) {
            this.setState({ show: token });
        }
    }
    quitLogin(e) {
        if (e.target.className == 'QuitLogin') {
            sessionStorage.removeItem('user');
            hashHistory.push('/home')
        }
    }
    linkTo(e) {
        var loginstate = JSON.parse(sessionStorage.getItem('user'))
        console.log(loginstate.start)
        if (loginstate.start == "用户不存在") {
            hashHistory.push("/login")
        } else {
            if (e.target.id == "myCollect") {
                hashHistory.push("/my/myCollect")
            } else if (e.target.id == "myset") {
                hashHistory.push("/my/mySet")
            } else if (e.target.id == "mySecurity") {
                hashHistory.push("/my/mySecurity")
            }
        }
    }
    render() {
        return ( 
            <div className = "personalBox" onClick = { this.linkTo.bind(this) } >
            <div className = "personalHead" >
            <h3 > 我 < /h3>  </div>  <div className = "personalMain" onClick = { this.quitLogin.bind(this) } >
            <div className = "pMainHead" >
            <div > < img src = "./src/asset/login.jpg" / > < /div> 
            <div className = "loginBox" >
            <OnLineState loginShow = { this.state.show }/>     
            </div> </div >

            <div className = "pOrder" >
            <Link to = "/my/myOrder/1" >
            <div className = "rightIcon" > 
            < Icon type = "file-text"style = {{ fontSize: 20, color: '#FF9C00' } }/>&nbsp;&nbsp;我的订单<span><Icon type="right" / > < /span> 
            </div> </Link > < div >
            <Link to = "/my/myOrder/1" > < div > < Icon type = "credit-card" / >
             < p > 待付款 < /p></div > < /Link> 
            <Link to = "/my/myOrder/2" > < div > < Icon type = "inbox" / > < p > 待发货 < /p>
            </div > < /Link> 
            <Link to = "/my/myOrder/3" > < div > < Icon type = "car" / > < p > 待收货 < /p>
            </div > < /Link> 
            <Link to = "/my/myOrder/4" > < div > < Icon type = "message" / > < p > 待评价 < /p>
            </div > < /Link> < /div >

            </div>

            <div className = "pShopMsg" >
            <Link to = "/buycar" > < div className = "rightIcon" >
            <Icon type = "shopping-cart"style = {{ fontSize: 20, color: '#F55959' }}/>&nbsp;&nbsp;我的购物车<span><Icon type="right" / > < /span> 
            < /div > 
            < /Link > <div className = "rightIcon"id = "myCollect" >
            <Icon type = "heart"style = {{ fontSize: 20, color: '#FA578E' }}/> &nbsp;&nbsp;我的收藏<span><Icon type="right" / > < /span> < /div >

            </div> <div className = "pAbout" > 
            <div className = "rightIcon"id = "myset" >
            <Icon type = "setting"style = {{ fontSize: 20, color: '#FA624E' }}/>&nbsp;&nbsp;个人设置<span><Icon type="right" / > < /span> 
            < /div > 
            <div className = "rightIcon"id = "mySecurity" >
            <Icon type = "safety"style = {{ fontSize: 20, color: '#58bc58' }}/> &nbsp;&nbsp;账户安全<span><Icon type="right" / > < /span> 
            < /div > 
            </div>

            <QuitLogin loginShow = { this.state.show }/>  < /div > <FooterComponent / >
            </div>
        )
    }
}
const MyState = function(state) {
    return {
        show: state.login.data
    }
}
export default connect(MyState, MyActions)(MyComponent)