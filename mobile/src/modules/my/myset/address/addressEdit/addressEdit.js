import React from 'react'
import {connect} from "react-redux"
import {Link, hashHistory} from 'react-router'
import {Icon } from 'antd';

import * as EditAtions from "./editAction.js"
import Historyback from "../../../../buycar/HistorybackComponent" 
import myaddress from "./addressedit.scss";
import MaskComponent from "../../../../login/Mask";

class MyEditComponent extends React.Component{
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
            this.setState({maskshow:false});
            hashHistory.push("my/mySet/address")
    }
    saveAddress(){
        const obj ={
            name : this.refs.name.value,
            tel : this.refs.tel.value,
            detaddress : this.refs.detaddress.value
        }
        this.props.addressInit(JSON.stringify(obj),JSON.parse(this.props.token).username).then(response => {
           this.setState({maskshow:'添加成功'});
        })
    }
    render(){
        return (
            <div className="myAddressEdit">
                <div className="personalHead">
                    <div>
                        <Historyback />
                    </div>
                    <h3>添加收货地址</h3>
                </div>
                <div className="setContent">
                    <div><label>收货名字:</label><input type="text" ref="name"/></div>
                    <div><label>收货人手机:</label><input type="text" ref="tel"/></div>
                    <div><label>详细地址:</label><input type="text" ref="detaddress"/></div>
                    <div ><span onClick={this.saveAddress.bind(this)}>保存</span></div>
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