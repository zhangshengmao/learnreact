import * as constants from '../../redux/commonConstant'

export function Init(addUrl){
    return {
        // types: [constants.REQUEST, constants.SUCCESS, constants.FAILURE],
        types: ['BeforeRequest', 'Requested', 'RequestError'],
        url: addUrl
    }
    
}

export function add(api,str){
	var baseUrl = "http://localhost/big_baby/api/web/";
    return {
        types: [constants.REQUEST, constants.SUCCESS, constants.FAILURE],
        // types: ['BeforeRequest', 'Requested', 'RequestError'],
        url: baseUrl+api+"/"+api+"_add.php",

        method: 'post',
        query: str
    }
}