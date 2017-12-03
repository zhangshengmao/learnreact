import * as constants from '../../redux/commonConstant'

export function register(str){
    return {
        types: [constants.REQUEST, constants.SUCCESS, constants.FAILURE],
        url: 'http://localhost/big_baby/api/web/register/register.php',
        method: 'post',
        query: str,
    }
}

