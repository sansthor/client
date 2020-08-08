import jwt_decode from 'jwt-decode';
import Swal from 'sweetalert2';

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
const fetchPutOrderByTalent = (id, history) => async (dispatch) => {
    try {
        // const decoded = jwt_decode(localStorage.getItem('token'));
        // const id = decoded.id;
        const url = `${process.env.REACT_APP_API_URL}/order/seller/${id}`;

        const options = {
            method: 'PUT',
            // body: JSON.stringify(value),
            headers: {
                'Content-type': 'application/json',
            },
        };

        const response = await fetch(url, options);
        await response.json();

        if (response.status === 200) {
            Swal.fire({
                title: 'Pesanan Sudah Selesai',
                text: '',
                icon: 'success',
            });
            history.push('/profile');
        }
    } catch (error) {
        console.log(error);
    }
};

export {
    fetchGetOrderByTalent,
    getOrderByTalent,
    GET_ORDER_BY_TALENT,
    fetchPutOrderByTalent,
};
