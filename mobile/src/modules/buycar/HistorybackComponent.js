import React, {Component} from 'react';
import { createHistory } from 'history';
import {Icon} from 'antd';

const history = createHistory()

class HistorybackComponent extends React.Component {
    historyBack(){
        history.goBack();
    }
    render(){
        return(
            <Icon type="left-circle" onClick={this.historyBack} style={{color:'#f46e65',fontSize:'24px'}} />
        )
    }
}
export default HistorybackComponent;