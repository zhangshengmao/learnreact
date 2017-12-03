import * as types from '../../../redux/commonConstant'

export default function(state = {loading: false}, action){
    let reState = JSON.parse(JSON.stringify(state))
    switch(action.type){
        case 'MYMSG_REQUEST':
            reState.loading = true
            break;
        case 'MYMSG_SUCCESS':
            reState.myMsg = action.body;
            reState.lastFetched = action.lastFetched
            reState.loading = false
            break;
        case 'MYMSG_FAILURE':
            reState.error = action.error
            reState.loading = false
            break;

        case "HOME_SUCCESS":
            reState.homedata = action.body
            reState.loading = false

        case 'GOODS_REQUEST':
            reState.loading = true
            break;
        case 'GOODS_SUCCESS':
            reState.goodsId = action.body;
            reState.lastFetched = action.lastFetched
            reState.loading = false
            break;
        case 'GOODS_FAILURE':
            reState.error = action.error
            reState.loading = false
            break;
        default :
            reState.loading = false  
    }
    return reState;
}