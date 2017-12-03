import React, {Component} from 'react';
import {Router, hashHistory, browserHistory} from 'react-router';
import {Link} from 'react-router'
import {connect} from 'react-redux';
import * as BuycarActions from './AccountActions';
import SpinnerComponent from '../spinner/SpinnerComponent';
import {Button,Icon} from 'antd';

import HistorybackComponent from "../buycar/HistorybackComponent.js";
import MaskComponent from "./MaskComponent";
import LinksMask  from "../common/linksMask/linksMaskComponent";
import './Account.scss';
import * as commonUrl from '../common/commonUrl1.js';

class BuycarComponent extends React.Component {

    constructor(props){
        super(props);
        this.state= {
            isShowLinks:'none',
            user: '',
            totalPrice:0,
            addressOK:false,
            accountList:[]
        }
        this.topay = this.topay.bind(this);
        this.goAddress = this.goAddress.bind(this);
    }

    componentWillMount(){
        var user = JSON.parse(sessionStorage.getItem('user'));
        var accountList = JSON.parse(sessionStorage.getItem('accountList')).account; 
        var buycarLi = JSON.parse(sessionStorage.getItem('buycarLi'));       
        var totalPrice = 0;
        var addressOK = false;
        if(accountList.length > 0){
            accountList.forEach(function(item){
                totalPrice += item.product_origin_price * item.amount
            })
        };
        if(user.tel && user.user_address){
            // console.log(1)
            addressOK = true;
        }

        this.setState({totalPrice:totalPrice,accountList:accountList,user:user,addressOK:addressOK});

    }

    showLinks(){
        this.setState({
            isShowLinks:'block'
        });
    }
    hideLinks(){
        this.setState({
            isShowLinks:'none'
        });
    }

    goAddress(){
        if(!this.state.addressOK){
            hashHistory.push('/my/mySet/address');
        }
    }

    topay(){
        var now = new Date();

        // 年月日
        var year = now.getFullYear();
        var month = now.getMonth()+1;
        var date = now.getDate(); 
        var hour = now.getHours();
        var min = now.getMinutes();
        var sec = now.getSeconds();
        month = month<10 ? '0'+month : month;
        date = date<10 ? '0'+date : date;
        hour = hour<10 ? '0'+hour : hour;
        min = min<10 ? '0'+min : min;
        sec = sec<10 ? '0'+sec : sec; 

        var order_num = '' + year + month + date + parseInt(Math.random() * 100000);
        var accountList = JSON.parse(sessionStorage.getItem('accountList')).account; 
        var buycarLi = JSON.parse(sessionStorage.getItem('buycarLi'));   
        console.log(buycarLi)    
        for(var i = 0;i<accountList.length;i++){
            for(var j =0;j<buycarLi.length;j++){
                if(accountList[i].product_name == buycarLi[j].product_name){
                    buycarLi.splice(j,1);
                }  
            }
        } 
        console.log(buycarLi)
        const obj = {
                        order_num:order_num,
                        user_name:this.state.user.username ,
                        order_product:this.state.accountList,
                        buycarLi:buycarLi.length > 0 ? JSON.stringify(buycarLi) : null,
                        order_phone:this.state.user.tel,
                        order_total_price:this.state.totalPrice,
                        order_date:year + '年' + month + '月' + date + '日 ' + hour + ':' + min + ':' + sec,
                        order_status:'待付款',
                        order_address:this.state.user.user_address
                    }
        this.props.accountInit(obj).then(()=>{
            // sessionStorage.removeItem('buycarLi');
            // sessionStorage.removeItem('accountList');
             hashHistory.push('pay/' + order_num);
        });

    }

    render(){
        return(
            <div id="account">
                <header id="acheader">
                    <HistorybackComponent />
                    <h2 onClick={this.topay}>确认订单</h2>
                    <Icon className="sort-links" type="ellipsis" onClick={this.showLinks.bind(this)}/>
                </header>
                <main id="acmain">
                    <div className='address' style = {{display:this.state.addressOK ? 'block' : 'none'}}>
                        <p className='username'><label for="username">收货人：</label><input type="text" id="username" value={this.state.user.name} /></p>
                        <p className='tel'><label for="tel">联系方式：</label><input id='tel' type="text" value={this.state.user.tel} /></p>
                        <p className='dizhi'><label for="dizhi">地址：</label><input id="dizhi" type="text" value={this.state.user.user_address} /></p> :
                        
                    </div>
                    <div onClick={this.goAddress} className = 'address' style={{display:this.state.addressOK ? 'none' : 'block'}}><p className="add"><span>+</span>请添加收货地址</p></div>
                    <div className='blank'></div>
                    <ul className="accountList">
                            {
                                this.state.accountList.length > 0 ?
                                this.state.accountList.map((item,index) => {
                                    return(
                                            <li key={item.product_image} >
                                               <div className='imgbox'>
                                                    <img src={commonUrl.IMGURL + item.product_image} /> 
                                               </div>
                                               <div className="info">
                                                    <p>{item.product_name}</p>
                                                    <p>￥{item.product_origin_price}</p>
                                                    <div>
                                                        <span>×{item.amount}</span>
                                                    </div>
                                                    <p>配送方式：物流</p>
                                                </div>
                                            </li>
                                        )
                                }) : ''
                            }                       
                    </ul>
                    <ul className='info'>
                        <li>商品小计：￥{this.state.totalPrice}</li>
                        <li>配送服务：<input type="checkbox" />物流点自提</li>
                        <li>运费/服务费小计：￥{parseInt(this.state.totalPrice * 0.012)}</li>
                    </ul>
                </main>
                <footer id="acfooter">
                    <p className='price'>应付总额：<span>￥{this.state.totalPrice + parseInt(this.state.totalPrice * 0.012)}</span></p>
                    <a onClick={this.topay} className="account">提交订单</a>
                </footer>
                <SpinnerComponent show = {this.props.loading} />
                <MaskComponent maskshow={this.state.maskshow} masknoshow={this.masknoshow} />
                <LinksMask childHideLinks={this.hideLinks.bind(this)} hideLinkIdx={5} boxStyleObj={{'display': this.state.isShowLinks}} ulStyleObj={{top:'50px',right:0}}/>
            </div>
        )
    }
}


const mapStateToProps = state => ({
    loading: state.login.loading,
})
export default connect(mapStateToProps, BuycarActions)(BuycarComponent)