//react系列
import React from 'react';
import {Link,hashHistory} from 'react-router'

//第三方系列
import {Icon,Input,BackTop} from 'antd';
const Search = Input.Search
import httpAjax from "superagent"

//自定义系列
import './list.scss'
import Hbicon from '../buycar/HistorybackComponent.js'
import LinksMask from '../common/linksMask/linksMaskComponent.js'
import Loading from '../common/loading/loadingComponent.js'
import ComSearch from '../common/comSearch/comSearchComponent.js'
import {IMGURL} from '../common/commonUrl.js'
import {API_URL} from '../common/commonApiUrl.js'

class listComponent extends React.Component {
	constructor(props){
        super(props);
        this.state={
        	isShowLinks:'none', //linksMaskComponent.js：公共模块导航相关属性
        	showLoading:false	//loadingComponent.js：公共模块导航相关属性
		}
    }
	//linksMaskComponent.js：公共模块导航相关方法
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
	
	
	//列表页自身模块
	//请求数据
	componentWillMount(){
//		console.log(this.props.params.goodType);
		//loading模块
		this.setState({showLoading:true});
		let query = "";
		if(this.props.params.goodType.indexOf('s-') >= 0){
			query = "?type=listName&value="+this.props.params.goodType.split('s-')[1];
		}else{
			query = "?type=listType&value="+this.props.params.goodType.split(':')[1];
		}
		httpAjax.get(API_URL+"/mobile/sort/product.php"+query).then((res) => {
			let resObj = JSON.parse(res.text);
//			console.log(resObj);
			this.setState({
				goodList:JSON.parse(res.text),
				defaultGoodList:JSON.parse(res.text),
				showLoading:false
			});
		});
	}
	componentWillReceiveProps(nextProps) {
     if(nextProps.params.goodType && nextProps.params.goodType != this.props.params.goodType) {
     	this.setState({showLoading:true});
        let query = "?type=listName&value="+nextProps.params.goodType.split('s-')[1];
        httpAjax.get(API_URL+"/mobile/sort/product.php"+query).then((res) => {
			let resObj = JSON.parse(res.text);
			this.setState({
				goodList:JSON.parse(res.text),
				defaultGoodList:JSON.parse(res.text),
				showLoading:false
			});
			this.defaultList(0);
		});
     } 
  }
//	componentDidMount(){
//		this.setState({
//			defaultGoodList:this.state.goodList
//		});
//	}
	defaultList(idx,e){
		this.setState({
			goodList:this.state.goodList.sort((a,b) => {return a.Id - b.id})
		});
		let li = null;
		this.refs.filterList.querySelectorAll('li').forEach((item,index) => {
			if(index === 3){return;}
			if(idx === index){
				li = item;
			}else{
				item.className = " ";
			}
		});
		li.className = "current";
	}
	sellNumList(idx,e){
		this.setState({
			goodList:this.state.goodList.sort((a,b) => {return b.product_sold_out - a.product_sold_out})
		});
		let li = null;
		this.refs.filterList.querySelectorAll('li').forEach((item,index) => {
			if(index === 3){return;}
			if(idx === index){
				li = item;
			}else{
				item.className = " ";
			}
		});
		li.className = "current";
	}
	sellPriceList(idx,e){
		let li = null;
		this.refs.filterList.querySelectorAll('li').forEach((item,index) => {
			if(index === 3){return;}
			if(idx === index){
				li = item;
			}else{
				item.className = " ";
			}
		});
		if(li.className.indexOf('up') >= 0){
			li.className = "current price-down";
			this.setState({
				goodList:this.state.goodList.sort((a,b) => {return b.product_origin_price*b.product_discount - a.product_origin_price*a.product_discount})
			});
		}else{
			li.className = "current price-up";
			this.setState({
				goodList:this.state.goodList.sort((a,b) => {return a.product_origin_price*a.product_discount - b.product_origin_price*b.product_discount})
			});
		}
	}
	listStyleType(idx,e){
		let li = this.refs.filterList.querySelectorAll('li')[idx];
		if(this.refs.goodList.className === 'list-type'){
			this.refs.goodList.className = '';
			li.className = "";
		}else{
			this.refs.goodList.className = 'list-type'
			li.className = "current";
		}
	}
    render(){
        return(
            <div className="list">
                <div className="list-head">
					<div className="list-search">
						<Hbicon className="sort-hb"/>
						<ComSearch />
						<Icon className="sort-links" type="ellipsis" onClick={this.showLinks.bind(this)}/>
					</div>
					<div className="list-filter">
						<ul ref="filterList">
							<li onClick={this.defaultList.bind(this,0)} className="current">综合</li>
							<li onClick={this.sellNumList.bind(this,1)}>销量</li>
							<li onClick={this.sellPriceList.bind(this,2)}>价格<Icon type="caret-up" className="icon-up"/><Icon type="caret-down"  className="icon-down"/></li>
							{/*<li>筛选</li>   后期再添加完善*/}
							<li onClick={this.listStyleType.bind(this,3)}><Icon type="menu-unfold"  className="icon-unfold"/><Icon type="menu-fold"  className="icon-fold"/></li>
						</ul>
					</div>
				</div>
				<div className="list-cont">
					<ul ref="goodList">
						{
							!this.state.goodList?null:!this.state.goodList.length?<div className="none-goods"><img src={IMGURL+"buycar.png"} /><p>抱歉，没有找到符合条件的商品</p></div>:this.state.goodList.map((item,idx) => {
								return (
									<li key={idx}>
										<Link to={{pathname:'/details/',state:item.id}}>
										<div className="img"><img src={IMGURL+"product/"+item.product_image} /></div>
										<div className="text">
											<span className="now-price">￥{(item.product_origin_price*item.product_discount).toFixed(0)}</span>
											{item.product_discount !== '1'? (<span className="old-price">￥{item.product_origin_price}</span>):null}
											<p className="desc">{item.product_name}</p>
											<p className="sell-num">已售{item.product_sold_out}</p>
										</div>
										</Link>
									</li>
								)
							})
						}
					</ul>
				</div>
				<LinksMask childHideLinks={this.hideLinks.bind(this)} hideLinkIdx={-1} boxStyleObj={{'display': this.state.isShowLinks}} ulStyleObj={{top:'50px',right:0}}/>
			    <BackTop style={{right:0,bottom:0}}>
			      <div className="ant-back-top-inner"><Icon type="up-circle-o"  style={{ fontSize: 28, color: '#555555',backgroundColor:'#fff',borderRadius:'50%' }}/></div>
			    </BackTop>
			    <Loading showLoading={this.state.showLoading}/>
            </div>
        )
    }
}

export default listComponent