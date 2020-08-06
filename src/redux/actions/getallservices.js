const GET_ALL_SERVICES = 'GET_ALL_SERVICES';

const getAllServices = (data) => {
    return {
        type: GET_ALL_SERVICES,
        data,
    };
};

const fetchGetAllServices = () => async (dispatch) => {
    try {
        const url = `${process.env.REACT_APP_API_URL}/service`;
        const options = {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
            },
        };
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        dispatch(getAllServices(result));
    } catch (error) {
        console.log(error);
    }
};

export { getAllServices, GET_ALL_SERVICES, fetchGetAllServices };
