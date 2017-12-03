import * as types from '../../../../redux/commonConstant'

export default function(state = {loading: false}, action){
    let reState = JSON.parse(JSON.stringify(state))
    switch(action.type){
        case 'ADDRES_REQUEST':
            reState.loading = true
            break;
        case 'ADDRES_SUCCESS':
            reState.myMsg = action.body;
            reState.lastFetched = action.lastFetched
            reState.loading = false
            break;
        case 'ADDRES_FAILURE':
            reState.error = action.error
            reState.loading = false
            break;
        case 'DEL_REQUEST':
            reState.loading = true
            break;
        case 'DEL_SUCCESS':
            reState.delMsg = action.body;
            reState.lastFetched = action.lastFetched
            reState.loading = false
            break;
        case 'DEL_FAILURE':
            reState.error = action.error
            reState.loading = false
            break;
        case 'CHOOSE':
        console.log(action.query.data)
            reState.address=action.query.data
        default :
            reState.loading = false  
    }
    return reState;
}