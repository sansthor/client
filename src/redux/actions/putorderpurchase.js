import Swal from 'sweetalert2';
const PUT_ORDER_PURCHASE = 'PUT_ORDER_PURCHASE';

const fetchOrderPurchase = (id, history) => async (dispatch) => {
    const url = `${process.env.REACT_APP_API_URL}/order/purchase/${id}`;
    const options = {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json',
        },
    };
    const response = await fetch(url, options);
    await response.json;
    if (response.status === 200) {
        Swal.fire({
            title: 'Pesanan Ditandai Selesai',
            text: '',
            icon: 'success',
        });
        history.push('/order');
    }
};

export { fetchOrderPurchase, PUT_ORDER_PURCHASE };
