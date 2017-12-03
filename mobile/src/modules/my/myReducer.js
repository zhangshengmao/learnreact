import * as types from '../../redux/commonConstant'

export default function(state = {loading: false}, action){
    let reState = JSON.parse(JSON.stringify(state))
    switch(action.type){
        case 'LOGIN_REQUEST':
            reState.loading = true
            break
        case 'LOGIN_SUCCESS':
            console.log(action)
            reState.data = action.body;
            reState.lastFetched = action.lastFetched
            reState.loading = false
            break
        case 'LOGIN_FAILURE':
            reState.error = action.error
            reState.loading = false
            break
        case 'gg':
            reState.data = false
            break;
        default :
            reState.loading = false  
    }
    return reState;
}