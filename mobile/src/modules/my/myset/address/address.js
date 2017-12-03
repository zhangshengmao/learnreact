import React from 'react'
import {connect} from "react-redux"
import {Link,hashHistory} from 'react-router'
import {Icon } from 'antd';

import * as MyaddressAtions from "./addressAction"
import Historyback from "../../../buycar/HistorybackComponent" 
import myaddress from "./address.scss";
import SpinnerComponent from "../../../spinner/SpinnerComponent";
class MyaddressComponent extends React.Component{
    componentWillMount(){
        this.props.loginInit().then(response=>{
            this.props.Myaddress(JSON.parse(response).username)
        })
    }
    delAddress(e){
        if(e.target.className=="delAddress"){
            let idx = e.target.attributes["data-id"].nodeValue;
            this.props.delAdz(JSON.parse(this.props.addressData)[idx]).then(res=>{
                console.log(res)
            });
        }
        else if(e.target.className=="chooseaddress"){
            let num = e.target.attributes["data-idx"].nodeValue;
            var data =JSON.parse(this.props.addressData)[num]
            var user = JSON.parse(sessionStorage.getItem('user'));
            console.log(sessionStorage.getItem('user'))
            user.user_address=data.address;
            user.tel =data.tel
            user.name =data.name;
            // console 
            var datadsada=JSON.stringify(user);
            sessionStorage.setItem('user',datadsada)
            hashHistory.push("account")
        }
    }
    render(){
        if(this.props.addressData){
            const addressData = JSON.parse(this.props.addressData)
            return (
                <div className="Myaddress">
                    <div className="personalHead">
                        <div>
                            <Historyback />
                        </div>
                        <h3>收货地址</h3>
                    </div>
                    <div className="setContent">
                        <Link to="/my/mySet/edit"><div className="addAddress">
                            <span><Icon type="plus-circle" />&nbsp;&nbsp;添加收货地址</span>
                        </div></Link>
                        <div className="addressMsg" onClick={this.delAddress.bind(this)}>
                           {
                                addressData.map((item,index)=>{
                                    return (
                                        <div>
                                            <div>
                                                <div>
                                                    <span>收货人：{item.name}</span>
                                                    <span>电话：{item.tel}</span>
                                                </div>
                                                <p>收货地址<span>{item.address}</span></p>
                                            </div>
                                            <div className="chooseaddress" data-idx={index}>选择</div>
                                            <div>
                                                <span data-id={index} className="delAddress">删除</span><span>修改</span>
                                            </div>

                                        </div>
                                    )
                                })
                           }
                        </div>
                    </div>
                    <SpinnerComponent show={this.props.loading}/>
                </div>
            )

        }else{
            return (
                <div className="Myaddress">
                <div className="personalHead">
                    <div>
                        <Historyback />
                    </div>
                    <h3>收货地址</h3>
                </div>
                <div className="setContent">
                    <Link to="/my/mySet/edit"><div className="addAddress">
                        <span><Icon type="plus-circle" />&nbsp;&nbsp;添加收货地址</span>
                    </div></Link>
                    <div className="addressMsg">
                    </div>
                </div>
                <SpinnerComponent show={this.props.loading}/>
                </div>
            )
        }
    }
}

const MyState = function(state){
    return {
        addressData:state.address.myMsg,
        loading:state.address.loading
    }
}
export default connect(MyState, MyaddressAtions)(MyaddressComponent)