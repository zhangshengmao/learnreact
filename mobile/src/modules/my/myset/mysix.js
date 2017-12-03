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
    setbtn(){
        var msg = sessionStorage.getItem('user');
        this.props.setSix(JSON.parse(msg).username,this.refs.selectCont.value).then(response => {
           this.setState({maskshow:'修改成功'});
        })
    }
    render(){
        return (
            <div className="myAddressEdit">
                <div className="personalHead">
                    <div>
                        <Historyback />
                    </div>
                    <h3>设置</h3>
                </div>
                <div className="setContent">
                <div className="setSix"><label>性别:</label>
                <select ref="selectCont">
                    <option value="保密">保密</option>
                    <option value="男">男</option>
                    <option value="女">女</option>

                </select></div>
                    <div ><span onClick={this.setbtn.bind(this)}>保存</span></div>
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