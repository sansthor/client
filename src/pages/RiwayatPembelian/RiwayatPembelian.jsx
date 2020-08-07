import React from 'react';
import { Link } from 'react-router-dom';
import CardRiwayat from '../../components/CardRiwayat/CardRiwayat';

function RiwayatPembelian() {
    return (
        <div>
            <div className="container " style={{ minHeight: '100vh' }}>
                <h2 className="title has-text-centered">Riwayat Pembelian</h2>

                <div
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'space-around',
                    }}
                >
                    Kosong
                    <CardRiwayat />
                </div>
            </div>
        </div>
    );
}

export default RiwayatPembelian;
