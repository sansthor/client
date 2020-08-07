import React from 'react';
import { Link } from 'react-router-dom';

export default function TabDashboard() {
    return (
        <div className="tabs">
            <ul>
                <li className="is-active">
                    <Link to="/dashboard">Dashboard</Link>
                </li>
                <li>
                    <Link to="/my-services">My Services</Link>
                </li>
                <li>
                    <Link to="/order">Order</Link>
                </li>
                <li>
                    <Link to="/add-offer">Add Offer</Link>
                </li>
            </ul>
        </div>
    );
}
