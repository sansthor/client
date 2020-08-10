const GET_POPULAR = 'GET_POPULAR';

const getPopular = (data) => {
    return {
        type: GET_POPULAR,
        data,
    };
};

const fetchGetPopular = () => async (dispatch) => {
    const url = `${process.env.REACT_APP_API_URL}/service/popular`;
    const options = {
        method: 'GET',
        header: {
            'Content-type': 'application/json',
        },
    };
    const response = await fetch(url, options);
    const result = await response.json();

    dispatch(getPopular(result));
};

export { getPopular, GET_POPULAR, fetchGetPopular };
