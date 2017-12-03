import loginToken from '../../login/logintoken';
export function MyActions(){
    var token = sessionStorage.getItem('user');
    return {
          types: ['LOGIN_REQUEST', 'LOGIN_SUCCESS', 'LOGIN_FAILURE'],
          path: 'my/login.php',
          method: 'post',
          query: {token}
    }
}
export function collectInit(){
  return loginToken()
}
export function collectGoods(goodsId){
  
    return {
          types: ['GOODS_REQUEST', 'GOODS_SUCCESS', 'GOODS_FAILURE'],
          path: 'my/selectGoods.php',
          method: 'post',
          query: {goodsId}
    }
}
export function DelCollect(str,goodsId,username){
  
    return {
          types: ['GOODS_REQUEST', 'GOODS_SUCCESS', 'GOODS_FAILURE'],
          path: 'my/DelCollect.php',
          method: 'post',
          query: {str,goodsId,username}
    }
}