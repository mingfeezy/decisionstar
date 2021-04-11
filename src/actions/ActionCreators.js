import * as ActionTypes from './ActionTypes';

export const updateData = data => ({
    type: ActionTypes.UPDATE_DATA,
    payload: {
       data
    }
})