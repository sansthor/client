import React from 'react';
import '../../assets/css/Profile.css';
import Tabs from '../../components/Tabs/TabsDashboard';

function Order() {
    return (
        <div>
            <div className="container " style={{ minHeight: '100vh' }}>
                <Tabs />

                <div className="section-heading">
                    <h3 className="title is-2">Order</h3>
                </div>
                <div className="columns is-gapless">
                    <div className="column">
                        <div className="card">
                            <div className="card-content skills-content">
                                <div className="content">
                                    <section className="section" id="portfolio">
                                        <div className="container">
                                            <div className="container portfolio-container">
                                                <div className="columns">
                                                    <table className="table">
                                                        <thead>
                                                            <tr>
                                                                <th>Pesanan</th>
                                                                <th>Status</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>
                                                                    Belajar
                                                                    HTML, CSS,
                                                                    JS
                                                                </td>
                                                                <td>
                                                                    <div className="select">
                                                                        <select>
                                                                            <option>
                                                                                Status
                                                                            </option>
                                                                            <option>
                                                                                On
                                                                                Going
                                                                            </option>
                                                                            <option>
                                                                                Done
                                                                            </option>
                                                                        </select>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <section className="section" id="about"> */}
            {/* </section> */}
        </div>
    );
}

export default Order;
