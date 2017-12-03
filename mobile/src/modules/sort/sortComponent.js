//react系列
import React from 'react';
import {Link,hashHistory} from 'react-router'

//第三方系列
import {Icon,Input} from 'antd';
const Search = Input.Search;
import httpAjax from "superagent"

//自定义系列
import './sort.scss'
import Hbicon from '../buycar/HistorybackComponent.js'
import LinksMask from '../common/linksMask/linksMaskComponent.js'
import Loading from '../common/loading/loadingComponent.js'
import ComSearch from '../common/comSearch/comSearchComponent.js'
import {IMGURL} from '../common/commonUrl.js'
import {API_URL} from '../common/commonApiUrl.js'

class sortComponent extends React.Component {
	constructor(props){
        super(props);
        this.state={
        	isShowLinks:'none',//linksMaskComponent.js：公共模块导航相关属性
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
	
	
	//请求数据
	componentWillMount(){
		//loading模块
		this.setState({showLoading:true});
		httpAjax.get(API_URL+"/mobile/sort/sort.php").then((res) => {
//			console.log(22,JSON.parse(res.text));
			this.setState({goodTypeList:JSON.parse(res.text),showLoading:false});
			document.querySelector('#leftMenu li').click();
		});
	}
	
	changeGoodType(arr,event){
//		console.log(arr,this.refs.rightList,event.target)
		//给左侧点击添加聚焦类名
		var lis = document.querySelectorAll('#leftMenu li');
		lis.forEach((item) => {
			item.className = '';
		});
		event.target.className = 'left-menu-cur-li';
//		console.log(arr)
		//动态生成右侧对应列表
		let rightListHtml = arr.map((item) => {
			return `<li><a href="#/list/:${item.goodType}"><img src="${IMGURL}product/${item.img}.jpg" /><span>${item.text}</span></a></li>`;
		}).join('');
		this.refs.rightList.innerHTML = rightListHtml;
	}
	//默认显示第一个商品类别
//	componentDidMount(){
//		console.log(123)
//		!document.querySelector('#leftMenu li')?null:document.querySelector('#leftMenu li').click();
//	}
	
    render(){
        return(
            <div className="sort">
                <div className="sort-head">
					<Hbicon className="sort-hb"/>
					<ComSearch />
					<Icon className="sort-links" type="ellipsis" onClick={this.showLinks.bind(this)}/>
				</div>
				<div className="sort-cont">
					<div className="left-menu" id="leftMenu">
						<ul>
							{
								!this.state.goodTypeList?null:this.state.goodTypeList.map(function(item,idx){
									return <li key={idx} onClick={this.changeGoodType.bind(this,JSON.parse(item.sort_list))}>{item.sort_name}</li>
								}.bind(this))
							}
						</ul>
					</div>
					<ul className="right-list" ref="rightList">
						
					</ul>
				</div>
				<Loading showLoading={this.state.showLoading}/>
				<LinksMask childHideLinks={this.hideLinks.bind(this)} hideLinkIdx={1} boxStyleObj={{'display': this.state.isShowLinks}} ulStyleObj={{top:'50px',right:0}}/>
            </div>
        )
    }
}

export default sortComponent