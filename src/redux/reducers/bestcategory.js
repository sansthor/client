import { GET_BEST_CATEGORY } from '../actions';

const initialState = [];

export default (state = initialState, actions) => {
    switch (actions.type) {
        case GET_BEST_CATEGORY:
            return actions.data;
        default:
            return state;
    }
};
