import { GET_ORDER_BY_TALENT } from '../actions/getOrderByTalent';
const initialState = {};

export default (state = initialState, actions) => {
    switch (actions.type) {
        case GET_ORDER_BY_TALENT:
            return actions.data;

        default:
            return state;
    }
};
