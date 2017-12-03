import React from 'react'
import {hashHistory} from 'react-router'

import {Input} from 'antd'
const Search = Input.Search

class ComSearch extends React.Component {
	render(){
		return (
			<Search className="sort-sh" placeholder="请输入搜索关键字" onSearch={value => value.trim()===''?null:hashHistory.push("/list/:s-"+value)} />
		)
	}
}
export default ComSearch