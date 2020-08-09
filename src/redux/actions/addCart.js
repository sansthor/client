import Swal from 'sweetalert2';

const addCart = (values, history, member) => async () => {
    const token = localStorage.getItem('token');
    const url = `${process.env.REACT_APP_API_URL}/order/cart`;
    const options = {
        headers: {
            'content-type': 'application/json',
            authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(values),
        method: 'POST',
    };

    const response = await fetch(url, options);
    await response.json();

    if (response.status === 200) {
        Swal.fire({
            title: 'Terimakasih',
            text: 'Pesanan anda sudah masuk ke daftar pesanan',
            icon: 'success',
        });

        history.push(`/payment/${member}`);
    }
};

export { addCart };
