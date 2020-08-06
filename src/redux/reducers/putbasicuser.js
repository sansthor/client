import { PUT_BASIC_USER } from '../actions';

const initialState = [];

export default (state = initialState, actions) => {
    switch (actions.type) {
        case PUT_BASIC_USER:
            return actions.data;
        default:
            return state;
    }
};
