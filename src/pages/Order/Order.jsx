import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/Profile.css';

function Order() {
    return (
        <div>
            <div className="tabs">
                <ul>
                    <li>
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                    <li>
                        <Link to="/myservices">My Services</Link>
                    </li>
                    <li className="is-active">
                        <Link to="/order">Order</Link>
                    </li>
                    <li>
                        <Link to="/addoffer">Add Offer</Link>
                    </li>
                </ul>
            </div>
            <section className="section" id="about">
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
            </section>
        </div>
    );
}

export default Order;
