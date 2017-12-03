//react相关
import React from 'react'

//第三方
import {Icon} from 'antd'

//自定义
import './goodsChoice.scss'

export default class GoodsChoice extends React.Component{
	
	render(){
		return (
			<div className="goods-choice" style={{height:this.props.choiceHeight}}>
				123
				{this.props.goodsObj.product_name}
				<div onClick={this.props.childAddCart}>加入购物车</div>
			</div>
		)
	}
}
