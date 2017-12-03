import * as types from '../../../../../redux/commonConstant'

export default function(state = {loading: false}, action){
    let reState = JSON.parse(JSON.stringify(state))
    switch(action.type){
        case 'EDIT_REQUEST':
        reState.loading = true
            break;
        case 'EDIT_SUCCESS':
            reState.addressMsg = action.body;
            reState.loading = false  
            break; 
        case 'EDIT_FAILURE':

            break;
        case 'SETPAS__SUCCESS':
            reState.setPasMsg= action.body;
            reState.loading = false
        default :
            reState.loading = false  
    }
    return reState;
}