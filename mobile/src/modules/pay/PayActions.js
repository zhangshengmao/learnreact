import * as constants from '../../redux/commonConstant'

export function payInit(obj){
    return {
        types: ['PAY_REQUEST', 'PAY_SUCCESS', 'PAY_FAILURE'],
        path: 'pay/pay.php',
        method: 'get',
        query:{
            order_num:obj.order_num,
            order_status:obj.order_status,
            makesure:obj.makesure ? obj.makesure : null
        }
    }
 
}