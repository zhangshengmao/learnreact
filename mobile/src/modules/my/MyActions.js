import loginToken from '../login/logintoken';
// import * as constants from '../../redux/commonConstant';

// console
export function MyActions(){
    var token = sessionStorage.getItem('user');
    return {
          types: ['LOGIN_REQUEST', 'LOGIN_SUCCESS', 'LOGIN_FAILURE'],
          path: 'my/login.php',
          method: 'post',
          query: {token}
    }
}
