import React from 'react';
import '../../assets/css/Profile.css';
import Tabs from '../../components/Tabs/TabsDashboard';
import CardMyServices from '../../components/CardMyServices/CardMyServices';

function MyServices() {
    return (
        <div style={{ minHeight: '80vh' }}>
            <div className="container " style={{ minHeight: '100vh' }}>
                <Tabs />
                <div className="section-heading">
                    <h3 className="title is-2">My Services</h3>
                </div>
                <div
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'flex-start',
                    }}
                >
                    <CardMyServices />
                </div>
            </div>
            {/* <section className="section" id="about"> */}
            {/* </section> */}
        </div>
    );
}

export default MyServices;
