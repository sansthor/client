import React from 'react';
import { Link } from 'react-router-dom';
import check from '../../assets/images/icon-check.png';
import styled from 'styled-components';

const Image = styled.img`
    width: 200px;
`;

export default function PaymentReport() {
    return (
        <section className="section" id="services">
            <div className="hero-body">
                <div className="container has-text-centered">
                    <Image src={check} alt="successfull" />
                    <h1 className="title">Terimakasih</h1>
                    <h2 className="subtitle">Pembayaran Berhasil</h2>
                    <Link to="/profile">
                        <button className="button is-success">
                            Halaman Profil
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
