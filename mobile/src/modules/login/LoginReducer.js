//处理 ajax 返回数据和一些状态管理
//发起 ajax 请求前 => show up loading
//ajax 完成之后 => loading hided $.get('url', function(response){})  => {status: true, data: [{}]}
// action => store = createStroe(reducer, 中间件) => reducer

// import * as types from '../../redux/commonConstant'

export default function(state = {loading: false}, action){
    let reState = JSON.parse(JSON.stringify(state))
    switch(action.type){
        case 'LOGIN_REQUEST':
            reState.loading = true
            break
        case 'LOGIN_SUCCESS':
            // console.log()
            reState.data = action.body;
            reState.lastFetched = action.lastFetched
            reState.loading = false

            break
        case 'LOGIN_FAILURE':
            reState.error = action.error
            reState.loading = false
            break
        default:
            reState.loading = false;

    }
    return reState;
}
// export default function DatagridReducer(state = {}, action){
//     var reState = JSON.parse(JSON.stringify(state));
//     switch(action.type){
//         case 'BeforeRequest':
//             reState.loading = true;
//             break;
//         case 'Requested':
//             reState.loading = false;
//             if(action.dataset !== true && action.dataset !==false){
//                 reState.dataset = action.dataset[1];
//                 reState.pagination = action.dataset[0][0];
//             }
//             break;
//         case 'edit':
//             reState.editData = action.data;
//             break;
//         default:
//             reState.loading = false;
//     }
//     return reState ;
// }
