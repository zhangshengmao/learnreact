import React, {Component} from 'react';

class MaskComponent extends React.Component {
    constructor(props){
        super(props);
        this.state= {  
        }
    }
    componentWillMount(){
       
    }
    render(){
        return( 
            <div style={{width:'100%',height:'100%',position:'absolute',display:this.props.maskshow ? 'block' : 'none'}}>
                <div style={{width:'100%',height:'100%',position:'relative',backgroundColor:'rgba(0,0,0,0.6)'}}>
                    <div style={{width:'40%',position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-50%)',backgroundColor:'#fff',border:'1px,solid,#fff',borderRadius:'5px'}}> 
                        <p style={{height:'30px',lineHeight:'30px',borderBottom:'1px solid #aaa',textAlign:'center'}}>支付成功</p>
                        <p onClick={this.props.masknoshow} style={{height:'30px',lineHeight:'30px',color:'#f46e65',fontSize:'18px',textAlign:'center'}}>确定</p>
                    </div>
                </div>
            </div>
        )
    }
}
export default MaskComponent;