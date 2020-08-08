import jwt_decode from 'jwt-decode';
const GET_ORDER_BY_TALENT = 'GET_ORDER_BY_TALENT';

const getOrderByTalent = (data) => {
    return {
        type: GET_ORDER_BY_TALENT,
        data,
    };
};

const fetchGetOrderByTalent = () => async (dispatch) => {
    try {
        const decoded = jwt_decode(localStorage.getItem('token'));
        const id = decoded.id;
        const url = `${process.env.REACT_APP_API_URL}/user/order/${id}`;
        const options = {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
            },
        };

        const response = await fetch(url, options);
        const result = await response.json();

        dispatch(getOrderByTalent(result));
    } catch (error) {
        console.log(error);
    }
};
// const fetchPutOrderByTalent = () => async (dispatch) => {
//     try {
//         const decoded = jwt_decode(localStorage.getItem('token'));
//         const id = decoded.id;
//         const url = `${process.env.REACT_APP_API_URL}/user/order/${id}`;
//         const options = {
//             method: 'GET',
//             headers: {
//                 'Content-type': 'application/json',
//             },
//         };

//         const response = await fetch(url, options);
//         const result = await response.json();

//         dispatch(getOrderByTalent(result));
//     } catch (error) {
//         console.log(error);
//     }
// };

export { fetchGetOrderByTalent, getOrderByTalent, GET_ORDER_BY_TALENT };
