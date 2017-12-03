import React from 'react'
import {Link,hashHistory} from 'react-router'
import {connect} from "react-redux"
import FooterComponent from '../common/footer/footerComponent'
import ComSearch from '../common/comSearch/comSearchComponent.js'

import './home.scss'
import {  Icon , Button , BackTop , Carousel,Input} from 'antd';

import * as homeActions from "./homeAction.js";

const Search = Input.Search
var baseURL='./src/asset/product/'
class homeComponent extends React.Component {
    componentWillMount(){
        this.props.homeInit().then(res=>{
            const response =JSON.parse(res)
            console.log(response)
        })
    }
    render(){
        if(this.props.data){
            const data =JSON.parse(this.props.data)
            console.log(data)
            return(
                <div className="home">
                    <header>
                        <div className="header-top">
                            <ComSearch />
                        </div>
                            <Carousel autoplay className="slideshow">
                               <div><img src="./src/asset/l1.jpg"/></div>
                               <div><img src="./src/asset/l2.jpg"/></div>
                               <div><img src="./src/asset/l3.jpg"/></div>
                               <div><img src="./src/asset/l4.jpg"/></div>
                             </Carousel>
                        <div className="home-main">
                            <ul>
                                <li><Link to="/buycar"><Icon type="shopping-cart"  className="white" style={{background:'#FF6F00'}} /><span>购物车</span></Link></li>
                                <li><Link to="/my/myHome"><Icon type="home"  className="white"style={{background:'#F7B200' }} /><span>客户晒家</span></Link></li>
                                <li><Link to="/sort"><Icon type="heart"  className="white" style={{background:'#B589E0' }} /><span>图览家居</span></Link></li>
                                <li><Link to="/home"><Icon type="check"  className="white" style={{background:'#F53274' }} /><span>体验馆</span></Link></li>
                            </ul>
                        </div>
                    </header>
                    <p className="f4f4f4">　</p>
                    <nav>
                        <div>
                            <div className="remen">
                                <span className="title-hong"><i>　</i>热门活动</span>
                                <div className="hot">
                                    {
                                        data.disc.map(function(item,idx){
                                            console.log(idx)
                                            return (
                                                <Link to={{pathname:'/details/',state:item.id}}>
                                                <div className={"h"+idx}>
                                                    <p className="hei">团购大趴</p>
                                                    <p className="red">好货低至1折</p>
                                                    <img src={baseURL+item.product_image}/>
                                                </div>
                                                </Link>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            <div className="jiaju">
                                <span className="title-hong"><i>　</i>畅销商品</span>
                                    <div className="jiaju-furniture">
                                    {
                                        data.sold.map(function(item,idx){
                                            return (
                                            <Link to={{pathname:'/details/',state:item.id}}>
                                            <div className={"h"+idx}>
                                                <p className="hei">{item.product_brand}</p>
                                                <p className="hui">赶快抢购！</p>
                                                <p className="red">￥<span className="price">{item.product_origin_price}</span></p>
                                                <img src={baseURL+item.product_image}/>
                                            </div>
                                            </Link>
                                            )
                                        })
                                        
                                    }
                                        
                                    </div>
                            </div>
                             <p className="f4f4f4"> 　</p>
                            <div className="xinpin">
                                <span className="title-hong"><i>　</i>新品推荐</span>
                                <div className="jiaju-recommend">
                                {
                                    data.time.map(function(item,idx){
                                        return(
                                            <ul className={"h"+idx}>
                                            <Link to={{pathname:'/details/',state:item.id}}>
                                                <li><p className="hei">{item.product_brand}</p></li>
                                                <li><p className="hui">立即下单</p></li>
                                                <li><p className="red">￥<span className="price">1250</span></p></li>
                                                <li><img src={baseURL+item.product_image}/></li>
                                            </Link>
                                            </ul>
                                        )
                                    })
                                }
                                </div>
                            </div>
                        </div>
                    </nav>
                    <p className="f4f4f4"> 　</p>
                    <main>
                        <div className="like">
                        <p className="wg-t"><span className="lan"><Icon type="star" className="blue"/></span><span>猜你喜欢</span></p>
                            {
                                data.limit.map(function(item,idx){
                                    return(
                                        <Link to={{pathname:'/details/',state:item.id}}>
                                        <ul>
                                            <li><img src={baseURL+item.product_image}/></li>
                                            <li><p>{item.product_name}</p></li>
                                            <li>
                                                <span className="red">￥<span>{item.product_origin_price*item.product_discount}</span></span>
                                                <span className="hui">已售<span>{item.product_sold_out}</span></span>
                                            </li>
                                        </ul>
                                        </Link>
                                    )
                                })
                            }
                        </div>
                    </main>
                    <footer>
                        <div>
                            <BackTop>
                              <div className="ant-back-top-inner">GO</div>
                            </BackTop>
                        </div>
                    </footer>
                    <div className="h50"></div>
                    {/*注释：公共底部*/}
                    <FooterComponent />
                </div>
            )
        }else{
            return (<div>'GG'</div>)
        }
       
    }
}

const MyState = function(state){
    return {
        data:state.myset.homedata
    }
}
export default connect(MyState, homeActions)(homeComponent)