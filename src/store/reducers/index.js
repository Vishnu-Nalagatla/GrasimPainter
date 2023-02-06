/*
 * @format
 * @flow
 */

import {combineReducers} from 'redux';
import loginReducer from './login';
import myDayReducer from './myDay';

export interface ReduxState {
  login: StateType;
}

// eslint-disable-next-line prettier/prettier
const rootReducer = combineReducers < ReduxState > ({
  login: loginReducer,
  myDay: myDayReducer,
});

export default rootReducer;
