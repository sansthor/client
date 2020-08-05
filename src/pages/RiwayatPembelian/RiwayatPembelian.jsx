import React from 'react';

import CardRiwayat from '../../components/CardRiwayat/CardRiwayat';

function RiwayatPembelian() {
    return (
        <div>
            <div class="container " style={{ minHeight: '100vh' }}>
                <h2 class="title has-text-centered">Riwayat Pembelian</h2>

                <div
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'space-around',
                    }}
                >
                    <CardRiwayat />
                    <CardRiwayat />
                    <CardRiwayat />
                    <CardRiwayat />
                    <CardRiwayat />
                </div>
            </div>
        </div>
    );
}

export default RiwayatPembelian;
