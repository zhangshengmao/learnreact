import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as BuycarAction from './BuycarAction'
import SpinnerComponent from '../spinner/SpinnerComponent';
import DatagridComponent from '../datagrid/DatagridComponent';
import {Router,Route,Link} from "react-router";


class BuycarComponent extends React.Component{
    // componentDidMount(){
    //     // this.props.ProductInit();
    // }

    render(){
        return (
            

                <DatagridComponent url="http://localhost/big_baby/api//web/buycar/buycar.php" 
                delete_url="http://localhost/big_baby/api//web/buycar/deleteBuycar.php"  
                update_url="http://localhost/big_baby/api//web/buycar/updateBuycar.php" 
                title='account,username,list'/>
            )
    }
}





const mapStateToProps = function(state){
    return {
        loading: state.buycar.loading,
        dataset: state.buycar.dataset
    }
}

export default connect(mapStateToProps, BuycarAction)(BuycarComponent)

