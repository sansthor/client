import { GET_ALL_SERVICES } from "../actions";

const initialState = [];

export default (state = initialState, actions) => {
    switch (actions.type) {
        case GET_ALL_SERVICES:
            return actions.data;

        default:
            return state;
    }
};
