import * as ActionTypes from '../actions/ActionTypes';

const graphDataReducerDefaultState = {
    currentRatings:[0,0,0,0,0],
    ratings1:[0,0,0,0,0],
    ratings2:[0,0,0,0,0],
    labels: ['Preferences', 'Frame', 'Process', 'Information', 'Alternatives']
};

const GraphDataReducer = (state = graphDataReducerDefaultState, action) => {
    switch(action.type) {
        case ActionTypes.UPDATE_DATA: {
            const {topic, rating, name} = action.payload.data;
            //console.log(rating);
           
        
            let ratings = [];

            //find index of name
            const indexOfTopic = state.labels.findIndex((label)=>name === label);
           
            //need to make a copy by value here or redux wont know its really been changed
            if(topic === 'ratings1') {
                ratings = [...state.ratings1];
                ratings[indexOfTopic] = parseInt(rating.trim() ===  '' ? '0' : rating.trim());
                return {
                    ...state,
                    ratings1: ratings
                }
            }
            else if(topic === 'ratings2') {
                ratings = [...state.ratings2];
                ratings[indexOfTopic] = parseInt(rating.trim() ===  '' ? '0' : rating.trim());
                return {
                    ...state,
                    ratings2: ratings
                }
            }
            else {
                ratings = [...state.currentRatings];
                ratings[indexOfTopic] = parseInt(rating.trim() ===  '' ? '0' : rating.trim());
                return {
                    ...state,
                    currentRatings: ratings
                }
            }
        }
        default:
            return state;
    }
}

export default GraphDataReducer;