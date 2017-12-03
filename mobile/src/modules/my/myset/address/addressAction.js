// import loginToken from '../login/logintoken';
import loginstate from '../../../login/logintoken'

export  function loginInit(){
    return loginstate()
}
export function Myaddress(username){
    return {
        types: ['ADDRES_REQUEST', 'ADDRES_SUCCESS', 'ADDRES_FAILURE'],
        path: 'my/address.php',
        method: 'post',
        query: {username}
    }
}
export function delAdz(data){
    var id = data.id;
    var username = data.username;
    return {
        types: ['ADDRES_REQUEST', 'ADDRES_SUCCESS', 'ADDRES_FAILURE'],
        path: 'my/delAddress.php',
        method: 'post',
        query: {id,username}
    }
}
export function choose(data){
    return {
        type:'CHOOSE',
        query: {data}
    }
}
