import React from 'react';
import {Route,IndexRoute} from 'react-router';

import AppComponent from './modules/app/AppComponent';
import LoginComponent from './modules/login/LoginComponent';
import BuycarComponent from './modules/buycar/BuycarComponent';
import AccountComponent from './modules/account/AccountComponent';
import PayComponent from './modules/pay/PayComponent';
import homeComponent from './modules/home/homeComponent';
import myComponent from './modules/my/myComponent';
import sortComponent from './modules/sort/sortComponent';
import myHome from './modules/my/MyHome';
import listComponent from './modules/list/listComponent';
import detailsComponent from './modules/details/detailsComponent';
import myOrderComponent from './modules/my/MyOrder/MyOeder';
import myCollectComponent from './modules/my/myCollect/myCollect.js';
import MySetComponent from './modules/my/myset/mySet';
import AccSevurityComponent from './modules/my/accountSecurity/accSecurity';
import descComponent from './modules/details/descComponent.js';
import ratingComponent from './modules/details/rating/ratingComponent.js';
import RegisterComponent from './modules/register/registerComponent';
import agreement from './modules/register/agreement';
import address from './modules/my/myset/address/address';
import myEdit from './modules/my/myset/address/addressEdit/addressEdit';
import setpas from './modules/my/accountSecurity/setpassword';
import setSix from './modules/my/myset/mysix';
import mysign from './modules/my/myset/mysign';
import settel from './modules/my/myset/setTel'


export default (
    <Route path="/" component={AppComponent}>
        <Route path="register" component={RegisterComponent}/>
        <Route path="login" component={LoginComponent} />
        <Route path="buycar" component={BuycarComponent} />
        <Route path="account" component={AccountComponent} />
        <Route path="pay/:order_num" component={PayComponent} />
        <Route path="home" component={homeComponent} />
        // <IndexRoute component={homeComponent}/>
        <Route path="my" component={myComponent} >
            <Route path='/my/myHome' component={myHome}/>
            <Route path='/my/myOrder/:key' component={myOrderComponent}/>
            <Route path='/my/myCollect' component={myCollectComponent}/>
            <Route path='/my/mySet' component={MySetComponent} />
            <Route path='/my/mySecurity' component={AccSevurityComponent}/>
            <Route path='/register/agreement' component = {agreement}/>
            <Route path = '/my/mySet/address' component = {address}/>
            <Route path="/my/mySet/edit" component={myEdit}/>
            <Route path="/my/mySet/setpassword" component={setpas}/>
            <Route path="/my/mySet/myset" component={setSix}/>
            <Route path="/my/mySet/mysign" component={mysign}/>
            <Route path="/my/mySet/mytel" component={settel}/>

        </Route>
        <Route path="sort" component={sortComponent} />
        <Route path="list/:goodType" component={listComponent} />
        <Route path="details/" component={detailsComponent}>
        	<Route path="detailsDesc" component={descComponent}/>
        	<Route path="detailsRating" component={ratingComponent}/>
        </Route>
    </Route>
)