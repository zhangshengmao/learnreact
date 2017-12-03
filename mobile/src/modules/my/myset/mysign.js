import React from 'react'
import {connect} from "react-redux"
import {Link, hashHistory} from 'react-router'
import {Icon } from 'antd';

import * as EditAtions from "./mysetAction.js"
import Historyback from "../../buycar/HistorybackComponent" 
import myaddress from "./address/addressEdit/addressedit.scss";
import MaskComponent from "../../login/Mask";

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
            hashHistory.push("my/mySet")
    }
    signbtn(){
        var msg =sessionStorage.getItem('user');
        this.props.setSign(JSON.parse(msg).username,this.refs.mysign.innerHTML).then(response => {
           this.setState({maskshow:'修改成功'});
        })
    }
    render(){
        const data = JSON.parse(sessionStorage.getItem('user'))
        return (
            <div className="myAddressEdit">
                <div className="personalHead">
                    <div>
                        <Historyback />
                    </div>
                    <h3>设置</h3>
                </div>
                <div className="setContent">
                <div className="mysign"><label>性别:</label>
                    <textarea rows="3" cols="40" ref="mysign">
                        {data.sign}
                    </textarea>
                </div>
                    <div ><span onClick={this.signbtn.bind(this)}>保存</span></div>
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