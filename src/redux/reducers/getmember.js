import { GET_MEMBER, LOGOUT } from '../actions';

const initialState = {};

export default (state = initialState, actions) => {
    switch (actions.type) {
        case GET_MEMBER:
            return actions.data;
        case LOGOUT:
            return initialState;

        default:
            return state;
    }
};
