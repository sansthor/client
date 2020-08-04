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

export { fetchGetMember, getMember, GET_MEMBER, logout, LOGOUT };
