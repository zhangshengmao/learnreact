//react相关
import React from 'react'
import {Link,hashHistory} from 'react-router'

//第三方
import {Icon,Input,BackTop,Carousel} from 'antd';
const Search = Input.Search;
import httpAjax from "superagent"



//自定义
import './details.scss'
import Hbicon from '../buycar/HistorybackComponent.js'
import LinksMask from '../common/linksMask/linksMaskComponent.js'
import SplitGap from '../common/splitGap/splitGap.js'
import Loading from '../common/loading/loadingComponent.js'
import {IMGURL} from '../common/commonUrl.js'


class detailsComponent extends React.Component {
	constructor(props){
        super(props);
        this.state={
        	isShowLinks:'none', //linksMaskComponent.js：公共模块导航相关属性
        	showLoading:false	//loadingComponent.js：公共模块导航相关属性
        	/*goodDetail:{
        		good:{
        			imgArr:['http://www.mallvv.com/data/upload/shop/store/goods/5523/5523_05204429888197885_360.jpg',
        					'http://www.mallvv.com/data/upload/shop/store/goods/5523/5523_05204414095163293_360.jpg',
        					'http://www.mallvv.com/data/upload/shop/store/goods/5523/5523_05204414104485113_360.jpg',
        					'http://www.mallvv.com/data/upload/shop/store/goods/5523/5523_05204414098391572_360.jpg',
        					'http://www.mallvv.com/data/upload/shop/store/goods/5523/5523_05204414101449903_360.jpg'
        			],
        			name:'克罗德曼 布艺/松木框架 床架 AFB-607',
        			nowPrice:7800,
        			oldPrice:9800,
        			sellNum:356
        		},
        		desc:{
        			imgArr:['http://www.mallvv.com/data/upload/shop/store/goods/5523/5523_05223222234151228_1280.jpg',
        					'http://www.mallvv.com/data/upload/shop/store/goods/5523/5523_05223222246543956_1280.jpg',
        					'http://www.mallvv.com/data/upload/shop/store/goods/5523/5523_05223222255069538_1280.jpg',
        					'http://www.mallvv.com/data/upload/shop/store/goods/5523/5523_05223222250796516_1280.jpg',
        					'http://www.mallvv.com/data/upload/shop/store/goods/5523/5523_05223222238667729_1280.jpg',
        					'http://www.mallvv.com/data/upload/shop/store/goods/5523/5523_05223222242553886_1280.jpg'
        			]
        		},
        		ratings:{
        			typeArr:['全部评价','满意','一般','不满意','晒图'],
        			ratingList:[{
        				iconType:'1',
        				name:'18814098979',
        				time:150373271649,
        				starNum:4,
        				text:'款式很喜欢，跟图片一样，以后来大宝家具买可以放心了',
        				goodImgs:[]
        			},{
        				iconType:'1',
        				name:'18814023979',
        				time:140373271649,
        				starNum:5,
        				text:'款式很喜欢',
        				goodImgs:[]
        			},{
        				iconType:'1',
        				name:'18845798979',
        				time:150273271649,
        				starNum:5,
        				text:'喜欢',
        				goodImgs:['http://www.mallvv.com/data/upload/shop/store/goods/5523/5523_05204429888197885_360.jpg'
        				]
        			},{
        				iconType:'1',
        				name:'1566798979',
        				time:150573271649,
        				starNum:3,
        				text:'还好吧',
        				goodImgs:[
        				]
        			},{
        				iconType:'1',
        				name:'15614598979',
        				time:140373271649,
        				starNum:1,
        				text:'不好',
        				goodImgs:[]
        			},{
        				iconType:'1',
        				name:'18889798979',
        				time:144373271649,
        				starNum:5,
        				text:'款式很喜欢，跟图片一样，以后来大宝家具买可以放心了',
        				goodImgs:['http://www.mallvv.com/data/upload/shop/store/goods/5523/5523_05204429888197885_360.jpg'
        				]
        			},{
        				iconType:'1',
        				name:'18819098979',
        				time:148373271649,
        				starNum:5,
        				text:'款式很喜欢，跟图片一样，以后来大宝家具买可以放心了',
        				goodImgs:[]
        			},{
        				iconType:'1',
        				name:'18816698979',
        				time:147373271649,
        				starNum:2,
        				text:'款式还不错',
        				goodImgs:['http://www.mallvv.com/data/upload/shop/store/goods/5523/5523_05204414104485113_360.jpg',
        						'http://www.mallvv.com/data/upload/shop/store/goods/5523/5523_05204429888197885_360.jpg'
        				]
        			},{
        				iconType:'1',
        				name:'18816788979',
        				time:1410625593567,
        				starNum:1,
        				text:'款式很low',
        				goodImgs:['http://www.mallvv.com/data/upload/shop/store/goods/5523/5523_05204414104485113_360.jpg'
        				]
        			},{
        				iconType:'1',
        				name:'18817098979',
        				time:1415640673567,
        				starNum:3,
        				text:'款式很一般呀',
        				goodImgs:[]
        			},{
        				iconType:'1',
        				name:'18867798979',
        				time:1509640593567,
        				starNum:5,
        				text:'款式很喜欢，跟图片一样，以后来大宝家具买可以放心了',
        				goodImgs:['http://www.mallvv.com/data/upload/shop/store/goods/5523/5523_05204414104485113_360.jpg',
        						'http://www.mallvv.com/data/upload/shop/store/goods/5523/5523_05204429888197885_360.jpg'
        				]
        			}]
        		}
        	}
        */
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
	
	
	
	//详情页自身相关模块
	componentWillMount(){
		//用户登录相关
		let userObj = JSON.parse(sessionStorage.getItem('user'));
		console.log(this.props.location.state)
		//loading模块
		this.setState({showLoading:true});
		httpAjax.get("http://10.3.137.248:888/api/mobile/sort/product.php").query('?type=getDetails&value='+this.props.location.state).then((res) => {
			let resObj = JSON.parse(res.text)[0];
//			console.log(resObj);
			this.setState({
				detailGood:resObj,
				goodsSize:0,
				goodsColor:0,
				goodsNum:1,
				detailDesc:JSON.parse(resObj.product_desc),
				detailRatings:JSON.parse(resObj.product_ratings),
				showIndex:'block',
				goodChoiceOpacity:'0',
				goodChoiceBottom:'-100%',
				showLoading:false,
				userObj:userObj,
				isHasCollect:false,
				userCollect:[]
			});
			if(this.state.userObj){
				let userCollect = this.state.userObj.user_collect.split(',');
//				console.log(userCollect,resObj.id,this.state.userObj.user_collect)
				let isHasCollect = userCollect.some(item => {return item === resObj.id});
				if(isHasCollect){this.refs.favorLi.className = "add-favor has-favor";}
				this.setState({userCollect:userCollect,isHasCollect:isHasCollect});
			}
		});
//		console.log('商品Id',this.props.location.state);
//		this.setState({
//			detailGood:this.state.goodDetail.good,
//		});
	}
	componentDidMount(){
		console.log(1,this.refs.indexCont)
//		this.refs.indexCont.click();
	}
	componentDidMount(){
		let lis = this.refs.tabList.querySelectorAll('li');
		lis.forEach((item) => {
			item.className = ' ';
		});
		if(this.props.location.pathname === "/details/detailsDesc"){
			lis[1].className = 'current';
			this.setState({showIndex:'none'})
		}else if(this.props.location.pathname === "/details/detailsRating"){
			lis[2].className = 'current';
			this.setState({showIndex:'none'})
		}else{
			lis[0].className = 'current';
			this.setState({showIndex:'block'})
		}
	}
	changeTab(idx){
		let lis = this.refs.tabList.querySelectorAll('li');
		if(idx === 0){
			this.setState({showIndex:'block'})
		}else{
			this.setState({showIndex:'none'})
		}
		lis.forEach((item,index) => {
			if(index === idx){
				item.className = 'current';
			}else{
				item.className = ' ';
			}
		})
	}
	//收藏相关
	changeFavor(){
		let favor = this.refs.favorLi;
		let colletGoods = this.state.userCollect;
		if(this.state.isHasCollect){
			favor.className = "add-favor";
			this.setState({isHasCollec:false});
			colletGoods.forEach((item,idx,arr) => {
				if(item == this.state.detailGood.id){
					arr.splice(idx,1);
				}
			})
		}else{
			favor.className = "add-favor has-favor";
			this.setState({isHasCollec:true});
			colletGoods.push(this.state.detailGood.id)
		}
		this.setState({userCollect:colletGoods});
		if(this.state.userObj){
//				console.log(this.state.userObj)
			httpAjax.get("http://10.3.137.248:888/api/mobile/my/goodsCollect.php")
			.query('username='+this.state.userObj.username+'&goodsId='+colletGoods.join(','))
			.then((res) => {console.log(res.text)});
		}
	}
	//购物车相关
	addCart(){
		if(!this.state.userObj){
			hashHistory.push('/login');
		}else{
			let carli = {
				username:this.state.userObj.username,
				product_id:this.state.detailGood.id,
				product_name:this.state.detailGood.product_name,
				product_origin_price:(this.state.detailGood.product_origin_price*this.state.detailGood.product_discount).toFixed(0),
				amount:this.state.goodsNum,
				product_image:this.state.detailGood.product_image
			}
			httpAjax.get("http://10.3.137.248:888/api/mobile/buycar/buycar.php")
			.query('username='+this.state.userObj.username)
			.then((res) => {
				// console.log(JSON.parse(res.text).length)
				var buycarLi  = JSON.parse(res.text).length <= 0 ? [] : JSON.parse(JSON.parse(res.text)[0].list);
				var carhas=false;
				buycarLi.forEach(function(item){
					if(item.product_name == carli.product_name){
						item.amount += carli.amount;
						carhas=true;
					}
				})
				if(!carhas){
					buycarLi.push(carli);
				}
				httpAjax.get("http://10.3.137.248:888/api/mobile/buycar/buycar.php")
				.query('username='+this.state.userObj.username+'&list='+JSON.stringify(buycarLi))
				.then((res) => {
					// console.log(JSON.parse(res.text))
					})						
			});
//			console.log(JSON.stringify(carli));
//			console.log('发请求到购物车接口')
		}
	}
	buyNow(){
		if(!this.state.userObj){
			hashHistory.push('/login');
		}else{
			let carli = {
				username:this.state.userObj.username,
				product_id:this.state.detailGood.id,
				product_name:this.state.detailGood.product_name,
				product_origin_price:(this.state.detailGood.product_origin_price*this.state.detailGood.product_discount).toFixed(0),
				amount:this.state.goodsNum,
				product_image:this.state.detailGood.product_image
			}
			httpAjax.get("http://10.3.137.248:888/api/mobile/buycar/buycar.php")
			.query('username='+this.state.userObj.username)
			.then((res) => {
				var buycarLi  = JSON.parse(res.text).length == 0 ? [] : JSON.parse(JSON.parse(res.text)[0].list);
				var carhas=false;
				buycarLi.forEach(function(item){
					if(item.product_name == carli.product_name){
						item.amount += carli.amount;
						carhas=true;
					}
				})
				if(!carhas){
					buycarLi.push(carli);
				}
//				console.log(buycarLi)
				httpAjax.get("http://10.3.137.248:888/api/mobile/buycar/buycar.php")
				.query('username='+this.state.userObj.username+'&list='+JSON.stringify(buycarLi))
				.then((res) => {
					hashHistory.push('/buycar');
					})
//								
			});
//			console.log(JSON.stringify(carli));
//			console.log('发请求到购物车接口')
		}
	}
	
	//商品选择相关
	showGoodChoice(){
		this.setState({goodChoiceHeight:'100%',goodChoiceBottom:'0'})
	}
	hideGoodChoice(e){
		if(e.target.className.indexOf('hide-good-choice')>=0){
			this.setState({goodChoiceHeight:'0',goodChoiceBottom:'-100%'})
		}
	}
	changeSize(idx){
		this.setState({goodsSize:idx})
	}
	changeColor(idx){
		this.setState({goodsColor:idx})
	}
	subNum(){
		if(this.state.goodsNum > 1){
			let num = this.state.goodsNum-1;
			this.setState({goodsNum:num})
		}else{
			console.log('商品数量不能小于1')
		}
	}
	addNum(){
		if(this.state.goodsNum < this.state.detailGood.product_inventory){
			let num = this.state.goodsNum+1;
			this.setState({goodsNum:num})
		}else{
			console.log('商品数量已超过该商品库存')
		}
	}
    render(){
        return(
            <div className="details">
                <div className="detailst-head">
                	<Hbicon className="sort-hb"/>
					<ul className="sort-sh" ref="tabList">
						<li className="current" onClick={this.changeTab.bind(this,0)}><Link to="/details/">商品</Link></li>
						<li onClick={this.changeTab.bind(this,1)}><Link to={{pathname:"/details/detailsDesc",state:this.state.detailDesc}}>详情</Link></li>
						<li onClick={this.changeTab.bind(this,2)}><Link to={{pathname:"/details/detailsRating",state:this.state.detailRatings}}>评价</Link></li>
					</ul>
					<Icon className="sort-links" type="ellipsis" onClick={this.showLinks.bind(this)}/>
				</div>
				{/*主要内容*/}
				<div className="details-cont">
					{!this.state.detailGood?null:
						<div style={{display:this.state.showIndex}} className="details-good" id="detailsGood">
							<Carousel autoplay className="img-list">
								{
									JSON.parse(this.state.detailGood.product_banner_imgs).map((img,idx) => {
										return (<div key={idx}><img src={IMGURL+"product/"+img+'.jpg'} /></div>)
									})
								}
							</Carousel>
							<p className="text">{this.state.detailGood.product_name}</p>
							<div className="extra">
								<div className="price">
									<span className="now-price">￥{(this.state.detailGood.product_origin_price*1*this.state.detailGood.product_discount).toFixed(0)}</span>
									{this.state.detailGood.product_discount !== '1' ? <span className="old-price">￥{this.state.detailGood.product_origin_price}</span> : null}
								</div>
								<div className="sell-num">已售 {this.state.detailGood.product_sold_out}</div>
							</div>
							<SplitGap />
							<div className="activity">
								<span className="title">活动：</span>
								<ul className="main-cont">
									{false?null:<li><span className="name">100元</span><span className="text">正价商品满1000-100以上通用券</span></li>}
									{this.state.detailGood.product_discount == '1'?null:<li><span className="name">直降</span><span className="text">已优惠{(this.state.detailGood.product_origin_price*(1-this.state.detailGood.product_discount)).toFixed(0)}元</span></li>}
								</ul>
							</div>
							<SplitGap />
							<div className="good-choice" onClick={this.showGoodChoice.bind(this)}>
								<span className="title">已选：</span>
								<div className="main-cont">
									<span>{this.state.detailGood.product_spec.split('/')[this.state.goodsSize]}</span>
									<span>{this.state.detailGood.product_color.split('/')[this.state.goodsColor]}</span>
									<span>{this.state.goodsNum}个</span>
								</div>
								<Icon type="right" />
							</div>
							<div className="others">
								<span><Icon type="check-circle-o" />发货&售后服务</span>
								<span><Icon type="check-circle-o" />45天退货</span>
								<span><Icon type="check-circle-o" />质保一年</span>
								<span><Icon type="check-circle-o" />贵就赔</span>
							</div>
						</div>
					}
					{this.props.children}
				</div>
				{/*底部内容*/}
				<div className="details-footer">
					<ul>
						<li className="to-home"><Link to="/home"><Icon type="home"  style={{ fontSize: 20, color: '#555555' }}/>首页</Link></li>
						<li className="add-favor" onClick={this.changeFavor.bind(this)} ref="favorLi"><Icon type="star-o"  style={{ fontSize: 20, color: '#555555' }}/><Icon type="star"  style={{ fontSize: 20, color: '#FFCE42' }}/><span>收藏</span></li>
						<li className="cart-list"><Link to="/buycar"><Icon type="shopping-cart"  style={{ fontSize: 20, color: '#555555' }}/>购物车</Link></li>
					</ul>
					<ul>
						<li className="add-cart" onClick={this.addCart.bind(this)}>加入购物车</li>
						<li className="buy-now" onClick={this.buyNow.bind(this)}>立即购买</li>
					</ul>
				</div>
				{/*其它内容*/}
				<Loading showLoading={this.state.showLoading}/>
				<LinksMask childHideLinks={this.hideLinks.bind(this)} hideLinkIdx={-1} boxStyleObj={{'display': this.state.isShowLinks}} ulStyleObj={{top:'50px',right:0}}/>
				<BackTop style={{right:0,bottom:'50px'}}>
			      <div className="ant-back-top-inner"><Icon type="up-circle-o"  style={{ fontSize: 28, color: '#555555',backgroundColor:'#fff',borderRadius:'50%' }}/></div>
			    </BackTop>
			    {/*商品选择*/}
			    {!this.state.detailGood?null:
				    <div className="goods-choice hide-good-choice" onClick={this.hideGoodChoice.bind(this)} style={{height:this.state.goodChoiceHeight}}>
						<div className="choice-cont" style={{bottom:this.state.goodChoiceBottom}}>
							<div className="top">
								<img src={IMGURL+"/product/"+this.state.detailGood.product_image} />
								<div className="text">
									<p>{this.state.detailGood.product_name}</p>
									<span className="price">￥{this.state.detailGood.product_origin_price*this.state.detailGood.product_discount}</span>
								</div>
								<Icon  className="hide-good-choice" type="close" onClick={this.hideGoodChoice.bind(this)}/>
							</div>
							<div className="main">
								<div className="sizes">
									<h3 className="title">规格</h3>
									<div className="text">
										{this.state.detailGood.product_spec.split('/').map((item,idx) => {
											return <span key={idx} onClick={this.changeSize.bind(this,idx)} className={idx===this.state.goodsSize?"current":null}>{item}</span>
										})}
									</div>
								</div>
								<div className="colors">
									<h3 className="title">颜色</h3>
									<div className="text">
										{this.state.detailGood.product_color.split('/').map((item,idx) => {
											return <span key={idx} onClick={this.changeColor.bind(this,idx)}  className={idx===this.state.goodsColor?"current":null}>{item}</span>
										})}
									</div>
								</div>
								<div className="nums">
									<div className="title">数量</div>
									<div className="change-num">
										<span className="last-num">库存数({this.state.detailGood.product_inventory})</span>
										<span className="buy-num">
											<span onClick={this.subNum.bind(this)}><Icon type="minus" /></span>
											<span className="num">{this.state.goodsNum}</span>
											<span onClick={this.addNum.bind(this)}><Icon type="plus" /></span>
										</span>
									</div>
								</div>
							</div>
							<div className="bottom" onClick={this.addCart.bind(this)}>加入购物车</div>
						</div>
					</div>
				}
            </div>
        )
    }
}

export default detailsComponent