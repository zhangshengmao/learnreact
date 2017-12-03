function loginToken(){
                
    var token = sessionStorage.getItem('user');
    return {
          types: ['LOGIN_REQUEST', 'LOGIN_SUCCESS', 'LOGIN_FAILURE'],
          path: 'my/login.php',
          method: 'post',
          query: {token}
    }
}

export default loginToken