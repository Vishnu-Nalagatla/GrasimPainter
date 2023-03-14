import { ActionTypes } from '../constants';

const initialState = {
    myDayInfo: {},
};

export interface ActionType {
    type: string;
    payload: any;
}

export default myDayReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case ActionTypes.SET_MY_DAY: {
            return {
                ...state,
                myDayInfo: { ...action.payload },
            };
        }
        default:
            return { ...state };
    }
};
