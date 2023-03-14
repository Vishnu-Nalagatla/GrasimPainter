/*
 * @format
 * @flow
 */

import { combineReducers } from 'redux';
import loginReducer from '../login/loginReducer';
import myDayReducer from '../myDay/myDayReducer';

export interface ReduxState {
  login: StateType;
}

// eslint-disable-next-line prettier/prettier
const rootReducer = combineReducers < ReduxState > ({
  loginReducer,
  myDayReducer,
});

export default rootReducer;
