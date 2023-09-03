import {compose, applyMiddleware} from 'redux';
import {legacy_createStore as createStore} from 'redux;'
import logger from 'redux-logger';
import {rootReducer} from './root-reducer';

const middlewares = [logger];

const composedEnhancers = compose(applyMiddleware(...middlewares)); //spread - to pass all middlewares even if more than one

export const store = createStore(rootReducer,undefined,composedEnhancers)