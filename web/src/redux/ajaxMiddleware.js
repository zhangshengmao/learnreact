import http from '../utils/HttpClient';

export function ajaxMiddleware({ dispatch, getState }) {
    
    return next => action => {
        const {
            types,
            shouldCallAPI = () => true,
            query = '',
            payload = {},
            method = "get",
            url
        } = action;
        
        // if (!types) {
        //     // Normal action: pass it on
        //     return next(action);
        // }



        if (!url || !method) {
            return next(action)
            // throw new Error('path and method is required!');
        }

        if (!Array.isArray(types) || types.length !== 3 || !types.every(type => typeof type === 'string')) {
            throw new Error('Expected an array of three string types.');
        }

        if (!shouldCallAPI(getState())) {
            return;
        }
        
        const [requestType, successType, failureType] = types;
        dispatch(Object.assign({}, { query }, { payload }, {
            type: requestType,
        }));
        
        return http[method](url, query, payload)
            .then(
                response => dispatch(Object.assign({}, { query }, { payload }, {
                    type: successType,
                    body: response,
                    lastFetched: Date.now()
                })),
                error => dispatch(Object.assign({}, { query }, { payload }, {                    
                    type: failureType,
                    error
                }))
            );
    };
}


// import http from '../utils/HttpClient';

// export function ajaxMiddleware(middlewareAPI) {
//     return function(dispatch){
//         return function(action){
//             const {types, method = "get", url, data} = action;

//             if (!url || !method) {
//                 return dispatch(action)
//             }
//         //    if(!types)
//             const [a, b, c] = types;

//             middlewareAPI.dispatch({
//                 type: a,
//             });

//             if(url){
//                 http[method](url).then(response => {
//                     middlewareAPI.dispatch({
//                         type: 'Requested',
//                         dataset: JSON.parse(response)
//                     });
//                 })
//             }
//         }
//     }
// }