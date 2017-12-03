
// import * as types from '../../redux/commonConstant'

export default function(state = {loading: false}, action){
    let reState = JSON.parse(JSON.stringify(state))
    switch(action.type){
        case 'REGISTER_REQUEST':
            reState.loading = true
            break
        case 'REGISTER_SUCCESS':
        
            reState.loginData = action.body
            // reState.lastFetched = action.lastFetched
            reState.loading = false
            break
        case 'REGISTER_FAILURE':
            reState.error = action.error
            reState.loading = false
            break
    }
    return reState;
}