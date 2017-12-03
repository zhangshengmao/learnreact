import React from 'react';
import {Router,Route,IndexRoute} from 'react-router';

import AppComponent from './modules/app/AppComponent';
import LoginComponent from './modules/login/LoginComponent';
import HomeComponent from "./modules/home/HomeComponent";
import ProductComponent from "./modules/product/ProductComponent";
import UserComponent from "./modules/user/UserComponent";
import OrderComponent from "./modules/order/OrderComponent";
import RegisterComponent from "./modules/register/RegisterComponent";
import BuycarComponent from "./modules/buycar/BuycarComponent";
import UsersComponent from "./modules/users/UsersComponent";


 // onEnter={enterFun}

export default (
    <Route path="/" component={AppComponent}>
	    <IndexRoute component={LoginComponent}/>
	    <Route path="/register" component={RegisterComponent} />
    	<Route path="/home" component={HomeComponent} onEnter={enterFun}>
	        <Route path="/product" component={ProductComponent} />
	        <Route path="/user" component={UserComponent} />
	        <Route path="/order" component={OrderComponent} />
          <Route path="/buycar" component={BuycarComponent} />
          <Route path="/users" component={UsersComponent} />
    	</Route>
    </Route>
)

function enterFun(nextState,replace,next){
    let user = JSON.parse(sessionStorage.getItem('user'));
    if (!user && this.path != '/') {
      replace('/');
      next();
    } else {
      next();
    }
}