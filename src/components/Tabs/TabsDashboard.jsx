import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Tabs() {
    const { pathname } = useLocation();
    const tabContent = [
        { id: 'dashboard', link: '/dashboard', title: 'Dashboard' },
        { id: 'myServices', link: '/my-services', title: 'Service Saya' },
        { id: 'order', link: '/order', title: 'Pesanan Client' },
        { id: 'addOffer', link: '/add-offer', title: 'Tambah Service' },
    ];
    return (
        <div className="tabs">
            <ul>
                {tabContent.map((item) => {
                    return (
                        <li
                            className={
                                pathname === item.link ? 'is-active' : ''
                            }
                            key={item.id}
                        >
                            <Link to={item.link}>{item.title}</Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
