

export function register(obj){
    return {
        types: ['REGISTER_REQUEST', 'REGISTER_SUCCESS', 'REGISTER_FAILURE'],
        path: 'my/register.php',
        method: 'post',
        query: {
            username:obj.username,
            tel:obj.tel,
            password:obj.password,
            user_id:Math.random()*100000
        }
    }
}