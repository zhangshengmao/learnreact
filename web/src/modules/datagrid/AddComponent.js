import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as AddActions from './AddAction'
import SpinnerComponent from '../spinner/SpinnerComponent';
import {Router,Route,Link,hashHistory} from "react-router";
import addScss from "./add.scss";

import { Input,Button} from 'antd';


class AddComponent extends React.Component {
    constructor(props){
        super(props);
    }
    componentDidMount(){
        // this.props.Init(this.props.addUrl);
        
    }
    addHandler(){
        var arr = this.props.addUrl.split("/");
        var idx = 0;
        for(var attr in this.props.data[0]){
            idx++;
        }
        var max=0;
        this.props.data.forEach(function(item){
            item['id']>max ? max=item['id'] : max;
        })
        var id = max + 1;
        var str = "";
        for(var i = 1;i<idx-1;i++){
            var num = "input" + i;
            // console.log(i)
            if(this.refs[num].refs.input.id=="user_time"){
                break;
            }
            str += `&${this.refs[num].refs.input.id}=${this.refs[num].refs.input.value}`
        }
        console.log(str);
        str += '&id=' + id;
        str = str.slice(1);
        console.log(str)
        this.props.add(arr[arr.length-2],str);


    }
    close(e){
        e.target.parentNode.parentNode.style.display = "none";
    }
    render(){
        if(this.props.res=="ok"){
            alert("添加成功");
            this.refs.add.parentNode.style.display = "none";
            // location.reload(true);
        }else if(this.props.res=="fail"){
            alert("添加失败");
            return;
        }
        return(
              <div className="add" ref="add">
                    <h1>添加</h1>
                    <ul>
                    {
                       this.props.data.length>0 ? Object.keys( this.props.data[0]).map(function(key, idx){
                        if(key=="id" || key=="key"){
                            return;
                        }
                            return <li key={'li'+idx}>
                                <label>{key}</label>
                                <Input ref={"input"+idx} id={key}/>
                            </li>
                            
                        }) : null
                    }
                    </ul>
                    <Button type="primary" onClick={this.addHandler.bind(this)}>提交</Button>
                    <span className="close" onClick={this.close.bind(this)}>&times;</span>
                </div>
            
        )
    }
}



const mapStateToProps = state => ({
    loading: state.add.loading,
    res:state.add.res
})
export default connect(mapStateToProps, AddActions)(AddComponent)
