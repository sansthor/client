import React from 'react';
import '../../assets/css/Login.css';
import Cart from '../../components/Cart/Cart';
import PaymentDetail from '../../components/PaymentDetail/PaymentDetail';

function Payment() {
    return (
        <div className="body">
            <section className="hero is-success is-fullheight">
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <p className="subtitle has-text-black">Pembayaran</p>
                        <hr className="login-hr" />
                        <div className="columns is-desktop">
                            <PaymentDetail />
                            <Cart />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Payment;
