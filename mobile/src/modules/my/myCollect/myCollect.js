import React from 'react'
import {connect} from "react-redux"
import {Link} from 'react-router'

import Historyback from "../../buycar/HistorybackComponent"; 
import orderscss from "./myCollect.scss";
import * as collectAction from "./mycollectAction";
import {Icon } from 'antd';

var baseURI = './src/asset/product/';
class MyCollectComponent extends React.Component{
    
    componentWillMount(){
        this.props.collectInit().then(response=>{
            var data = JSON.parse(this.props.show)
            let goodsId=data.user_collect.split(',').splice(0)
            this.props.collectGoods(JSON.stringify(goodsId)).then(response=>{
                var res = JSON.parse(response);
                console.log(this.props.show)
            })
        })

    }
    delAddress(e){
        let idx = e.target.attributes["data-num"].nodeValue;
        let goodsId=JSON.parse(this.props.show).user_collect.split(',');
        var str ="" 
        goodsId.forEach(function(item,index){
            if(item==idx){
                goodsId.splice(index,1);
            }
        })
        str = goodsId.join(',')
        this.props.DelCollect(str,JSON.stringify(goodsId),JSON.parse(this.props.show).username)
    }
    render(){
        
        if(!this.props.goodsdata){
            return null
        }
        if(JSON.parse(this.props.goodsdata).length>0){
            let data = JSON.parse(this.props.goodsdata)
            console.log(data)
            return (
                <div className="MyCollect">
                    <div className="personalHead">
                        <div>
                            <Historyback />
                        </div>
                        <h3>我的收藏</h3>
                    </div>
                    <div className="collectContent1">
                    {
                        data.map((item, index)=>{
                            return (

                                <div className="collectgoods" >
                                    <div><Link to={{pathname:'/details/',state:item.id}}>
                                    <img src={baseURI+item.product_image}/></Link></div>
                                    <div>
                                        <div>{item.product_name}</div>
                                        <div>
                                            <span>￥{item.product_origin_price}</span>
                                            <span>已售：{item.product_sold_out}</span>
                                            <Icon type="delete" data-num={item.id} onClick={this.delAddress.bind(this)}/>
                                        </div>
                                    </div>

                                </div>
                            )
                        })
                    }
                    </div>
                </div>
            )
        }else{
            return (
                <div className="MyCollect">
                    <div className="personalHead">
                        <div>
                            <Historyback />
                        </div>
                        <h3>我的收藏</h3>
                    </div>
                    <div className="collectContent">
                        <div></div>
                        <div>
                            <p>您还没有任何产品呢！</p>
                            <span><Link to="/home">看看好货</Link></span>
                        </div>
                    </div>
                </div>
            )  
        }
    }
}
const MyState = function(state){
    return {
        show:state.login.data,
        goodsdata:state.myset.goodsId
    }
}
export default connect(MyState, collectAction)(MyCollectComponent)
