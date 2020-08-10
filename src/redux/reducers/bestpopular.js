import { GET_POPULAR } from '../actions';

const initialState = [];

export default (state = initialState, actions) => {
    switch (actions.type) {
        case GET_POPULAR:
            return actions.data;
        default:
            return state;
    }
};
