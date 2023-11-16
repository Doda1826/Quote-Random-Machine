import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import quoteReducer from './quoteReducer';

const store = createStore(quoteReducer, applyMiddleware(thunk));

export default store;

