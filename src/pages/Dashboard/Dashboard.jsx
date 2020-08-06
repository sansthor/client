import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGetMember } from '../../redux/actions';
import { Link } from 'react-router-dom';

import '../../assets/css/Profile.css';
function Dashboard() {
    const dispatch = useDispatch();
    const member = useSelector((state) => state.getmember);

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
                <nav class="level is-mobile">
                    <div class="level-item has-text-centered"></div>
                    <div class="level-item has-text-centered">
                        <div>
                            <p class="heading">Pendapatan</p>
                            <p class="title">IDR {member.balance}</p>
                        </div>
                    </div>
                    <div class="level-item has-text-centered">
                        <div>
                            <p class="heading">In Progress</p>
                            <p class="title">0</p>
                        </div>
                    </div>
                    <div class="level-item has-text-centered"></div>
                </nav>
                <div className="tile is-parent" style={{ marginTop: '5em' }}>
                    <article className="tile is-child notification ">
                        <p className="title">Akun Bank</p>
                        <div className="content">
                            {/* Content */}
                            <table className="table-profile">
                                <tr>
                                    <th colSpan="1"></th>
                                    <th colSpan="2"></th>
                                </tr>
                                <tr>
                                    <td>Nama Bank:</td>
                                    <td>{member.bankname}</td>
                                </tr>
                                <tr>
                                    <td>Nama di Bank:</td>
                                    <td>{member.bankaccname}</td>
                                </tr>
                                <tr>
                                    <td>Nomor Rekening:</td>
                                    <td>{member.bankaccnumber}</td>
                                </tr>
                            </table>
                        </div>
                    </article>
                </div>
            </section>
        </div>
    );
}

export default Dashboard;
