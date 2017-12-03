import React from 'react'
import {connect} from "react-redux"
import { Tabs ,Button, message} from 'antd';
const TabPane = Tabs.TabPane;
import {Link} from 'react-router'
import * as commonUrl from '../../common/commonUrl1.js';
import Historyback from "../../buycar/HistorybackComponent" 
import orderscss from "./myOrder.scss"
import http from "../../../utils/HttpClient.js"
var totalprice=0;
class MyOrderComponent extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            user_order:[[],[],[],[]],
            order_product:[[],[],[],[]],
            totalprice:[[],[],[],[]]
        }
    }
    onChange(key){
        if(key==1&&this.state.user_order[0].length>0){
            this.refs.noGoods1.style.display = 'none';
        }else if(key==2&&this.state.user_order[1].length>0){
            this.refs.noGoods2.style.display = 'none';
        }else if(key==3&&this.state.user_order[2].length>0){
            this.refs.noGoods3.style.display = 'none';
        }else if(key==4&&this.state.user_order[3].length>0){
            this.refs.noGoods4.style.display = 'none';
        }

    }
    onDelete(e){
        const idx = e.target.getAttribute('data-index');
        console.log(this.state.user_order[0][idx].order_num)
        http.get('my/deleteOrder.php',`order_num=${this.state.user_order[0][idx].order_num}`).then((res)=>{
            if(res=='ok'){
                var update = this.state.user_order;
                var update1 = this.state.order_product;
                var update2 = this.state.totalprice;
                update[0].splice(idx,1);
                update1[0].splice(idx,1);
                update2[0].splice(idx,1);
                this.setState({ user_order: update,user_product: update1,user_totalprice: update2 });
                message.success('已取消订单');
            }
        })
    }
    componentDidMount(){
        var user = JSON.parse(sessionStorage.getItem('user'));
        if(user){
            var username = user.username;
            http.get('my/myorder.php',`username=${username}`).then((res)=>{
                var res = JSON.parse(res);
                var order_product = [];
                var waitpay = [];
                var waitsend = [];
                var waitget = [];
                var waitrate = [];
                var waitpay_product = [];
                var waitsend_product = [];
                var waitget_product = [];
                var waitrate_product = [];
                var resAry = [];
                res.forEach((item)=>{
                    if(item.order_status=='待付款'){
                        waitpay.push(item);
                        waitpay_product.push(JSON.parse(item.order_product));
                    }else if(item.order_status=='待发货'){
                        waitsend.push(item);
                        waitsend_product.push(JSON.parse(item.order_product));
                    }else if(item.order_status=='待收货'){
                        waitget.push(item);
                        waitget_product.push(JSON.parse(item.order_product));
                    }else if(item.order_status=='待评价'){
                        waitrate.push(item);
                        waitrate_product.push(JSON.parse(item.order_product));
                    }
                })
                resAry.push(waitpay);
                resAry.push(waitsend);
                resAry.push(waitget);
                resAry.push(waitrate);
                order_product.push(waitpay_product);
                order_product.push(waitsend_product);
                order_product.push(waitget_product);
                order_product.push(waitrate_product);
                var totalpriceAry = [];
                var waitpay_totalpriceAry = [];
                var waitsend_totalpriceAry = [];
                var waitget_totalpriceAry = [];
                var waitrate_totalpriceAry = [];
                console.log(order_product)
                order_product[0].map(function(item){
                    var totalprice = 0;
                    item.forEach(function(item){
                        totalprice+=item.product_origin_price*item.amount;
                    })
                    waitpay_totalpriceAry.push(totalprice);
                })
                order_product[1].map(function(item){
                    var totalprice = 0;
                    item.forEach(function(item){
                        totalprice+=item.product_origin_price*item.amount;
                    })
                    waitsend_totalpriceAry.push(totalprice);
                })
                order_product[2].map(function(item){
                    var totalprice = 0;
                    item.forEach(function(item){
                        totalprice+=item.product_origin_price*item.amount;
                    })
                    waitget_totalpriceAry.push(totalprice);
                })
                order_product[3].map(function(item){
                    var totalprice = 0;
                    item.forEach(function(item){
                        totalprice+=item.product_origin_price*item.amount;
                    })
                    waitrate_totalpriceAry.push(totalprice);
                })
                totalpriceAry.push(waitpay_totalpriceAry);
                totalpriceAry.push(waitsend_totalpriceAry);
                totalpriceAry.push(waitget_totalpriceAry);
                totalpriceAry.push(waitrate_totalpriceAry);
                console.log(resAry,order_product,totalpriceAry)
                if(this.props.params.key==1&&waitpay.length>0){
                    this.refs.noGoods1.style.display = 'none';
                }else if(this.props.params.key==2&&waitsend.length>0){
                    this.refs.noGoods2.style.display = 'none';
                }else if(this.props.params.key==3&&waitget.length>0){
                    this.refs.noGoods3.style.display = 'none';
                }else if(this.props.params.key==4&&waitrate.length>0){
                    this.refs.noGoods4.style.display = 'none';
                }


                this.setState({ user_order: resAry,order_product:order_product, totalprice:totalpriceAry});

            })
        
        }
        
    }
    render(){
        return (
            <div className="MyOrder">
                <div className="personalHead">
                    <div>
                        <Historyback />
                    </div>
                    <h3>我的订单</h3>
                </div>
                <Tabs defaultActiveKey={this.props.params.key} onChange={this.onChange.bind(this)}>
                    <TabPane tab="待付款" key="1" forceRender='true'>
                        <div className="goShop">
                            <div className="noGoods" ref="noGoods1">
                                <img src="/src/asset/buycar.png"/>
                                <p>您没有相关订单</p>
                                <Link to="/home"><span>去添点宝贝</span></Link>
                            </div>
                            {
                                this.state.user_order[0].map((item,idx)=>{
                                    return (
                                        <div className="waitpay">
                                            <div className="waitpay_h">
                                            <div>订单状态： <span> {item.order_status}</span></div>
                                                <p>{item.order_date}</p>
                                            </div>
                                            <ul>
                                                {   
                                                    this.state.order_product[0][idx].map(function(item){
                                                        return (
                                                            <li><img src={commonUrl.IMGURL+item.product_image} /></li>
                                                        )
                                                    })
                                                }

                                            </ul>
                                            <div className="waitpay_b">共{this.state.order_product[0][idx].length}件商品 合计<span>￥{this.state.totalprice[0][idx]}</span></div>
                                            <div className="waitpay_handle">
                                            <Link to={"/pay/"+item.order_num}><Button type="danger" ghost>付款</Button></Link>
                                            <Button data-index={idx} type="primary" ghost  onClick={this.onDelete.bind(this)}>取消订单</Button>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            

                        </div>
                    </TabPane>
                    <TabPane tab="待发货" key="2" forceRender='true'>
                        <div className="goShop">
                            <div className="noGoods" ref="noGoods2">
                                <img src="/src/asset/buycar.png"/>
                                <p>您没有相关订单</p>
                                <Link to="/home"><span>去添点宝贝</span></Link>
                            </div>
                            {
                                this.state.user_order[1].map((item,idx)=>{
                                    return (
                                        <div className="waitpay">
                                            <div className="waitpay_h">
                                            <div>订单状态： <span> {item.order_status}</span></div>
                                                <p>{item.order_date}</p>
                                            </div>
                                            <ul>
                                                {   
                                                    this.state.order_product[1][idx].map(function(item){
                                                        return (
                                                            <li><img src={commonUrl.IMGURL+item.product_image} /></li>
                                                        )
                                                    })
                                                }

                                            </ul>
                                            <div className="waitpay_b">共{this.state.order_product[1][idx].length}件商品 合计<span>￥{this.state.totalprice[1][idx]}</span></div>
                                            <div className="waitpay_handle">
                                            <Button type="danger" ghost disabled>已付款</Button>
                                            <Button type="primary" ghost>请求退款</Button>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </TabPane>
                    <TabPane tab="待收货" key="3" forceRender='true'>
                        <div className="goShop">
                            <div className="noGoods" ref="noGoods3">
                                <img src="/src/asset/buycar.png"/>
                                <p>您没有相关订单</p>
                                <Link to="/home"><span>去添点宝贝</span></Link>
                            </div>
                            {
                                this.state.user_order[2].map((item,idx)=>{
                                    return (
                                        <div className="waitpay">
                                            <div className="waitpay_h">
                                            <div>订单状态： <span> {item.order_status}</span></div>
                                                <p>{item.order_date}</p>
                                            </div>
                                            <ul>
                                                {   
                                                    this.state.order_product[2][idx].map(function(item){
                                                        return (
                                                            <li><img src={commonUrl.IMGURL+item.product_image} /></li>
                                                        )
                                                    })
                                                }

                                            </ul>
                                            <div className="waitpay_b">共{this.state.order_product[2][idx].length}件商品 合计<span>￥{this.state.totalprice[2][idx]}</span></div>
                                            <div className="waitpay_handle">
                                            <Link to={"/pay/"+item.order_num}><Button type="danger" ghost>确认收货</Button></Link>
                                            <Button type="primary" ghost>请求退款</Button>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </TabPane>
                    <TabPane tab="待评价" key="4" forceRender='true'>
                        <div className="goShop">
                            <div className="noGoods" ref="noGoods4">
                                <img src="/src/asset/buycar.png"/>
                                <p>您没有相关订单</p>
                                <Link to="/home"><span>去添点宝贝</span></Link>
                            </div>
                            {
                                this.state.user_order[3].map((item,idx)=>{
                                    return (
                                        <div className="waitpay">
                                            <div className="waitpay_h">
                                            <div>订单状态： <span> {item.order_status}</span></div>
                                                <p>{item.order_date}</p>
                                            </div>
                                            <ul>
                                                {   
                                                    this.state.order_product[3][idx].map(function(item){
                                                        return (
                                                            <li><img src={commonUrl.IMGURL+item.product_image} /></li>
                                                        )
                                                    })
                                                }

                                            </ul>
                                            <div className="waitpay_b">共{this.state.order_product[3][idx].length}件商品 合计<span>￥{this.state.totalprice[3][idx]}</span></div>
                                            <div className="waitpay_handle">
                                            <Link to={"/pay/"+item.order_num}><Button type="danger" ghost>去评价</Button></Link>
                                            <Button type="primary" ghost>查看订单</Button>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </TabPane>
                </Tabs>
            </div>
        )
    }
}

export default MyOrderComponent

