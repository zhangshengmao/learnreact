import React from 'react';
import {Router, Route, Link, hashHistory, IndexRoute} from 'react-router';

import loginstatus from "./my.scss"
var baseURI = "/src/asset/"
class SpinnerComponent extends React.Component{
    componentDidMount(){
    }
    render(){
        if(this.props.loginShow){
            let show = JSON.parse(this.props.loginShow)
            return (
                <div className="loginStatus" style={{display: show ? 'block' : 'none'}}>
                    <div className="loginHead">
                        <img src={baseURI+show.handimgs}/>
                    </div>
                    <h4>{show.username}</h4>
                    <h4>{show.sign}</h4>
                </div>
            )
        }else{
            return(

                <div className="loginStatus">
                    <p>您还没登录哦！</p>
                    <span><Link to="/login">马上登录</Link></span>
                </div>
            )
        }

    }
}
export default SpinnerComponent 