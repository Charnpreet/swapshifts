import reducers from './Reducers/index';
import ReduxThunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
const reduxStore = createStore(reducers,applyMiddleware(ReduxThunk));
export default reduxStore;
