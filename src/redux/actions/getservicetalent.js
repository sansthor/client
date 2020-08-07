import jwt_decode from 'jwt-decode';
const GET_SERVICE_TALENT = 'GET_SERVICE_TALENT';

const getServiceTalent = (data) => {
    return {
        type: GET_SERVICE_TALENT,
        data,
    };
};

const fetchGetServiceTalent = () => async (dispatch) => {
    const decoded = jwt_decode(localStorage.getItem('token'));
    const id = decoded.id;
    try {
        const url = `${process.env.REACT_APP_API_URL}/service/find/${id}`;
        const options = {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
            },
        };
        const response = await fetch(url, options);
        const result = await response.json();

        dispatch(getServiceTalent(result));
    } catch (error) {
        console.log(error);
    }
};

export { getServiceTalent, GET_SERVICE_TALENT, fetchGetServiceTalent };
