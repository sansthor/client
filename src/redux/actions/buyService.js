import Swal from 'sweetalert2';

const buyService = (values, history) => async () => {
    const token = localStorage.getItem('token');
    const url = `${process.env.REACT_APP_API_URL}/order/checkout`;
    const options = {
        headers: {
            'content-type': 'application/json',
            authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(values),
        method: 'PUT',
    };

    const response = await fetch(url, options);
    await response.json();

    if (response.status === 200) {
        Swal.fire({
            title: 'Terimakasih',
            text: 'Pesanan anda sudah diproses',
            icon: 'success',
        });

        history.push('/');
    }
};

export { buyService };
