import React, {Component} from 'react';
import {Router, hashHistory, browserHistory} from 'react-router';
import {Link} from 'react-router'
import {connect} from 'react-redux';
import * as BuycarActions from './PayActions';
import SpinnerComponent from '../spinner/SpinnerComponent';
import {Button,Icon} from 'antd';

import HistorybackComponent from "../buycar/HistorybackComponent.js";
import MaskComponent from "./MaskComponent";
import LinksMask  from "../common/linksMask/linksMaskComponent";
import './Pay.scss';
import * as commonUrl from '../common/commonUrl1.js';

class BuycarComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
                    isShowLinks:'none',
                    order_status:'待付款',
                    totalPri:0,
                    maskshow:false,
                    order_num:0
                    };
        this.masknoshow = this.masknoshow.bind(this);
        this.makesure = this.makesure.bind(this);
    }

    componentWillMount(){
        console.log(this.props.params.order_num)
        const obj ={
                    order_num:this.props.params.order_num
                    }
        this.props.payInit(obj).then((response)=>{
            console.log(JSON.parse(response)[0]);
            var order = JSON.parse(response)[0];
            this.setState({order_status:order.order_status,totalPri:order.order_total_price,order_num:this.props.params.order_num});
            // console.log(this.state.totalPri)
        })  
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
    makesure(){
        console.log(1)
        const obj = {order_num:this.state.order_num,order_status:'待发货',makesure:true};
        this.props.payInit(obj).then((response)=>{
            // console.log(response)
            // if(response == 'true'){
                // console.log(2)
                this.setState({maskshow:true});
            // }
        });
    }
    masknoshow(){
        this.setState({maskshow:false});
        hashHistory.push('/my/myOrder/2')
    }

    render(){
        return(
            <div id="pay">
                <header id="payheader">
                    <HistorybackComponent />
                    <h2 onClick={this.topay}>在线支付</h2>
                    <Icon className="sort-links" type="ellipsis" onClick={this.showLinks.bind(this)}/>
                </header>
                <main id="paymain">
                    <span onClick={this.makesure}>确认支付</span>
                </main>
                <SpinnerComponent show = {this.props.loading} />
                <MaskComponent maskshow={this.state.maskshow} masknoshow={this.masknoshow} />
                <LinksMask childHideLinks={this.hideLinks.bind(this)} hideLinkIdx={5} boxStyleObj={{'display': this.state.isShowLinks}} ulStyleObj={{top:'50px',right:0}}/>
            </div>
        )
    }
}


const mapStateToProps = state => ({
    loading: state.login.loading,
    // accountList:state.account.data ? JSON.parse(state.account.data[0].account) : []
})
export default connect(mapStateToProps, BuycarActions)(BuycarComponent)