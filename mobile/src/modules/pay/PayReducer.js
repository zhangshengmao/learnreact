import * as types from '../../redux/commonConstant'

export default function(state = {loading: false}, action){
    let reState = JSON.parse(JSON.stringify(state))
    switch(action.type){
        case 'PAY_REQUEST':
            reState.loading = true
            break
        case 'PAY_SUCCESS':
            reState.data = JSON.parse(action.body)
            // console.log(reState.data)
            reState.lastFetched = action.lastFetched
            reState.loading = false
            break
        case 'PAY_FAILURE':
            reState.error = action.error
            reState.loading = false
            break
    }
    return reState;
}