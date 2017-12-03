//react相关
import React from 'react'

//第三方
import {Icon,Carousel} from 'antd';

//自定义
import SplitGap from '../common/splitGap/splitGap.js'

export default class GoodComponet extends React.Component{
	componentWillMount(){
		this.setState({detailGood:this.props.location.state})
	}
	render(){
		return (
			<div className="details-good" id="detailsGood">
				<Carousel autoplay className="img-list">
					{
						!this.state.detailGood || !this.state.detailGood.imgArr?null:this.state.detailGood.imgArr.map((img,idx) => {
							return (<div key={idx}><img src={img} /></div>)
						})
					}
				</Carousel>
				
				<SplitGap />
				<div className="others">
					<span><Icon type="check-circle-o" />发货&售后服务</span>
					<span><Icon type="check-circle-o" />45天退货</span>
					<span><Icon type="check-circle-o" />质保一年</span>
					<span><Icon type="check-circle-o" />贵就赔</span>
				</div>
			</div>
		)
	}
}
