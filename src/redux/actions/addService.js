import Swal from 'sweetalert2';

const addService = (values, history) => async (dispatch) => {
    const token = localStorage.getItem('token');
    const url = `${process.env.REACT_APP_API_URL}/service/post-service`;
    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(values),
    };

    const response = await fetch(url, options);
    await response.json();

    if (response.status === 200) {
        Swal.fire({
            title: 'Berhasil',
            text: '',
            icon: 'success',
        });

        history.push('/my-services');
    }
};

export { addService };
