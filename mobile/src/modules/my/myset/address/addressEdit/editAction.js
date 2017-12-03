// import loginToken from '../login/logintoken';
import * as constants from '../../../../../redux/commonConstant';

// console
export function addressInit(address,username){
    console.log(address)
    return {
          types: ['EDIT_REQUEST', 'EDIT_SUCCESS', 'EDIT_FAILURE'],
          path: 'my/selectMsg',
          method: 'post',
          query: {
            address,
            username
          }
    }
}
export function setPas(wornpas,newpas,username){
    return {
          types: ['EDIT_REQUEST', 'SETPAS_SUCCESS', 'EDIT_FAILURE'],
          path: 'my/setpas.php',
          method: 'post',
          query: {wornpas,newpas,username}
    }
}
