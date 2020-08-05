import React from 'react';

import '../../assets/css/Profile.css';

import CardRiwayat from '../../components/CardRiwayat/CardRiwayat';

function MyServices() {
    return (
        <div>
            <div className="tabs">
                <ul>
                    <li>
                        <a href="/dashboard">Dashboard</a>
                    </li>
                    <li className="is-active">
                        <a href="/myservices">My Services</a>
                    </li>
                    <li>
                        <a href="/order">Order</a>
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
                    <CardRiwayat />
                    <CardRiwayat />
                    <CardRiwayat />
                    <CardRiwayat />
                </div>
            </section>
        </div>
    );
}

export default MyServices;
