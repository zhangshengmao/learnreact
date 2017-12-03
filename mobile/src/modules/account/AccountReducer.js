import * as types from '../../redux/commonConstant'

export default function(state = {loading: false}, action){
    let reState = JSON.parse(JSON.stringify(state))
    switch(action.type){
        case 'ACCOUNT_REQUEST':
            reState.loading = true
            break
        case 'ACCOUNT_SUCCESS':
            console.log(action)
            reState.data = action.body = 'ok' ? 'ok' : JSON.parse(action.body)
            // console.log(reState.data)
            reState.lastFetched = action.lastFetched
            reState.loading = false
            break
        case 'ACCOUNT_FAILURE':
            reState.error = action.error
            reState.loading = false
            break
    }
    return reState;
}