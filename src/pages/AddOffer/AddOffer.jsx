import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/Profile.css';
import AddOffer from '../../components/AddOffer/AddOffer';

function MyServices() {
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
                    <li>
                        <Link to="/order">Order</Link>
                    </li>
                    <li className="is-active">
                        <Link to="/addoffer">Add Offer</Link>
                    </li>
                </ul>
            </div>
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
