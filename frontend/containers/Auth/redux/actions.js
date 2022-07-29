import * as actionTypes from './constants';

export function showLoginCard(payload) {
    return {
        type: actionTypes.SHOW_LOGIN_CARD,
        payload,
    };
}

export function hideLoginCard(payload) {
    return {
        type: actionTypes.HIDE_LOGIN_CARD,
        payload,
    }
}