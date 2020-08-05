import { GET_SERVICE_BY_ID } from '../actions';

const initialState = [];

export default (state = initialState, actions) => {
    switch (actions.type) {
        case GET_SERVICE_BY_ID:
            return actions.data;
        default:
            return state;
    }
};
