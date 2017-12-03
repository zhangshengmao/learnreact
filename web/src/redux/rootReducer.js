import login from '../modules/login/LoginReducer';
import {routerReducer as router} from 'react-router-redux'

import {combineReducers} from 'redux';
import home from '../modules/home/HomeReducer';
import product from '../modules/product/ProductReducer';
import user from '../modules/user/UserReducer';
import order from '../modules/order/OrderReducer';
import register from '../modules/register/RegisterReducer';
import datagrid from "../modules/datagrid/dataGridReducer";
import add from "../modules/datagrid/AddReducer";
import buycar from "../modules/buycar/BuycarReducer";






const rootReducer = combineReducers({
    login,
    router,
    home,
    product,
    user,
    order,
    register,
    add,
    buycar
})

// console.log(rootReducer);
export default rootReducer