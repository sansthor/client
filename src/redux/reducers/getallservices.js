import { GET_ALL_SERVICES, FILTER_CATALOG } from '../actions';

const initialState = [];

export default (state = initialState, actions) => {
    switch (actions.type) {
        case GET_ALL_SERVICES:
            return actions.data;
        case FILTER_CATALOG:
            return actions.data;

        default:
            return state;
    }
};
