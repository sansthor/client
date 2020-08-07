const FILTER_CATALOG = 'FILTER_CATALOG';

const filterCatalog = (data) => {
    return {
        type: FILTER_CATALOG,
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

        dispatch(filterCatalog(result.data));
    } catch (error) {
        console.log(error);
    }
};

export { fetchFilterCatalog, FILTER_CATALOG, filterCatalog };
