import { ActionTypes } from '../constants';

export function setLoginData(payload) {
    return {
        type: ActionTypes.SET_LOGIN_DATA,
        payload,
    };
}

export function logoutAction(payload) {
    return {
        type: ActionTypes.LOGOUT,
        payload,
    };
}
