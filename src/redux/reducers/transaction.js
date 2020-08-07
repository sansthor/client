import { GET_TRANSACTION_CART_BY_ID } from '../actions';

const initialState = {
    transactionCartByID: {},
    allTransaction: {},
    transactionByID: {},
};

export default (state = initialState, actions) => {
    switch (actions.type) {
        case GET_TRANSACTION_CART_BY_ID:
            return { ...state, transactionCartByID: actions.payload };
        default:
            return state;
    }
};
