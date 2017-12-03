import React from 'react'
import { Rate,Icon } from 'antd'

import './rating.scss'
import SplitGap from '../../common/splitGap/splitGap.js'

export default class ratingComponent extends React.Component{
	componentWillMount(){
		let typeNumArr = [0,0,0,0,0];
		this.props.location.state.ratingList.forEach((obj) => {
			typeNumArr[0]++;
			if(obj.goodImgs.length){typeNumArr[4]++;}
			switch(obj.starNum){
				case 5:
				case 4:
					typeNumArr[1]++;
					break;
				case 3:
				case 2:
					typeNumArr[2]++;
					break;
				case 1:
					typeNumArr[3]++;
					break;
			}
		});
		this.setState({typeNumArr:typeNumArr,ratingList:this.props.location.state.ratingList.sort((a,b) => {return b.time - a.time})});
	}
	showRatingType(idx){
		let lis = this.refs.ratingtype.querySelectorAll('li');
		lis.forEach((item,index) => {
			if(idx === index){
				item.className = 'current';
			}else{
				item.className = ' ';
			}
		});
		let list = this.props.location.state.ratingList
		let newList = []
		switch(idx){
			case 4:
				newList = list.filter((item) => {return item.goodImgs.length})
				break;
			case 3:
				newList = list.filter((item) => {return item.starNum == 1})
				break;
			case 2:
				newList = list.filter((item) => {return item.starNum == 2 || item.starNum == 3})
				break;
			case 1:
				newList = list.filter((item) => {return item.starNum == 4 || item.starNum == 5})
				break;
			case 0:
				newList = list.sort((a,b) => {return b.time - a.time})
				break;
		}
		this.setState({ratingList:newList})
	}
	timeFormat(time){
		return new Date(time).toLocaleString().replace(/上午|下午/,'	 ')
	}
	render(){
		return (
			<div className="rating" id="detailsRating">
				<ul className="rating-type" ref="ratingtype">
					{this.props.location.state.typeArr.map((item,idx) => {
						return (
							<li key={idx} onClick={this.showRatingType.bind(this,idx)} className={idx === 0 ? 'current' : ''}>
								<span className="text">{item}</span>
								<span className="num">({this.state.typeNumArr[idx]})</span>
							</li>
						)
					})}
				</ul>
				<ul className="rating-list">
					{
						this.state.ratingList.map((obj,idx) => {
							return (
								<div>
								{idx === 0?null:<SplitGap />}
								<li key={idx}>
									<div className="desc">
										<Icon type="smile" className="avatar"/>
										<div className="main">
											<p className="user">{obj.name.substr(0,3)+'***'+"18814098979".substr(6)}</p>
											<p className="time">{this.timeFormat(obj.time)}</p>
										</div>
										<div className="star"><Rate disabled defaultValue={obj.starNum} key={obj.starNum}/></div>
									</div>
									<p className="text">{obj.text}</p>
									<div className="imgs">
										{
											obj.goodImgs.map((img,index) => {
												return <img key={index} src={img} />
											})
										}
									</div>
								</li>
								
								</div>
							)
						})
					}				
				</ul>
			</div>
		)
	}
}
