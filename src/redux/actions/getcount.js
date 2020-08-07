import jwt_decode from 'jwt-decode';
const GET_COUNT = 'GET_COUNT';

const getCount = (data) => {
    return {
        type: GET_COUNT,
        data,
    };
};

const fetchGetCount = () => async (dispatch) => {
    const decoded = jwt_decode(localStorage.getItem('token'));
    const id = decoded.id;
    const url = `${process.env.REACT_APP_API_URL}/order/count/${id}`;
    const options = {
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
        },
    };
    const response = await fetch(url, options);
    const result = await response.json();

    dispatch(getCount(result));
};

export { getCount, fetchGetCount, GET_COUNT };
