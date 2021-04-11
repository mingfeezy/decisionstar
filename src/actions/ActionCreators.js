import * as ActionTypes from './ActionTypes';

export const addData = data => ({
    type: ActionTypes.ADD_DATA,
    payload: {
       data
    }
})