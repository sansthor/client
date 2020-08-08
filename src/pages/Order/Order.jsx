import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { useDispatch, useSelector } from 'react-redux';
import {
    fetchGetOrderByTalent,
    fetchPutOrderByTalent,
} from '../../redux/actions';

import '../../assets/css/Profile.css';
import Tabs from '../../components/Tabs/TabsDashboard';
import SelectStatus from './SelectStatus';

function Order(props) {
    const dispatch = useDispatch();
    const orderByTalent = useSelector((state) => state.getorderbytalent);
    console.log(orderByTalent, 'id orderByTalent');
    // const [status, setStatus] = useState('');
    useEffect(() => {
        dispatch(fetchGetOrderByTalent());
    }, [dispatch]);

    const handleChange = (id, event) => {
        dispatch(fetchPutOrderByTalent(id));
        // setStatus(event.target.value);
        Swal.fire({
            title: 'Status Berhasil Diubah',
            text: '',
            icon: 'success',
        });
    };

    return (
        <div>
            <div className="container " style={{ minHeight: '100vh' }}>
                <Tabs />

                <div className="section-heading">
                    <h3 className="title is-2">Pesanan Client</h3>
                </div>

                <div className="columns">
                    <table className="table is-bordered is-hoverable is-striped is-fullwidth">
                        <thead>
                            <tr
                                style={{
                                    textAlign: 'center',
                                    backgroundColor: '#cffffe',
                                }}
                            >
                                <th>ID Pesanan</th>
                                <th>Pesanan</th>
                                <th>ID Client</th>
                                <th>Client</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orderByTalent.data !== undefined &&
                                orderByTalent.data.map((item) => {
                                    console.log(item, 'lololo');
                                    return (
                                        <tr key={item._id}>
                                            <td>{item.serviceID._id}</td>
                                            <td>{item.serviceID.title}</td>
                                            <td>{item.userID._id}</td>
                                            <td>{item.userID.fullname}</td>
                                            <SelectStatus
                                                name="status"
                                                value={item.status}
                                                onChange={() =>
                                                    handleChange(item._id)
                                                }
                                                // handleChange={handleChange}
                                            />
                                        </tr>
                                    );
                                })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Order;
