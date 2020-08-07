import React from 'react';
import '../../assets/css/Profile.css';
import CardRiwayat from '../../components/CardRiwayat/CardRiwayat';
import Tabs from '../../components/Tabs/TabsDashboard';

function MyServices() {
    return (
        <div style={{ minHeight: '80vh' }}>
            <Tabs />

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
