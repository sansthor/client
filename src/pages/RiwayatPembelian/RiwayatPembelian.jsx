import React from 'react';
import CardRiwayatPembelian from '../../components/CardComponent/CardRiwayatPembelian';

function RiwayatPembelian() {
    return (
        <div>
            <div className="container " style={{ minHeight: '100vh' }}>
                <h2 className="title has-text-centered">Riwayat Pembelian</h2>

                <div
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'flex-start',
                    }}
                >
                    <CardRiwayatPembelian />
                </div>
            </div>
        </div>
    );
}

export default RiwayatPembelian;
