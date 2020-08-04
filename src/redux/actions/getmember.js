import Swal from 'sweetalert2';
import jwt_decode from 'jwt-decode';
const GET_MEMBER = 'GET_MEMBER';
const LOGOUT = 'LOGOUT';

const getMember = (data) => {
    return {
        type: GET_MEMBER,
        data,
    };
};

const fetchGetMember = () => async (dispatch) => {
    try {
        const decoded = jwt_decode(localStorage.getItem('token'));
        const id = decoded.id;
        const url = `${process.env.REACT_APP_API_URL}/user/${id}`;
        const options = {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
            },
        };

        const response = await fetch(url, options);
        const result = await response.json();

        dispatch(getMember(result.data));
    } catch (error) {
        console.log(error);
    }
};

const logout = (history) => (dispatch, getState) => {
    Swal.fire({
        icon: 'success',
        title: 'Terimakasih',
    });
    localStorage.clear();
    history.push('/');
    dispatch({ type: LOGOUT });
};

const updateProfile = (data, history) => async (dispatch) => {
    try {
        const decoded = jwt_decode(localStorage.getItem('token'));
        const id = decoded.id;
        const url = `${process.env.REACT_APP_API_URL}/user/${id}`;

        for (let key in data) {
            if (data[key] === '') {
                delete data[key];
            }
        }

        const options = {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(data),
        };

        console.log(data);

        // const response = await fetch(url, options);
        // const result = await response.json();

        // dispatch(getMember(result.data));
    } catch (error) {
        console.log(error);
    }
};

export { fetchGetMember, getMember, GET_MEMBER, logout, LOGOUT, updateProfile };
