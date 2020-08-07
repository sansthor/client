import { GET_COUNT } from '../actions';

const initialState = [];

export default (state = initialState, actions) => {
    switch (actions.type) {
        case GET_COUNT:
            return actions.data;
        default:
            return state;
    }
};
