import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGetMember } from '../../redux/actions';
import { Link } from 'react-router-dom';

import '../../assets/css/Profile.css';
function Dashboard() {
    const dispatch = useDispatch();
    const member = useSelector((state) => state.getmember);
    console.log(member, 'balance');

    useEffect(() => {
        dispatch(fetchGetMember());
    }, [dispatch]);
    return (
        <div>
            <div className="tabs">
                <ul>
                    <li className="is-active">
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                    <li>
                        <Link to="/myservices">My Services</Link>
                    </li>
                    <li>
                        <Link to="/order">Order</Link>
                    </li>
                    <li>
                        <Link to="/addoffer">Add Offer</Link>
                    </li>
                </ul>
            </div>

            <section className="section" id="services">
                <div className="section-heading">
                    <h3 className="title is-2">Dashboard</h3>
                </div>
                <div className="container">
                    <div className="columns">
                        <div className="column">
                            <div className="box">
                                <div
                                    className="content"
                                    style={{ textAlign: 'center' }}
                                >
                                    <h4 className="title is-5">
                                        Pekerjaan In Progress
                                    </h4>
                                    Total: X
                                </div>
                            </div>
                        </div>
                        <div className="column">
                            <div className="box">
                                <div
                                    className="content"
                                    style={{ textAlign: 'center' }}
                                >
                                    <h4 className="title is-5">Pendapatan</h4>
                                    {member.balance} <strong>IDR</strong>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Dashboard;
