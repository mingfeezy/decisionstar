import * as ActionTypes from "../actions/ActionTypes";

const graphDataReducerDefaultState = {
  currentRatings: [0, 0, 0, 0, 0],
  ratings1: [0, 0, 0, 0, 0],
  ratings2: [0, 0, 0, 0, 0],
  labels: ["Preferences", "Frame", "Process", "Information", "Alternatives"]
};

const GraphDataReducer = (state = graphDataReducerDefaultState, action) => {
  switch (action.type) {
    case ActionTypes.UPDATE_DATA: {
      const { topic, rating, name } = action.payload.data;
      //console.log(rating);

      let ratings = [];

      //find index of name
      const indexOfTopic = state.labels.findIndex(label => name === label);

      //need to make a copy by value here or redux wont know its really been changed
      ratings = [...state[topic]];
      ratings[indexOfTopic] = parseInt(rating.trim());
      return {
        ...state,
        [topic]: ratings
      };
    }
    default:
      return state;
  }
};

export default GraphDataReducer;
