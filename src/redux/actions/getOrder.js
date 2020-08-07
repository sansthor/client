import jwt_decode from 'jwt-decode';
const GET_ORDER = 'GET_ORDER';

const getOrder = (data) => {
    return {
        type: GET_ORDER,
        data,
    };
};

const fetchGetOrder = () => async (dispatch) => {
    try {
        const decoded = jwt_decode(localStorage.getItem('token'));
        const id = decoded.id;
        const url = `${process.env.REACT_APP_API_URL}/order/${id}`;
        const options = {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
            },
        };

        const response = await fetch(url, options);
        const result = await response.json();

        dispatch(getOrder(result.data));
    } catch (error) {
        console.log(error);
    }
};

export { fetchGetOrder, getOrder, GET_ORDER };
