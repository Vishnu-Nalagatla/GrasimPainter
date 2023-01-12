import { ActionTypes } from '../constants';

const defaults = {
    loginInfo: {},
    isLoggedIn: false,
};

export interface ActionType {
    type: string;
    payload: any;
}

export default (state = defaults, action: ActionType) => {
    switch (action.type) {
        case ActionTypes.SET_LOGIN_DATA: {
            return {
                ...state,
                loginInfo: { ...action.payload },
                isLoggedIn: true,
            };
        }
        case ActionTypes.LOGOUT: {
            return {
                ...state,
                loginInfo: null,
                isLoggedIn: false,
            };
        }
        default:
            return { ...state };
    }
};
