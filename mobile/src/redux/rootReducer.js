import {routerReducer as router} from 'react-router-redux';

import {combineReducers} from 'redux'

import login from '../modules/login/LoginReducer';
import buycar from '../modules/buycar/BuycarReducer';
import account from '../modules/account/accountReducer';
import pay from '../modules/pay/PayReducer.js';
import register from '../modules/register/registerReducer';
import myset from '../modules/my/myset/mysetreduces';
import address from '../modules/my/myset/address/addressreduce'
import myedit from '../modules/my/myset/address/addressEdit/editreduce'
const rootReducer = combineReducers({
    login,
    register,
    myset,
    address,
    myedit,
    buycar,
    account, 
    pay,  
    router
})

export default rootReducer