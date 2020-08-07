import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGetMember, fetchGetCount } from '../../redux/actions';

import '../../assets/css/Profile.css';
import Tabs from '../../components/Tabs/TabsDashboard';

function Dashboard() {
    const dispatch = useDispatch();
    const member = useSelector((state) => state.getmember);
    const count = useSelector((state) => state.getcount);
    console.log(count, 'ini count');
    useEffect(() => {
        dispatch(fetchGetMember());
    }, [dispatch]);
    useEffect(() => {
        dispatch(fetchGetCount());
    }, [dispatch]);
    return (
        <div>
            <Tabs />

            <section className="section" id="services">
                <div className="section-heading">
                    <h3 className="title is-2">Dashboard</h3>
                </div>
                <nav className="level is-mobile">
                    <div className="level-item has-text-centered"></div>
                    <div className="level-item has-text-centered">
                        <div>
                            <p className="heading">Pendapatan</p>
                            <p className="title">IDR {member.balance}</p>
                        </div>
                    </div>
                    <div className="level-item has-text-centered">
                        <div>
                            <p className="heading">In Progress</p>
                            <p className="title">{count.data}</p>
                        </div>
                    </div>
                    <div className="level-item has-text-centered"></div>
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
