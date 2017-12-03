// import http from '../utils/HttpClient';

// export function ajaxMiddleware({ dispatch, getState }) {
    
//     return next => action => {
//         const {
//             types,
//             shouldCallAPI = () => true,
//             query = {},
//             payload = {},
//             method = "get",
//             path
//         } = action;
        
//         if (!path || !method) {
//             return next(action)
//         }

//         if (!Array.isArray(types) || types.length !== 3 || !types.every(type => typeof type === 'string')) {
//             throw new Error('Expected an array of three string types.');
//         }

//         if (!shouldCallAPI(getState())) {
//             return;
//         }
        
//         const [requestType, successType, failureType] = types;

//         dispatch(Object.assign({}, { query }, { payload }, {
//             type: requestType,
//         }));
//         return http[method](path, query, payload)
//             .then(
//                 response => dispatch(Object.assign({}, { query }, { payload }, {
//                     type: successType,
//                     body: response,
//                     lastFetched: Date.now()

//                 })),
//                 error => dispatch(Object.assign({}, { query }, { payload }, {                    
//                     type: failureType,
//                     error
//                 }))
//             );
//     };
// }

import http from '../utils/HttpClient';

export function ajaxMiddleware(middlewareAPI) {
    return function(dispatch){
        return function(action){
            const {types, method = "post", path, query} = action;
            if (!path || !method) {
                return dispatch(action)
            }
            //   if(!types)
            const [a, b, c] = types;
            middlewareAPI.dispatch({
                type: a,
                data:query
            });
            if(path){
                return new Promise((resolve, reject) => {
                    http[method](path, query).then(response => {
                        middlewareAPI.dispatch({
                            type: b,
                            body: response
                        });
                        resolve(response);
                        })                    
                    })

                // http[method](path, data).then(response => {
                //     middlewareAPI.dispatch({
                //         type: b,
                //         dataset: response
                //     });
                // })
            }
        }
    }
}
// this.props.Begin().then(response => {
//             console.log(response)
//         });