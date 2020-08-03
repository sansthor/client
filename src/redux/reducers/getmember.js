import { GET_MEMBER } from '../actions';

const initialState = {};

export default (state = initialState, actions) => {
    switch (actions.type) {
        case GET_MEMBER:
            return actions.data;

        default:
            return state;
    }
};
