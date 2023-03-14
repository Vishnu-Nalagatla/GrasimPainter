import { ActionTypes } from '../constants';

const initialState = {
    loginInfo: {},
    isLoggedIn: false,
    userRole: ""
};

export interface ActionType {
    type: string;
    payload: any;
}

export default loginReducer = (state = initialState, action: ActionType) => {
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
        case ActionTypes.USER_ROLE: {
            return {
                ...state,
                userRole: action.payload
            };
        }
        default:
            return { ...state };
    }
};
