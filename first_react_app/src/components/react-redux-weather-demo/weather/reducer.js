import * as actionTypes from './actionTypes';
import * as Status from './status';

export default (state = {status: Status.LOADING}, action) => {
    // console.log('weather reducer');
    // console.log(action.type);
    switch (action.type) {
        case actionTypes.FETCH_STARTED:
            return {
                status: Status.LOADING
            }
        case actionTypes.FETCH_SUCCESS:
            return {
                ...state,
                status: Status.SUCCESS,
                ...action.result
            }
        case actionTypes.FETCH_FAILURE:
            return {
                status: Status.FAILURE
            }
        default:
            return state;
    }
}