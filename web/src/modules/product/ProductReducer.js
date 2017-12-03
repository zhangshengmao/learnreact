export default function ProductReducer(state = {}, action){
    var reState = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case 'BeforeRequest':
            reState.loading = true;
            break;
        case 'Requested':
            reState.loading = false;
            reState.dataset = action.body;
            break;
        default:
            reState.loading = false;
    }
    return reState ;
}


