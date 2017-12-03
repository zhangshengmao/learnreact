import React from 'react';
import {Router, Route, Link, hashHistory, IndexRoute} from 'react-router';

import loginstatus from "./my.scss"

class SpinnerComponent extends React.Component{
    componentDidMount(){
    }
    // quitLogin(){
    // }
    render(){
        if(this.props.loginShow){
            return (
                <div className="quitLogin" >
                       <span className="QuitLogin">退出登录</span>
                </div>
            )
        }else{
            return null            
        }

    }
}
export default SpinnerComponent