import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as UserAction from './UserAction'
import SpinnerComponent from '../spinner/SpinnerComponent';
import DatagridComponent from '../datagrid/DatagridComponent';
import {Router,Route,Link} from "react-router";


class UserComponent extends React.Component{
    render(){
        return (
            

                <DatagridComponent url="http://localhost/big_baby/api//web/user/user.php" 
                delete_url="http://localhost/big_baby/api//web/user/deleteUser.php"  
                update_url="http://localhost/big_baby/api//web/user/updateUser.php" 
                title='user_name,user_gender,user_phone,user_account,user_password,user_time'/>
            )
    }
}

const mapStateToProps = function(state){
    return {
        loading: state.user.loading,
        dataset: state.user.dataset
    }
}

export default connect(mapStateToProps, UserAction)(UserComponent)

