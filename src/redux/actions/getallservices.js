const GET_ALL_SERVICES = "GET_ALL_SERVICES";

const getAllServices = (data) => {
    return {
        type: GET_ALL_SERVICES,
        data,
    };
};

const fetchGetAllServices = () => async (dispatch) => {
    const url = ``;
    const options = {
        method: "GET",
        headers: {
            "content-type": "application/json",
        },
    };
    const response = await fetch(url, options);
    const result = await response.json();

    dispatch(getAllServices(result));
};

export { getAllServices, GET_ALL_SERVICES, fetchGetAllServices };
