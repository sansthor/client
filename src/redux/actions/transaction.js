const GET_TRANSACTION_CART_BY_ID = 'GET_TRANSACTION_CART_BY_ID';

const fetchTransactionCartByID = (id) => async (dispatch) => {
    const token = localStorage.getItem('token');
    const url = `${process.env.REACT_APP_API_URL}/order/cart/${id}`;
    const options = {
        headers: {
            'content-type': 'application/json',
            authorization: `Bearer ${token}`,
        },
        method: 'GET',
    };

    const response = await fetch(url, options);
    const result = await response.json();

    dispatch({
        type: GET_TRANSACTION_CART_BY_ID,
        payload: result.data,
    });
};

export { GET_TRANSACTION_CART_BY_ID, fetchTransactionCartByID };
