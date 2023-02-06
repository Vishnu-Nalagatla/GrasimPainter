import {ActionTypes} from '../constants';

export function setMyDayData(payload) {
  return {
    type: ActionTypes.SET_MY_DAY,
    payload,
  };
}
