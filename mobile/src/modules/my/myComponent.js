import React from 'react'
import {Route} from 'react-router'

import MyHome from "./MyHome"
class MyComponent extends React.Component{
    render(){
        return (
            <div className="MyHomeBox">
                {this.props.children}
            </div>
        )
    }
} 
export default MyComponent
