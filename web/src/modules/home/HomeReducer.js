export default function HomeReducer(state = {}, action){
    var reState = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case 'BeforeRequest':
            reState.loading = true;
            break;
        case 'Requested':
            reState.loading = false;
            break;
        default:
            reState.loading = false;
    }
    // console.log(reState, action);
    return reState ;
}