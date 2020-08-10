const GET_BEST_CATEGORY = 'GET_BEST_CATEGORY';

const getBestCategory = (data) => {
    return {
        type: GET_BEST_CATEGORY,
        data,
    };
};

const fetchGetBestCategory = () => async (dispatch) => {
    const url = `${process.env.REACT_APP_API_URL}/service/best`;
    const options = {
        method: 'GET',
        header: {
            'Content-type': 'application/json',
        },
    };
    const response = await fetch(url, options);
    const result = await response.json();

    dispatch(getBestCategory(result));
};

export { getBestCategory, GET_BEST_CATEGORY, fetchGetBestCategory };
