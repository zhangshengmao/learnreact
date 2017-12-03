import React, {Component} from 'react';
import {browserHistory} from "react-router";

class AppComponent extends Component{
	componentDidMount(){
		browserHistory.push("/home");
	}
    render(){
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}

export default AppComponent