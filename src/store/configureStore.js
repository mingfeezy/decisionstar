import { createStore, combineReducers, compose } from 'redux';
import GraphDataReducer from '../reducers/graphdata';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default () => {
    const store = createStore(
        combineReducers({
            graphData: GraphDataReducer
        })
    );
    return store;
}
