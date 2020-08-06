const GET_SERVICE_BY_ID = 'GET_SERVICE_BY_ID';

const getServiceById = (data) => {
    return {
        type: GET_SERVICE_BY_ID,
        data,
    };
};

const fetchGetServiceById = (id) => async (dispatch) => {
    const url = `${process.env.REACT_APP_API_URL}/service/details/${id}`;
    const options = {
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
        },
    };
    const response = await fetch(url, options);
    const result = await response.json();

    dispatch(getServiceById(result));
};

export { getServiceById, fetchGetServiceById, GET_SERVICE_BY_ID };
