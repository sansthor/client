import { GET_SERVICE_TALENT } from '../actions';

const initialState = [];

export default (state = initialState, actions) => {
    switch (actions.type) {
        case GET_SERVICE_TALENT:
            return actions.data;
        default:
            return state;
    }
};
