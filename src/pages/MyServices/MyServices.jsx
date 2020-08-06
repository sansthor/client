import React from 'react';

import { Link } from 'react-router-dom';
import '../../assets/css/Profile.css';

import CardRiwayat from '../../components/CardRiwayat/CardRiwayat';

function MyServices() {
    return (
        <div>
            <div className="tabs">
                <ul>
                    <li>
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                    <li className="is-active">
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

            <section className="section" id="about">
                <div className="section-heading">
                    <h3 className="title is-2">My Services</h3>
                </div>
                <div
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'space-around',
                    }}
                >
                    <CardRiwayat />
                </div>
            </section>
        </div>
    );
}

export default MyServices;
