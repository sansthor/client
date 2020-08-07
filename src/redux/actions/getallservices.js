const GET_ALL_SERVICES = 'GET_ALL_SERVICES';

const getAllServices = (data) => {
    return {
        type: GET_ALL_SERVICES,
        data,
    };
};

const fetchFilterCatalog = (input) => async (dispatch) => {
    try {
        const url = `${process.env.REACT_APP_API_URL}/admin/getFilterServiceData/?title=${input}`;
        // const token = JSON.parse(localStorage.getItem('user')).token;
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                // authorization: `Bearer ${token}`,
            },
        };

        const response = await fetch(url, options);
        const result = await response.json();

        dispatch(getAllServices(result.data));
    } catch (error) {
        console.log(error);
    }
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

        dispatch(getAllServices(result));
    } catch (error) {
        console.log(error);
    }
};

export {
    getAllServices,
    GET_ALL_SERVICES,
    fetchGetAllServices,
    fetchFilterCatalog,
};
