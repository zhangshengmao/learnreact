export function homeInit(){
    return {
          types: ['LOGIN_REQUEST', 'HOME_SUCCESS', 'LOGIN_FAILURE'],
          path: 'home/home.php',
          method: 'post',
          query: {}
    }
}
