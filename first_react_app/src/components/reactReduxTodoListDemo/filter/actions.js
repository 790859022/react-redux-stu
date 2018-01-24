import * as actionTypes from './actionTypes';

export const setFilter = (filterType) => {
    return {
        type: actionTypes.SET_FILTER,
        filter: filterType
    }
}