import { FILTER_CATALOG } from '../actions';

const initialState = {};

export default (state = initialState, actions) => {
    switch (actions.type) {
        case FILTER_CATALOG:
            return actions.data;

        default:
            return state;
    }
};
