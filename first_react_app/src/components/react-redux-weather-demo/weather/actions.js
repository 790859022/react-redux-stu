import * as actionTypes from './actionTypes';

export const fetchWeatherStarted = () => ({
    type: actionTypes.FETCH_STARTED
})
export const fetchWeatherSuccess = (result) => ({
    type: actionTypes.FETCH_SUCCESS,
    result
})
export const fetchWeatherFailure = (error) => ({
    type: actionTypes.FETCH_FAILURE,
    error
})

let nextSeqId = 0;

export const fetchWeather = (cityCode) => {
    const apiUrl = `/data/cityinfo/${cityCode}.html`;

    return {
        promise: fetch(apiUrl).then(response => {
            if (response.status !== 200) {
                throw new Error('Fail to get response with status ' + response.status);
            }
            return response.json().then(responseJson => responseJson.weatherinfo);
        }),
        types: [actionTypes.FETCH_STARTED, actionTypes.FETCH_SUCCESS, actionTypes.FETCH_FAILURE]
    }
}

// export const fetchWeather = (cityCode) => {
//     return (dispatch,getState) => {
//         // console.log(getState())
//         const apiUrl = `/data/cityinfo/${cityCode}.html`;
//         const seqId = ++nextSeqId;
//         const dispatchifValid = (action) => {
//             // console.log(`dispatchifValid seqId:${seqId} | nextSeqId:${nextSeqId}`);
//             if (seqId === nextSeqId) {
//                 // console.log(dispatch(action));
//                 dispatch(action)
//             }
//         }
//         // console.log(seqId);
//         dispatch(fetchWeatherStarted());
//         fetch(apiUrl).then(response => {
//             if (response.status !== 200) {
//                 throw new Error('Fail to get response with status ' + response.status);
//             }
//             response.json().then(responseJson => {
//                 // setTimeout(() => {
//                 //     (()=>{
//                 //         console.log(`dispatchifValid seqId:${seqId} | nextSeqId:${nextSeqId}`);
//                 //         if (seqId === nextSeqId) {
//                 //             return dispatch(fetchWeatherSuccess(responseJson.weatherinfo))
//                 //         }
//                 //     })()
//                 //     // dispatchifValid(fetchWeatherSuccess(responseJson.weatherinfo));
//                 // }, 10000)
//                 dispatchifValid(fetchWeatherSuccess(responseJson.weatherinfo));
//
//                 // dispatch(fetchWeatherSuccess(responseJson.weatherinfo))
//             }).catch(error => {
//                 throw new Error('Invalid json response ' + error);
//             })
//         }).catch(error => {
//             dispatchifValid(fetchWeatherFailure(error));
//             // dispatch(fetchWeatherFailure(error))
//         })
//     }
// }


