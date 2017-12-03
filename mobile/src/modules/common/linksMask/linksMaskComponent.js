//react系列
import React from 'react';
import {Link} from 'react-router'

//第三方系列
import {Icon,Input} from 'antd';
const Search = Input.Search;

export default class LinksMask extends React.Component{
	constructor(props){
        super(props);
		this.state = {
			linksArr:[['首页','home','/home'],['分类','bars','/sort'],['购物车','shopping-cart','/buycar'],['我的','user','/my/myHome']],
		}
	}
	hideLinksMask(event){
		this.props.childHideLinks();
	}
	render(){
		return (
			<div onClick={this.hideLinksMask.bind(this)} className="links-msk" style={Object.assign({display:'none',position:'fixed',zIndex:9999,top:0,left:0,right:0,bottom:0,backgroundColor:'rgba(200,200,200,.7)'},this.props.boxStyleObj)}>
				<ul className="links-list" style={Object.assign({position:'absolute',top:50,right:0,backgroundColor:'rgb(255,255,255)'},this.props.ulStyleObj)}>
					{
						this.state.linksArr.map(function(item,idx){
							if(this.props.hideLinkIdx === idx){return}
							return (
								<li key={idx} style={{width:'120px',height:'40px',lineHeight:'40px',borderLeft:'1px solid rgba(7,17,27,.1)',borderBottom:'1px solid rgba(7,17,27,.1)'}}><Link to={item[2]} style={{paddingLeft:'10px',display:'block',width:'100%',height:'100%',color:'#A4A4A4',fontSize:'16px'}}><Icon type={[item[1]]} style={{color:'#4C4C4C',fontSize:'22px',verticalAlign:'middle',marginRight:'4px'}}/><span style={{verticalAlign:'middle'}}>{item[0]}</span></Link></li>
							)
						}.bind(this))
					}
				</ul>
			</div>
		)
	}
}
