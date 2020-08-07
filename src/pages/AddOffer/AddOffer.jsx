import React from 'react';
import '../../assets/css/Profile.css';
import AddOffer from '../../components/AddOffer/AddOffer';
import TabAddOffer from '../../components/Tabs/TabAddOffer';

function MyServices() {
    return (
        <div>
            <TabAddOffer />

            <section className="section" id="about">
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
            </section>
        </div>
    );
}

export default MyServices;
