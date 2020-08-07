import { GET_ORDER } from '../actions/getOrder';
const initialState = {};

export default (state = initialState, actions) => {
    switch (actions.type) {
        case GET_ORDER:
            return actions.data;

        default:
            return state;
    }
};
