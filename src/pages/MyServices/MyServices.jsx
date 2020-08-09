import React from 'react';
import '../../assets/css/Profile.css';
import Tabs from '../../components/Tabs/TabsDashboard';
import CardMyServices from '../../components/CardMyServices/CardMyServices';

function MyServices() {
    return (
        <div>
            <div className="container " style={{ minHeight: '100vh' }}>
                <Tabs />
                <div className="section-heading">
                    <h3 className="title is-2">Services Saya</h3>
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
