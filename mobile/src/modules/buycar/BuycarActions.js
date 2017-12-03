import * as constants from '../../redux/commonConstant'
import loginstate from '../login/logintoken.js';
export function buycarInit(obj){
    return {
        types: ['BUYCAR_REQUEST', 'BUYCAR_SUCCESS', 'BUYCAR_FAILURE'],
        path: 'buycar/buycar.php',
        method: 'get',
        query:{
            username:obj.username,
            list:obj.list ? obj.list : null,
            account:obj.account ?  obj.account : null
        }
    }
 
}
export function loginState(obj){
   return loginstate ();
}