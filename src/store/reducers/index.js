/*
 * @format
 * @flow
 */

import { combineReducers } from 'redux';
import loginReducer from './login';

export interface ReduxState {
    login: StateType;
}

// eslint-disable-next-line prettier/prettier
const rootReducer = combineReducers < ReduxState > ({
    login: loginReducer,
});

export default rootReducer;
