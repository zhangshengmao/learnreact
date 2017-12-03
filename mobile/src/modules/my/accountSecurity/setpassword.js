import React from 'react'
import {connect} from "react-redux"
import {Link, hashHistory} from 'react-router'
import {Icon } from 'antd';

import * as EditAtions from "../myset/address/addressEdit/editAction"
import Historyback from "../../buycar/HistorybackComponent" 
import myaddress from "../myset/address/addressEdit/addressEdit";
import MaskComponent from "../../login/Mask";

class MyEditComponent extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            maskshow:false
        }
        this.masknoshow = this.masknoshow.bind(this);
    }
     masknoshow(){
            this.setState({maskshow:false});
            hashHistory.push("my/mySecurity")
    }
    setpas(){
        this.props.setPas(this.refs.name.value,this.refs.tel.value,JSON.parse(this.props.token).username).then(response => {
            if(response){
                this.setState({maskshow:'修改成功'});
            }
        })
    }
    render(){
        return (
            <div className="myAddressEdit">
                <div className="personalHead">
                    <div>
                        <Historyback />
                    </div>
                    <h3>修改密码</h3>
                </div>
                <div className="setContent">
                    <div><label>旧密码:</label><input type="password" ref="name"/></div>
                    <div><label>新密码:</label><input type="password" ref="tel"/></div>
                    <div ><span onClick={this.setpas.bind(this)}>保存</span></div>
                </div>
                <MaskComponent maskshow={this.state.maskshow} masknoshow={this.masknoshow} />
            </div>
        )
    }
}

const MyState = function(state){
    return {
        token:state.login.data,
        addressMsg:state.myedit.addressMsg
    }
}
export default connect(MyState, EditAtions)(MyEditComponent)