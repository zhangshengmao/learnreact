//react相关
import React from 'react'

//第三方


//自定义
import SplitGap from '../common/splitGap/splitGap.js'
import {IMGURL} from '../common/commonUrl.js'

export default class DescComponet extends React.Component{
	render(){
		return (
			<div className="details-desc" id="detailsDesc">
				<div className="desc-head" style={{textAlign:'center'}}><h2 style={{display:'inline-block'}}><span style={{padding:'0 6px',fontSize:'16px'}}>商品图文详情</span><SplitGap gapObj={{height:'3px',marginBottom:'6px'}}/></h2></div>
				<div className="desc-cont">
					{
						this.props.location.state.imgArr.map((item,idx) => {
							return (<img src={IMGURL+"product/"+item+'.jpg'} />)
						})
					}
				</div>
			</div>
		)
	}
}