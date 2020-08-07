import React from 'react';
import '../../assets/css/Profile.css';
import AddOffer from '../../components/AddOffer/AddOffer';
import Tabs from '../../components/Tabs/TabsDashboard';

function MyServices() {
    return (
        <div>
            <div className="container " style={{ minHeight: '100vh' }}>
                <Tabs />
                <div className="section-heading">
                    <h3 className="title is-2">Add Offer</h3>
                </div>
                <div className="columns">
                    <div className="column"></div>
                    <div className="column is-half">
                        <AddOffer />
                    </div>
                    <div className="column"></div>
                </div>
            </div>
            {/* <section className="section" id="about"> */}
            {/* </section> */}
        </div>
    );
}

export default MyServices;
