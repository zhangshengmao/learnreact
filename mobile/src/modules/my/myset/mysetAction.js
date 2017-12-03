import * as constants from '../../../redux/commonConstant';
import loginstate from '../../login/logintoken'
export function mysetinit(username){
    if(username){
        return {
            types: ['MYMSG_REQUEST', 'MYMSG_SUCCESS', 'MYMSG_FAILURE'],
            path: 'my/setMyMsg.php',
            method: 'post',
            query: {username}
        }
    }
}
export  function loginInit(){
    return loginstate()
}
export function setSix(username,gender){
    return {
          types: ['EDIT_REQUEST', 'SETPAS_SUCCESS', 'EDIT_FAILURE'],
          path: 'my/setpas.php',
          method: 'post',
          query: {username,gender}
    }
}
export function setSign(username,signCont){
    return {
          types: ['EDIT_REQUEST', 'SETPAS_SUCCESS', 'EDIT_FAILURE'],
          path: 'my/setpas.php',
          method: 'post',
          query: {username,signCont}
    }
}
export function setTel(username,newtel){
    return {
          types: ['EDIT_REQUEST', 'SETPAS_SUCCESS', 'EDIT_FAILURE'],
          path: 'my/setpas.php',
          method: 'post',
          query: {username,newtel}
    }
}