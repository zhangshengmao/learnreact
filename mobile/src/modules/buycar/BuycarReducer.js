import * as types from '../../redux/commonConstant'

export default function(state = {loading: false}, action){
    let reState = JSON.parse(JSON.stringify(state))
    switch(action.type){
        case 'BUYCAR_REQUEST':
            reState.loading = true
            break
        case 'BUYCAR_SUCCESS':
        console.log(JSON.parse(action.body).length,JSON.parse(action.body))
            reState.data =  JSON.parse(action.body).length != 0 ? JSON.parse(action.body) : false
            reState.lastFetched = action.lastFetched
            reState.loading = false
            break
        case 'BUYCAR_FAILURE':
            reState.error = action.error
            reState.loading = false
            break
    }
    return reState;
}