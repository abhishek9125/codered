import produce from "immer";
import { clone } from "ramda";
import * as actionTypes from "./constants";

export const initialState = {
    authLoading: false,
    error: false,
    data: {
        showCard: false,
        user: false,
    },
};

function authReducer(state = clone(initialState), { type, payload, error }) {

    return produce(state, (draft) => {
        switch (type) {
            case actionTypes.SHOW_LOGIN_CARD: {
                draft.data.showCard = true;
                break;
            }

            case actionTypes.HIDE_LOGIN_CARD: {
                draft.data.showCard = false;
                break;
            }

        }
    });
}

export default authReducer;
