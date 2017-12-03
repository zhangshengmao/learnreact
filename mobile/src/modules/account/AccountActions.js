import * as constants from '../../redux/commonConstant'

export function accountInit(obj){
    return {
        types: ['ACCOUNT_REQUEST', 'ACCOUNT_SUCCESS', 'ACCOUNT_FAILURE'],
        path: 'account/account.php',
        method: 'get',
        query:{
                order_num:obj.order_num,
                user_name:obj.user_name ,
                order_product:JSON.stringify(obj.order_product),
                buycarLi:obj.buycarLi,
                order_phone:obj.order_phone,
                order_total_price:obj.order_total_price,
                order_date:obj.order_date,
                order_status:obj.order_status,
                order_address:obj.order_address
        }
    }
 
}