import jwt_decode from 'jwt-decode';
import Swal from 'sweetalert2';
const PUT_BASIC_USER = 'PUT_BASIC_USER';

const putBasicUser = (data) => {
    return {
        type: PUT_BASIC_USER,
        data,
    };
};
const fetchPutBasicUser = (formData, history) => async (dispatch) => {
    const decoded = jwt_decode(localStorage.getItem('token'));
    const id = decoded.id;
    console.log(id, 'isi id');
    const url = `${process.env.REACT_APP_API_URL}/user/update/${id}`;
    for (let key in formData) {
        if (formData[key] === '') {
            delete formData[key];
        }
    }
    const options = {
        method: 'PUT',
        body: JSON.stringify({ ...formData }),

        headers: {
            'Content-type': 'application/json',
        },
    };
    const response = await fetch(url, options);
    const result = await response.json();
    // dispatch(putBasicUser(result));
    if (response.status === 200) {
        Swal.fire({
            title: 'Your Account Successfully be Talent',
            text: '',
            icon: 'success',
        });
        history.push('/profile');
    }
};

export { PUT_BASIC_USER, fetchPutBasicUser };
