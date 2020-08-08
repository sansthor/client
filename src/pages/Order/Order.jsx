import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
    fetchGetOrderByTalent,
    fetchPutOrderByTalent,
} from '../../redux/actions';

import '../../assets/css/Profile.css';
import Tabs from '../../components/Tabs/TabsDashboard';

function Order(props) {
    const dispatch = useDispatch();
    const history = useHistory();
    const orderByTalent = useSelector((state) => state.getorderbytalent);
    console.log(orderByTalent, 'id orderByTalent');

    const handleClick = (id) => {
        dispatch(fetchPutOrderByTalent(id, history));
    };

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
                                            <React.Fragment>
                                                <td>
                                                    {item.talentStatus ===
                                                    'DONE' ? (
                                                        <div
                                                            style={{
                                                                display: 'flex',
                                                                flexDirection:
                                                                    'row',
                                                                justifyContent:
                                                                    'center',
                                                            }}
                                                        >
                                                            <i
                                                                className="fas fa-check"
                                                                style={{
                                                                    margin:
                                                                        '4px 5px  0 0',
                                                                }}
                                                            ></i>
                                                            <p>Selesai</p>
                                                        </div>
                                                    ) : (
                                                        <button
                                                            onClick={() =>
                                                                handleClick(
                                                                    item._id
                                                                )
                                                            }
                                                            className="button is-link is-rounded"
                                                            style={{
                                                                width: '100%',
                                                            }}
                                                        >
                                                            Tandai Selesai
                                                        </button>
                                                    )}
                                                </td>
                                            </React.Fragment>
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
