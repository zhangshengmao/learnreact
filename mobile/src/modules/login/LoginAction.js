import * as constants from '../../redux/commonConstant';
export function login(username, password){
    return {
        types: ['LOGIN_REQUEST', 'LOGIN_SUCCESS', 'LOGIN_FAILURE'],
        path: 'my/login.php',
        method: 'post',
        query: {username, password}
    }
}