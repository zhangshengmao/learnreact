import React from 'react'
import {connect} from "react-redux"
import {Link,hashHistory} from 'react-router'
import {Icon } from 'antd';

import Historyback from "../../buycar/HistorybackComponent" 
import assSecurcss from "./accSecuity.scss";
import * as SecAtions from "./securifityAction"
class AccSevurity extends React.Component{
    componentWillMount(){
        // console.log(this.props.loginInit)
        this.props.loginInit().then(res=>{
            console.log(res)
        })
    }
    setpassword(e){
        if(e.target.className=="setpas"){
            hashHistory.push('/my/mySet/setpassword')
        }else if(e.target.className=="settel"){
            hashHistory.push('/my/mySet/mytel')
        }
        
    }
    render(){
        if(this.props.show){
            const Msgdata = JSON.parse(this.props.show);
            return (
                <div className="accSecu">
                    <div className="personalHead">
                        <div>
                            <Historyback />
                        </div>
                        <h3>设置</h3>
                    </div>
                    <div className="accContent" onClick={this.setpassword.bind(this)}>
                        <div className="settel">
                            <span><Icon type="mobile" style={{ fontSize: 20, color: '#FF9C00'}} />&nbsp;&nbsp;手机</span>
                            <span className="lastSpan">
                                {Msgdata.tel}
                            </span>
                            <Icon type="right" />
                        </div>
                        <div className ="setpas">
                            <span><Icon type="key" style={{ fontSize: 20, color: '#58bc58'}}/>&nbsp;&nbsp;登录密码</span>
                            <span className="lastSpan">
                                设置
                            </span>
                            <Icon type="right" />
                        </div>
                        <div >
                            <span><Icon type="shop" style={{ fontSize: 20, color: '##2FB4F7'}}/>&nbsp;&nbsp;交易密码</span>
                            <span className="lastSpan">
                                设置
                            </span>
                            <Icon type="right" />
                        </div>
                        <div>
                            <span><Icon type="layout" style={{ fontSize: 20, color: '#B67DE6'}}/>&nbsp;&nbsp;绑定银行卡</span>
                            <span className="lastSpan">
                                
                            </span>
                            <Icon type="right" />
                        </div>
                    </div>
                </div>
            )
        }else{
            return (
                <div>
                    出错了<Historyback />
                </div>
            )
        }
    }
}
const MyState = function(state){
    return {
      show:state.login.data
    }
}
export default connect(MyState, SecAtions)(AccSevurity)
