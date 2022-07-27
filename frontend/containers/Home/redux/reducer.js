import produce from "immer";
import { clone } from "ramda";
import * as actionTypes from "./constants";

export const initialState = {
    interviewsLoading: false,
    error: false,
    data: {
        trending: [],
        user: false,
    },
};

function homeReducer(state = clone(initialState), { type, payload, error }) {

    return produce(state, (draft) => {
        switch (type) {
            case actionTypes.GET_HOME_PAGE_DATA: {
                draft.data.trending = payload;
                break;
            }

        }
    });
}

export default homeReducer;
