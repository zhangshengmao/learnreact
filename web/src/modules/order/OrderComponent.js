import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as OrderAction from './OrderAction'
import SpinnerComponent from '../spinner/SpinnerComponent';
import DatagridComponent from '../datagrid/DatagridComponent';
import {Router,Route,Link} from "react-router";


class OrderComponent extends React.Component{
    // componentDidMount(){
        
    //     this.props.UserInit();
    // }

    render(){
        return (
            

                <DatagridComponent url="http://localhost/big_baby/api//web/order/order.php" 
                delete_url="http://localhost/big_baby/api//web/order/deleteOrder.php"  
                update_url="http://localhost/big_baby/api//web/order/updateOrder.php" 
                title='order_num,user_name,order_phone,order_status,order_address,order_total_price'/>
            )
    }
}





const mapStateToProps = function(state){
    return {
        loading: state.order.loading,
        dataset: state.order.dataset
    }
}

export default connect(mapStateToProps, OrderAction)(OrderComponent)

