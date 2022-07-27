import * as actionTypes from './constants';

export function getInterviewsList(payload) {
    return {
        type: actionTypes.GET_INTERVIEW_LIST,
        payload,
    };
}

export function setInterviewsList(payload) {
    return {
        type: actionTypes.SET_INTERVIEW_LIST,
        payload,
    }
}