import {ActionTypes} from '../constants';

const defaults = {
  myDayInfo: {},
};

export interface ActionType {
  type: string;
  payload: any;
}

export default (state = defaults, action: ActionType) => {
  switch (action.type) {
    case ActionTypes.SET_MY_DAY: {
      return {
        ...state,
        myDayInfo: {...action.payload},
      };
    }
    default:
      return {...state};
  }
};
