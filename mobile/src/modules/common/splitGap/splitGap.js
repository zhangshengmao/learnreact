import React from 'react'

export default class splitGap extends React.Component{
	render(){
		return (<div style={Object.assign({height:'10px',width:"100%",backgroundColor:'#f5f5f5',borderTop:'1px solid rgba(7,17,27,.1)',borderBottom:'1px solid rgba(7,17,27,.1)'},this.props.gapObj)}></div>)
	}
}
