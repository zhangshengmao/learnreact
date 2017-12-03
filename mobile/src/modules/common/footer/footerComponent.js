import React from 'react'
import Reacr from 'react-dom'
import {Link,browserHistory} from 'react-router'

import './footer.scss'
import {Icon } from 'antd';
//console.log(browserHistory.getCurrentLocation())
class footerComponent extends React.Component {
    render(){
        return(
            <div className="com-footer">
            	<ul>
            		<li><Link to="/home" activeClassName="cc"><Icon type="home" / ><span  ref="style1">首页</span></Link></li>
            		<li><Link to="/sort"><Icon type="bars"/><span>分类</span></Link></li>
            		<li><Link to="/buycar"><Icon type="shopping-cart"/><span>购物车</span></Link></li>
            		<li><Link to="/my/myHome" activeClassName="cc"><Icon type="user"/><span>我的</span></Link></li>
            	</ul>
            </div>
        )
    }
}

export default footerComponent