import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGetOrderByTalent } from '../../redux/actions';
// import { useHistory } from 'react-router-dom';

import '../../assets/css/Profile.css';
import Tabs from '../../components/Tabs/TabsDashboard';

function Order(props) {
    // const history = useHistory();
    const dispatch = useDispatch();
    const orderByTalent = useSelector((state) => state.getorderbytalent);
    console.log(orderByTalent, 'id orderByTalent');
    useEffect(() => {
        dispatch(fetchGetOrderByTalent());
    }, [dispatch]);

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
                                <th>Item</th>
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
                                            <td>
                                                <div className="select">
                                                    <select>
                                                        <option>Status</option>
                                                        <option>
                                                            On Going
                                                        </option>
                                                        <option>Done</option>
                                                    </select>
                                                </div>
                                            </td>
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
