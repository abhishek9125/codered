import * as actionTypes from './constants';

export function getHomePageData(payload) {
    return {
        type: actionTypes.GET_HOME_PAGE_DATA,
        payload,
    };
}
