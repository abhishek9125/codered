import produce from "immer";
import { clone } from "ramda";
import * as actionTypes from "./constants";

export const initialState = {
    interviewsLoading: false,
    error: false,
    data: {
        interviews: [],
        user: false,
    },
};

function interviewsReducer(state = clone(initialState), { type, payload, error }) {

    return produce(state, (draft) => {
        switch (type) {
            case actionTypes.SET_INTERVIEW_LIST: {
                draft.data.interviews = payload;
                break;
            }

        }
    });
}

export default interviewsReducer;
